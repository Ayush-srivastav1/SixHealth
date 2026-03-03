import { Layout } from "../components/layout/Layout";
import { NewsletterSignup } from "../components/articles/NewsletterSignup";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MyExperienceMelanoma() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "My Experience with Hospital Cancer Care: Melanoma Diagnosis and Treatment";
    
    const shareLinks: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (shareLinks[platform]) {
      window.open(shareLinks[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <Layout>
      <article className="min-h-screen bg-background">
        {}
        <div className="relative h-[480px] w-full overflow-hidden bg-muted shadow-sm">
          <img
            src="https://media.post.rvohealth.io/wp-content/uploads/2024/07/point-of-view-cancer-patient-surgery-hospital-IV-drip-1296x728-header.jpg"
            alt="A cancer patient in the hospital with an IV drip in their arm"
            className="absolute inset-0 h-full w-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>

          <div className="container mx-auto max-w-6xl absolute inset-0 flex flex-col justify-end pb-12 px-6">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">Personal story</span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                My Experience with Hospital Cancer Care: Melanoma Diagnosis and Treatment
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/90">
                <span>Medically reviewed by <strong className="font-semibold">Teresa Hagan Thomas PHD, BA, RN</strong></span>
                <span>•</span>
                <span>Updated July 16, 2024</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {}
            <main className="lg:col-span-2">
              {}
              <div className="mb-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">By The Healthline Editorial Team</span>
                  <span className="mx-2">•</span>
                  <time dateTime="2024-07-16">Jul 16, 2024</time>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Back to top
                  </Button>
                </div>
              </div>

              {}
              <nav className="mb-8 w-full max-w-md rounded-lg bg-white p-4 shadow">
                <h2 className="mb-3 font-semibold">On this page</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#diagnosis" className="text-primary hover:underline">
                      Initial diagnosis
                    </a>
                  </li>
                  <li>
                    <a href="#cancer-care" className="text-primary hover:underline">
                      My cancer care experience
                    </a>
                  </li>
                  <li>
                    <a href="#aftercare" className="text-primary hover:underline">
                      Aftercare and follow-up
                    </a>
                  </li>
                  <li>
                    <a href="#takeaways" className="text-primary hover:underline">
                      What I want others to know
                    </a>
                  </li>
                  <li>
                    <a href="#bottom-line" className="text-primary hover:underline">
                      Bottom line
                    </a>
                  </li>
                </ul>
              </nav>

              {}
              <section className="mb-8">
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I never thought I'd be diagnosed with cancer, especially in the middle of a pandemic.
                  </p>
                </div>
              </section>

              {}
              <section id="diagnosis" className="mb-8 scroll-mt-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold">1</div>
                  <div>
                    <h2 className="text-2xl font-bold">Initial diagnosis</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-primary/70 rounded"></div>
                  </div>
                </div>
                <div className="space-y-4 text-base leading-relaxed">
                  <div className="rounded-md bg-gray-50 p-4 border">
                    <p>
                      In early 2020, I scheduled an appointment to visit a dermatologist in my primary care
                      network. I had developed a bit of a scab on my arm that was not healing quickly.
                    </p>
                  </div>
                  <p>
                    During my visit, the dermatologist biopsied the scab and sent it to a lab for testing.
                    A few weeks later, the dermatologist's office called to follow up with the results of
                    that biopsy.
                  </p>
                  <p className="rounded-lg bg-muted p-4 italic">
                    "We've received the test results, and unfortunately, you have malignant melanoma. We're
                    referring you to a specialist. They will be in contact to quickly schedule an initial
                    appointment."
                  </p>
                  <blockquote className="mt-4 border-l-4 border-primary/60 bg-primary/5 p-4 italic text-sm">
                    "The speed and clarity of the hospital team made a terrifying diagnosis feel manageable."
                  </blockquote>
                </div>
              </section>

              {}
              <section id="cancer-care" className="mb-8 scroll-mt-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold">2</div>
                  <div>
                    <h2 className="text-2xl font-bold">My cancer care experience</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-primary/70 rounded"></div>
                  </div>
                </div>
                <div className="space-y-4 text-base leading-relaxed">
                  <div className="rounded-md bg-gray-50 p-4 border">
                    <p>
                      After the initial diagnosis, my thoughts raced, but my care moved even faster. Within a
                      few days, I was contacted by a surgical oncologist's office at my local hospital, and
                      they quickly scheduled an appointment.
                    </p>
                  </div>
                  <p>
                    My cancer was caught relatively early, so the tumor was on the smaller side, but there
                    was a risk that it had spread to my lymph nodes. The surgeon took the time to thoroughly
                    explain the various stages of malignant melanoma and the several treatment options
                    available to me.
                  </p>
                  <p>
                    If the melanoma had spread, we would have needed to be much more aggressive with the
                    treatment, and the odds of surviving 5 years would have been dramatically reduced.
                  </p>
                  <p>
                    I spent that initial visit swimming in a sea of data and probabilities. My surgeon was
                    quite patient and empathetic as they explained a ton of information to me. She made me
                    feel safe and cared for in a way that I imagine can only come with a lot of practice.
                  </p>
                  <p>
                    I was quickly scheduled for surgery at a nearby cancer hospital. On surgery day, I
                    arrived early to make sure I could go through all the presurgery checklist items. The
                    healthcare team prepped me, and I lay in the hospital bed for several hours before the
                    surgery.
                  </p>
                  <p>
                    Even though the cancer was just a few millimeters in diameter, they took a sizable
                    chunk of skin around the site to maximize the likelihood of complete removal. During the
                    surgery, they biopsied a portion of the nearest lymph node to check whether the melanoma
                    had spread.
                  </p>
                </div>
              </section>

              {}
              <section id="aftercare" className="mb-8 scroll-mt-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-bold">3</div>
                  <div>
                    <h2 className="text-2xl font-bold">Aftercare and follow-up</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-primary/70 rounded"></div>
                  </div>
                </div>
                <div className="space-y-4 text-base leading-relaxed">
                  <div className="rounded-md bg-gray-50 p-4 border">
                    <p>
                      After the operation, the hospital staff and surgeon's office followed up regularly to
                      check on my recovery. As soon as they received the lymph node biopsy results, they
                      called me to give me the news that, thankfully, the melanoma had not spread.
                    </p>
                  </div>
                  <p>
                    This meant we could shift away from aggressive treatment and move toward a regimen of
                    aggressive monitoring.
                  </p>
                  <p>
                    As someone living with chronic cancer, I visit the oncological surgeon's or
                    dermatologist's office every 4 months for a complete visual body check. Aggressive
                    monitoring, biopsies, and tests check that the cancer hasn't resurfaced. If the tests
                    spot anything that could be cancer, doctors immediately excise it and send it off for
                    testing.
                  </p>
                  <p>
                    I also get annual CT and MRI scans to ensure that nothing new appears in my chest or
                    head area. While these tests are expensive and can sometimes be uncomfortable, they help
                    me confidently go about my day-to-day living, knowing we're aggressively monitoring and
                    checking for a recurrence.
                  </p>
                </div>
              </section>

              {}
              <section id="takeaways" className="mb-8 scroll-mt-20">
                <h2 className="mb-4 text-2xl font-bold">What I want others to know</h2>
                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    Thinking back on my journey, I'm grateful for the expertise of my team. The care they
                    take in communicating clearly with me every step of this journey has been refreshing and
                    welcoming.
                  </p>
                  <p>
                    Cancer is a killer. And a diagnosis is terrifying. My healthcare team has been
                    empathetic and caring, helping me to understand everything I needed to know to cope
                    with this difficult diagnosis.
                  </p>
                  <p>
                    Thinking about the potential outcomes when it comes to cancer can be overwhelming. It
                    can be tough to make sense of it all. My healthcare team always stopped to check in with
                    me and ensure that I fully understood the implications of my diagnosis and treatment.
                  </p>

                  {}
                  <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border-l-4 border-primary/60 bg-white p-4 shadow-sm">
                      <h3 className="font-semibold text-primary">Key points to remember</h3>
                      <ul className="mt-3 space-y-2 text-sm">
                        <li>Stay actively involved with your care team at every step</li>
                        <li>Ask questions and ensure you fully understand your diagnosis and treatment</li>
                        <li>Early detection significantly improves treatment outcomes</li>
                        <li>Regular follow-up and monitoring are essential for long-term health</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-4 shadow-sm">
                      <h3 className="font-semibold">Practical tips</h3>
                      <ol className="mt-3 list-decimal list-inside text-sm">
                        <li>Bring a trusted person to appointments</li>
                        <li>Ask for written care plans and contact numbers</li>
                        <li>Track changes and report them promptly</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>

              {}
              <section id="bottom-line" className="mb-8 scroll-mt-20">
                <h2 className="mb-4 text-2xl font-bold">Bottom line</h2>
                <p className="text-base leading-relaxed">
                  If you've received a cancer diagnosis, I urge you to please stay actively involved with
                  your care team. They're there to ensure that you fully understand the process and help you
                  through this.
                </p>
              </section>

              {}
              <Card className="mb-8 p-6">
                <h3 className="mb-2 font-semibold">About the author</h3>
                <p className="text-sm text-muted-foreground">
                  Sean McGinnis is president of KURU Footwear, a direct-to-consumer shoe brand that makes
                  stylish shoes for foot pain such as plantar fasciitis. He resides in Utah with his family.
                </p>
              </Card>

              {}
              <div className="mb-8 border-t border-b py-6">
                <h3 className="mb-4 font-semibold">Share this article</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare("facebook")}
                    aria-label="Share on Facebook"
                    className="flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition shadow"
                  >
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on Twitter"
                    className="flex items-center gap-2 rounded-full bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-sky-600 transition shadow"
                  >
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    aria-label="Share on LinkedIn"
                    className="flex items-center gap-2 rounded-full bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 transition shadow"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => navigator.clipboard?.writeText(window.location.href)}
                    className="ml-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
                  >
                    <Share2 className="h-4 w-4" />
                    Copy link
                  </button>
                </div>
              </div>
            </main>

            {}
            <aside className="space-y-6 lg:sticky lg:top-28">
              {}
              <Card className="p-6">
                <h3 className="mb-4 font-semibold">At a glance</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-medium text-muted-foreground">Condition</dt>
                    <dd className="mt-1 font-medium">Malignant melanoma</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Care setting</dt>
                    <dd className="mt-1">Hospital cancer center with multidisciplinary team</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Key treatments</dt>
                    <dd className="mt-1">Wide local excision, sentinel lymph node biopsy</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Follow-up care</dt>
                    <dd className="mt-1">Quarterly skin checks, annual imaging, monitoring</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Timeline</dt>
                    <dd className="mt-1">Diagnosis to surgery: days</dd>
                  </div>
                </dl>
              </Card>

              {}
              <Card className="p-6">
                <h3 className="mb-4 font-semibold">Read this next</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="/pages/melanoma" className="font-medium text-primary hover:underline">
                      What Does Skin Cancer Look Like?
                    </a>
                  </li>
                  <li>
                    <a href="/pages/melanoma-scalp" className="font-medium text-primary hover:underline">
                      What You Need to Know About Skin Cancer on the Scalp
                    </a>
                  </li>
                  <li>
                    <a href="/pages/cancer-treatment" className="font-medium text-primary hover:underline">
                      Understanding Cancer Treatment Options
                    </a>
                  </li>
                  <li>
                    <a href="/pages/cancer-care" className="font-medium text-primary hover:underline">
                      Navigating Cancer Care: A Patient's Guide
                    </a>
                  </li>
                </ul>
              </Card>

              {}
              <NewsletterSignup variant="card" />
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
}
