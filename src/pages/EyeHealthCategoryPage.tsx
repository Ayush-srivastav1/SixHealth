import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { eyeHealthCategories } from "@/data/EyeHealth";

interface CategoryContent {
  [key: string]: {
    title: string;
    overview: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

const categoryContent: CategoryContent = {
  "eye-care": {
    title: "Eye Care",
    overview: "Comprehensive guide to maintaining healthy vision and preventing eye diseases. Learn about essential eye care practices, lifestyle habits, and when to seek professional help.",
    sections: [
      {
        title: "Understanding Eye Health",
        content: "Your eyes are one of your most precious senses. Proper eye care involves regular eye exams, protective measures, and understanding how your eyes work. Eye care is not just about treating problems when they occur—it's about preventing them in the first place."
      },
      {
        title: "Daily Eye Care Practices",
        content: "Incorporate these daily habits into your routine: Wash your hands before touching your eyes, remove contact lenses before sleeping, protect your eyes from UV rays with sunglasses, take regular breaks from screens using the 20-20-20 rule, and maintain a healthy diet rich in eye-healthy nutrients."
      },
      {
        title: "Common Eye Conditions",
        content: "Many eye conditions are preventable or manageable with early detection. Common conditions include myopia (nearsightedness), hyperopia (farsightedness), astigmatism, presbyopia, cataracts, and glaucoma. Regular eye exams can detect these conditions early."
      },
      {
        title: "Professional Eye Care",
        content: "Visit an eye care professional annually for comprehensive eye exams. These exams can detect not only vision problems but also serious health conditions like diabetes, high blood pressure, and eye diseases that could lead to vision loss if left untreated."
      }
    ]
  },
  "macular-degeneration": {
    title: "Treating Macular Degeneration",
    overview: "Explore treatments, management strategies, and coping techniques for macular degeneration. Learn about both dry and wet AMD and how to preserve your vision.",
    sections: [
      {
        title: "What is Macular Degeneration?",
        content: "Age-related macular degeneration (AMD) is a progressive eye condition that affects the central part of the retina (the macula), resulting in loss of central vision. It's the leading cause of vision loss in adults over 50 and comes in two forms: dry and wet AMD."
      },
      {
        title: "Dry AMD",
        content: "Dry AMD occurs when light-sensitive cells in the macula slowly break down. It typically progresses slowly and may not cause noticeable vision changes in the early stages. Early detection through regular eye exams is crucial for slowing progression."
      },
      {
        title: "Wet AMD",
        content: "Wet AMD occurs when abnormal blood vessels grow beneath the retina. This form progresses more quickly and can cause severe vision loss. Immediate treatment is important to prevent further deterioration of vision."
      },
      {
        title: "Treatment Options",
        content: "Treatment varies depending on the type and severity. Options include anti-VEGF injections, photodynamic therapy, laser treatment, nutritional supplements, and low vision aids. Work with your eye care specialist to determine the best approach for your situation."
      }
    ]
  },
  "dry-eye-syndrome": {
    title: "Treating Dry Eye Syndrome",
    overview: "Comprehensive information about dry eye syndrome, its causes, symptoms, and effective treatment options ranging from home remedies to medical interventions.",
    sections: [
      {
        title: "Understanding Dry Eye",
        content: "Dry eye syndrome occurs when tears don't provide adequate lubrication for the eyes. This can happen because there aren't enough tears or the tears evaporate too quickly. Symptoms include burning, stinging, grittiness, and paradoxically, excessive tearing."
      },
      {
        title: "Common Causes",
        content: "Dry eyes can result from aging, hormonal changes, medications (antihistamines, decongestants, antidepressants), environmental factors (wind, dry air), extended screen time, and certain medical conditions like Sjögren's syndrome and rheumatoid arthritis."
      },
      {
        title: "Home Remedies",
        content: "Start with simple interventions: artificial tears, warm compresses, eyelid hygiene, increasing humidity in your environment, taking breaks from screens, staying hydrated, and consuming foods rich in omega-3 fatty acids."
      },
      {
        title: "Professional Treatments",
        content: "If home remedies don't work, your eye doctor may recommend punctal plugs, prescription eye drops (like cyclosporine), meibomian gland treatments, intense pulsed light (IPL) therapy, or other advanced treatments depending on severity."
      }
    ]
  },
  "nutrition-supplements": {
    title: "Nutrition & Supplements for Eye Health",
    overview: "Learn about the vitamins, minerals, and nutrients that support eye health and help prevent age-related vision problems.",
    sections: [
      {
        title: "Key Eye Health Nutrients",
        content: "Certain nutrients are essential for maintaining healthy eyes: Lutein and Zeaxanthin protect the macula from age-related damage, Vitamins C and E are powerful antioxidants, Zinc supports retinal function, Vitamin A is crucial for night vision, and Omega-3 fatty acids support retinal health."
      },
      {
        title: "Foods for Eye Health",
        content: "Incorporate these eye-healthy foods into your diet: leafy greens (spinach, kale), orange vegetables (carrots, sweet potatoes), fatty fish (salmon, mackerel), nuts and seeds, eggs, berries, and citrus fruits. A balanced diet rich in colorful produce benefits your whole body, including your eyes."
      },
      {
        title: "Eye Health Supplements",
        content: "If you struggle to get enough nutrients through diet, supplements may help. The AREDS2 formula has been shown to slow progression of macular degeneration. Common supplements include lutein, zeaxanthin, vitamins C and E, zinc, and omega-3s."
      },
      {
        title: "Choosing Quality Supplements",
        content: "Look for supplements that are third-party tested, choose reputable brands, check for appropriate dosages, and consult with your eye care provider before starting any new supplement regimen, especially if you're taking medications."
      }
    ]
  },
  "living-with-blindness": {
    title: "Living with Blindness",
    overview: "Resources and strategies for people living with blindness or severe vision loss. Discover adaptive technologies and support services.",
    sections: [
      {
        title: "Coping with Vision Loss",
        content: "Vision loss can be emotionally challenging. Know that modern technology and adaptive strategies make it possible to maintain independence and quality of life. Many people live fulfilling, active lives with blindness."
      },
      {
        title: "Adaptive Technologies",
        content: "Assistive technology can help: screen readers, magnification software, voice-activated devices, accessible smartphones and tablets, braille displays, and mobility aids. These technologies enable people to work, learn, and communicate effectively."
      },
      {
        title: "Home and Work Modifications",
        content: "Simple modifications can improve safety and independence: better lighting, high-contrast labels, organized storage, specialized kitchen tools, and workplace accommodations. Occupational therapists can suggest specific modifications for your situation."
      },
      {
        title: "Support and Community",
        content: "Connect with others through blindness support groups, rehabilitation services, and organizations like the National Federation of the Blind. Rehabilitation training programs teach daily living skills and help you maximize your remaining vision and adapt to vision loss."
      }
    ]
  }
};

export default function EyeHealthCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const category = eyeHealthCategories.find(c => c.slug === slug);
  const content = slug ? categoryContent[slug] : null;

  if (!category || !content) {
    return (
      <Layout>
        <section className="py-12">
          <div className="site-container text-center">
            <h1 className="text-2xl font-bold mb-2">Category Not Found</h1>
            <p className="text-muted-foreground mb-4">The category you're looking for doesn't exist.</p>
            <Link to="/conditions/eye-health">
              <Button>Back to Eye Health</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {}
      <section className="border-b bg-card py-8 lg:py-12">
        <div className="site-container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/conditions" className="hover:text-foreground">Conditions</Link>
            <span className="mx-2">/</span>
            <Link to="/conditions/eye-health" className="hover:text-foreground">Eye Health</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{category.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <Link to="/conditions/eye-health">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Eye Health
              </Button>
            </Link>
            <Badge variant="secondary" className="bg-category-conditions/10 text-category-conditions">
              Health Condition
            </Badge>
          </div>
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">{category.title}</h1>
        </div>
      </section>

      {}
      <section className="border-b">
        <div className="site-container max-w-3xl">
          <div className="my-8 rounded-xl overflow-hidden">
            <img 
              src={category.image} 
              alt={category.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {}
      <section className="py-8 lg:py-12">
        <div className="container max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {content.overview}
          </p>

          {}
          <div className="space-y-12">
            {content.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {}
          <div className="bg-muted/50 rounded-lg p-6 mt-12">
            <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Regular eye exams are crucial for early detection of eye diseases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Prevention through lifestyle changes and nutrition can slow age-related vision loss</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Modern technology and support services help people with vision loss maintain independence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Consult with eye care professionals for personalized treatment and management plans</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {}
      <section className="bg-muted/50 py-12 border-t mt-12">
        <div className="site-container max-w-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Stay Updated on Eye Health</h2>
            <p className="text-muted-foreground">
              Get expert advice and the latest information delivered to your inbox.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border bg-background"
            />
            <Button>Sign Up</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
