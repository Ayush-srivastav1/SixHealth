import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { SafeImage } from "@/components/common/SafeImage";
import { imageLibrary } from "@/data/imageLibrary";
import {
	ArticleCard,
	CategoryBadge,
	MedicalBadge,
	NewsletterSignup,
	CategoryType,
} from "@/components/articles";
import { allArticles } from "@/data/allArticles";
import type { Article as ArticleType, ArticleSection } from "@/types/article";
export type Article = ArticleType;
import {
	Clock,
	User,
	Calendar,
	Share2,
	Facebook,
	Twitter,
	Linkedin,
	Link as LinkIcon,
	ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contentToString } from "@/lib/articleUtils";
import { extractH2HeadingsFromHTML } from "@/lib/articleUtils";

export const ArticleContent: React.FC<{ content?: string | ArticleSection[] }> = ({ content }) => {
	if (typeof content === "string") {

		const cleaned = content.replace(/<hr\/?>([\s\S]*?)<div[^>]*>\s*\n?\s*<p><strong>Author:[\s\S]*?<\/div>\s*$/i, '');

		const finalContent = cleaned.replace(/<hr\/?>[\s\S]*$/i, '');
		return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: finalContent }} />;
	}

	if (Array.isArray(content)) {
		return (
			<div className="prose max-w-none">
				{content.map((sec: ArticleSection, idx: number) => {
					const secRecord = sec as unknown as Record<string, unknown>;
					const heading = sec.heading;
					const textVal = typeof secRecord.body === 'string' ? secRecord.body : typeof secRecord.text === 'string' ? secRecord.text : undefined;
					return (
						<section key={idx} id={heading ? heading.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined} className={idx === 0 ? "mt-0" : "mt-6"}>
							{heading && <h2>{heading}</h2>}
							{textVal && typeof textVal === "string" ? textVal.split('\n\n').map((p: string, i: number) => <p key={i}>{p}</p>) : null}
						</section>
					);
				})}
			</div>
		);
	}

	return <div className="prose max-w-none">{String(content)}</div>;
};

export function getHeadingsFromContent(content?: string | ArticleSection[]): string[] {
	if (Array.isArray(content)) {
		return content.filter((s) => !!s?.heading).map((s) => s.heading as string);
	}
	if (typeof content === "string") {
		return extractH2HeadingsFromHTML(content).map(h => h.text);
	}
	return [];
}

interface ArticleRendererProps {
	article: ArticleType;
	related?: ArticleType[];
}

export const ArticleLayout: React.FC<ArticleRendererProps> = ({ article, related }) => {
	const relatedArticles =
		related ?? allArticles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);

	return (
		<Layout>
			<article>
				<header className="border-b bg-card">
					<div className="w-full px-4 lg:px-8 py-8">
						<nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
							<Link to="/" className="hover:text-foreground">
								Home
							</Link>
							<ChevronRight className="h-3 w-3" />
							<Link to={`/${article.category}`} className="hover:text-foreground capitalize">
								{article.category}
							</Link>
							<ChevronRight className="h-3 w-3" />
							<span className="line-clamp-1 text-foreground">{article.title}</span>
						</nav>

						<CategoryBadge category={article.category as CategoryType} className="mb-4" />

						<h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">{article.title}</h1>

						{article.description && <p className="mb-6 text-lg text-muted-foreground">{article.description}</p>}

						{(() => {
						const displayAuthor = (article.author || "").replace(/DoctorSix/gi, '').trim() || 'Editorial Team';
						const displayReviewer = (article.reviewer || "").replace(/DoctorSix/gi, '').trim() || 'Clinical Team';
							const displayUpdated = article.updatedDate || article.publishDate || undefined;
							return (
								<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
									<span className="flex items-center gap-1">
										<User className="h-4 w-4" />
										<span className="font-medium text-foreground">{displayAuthor}</span>
									</span>
									{article.readTime && (
										<span className="flex items-center gap-1">
											<Clock className="h-4 w-4" />
											{article.readTime}
										</span>
									)}
									{displayUpdated && (
										<span className="flex items-center gap-1">
											<Calendar className="h-4 w-4" />
											Updated {displayUpdated}
										</span>
									)}
								</div>
							);
						})()}

						{(article.reviewer || article.reviewer === '') && (
							<div className="mt-4">
								<MedicalBadge reviewer={(article.reviewer || '').replace(/DoctorSix/gi, '').trim() || 'Clinical Team'} date={article.publishDate} />
							</div>
						)}
					</div>
				</header>

				{article.imageUrl ? (
					<div className="w-full px-4 lg:px-8 py-6">
					<SafeImage
						src={article.imageUrl}
						alt={article.title}
						fallbackTopic="generalHealth"
						componentName="ArticleRenderer"
						className="aspect-video w-full rounded-xl object-cover"
					/>
				</div>
			) : null}

				<div className="w-full px-4 lg:px-8 py-6">
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="lg:col-span-2">
												<ArticleContent content={article.content} />

							<div className="mt-8 border-t pt-6">
								<div className="flex items-center gap-3">
									<span className="flex items-center gap-2 text-sm font-medium">
										<Share2 className="h-4 w-4" />
										Share this article:
									</span>
									<div className="flex gap-2">
										<Button variant="outline" size="icon" asChild>
											<a href="#" aria-label="Share on Facebook">
												<Facebook className="h-4 w-4" />
											</a>
										</Button>
										<Button variant="outline" size="icon" asChild>
											<a href="#" aria-label="Share on Twitter">
												<Twitter className="h-4 w-4" />
											</a>
										</Button>
										<Button variant="outline" size="icon" asChild>
											<a href="#" aria-label="Share on LinkedIn">
												<Linkedin className="h-4 w-4" />
											</a>
										</Button>
										<Button variant="outline" size="icon" aria-label="Copy link">
											<LinkIcon className="h-4 w-4" />
										</Button>
									</div>
								</div>
							</div>

							<div className="mt-8 rounded-lg border bg-card p-6">
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
										<User className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="font-semibold">{(article.author || '').replace(/DoctorSix/gi, '').trim() || 'Editorial Team'}</h3>
										<p className="text-sm text-muted-foreground">{article.authorRole}</p>
										<p className="mt-2 text-sm text-muted-foreground">A healthcare professional providing evidence-based information.</p>
									</div>
								</div>
							</div>
						</div>

						<aside className="space-y-6">
							<NewsletterSignup />

							<div className="rounded-xl border bg-card p-6">
								<h3 className="mb-4 font-semibold">Related Articles</h3>
								<div className="space-y-4">
									{relatedArticles.map((ra) => (
										<ArticleCard key={ra.id} {...ra} compact />
									))}
								</div>
							</div>
						</aside>
					</div>
				</div>
			</article>
		</Layout>
	);
};

export default function ArticleRenderer(props: { content?: string; article?: ArticleType }) {
	if (props.article) {
		return <ArticleLayout article={props.article} />;
	}

	if (typeof props.content === "string") {
		return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: props.content }} />;
	}

	return <div className="prose max-w-none">{String(props.content ?? "")}</div>;
}

