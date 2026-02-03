import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const tabs = [
  "Chemotherapy Basics",
  "How It Works",
  "Medications",
  "Side Effects",
  "During Treatment",
  "Recovery",
];

export default function Chemotherapy() {
  const [activeTab, setActiveTab] = useState("Chemotherapy Basics");
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="border-b bg-card py-8 lg:py-12">
        <div className="container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/conditions" className="hover:text-foreground">Conditions</Link>
            <span className="mx-2">/</span>
            <Link to="/conditions/cancer" className="hover:text-foreground">Cancer Care</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Chemotherapy</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <Link to="/conditions/cancer">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Cancer Care
              </Button>
            </Link>
            <Badge variant="secondary" className="bg-category-conditions/10 text-category-conditions">
              Cancer Treatment
            </Badge>
          </div>
          <h1 className="mb-2 text-3xl font-bold lg:text-4xl">Chemotherapy</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Comprehensive guide to chemotherapy treatment, how it works, managing side effects,
            and what to expect during cancer treatment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12">
        <div className="container">
          {/* TABS */}
          <div className="flex flex-wrap gap-4 border-b pb-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`text-sm font-medium pb-3 border-b-4 transition ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* SECTIONS */}
          <Section
            title="Understanding Chemotherapy"
            articles={[
              ["What is Chemotherapy?", "Cancer-fighting drug therapy…"],
              ["Types of Chemotherapy", "Intravenous, oral, and other routes…"],
              ["Chemotherapy Goals", "Cure, control, or palliation…"],
              ["Combination Therapy", "Multiple drugs together…"],
              ["Neoadjuvant and Adjuvant Chemo", "Before and after surgery…"],
              ["Who Gets Chemotherapy?", "Cancer types and stages…"],
            ]}
          />

          <Section
            title="How Chemotherapy Works"
            articles={[
              ["Cell Cycle Targeting", "When drugs attack…"],
              ["Alkylating Agents", "Damaging cancer DNA…"],
              ["Antimetabolites", "Disrupting cell building…"],
              ["Topoisomerase Inhibitors", "Unwinding cancer cells…"],
              ["Plant Alkaloids", "Natural compound derivatives…"],
              ["Platinum Compounds", "Cross-linking DNA…"],
            ]}
          />

          <Section
            title="Chemotherapy Medications"
            articles={[
              ["Adriamycin (Doxorubicin)", "Anthracycline chemotherapy…"],
              ["Taxol (Paclitaxel)", "Microtubule-targeting drug…"],
              ["5-FU (Fluorouracil)", "Antimetabolite drug…"],
              ["Cisplatin", "Platinum-based agent…"],
              ["Cyclophosphamide", "Alkylating agent…"],
              ["Other Common Chemo Drugs", "Overview of additional medications…"],
            ]}
          />

          <Section
            title="Managing Chemo Side Effects"
            articles={[
              ["Nausea and Vomiting", "Anti-nausea medications and tips…"],
              ["Hair Loss", "Coping with baldness…"],
              ["Fatigue", "Managing cancer-related tiredness…"],
              ["Low Blood Counts", "Infection and bleeding risks…"],
              ["Mouth Sores", "Oral mucositis management…"],
              ["Neuropathy", "Nerve damage and tingling…"],
            ]}
          />

          <Section
            title="During Chemotherapy Treatment"
            articles={[
              ["Pre-Treatment Assessments", "Before your first chemo…"],
              ["Port Placement", "Central venous access devices…"],
              ["Treatment Schedule", "Cycles and timing…"],
              ["During Infusion", "What happens in the chemo chair…"],
              ["Hospital vs. Outpatient", "Different treatment settings…"],
              ["Self-Care During Chemo", "Staying healthy during treatment…"],
            ]}
          />

          <Section
            title="Recovery and Survivorship"
            articles={[
              ["End of Treatment Transition", "Moving from active therapy…"],
              ["Follow-Up Monitoring", "Scans and blood tests…"],
              ["Long-Term Side Effects", "Late effects of chemo…"],
              ["Second Cancers", "Chemo-related increased risk…"],
              ["Fertility Concerns", "Preserving reproductive health…"],
              ["Returning to Normal Life", "Rebuilding your life…"],
            ]}
          />

          {/* FOOTER NOTE */}
          <div className="mt-10 border-t pt-4 text-xs text-muted-foreground">
            This content is for informational purposes only and does not replace
            professional medical advice. Consult with a healthcare provider for diagnosis and treatment.
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ----------------SECTION COMPONENT ---------------- */

function Section({
  title,
  articles,
}: {
  title: string;
  articles: [string, string][];
}) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold mb-6">
        {title}
      </h2>
 
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map(([heading, desc]) => (
          <a
            key={heading}
            href="#"
            className="bg-card border rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
          >
            <div className="p-5 flex flex-col h-full">
              <h3 className="font-semibold mb-2 leading-snug">
                {heading}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {desc}
              </p>
              <span className="text-primary text-sm font-semibold mt-3">
                Read more →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
