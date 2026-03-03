import blogData from "./blogData";

export const allArticles = blogData;

export const findArticleBySlug = (slug?: string, categorySlug?: string) => {
  if (!slug) return undefined;
  const sRaw = slug.toString();
  const normalize = (v?: string) => (v || "").toString().toLowerCase().replace(/[^a-z0-9]+/g, "");
  const s = normalize(sRaw);

  return allArticles.find((article) => {
    const slugVal = (article.slug || "").toString();
    const idVal = (article.id || "").toString();
    const aliases = (article as unknown as { aliases?: unknown }).aliases;
    const aliasVals = Array.isArray(aliases) ? (aliases as unknown[]).map((a) => String(a)) : [];
    const rawMatch = (slugVal || "").toString().toLowerCase() === sRaw.toLowerCase()
      || (idVal || "").toString().toLowerCase() === sRaw.toLowerCase()
      || aliasVals.map(a => a.toString().toLowerCase()).includes(sRaw.toLowerCase());

    const normMatch = normalize(slugVal) === s || normalize(idVal) === s || aliasVals.map(a => normalize(a.toString())).includes(s);

    if (!rawMatch && !normMatch) return false;

    if (categorySlug) {
      const cat = (article.categorySlug || article.category || "").toString().toLowerCase();
      return cat === categorySlug.toString().toLowerCase();
    }

    return true;
  });
};

export default allArticles;
export type Article = import("./blogData").BlogArticle;
