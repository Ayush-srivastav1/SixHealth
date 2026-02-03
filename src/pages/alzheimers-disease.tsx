import { useState, useRef } from "react";
import { Layout } from "@/components/layout";
import PageLayout from "@/components/layout/PageLayout";
import { CardHub } from "@/components/alzimersCardHub";
import { X } from "lucide-react";

const tabs = [
  "Basics",
  "Mental Health",
  "Diet & Lifestyle",
  "Treatment",
  "Behavioral Changes",
  "Early Onset",
];

const careGuideContent = {
  title: "Your Guide to Caring for Someone with Alzheimer's Disease",
  author: "Valencia Higuera",
  medicalReviewer: "Heidi Moawad, M.D.",
  lastUpdated: "July 7, 2023",
  keyTakeaways: [
    "Early planning is important. Discuss end-of-life wishes, secure permission to communicate with healthcare teams, and address legal and financial matters while the person can still participate.",
    "In-home care, adult day centers, long-term care facilities, respite care, and hospice each offer varying levels of support.",
    "Creating daily routines, encouraging physical and mental activity, ensuring nutritious eating, and maintaining open communication can support overall quality of life."
  ],
  intro: "The Centers for Disease Control and Prevention (CDC) notes that about 2 in 3 dementia caregivers are women, and around 1 in 3 are ages 65 and older. In addition, about a quarter of dementia caregivers also care for children under 18. Getting outside help and support can make caring for your loved one more enjoyable and less stressful. It can improve quality of life for both of you.",
  sections: [
    {
      title: "Setting up a care plan for Alzheimer's disease",
      content: "Alzheimer's disease is a progressive illness, and caregiver responsibilities typically increase as the disease advances. Responsibilities can include making important health decisions for a loved one, so setting up a care plan early is important. Here's how to prepare for the future:",
      subsections: [
        {
          subtitle: "Discuss your loved one's wishes",
          text: "Discuss your loved one's wishes in the early stages of the disease. This allows them to express their end-of-life care wishes, such as the type of medical treatments they want."
        },
        {
          subtitle: "Get permission to speak with their healthcare team",
          text: "Before AD progresses, complete a HIPAA authorization form. This allows you to discuss a loved one's medical history with their doctors."
        },
        {
          subtitle: "Consider legal matters",
          text: "You'll need authorization to make medical decisions on their behalf. Contact a family lawyer for assistance with creating a medical power of attorney. Also talk with your loved one about advance care directives, which outline their wishes in the event of a medical emergency. For example, it may cover how they feel about life support."
        },
        {
          subtitle: "Consider financial matters",
          text: "You can also become their financial power of attorney. This allows you to make financial decisions on their behalf. Also, read their insurance policies to understand their coverage (health, life, supplemental care, etc.). It would help to also discuss their funeral and burial wishes."
        }
      ]
    },
    {
      title: "Types of care for Alzheimer's disease",
      content: "The type of care a person needs will depend on the severity of their symptoms. Types of care available for AD include:",
      subsections: [
        {
          subtitle: "In-home care",
          text: "The individual can receive care in a familiar environment. Family members or friends can share responsibilities with a home health aid to help take some of the pressure off."
        },
        {
          subtitle: "Adult day centers",
          text: "Sometimes, caregivers are busy with work or other responsibilities during the day and can't provide dedicated care during those hours. In these cases, adult day centers can provide a safe and active environment for their loved ones. Some centers provide structured activities, as well as transportation and meals."
        },
        {
          subtitle: "Long-term care",
          text: "As the disease progresses, some individuals require long-term care. This includes care in a nursing home or an assisted living community. Both options offer 24-hour care or assistance."
        },
        {
          subtitle: "Respite care",
          text: "This is short-term relief for caregivers. The length varies but can range from 1 day to several weeks."
        },
        {
          subtitle: "Hospice care",
          text: "This occurs when a loved one approaches the end of their life. This care can take place in their home or at a long-term care facility. Hospice care provides comfort and care in a person's last months of life."
        }
      ]
    },
    {
      title: "10 tips for caregivers of people with Alzheimer's disease",
      subsections: [
        {
          subtitle: "1. Educate yourself",
          text: "Learn about your loved one's condition. This can improve communication with your loved one, and it can help you cope with their changing behavior. Attend medical appointments and ask questions."
        },
        {
          subtitle: "2. Set a daily routine",
          text: "Simple daily routines can help a loved one cope with short-term memory loss. For example, aim for them to bathe, get dressed, and eat at a set time each day."
        },
        {
          subtitle: "3. Keep them physically active",
          text: "Being active and exercising regularly can slow cognitive changes. Movement exercises the joints, muscles, and heart too. This can improve their mood — and yours."
        },
        {
          subtitle: "4. Keep them mentally active",
          text: "Mental activity also helps slow cognitive changes. Let your loved one perform some tasks themselves, if possible. This includes bathing, brushing their teeth, and doing household chores. You can also encourage reading and other activities like puzzles."
        },
        {
          subtitle: "5. Promote nutritious eating",
          text: "Your loved one might lose interest in food, but it's important to maintain balanced nutrition when possible. This slows cognitive changes as well. When preparing meals, include foods with cognitive benefits such as green leafy vegetables, berries, whole grains, fish, and poultry. Try to limit red meat, sugar, and fried foods."
        },
        {
          subtitle: "6. Offer choices",
          text: "A person with Alzheimer's may not be able to ask for what they want, but they can often make choices. Keep the choices simple, for instance, ask them to choose between two outfits, pasta or rice, whether to sit outside or indoors, and so on."
        },
        {
          subtitle: "7. Promote good hygiene and grooming",
          text: "Low self-esteem can affect their mood, so help maintain the person's hygiene and grooming habits. This includes a daily routine of bathing, brushing their teeth, and combing their hair. If they feel good about their appearance, they might feel better overall."
        },
        {
          subtitle: "8. Be patient",
          text: "It might take your loved one longer to complete certain tasks like bathing and eating. Try your best to be patient and not get frustrated. The inability to care for themselves can be upsetting or embarrassing. You can maintain their dignity by respecting their comfort level. For example, allow them to bathe or shower alone (if it's safe)."
        },
        {
          subtitle: "9. Focus on communication",
          text: "A person with Alzheimer's may be unable to find the words to express themselves. This can lead to anger, frustration, and inappropriate care, if they cannot say how they are feeling."
        },
        {
          subtitle: "10. Be prepared for sundowning",
          text: "Sundowning refers to restlessness, irritability, and confusion that worsens in the late afternoon and early evening hours. Your loved one might wander around the home or pace during the night. This can be challenging for caregivers because sundowning often prevents sleep. To manage sundowning, maintain a predictable bedtime routine. You can also increase their activity during the day and limit daytime napping and caffeine before bed."
        }
      ]
    },
    {
      title: "Communication tips for someone with Alzheimer's disease",
      subsections: [
        {
          subtitle: "Do's",
          text: "• Keep responses and instructions simple and short.\n• Give them time to process information.\n• Be patient, and if necessary, repeat instructions.\n• Redirect conversations to avoid arguments.\n• Use humor to break tension.\n• Learn their nonverbal cues."
        },
        {
          subtitle: "Don'ts",
          text: "• Don't argue or become overly irritated. Leave the room if necessary.\n• Don't insist they complete a certain task.\n• Don't take their actions personally. AD can affect mood and behavior.\n• Don't belittle them.\n• Don't yell.\n• Don't ask open-ended questions. Give options instead."
        }
      ]
    },
    {
      title: "Additional important care tips",
      subsections: [
        {
          subtitle: "11. Ensure the home is safe",
          text: "If you're caring for a loved one at home, take steps to prevent falls and other accidents. Place carpet or grip strips on stairs. Place latches on cabinet doors. Place covers over electrical outlets. Remove small rugs. Place handrails and mats in the shower. Depending on the severity of the person's cognitive symptoms, you may not want to leave them unattended in the shower or tub or allow them to cook by themselves."
        },
        {
          subtitle: "12. Get help",
          text: "It can be hard if you're the only caregiver. Don't be afraid to open up with family and friends about your experience, as they may be able to help, whether by dropping in for a chat, sharing experiences or even looking after your loved one while you take a break. Check out local community support, online groups, and other options. The Alzheimer's Association has useful resources, including an online chat facility and 24/7 helpline."
        },
        {
          subtitle: "13. Sort out the admin",
          text: "It can be hard to think of this, but while your loved one is still able to make decisions, it's essential to ensure you arrange for various formalities, including the following: enduring power of attorney, advance directive or power of attorney for healthcare, a living will, a standard will, and any necessary financial arrangements."
        },
        {
          subtitle: "14. Engage in self-care",
          text: "It's important to take care of yourself, too. Caregiving can be physically, emotionally, and mentally exhausting. If possible, take advantage of respite care. Try to maintain a balanced diet and get plenty of physical activity. Go for a walk and enjoy the fresh air. Get involved in activities that bring you joy. Also, you can look into local or online caregiver support groups."
        }
      ]
    },
    {
      title: "What's the cost of Alzheimer's care?",
      content: "The cost of Alzheimer's care varies. According to the Alzheimer's Association, estimated costs for various services may include: home health aide ($28 per hour), adult day centers ($83 per day), and long-term facility ($4,500+ per month). Health insurance (Medicare, retiree group plan, or private) can cover some costs. Talk with your loved one about any supplemental plans or long-term care insurance plans to reduce the out-of-pocket expense."
    }
  ],
  takeaway: "Alzheimer's disease is a progressive illness, and the rate of progression varies from person to person. Some people are caregivers for only a few months, while others provide long-term care. It's important to set up a short-term and long-term plan for medical care and financial and legal matters."
};

const memoryCareContent = {
  title: "What Is Memory Care and Who Is It for?",
  author: "Jared C. Pistoia, ND",
  medicalReviewer: "Megan Soliman, MD",
  lastUpdated: "April 5, 2023",
  intro: "Memory care refers to programs and residential facilities that can assist loved ones living with dementia. If a loved one is experiencing memory issues and you're concerned for their well-being, it may be time to consider a memory care program. Memory issues are common in Alzheimer's disease and other forms of dementia. The chronic, progressive nature of these conditions can lead to the need for assistance with daily living.",
  keyTakeaways: [
    "Memory care refers to specialized support and living options for people living with dementia or other causes of memory issues.",
    "Memory care facilities have specially trained staff who can assist with the day-to-day difficulties of memory issues.",
    "Different types of facilities offer varying levels of care, from adult day centers to nursing homes."
  ],
  sections: [
    {
      title: "What is memory care?",
      content: "Memory care refers to specialized support and living options for people living with dementia or other causes of memory issues. Dementia refers to cognitive dysfunction and memory loss, which can interfere with activities of daily living. Memory care facilities have specially trained staff who can assist with the day-to-day difficulties of memory issues. The extent of care that a loved one may need depends on the degree of their memory issues.",
      subsections: [
        {
          subtitle: "Types of Memory Care Facilities",
          text: "In some cases, an assisted living facility makes the most sense, whereas the best idea for someone who needs more intensive support may be a nursing home. Another common choice is a continuing care retirement community, which integrates independent living with assisted living options. Memory care can also include at-home visits or can be offered at adult day care centers. At-home visits may offer the most comfort since the services are provided at home. Adult day care centers offer memory care services for the day but don't offer housing."
        }
      ]
    },
    {
      title: "What services are provided in a memory care facility?",
      content: "The specific services provided will vary according to each facility and to your loved one's particular needs. Some services that may be offered in any memory care facility can include:",
      subsections: [
        {
          subtitle: "Common Services",
          text: "• Help with activities of daily living like dressing and bathing\n• Meals and recreational programs\n• Nursing services to help with medications or other needs\n• Housekeeping services\n• Transportation services\n• Coordination with family in regard to the individual's care preferences\n• Staff that are trained in dementia and memory disorders\n• Safe and secure outdoor environments\n• Family support groups\n• Health screenings\n• Fitness programs"
        }
      ]
    },
    {
      title: "What are the benefits of memory care?",
      content: "Memory care services offer a safe and secure environment that supports the specific needs of your loved one. It assures that your loved one will be supervised to some degree, depending on the facility.",
      subsections: [
        {
          subtitle: "Key Benefits",
          text: "• Community-oriented setting to foster social relationships\n• Secure environments to prevent wandering\n• Access to staff trained in memory care\n• Activities that aim to help improve cognitive function\n• Help in establishing routines\n• Reduced chance of hospitalization"
        }
      ]
    },
    {
      title: "What's the difference between memory care and assisted living?",
      subsections: [
        {
          subtitle: "Memory Care vs. Assisted Living",
          text: "Assisted living refers to a type of care that's offered in a facility. Assisted living facilities typically have residents who live in a secure and supervised community and receive help with certain activities of daily living. Residents can live in apartments or rooms and may also have access to shared spaces. Memory care broadly refers to a type of specialized service for those living with memory issues. Assisted living facilities can offer memory care services, but memory care isn't exclusively offered at assisted living facilities."
        },
        {
          subtitle: "Memory Care vs. Dementia Care",
          text: "Dementia care is more involved and more specific than memory care. Dementia is a condition that includes more symptoms than memory issues alone. For example, it may also include difficulties with communication and planning, which are addressed in facilities that offer dementia care."
        }
      ]
    },
    {
      title: "Average monthly cost for memory care",
      content: "According to a 2021 survey, the average monthly costs for memory care were reported as follows:",
      subsections: [
        {
          subtitle: "Cost Breakdown",
          text: "• Adult day care: $1,690\n• At-home care: $4,947–$5,148\n• Assisted living: $4,500\n• Nursing home: $7,908–$9,034"
        }
      ]
    },
    {
      title: "How to decide when it's time to move to memory care",
      content: "The decision to move a loved one into a memory care facility may be difficult for many reasons. A key question that can help you decide is whether or not you believe they're safe without daily supervision and assistance.",
      subsections: [
        {
          subtitle: "Decision Factors",
          text: "Consider the quality of life that they're currently experiencing. If their social life is restricted or they're not receiving much mental stimulation throughout the day, you might consider a community-oriented setting with opportunities for socializing and recreational activities. If you're a caregiver, consider both the effect that caring for them is having on you and whether or not you're able to continue to provide the care they need. If you find that taking care of your loved one is becoming overwhelming, it may be a good time to consider some type of memory care for them."
        }
      ]
    }
  ],
  takeaway: "Memory care may be a good option for your loved one, but it depends on their specific needs. There are different types of facilities that offer memory care programs and different levels of care. More intensive facilities are typically more expensive but ensure more overall supervision and attention. Speaking with your family, your loved one, and perhaps a healthcare professional can be one way to determine the most appropriate course of action for someone experiencing memory issues."
};

const nursingHomeContent = {
  title: "Choosing a Nursing Home for a Loved One with Alzheimer's",
  author: "Maureen McNulty",
  medicalReviewer: "Heidi Moawad, M.D.",
  lastUpdated: "August 15, 2024",
  intro: "Choosing a nursing home for a loved one with Alzheimer's disease is one of the most difficult decisions a family may have to make. This guide will help you understand what to look for and how to make the best choice for your loved one.",
  keyTakeaways: [
    "Visit multiple facilities and ask detailed questions about their Alzheimer's care programs",
    "Look for trained staff, secure environments, and activities designed for residents with dementia",
    "Consider location, cost, and whether the facility can provide care as your loved one's condition progresses",
    "Check licensing, ratings, and speak with current residents and their families",
    "Tour the facility at different times of day to get a true sense of operations and quality of life"
  ],
  sections: [
    {
      title: "When to Consider a Nursing Home",
      content: "As Alzheimer's disease progresses, the care needs of your loved one may exceed what you can provide at home. A nursing home may become necessary when your loved one requires 24-hour supervision, assistance with all activities of daily living, or specialized medical care.",
      subsections: [
        {
          subtitle: "Signs It May Be Time",
          text: "• Your loved one needs constant supervision to prevent wandering or accidents\n• They require help with all personal care (bathing, toileting, dressing)\n• Behavioral problems are difficult to manage at home\n• Your loved one's safety is at risk\n• Your own health is being affected by caregiving stress\n• They need skilled nursing care beyond what home care can provide"
        }
      ]
    },
    {
      title: "What to Look for in a Facility",
      content: "When evaluating nursing homes, pay attention to both the physical environment and the quality of care provided. The best facilities for Alzheimer's patients offer specialized memory care units with trained staff.",
      subsections: [
        {
          subtitle: "Staff Qualifications",
          text: "• Nursing staff with experience in dementia care\n• Staff trained in recognizing and responding to behavioral changes\n• Adequate staffing ratios (typically 1 caregiver per 4-6 residents)\n• Ongoing training and education for staff\n• Licensed nurses on-site 24/7"
        },
        {
          subtitle: "Physical Environment",
          text: "• Secure, wandering-resistant units with locked exits\n• Clear signage and easy-to-navigate layouts\n• Safe outdoor spaces for supervised activities\n• Good lighting and comfortable living spaces\n• Separate memory care units for specialized care"
        },
        {
          subtitle: "Activities and Engagement",
          text: "• Daily activities designed for residents with cognitive limitations\n• Social and recreational programs\n• Music, art, and sensory activities\n• Outdoor time and exercise opportunities\n• Family involvement in activities and celebrations"
        }
      ]
    },
    {
      title: "Questions to Ask",
      content: "Before choosing a facility, ask detailed questions about their approach to care and their experience with Alzheimer's patients. These questions will help you understand what your loved one's daily life will be like.",
      subsections: [
        {
          subtitle: "Care and Medical Questions",
          text: "• How do you handle behavioral problems and medication management?\n• What is your experience with end-of-life care?\n• How often do doctors visit and what is the availability of nursing staff?\n• Can the facility provide care at all stages of Alzheimer's?\n• What is the process if your loved one needs hospitalization?"
        },
        {
          subtitle: "Daily Life Questions",
          text: "• What is a typical day like for residents?\n• How often do families visit and what visiting policies are in place?\n• What activities are available and how often?\n• How do you handle nutrition and dietary needs?\n• What is the policy on family involvement in care decisions?"
        },
        {
          subtitle: "Financial and Administrative Questions",
          text: "• What are all the costs and what is covered by Medicare/Medicaid?\n• What is the policy on rate increases?\n• Are there additional fees for services?\n• What is the move-in/move-out policy?\n• How are complaints and concerns handled?"
        }
      ]
    },
    {
      title: "Evaluating Quality and Safety",
      content: "Research the facility's track record and safety record before making a decision. There are several resources available to help you evaluate quality and identify any concerns.",
      subsections: [
        {
          subtitle: "Resources for Research",
          text: "• Medicare's Nursing Home Compare website provides ratings and inspection records\n• State health department surveys and licensing records\n• Complaint histories and any violations cited\n• Online reviews from families (but verify independently)\n• Accreditation from organizations like The Joint Commission"
        },
        {
          subtitle: "Red Flags to Watch For",
          text: "• Poor hygiene or cleanliness\n• Neglected or withdrawn residents\n• Staff that seems rushed or indifferent\n• Residents left alone for long periods\n• Unexplained injuries or signs of abuse\n• Poor communication with families\n• High staff turnover rates"
        }
      ]
    },
    {
      title: "The Transition Process",
      content: "Moving your loved one to a nursing home is a major transition. Preparing them and yourself for this change can help make the process smoother and less distressing.",
      subsections: [
        {
          subtitle: "Before the Move",
          text: "• Prepare your loved one gradually with visits to the new facility\n• Bring familiar items like photos, blankets, and favorite furniture\n• Maintain established routines as much as possible\n• Give staff information about your loved one's preferences and habits\n• Arrange visits from family members during the adjustment period"
        },
        {
          subtitle: "After the Move",
          text: "• Visit regularly, especially in the first weeks\n• Establish a routine with consistent visiting times\n• Communicate frequently with staff about any concerns\n• Encourage participation in activities\n• Be patient with the adjustment period (can take weeks to months)\n• Maintain your role in decision-making about care"
        }
      ]
    }
  ],
  takeaway: "Choosing a nursing home for a loved one with Alzheimer's is a deeply personal decision that requires careful research and consideration. Visit multiple facilities, ask detailed questions, and trust your instincts about where your loved one will receive the best care and quality of life possible."
};

const sections = [
  {
    id: "editors-picks",
    title: "Editor's Picks",
    category: "Basics",
    articles: [
      { id: "care-guide", title: "Your Guide to Caring for Someone with Alzheimer’s Disease", content: "Learn how to care for someone with Alzheimer’s, including daily routines, safety, and emotional support." },
      { id: "memory-care", title: "What Is Memory Care and Who Is It for?", content: "Understand memory care options and who can benefit from them." },

      { id: "nursing-home", title: "Choosing a Nursing Home for a Loved One with Alzheimer’s", content: "Tips for selecting the right nursing home for Alzheimer’s care." },
    ],
  },
  {
    id: "mental-wellbeing",
    title: "Mental Well-Being for Caregivers",
    category: "Mental Health",
    articles: [
      { id: "support-group", title: "Finding an Alzheimer’s Support Group", content: "How to find and benefit from support groups." },
      { id: "caregiver-story", title: "‘I Never Thought I’d Be Caring for My Mother with Dementia,’ Plus 8 Ways to Cope", content: "Personal stories and coping strategies for caregivers." },
      { id: "finances", title: "A Caregiver’s Guide to Managing Finances for Alzheimer’s Disease", content: "Financial tips and resources for caregivers." },
      { id: "frustration", title: "Alzheimer’s, Caregiving, and Managing Frustration", content: "Advice for managing stress and frustration as a caregiver." },
    ],
  },
  {
    id: "diet-lifestyle",
    title: "Diet & Lifestyle",
    category: "Diet & Lifestyle",
    articles: [
      { id: "not-eating", title: "What Happens If a Loved One with Alzheimer's Is Not Eating?", content: "What to do if someone with Alzheimer’s loses appetite." },
      { id: "activities", title: "What You Can Do with Someone Who Has Alzheimer’s Disease: 6 Activities", content: "Engaging activities for people with Alzheimer’s." },
      { id: "diet", title: "Can Diet Prevent or Slow Down Alzheimer’s Disease?", content: "The role of diet in Alzheimer’s prevention and management." },
      { id: "at-home-activities", title: "What Are the Best At-Home Activities for Dementia Patients?", content: "Ideas for at-home activities for dementia and Alzheimer’s." },
    ],
  },
  {
    id: "treatment",
    title: "Treatment & Medications",
    category: "Treatment",
    articles: [
      { id: "dementia-treatment", title: "Your Guide to Clinical and At-Home Treatment Options for Dementia", content: "Overview of treatment options for dementia and Alzheimer’s." },
      { id: "gene-therapy", title: "What to Know About Gene Therapy for Alzheimer’s Disease", content: "Latest research on gene therapy for Alzheimer’s." },
      { id: "vitamins", title: "Vitamins and Supplements for Memory", content: "Supplements that may help with memory loss." },
      { id: "tau-protein", title: "Understanding Tau Protein and Its Role in Alzheimer’s Disease", content: "The science behind tau protein and Alzheimer’s." },
    ],
  },
  {
    id: "behavioral-changes",
    title: "Behavioral & Psychological Changes",
    category: "Behavioral Changes",
    articles: [
      { id: "sundowning", title: "What Is Sundowning?", content: "Understanding sundowning and how to manage it." },
      { id: "agitation", title: "Can You Spot the Symptoms of Agitation in Alzheimer’s Disease?", content: "Recognizing and managing agitation symptoms." },
      { id: "hallucinations", title: "What Are Alzheimer’s Hallucinations?", content: "What to know about hallucinations in Alzheimer’s." },
      { id: "brain-scan", title: "Can a Brain Scan Detect Dementia or Alzheimer’s?", content: "The role of brain scans in diagnosis." },
    ],
  },
  {
    id: "early-onset",
    title: "Early Onset Alzheimer’s Disease",
    category: "Early Onset",
    articles: [
      { id: "early-signs", title: "Signs and Symptoms of Early Onset Alzheimer’s Disease", content: "How to recognize early onset Alzheimer’s." },
      { id: "early-treatments", title: "Treatments for Early Onset Alzheimer’s Disease", content: "Treatment options for early onset cases." },
      { id: "independence", title: "How to Maintain Independence with Early Onset Alzheimer’s Disease", content: "Tips for maintaining independence." },
      { id: "questions", title: "Questions to Ask Your Doctor After an Early Alzheimer’s Diagnosis", content: "Important questions for your healthcare provider." },
    ],
  },
];

export default function AlzheimersDisease() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const sectionRefs = {
    "Basics": useRef(null),
    "Mental Health": useRef(null),
    "Diet & Lifestyle": useRef(null),
    "Treatment": useRef(null),
    "Behavioral Changes": useRef(null),
    "Early Onset": useRef(null),
  };

  // Helper to scroll to section
  const scrollToSection = (category: string) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Show detail view when care-guide is selected
  if (selectedArticle === "care-guide") {
    return (
      <Layout>
        <CareGuideDetail onClose={() => setSelectedArticle(null)} />
      </Layout>
    );
  }

  // Show detail view when memory-care is selected
  if (selectedArticle === "memory-care") {
    return (
      <Layout>
        <MemoryCareDetail onClose={() => setSelectedArticle(null)} />
      </Layout>
    );
  }
  // Show detail view when nursing-home is selected
  if (selectedArticle === "nursing-home") {
    return (
      <Layout>
        <NursingHomeDetail onClose={() => setSelectedArticle(null)} />
      </Layout>
    );
  }

  return (
    <Layout>
      <PageLayout
        title="Caregiving for Alzheimer’s Disease"
        subtitle="Your hub for navigating being a caregiver for someone living with Alzheimer's disease"
        tabs={tabs}
        activeTab={null}
        onTabClick={scrollToSection}
        heroColor="#9333ea"
      >
        <CardHub sections={sections} onArticleClick={setSelectedArticle} />
        <section className="max-w-7xl mx-auto px-5 py-10">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Get our Caregiving for Alzheimer's Newsletter
            </h2>
            {!subscribed ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="border border-purple-300 rounded px-4 py-2"
                />
                <button className="bg-purple-700 text-white rounded py-2 font-semibold">
                  Sign Up
                </button>
              </form>
            ) : (
              <p className="text-green-700 font-medium">
                ✅ You’re subscribed successfully!
              </p>
            )}
          </div>
          {/* FOOTER NOTE */}
          <div className="mt-10 border-t pt-4 text-xs text-muted-foreground">
            This content is for informational purposes only and does not replace
            professional medical advice. Consult with a healthcare provider for diagnosis and treatment.
          </div>
        </section>
      </PageLayout>
    </Layout>
  );
}

function Section({ section, onArticleClick }: {
  section: {
    title: string;
    articles: { id: string; title: string; content: string }[];
  };
  onArticleClick: (id: string) => void;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.articles.map((article) => (
          <button
            key={article.id}
            className="border rounded-md p-5 hover:shadow-lg transition bg-white flex flex-col text-left focus:outline-none"
            onClick={() => onArticleClick(article.id)}
          >
            <img
              src="/health-placeholder.png"
              alt={article.title}
              className="w-full h-36 object-cover rounded mb-3 bg-gray-100"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <span className="text-purple-700 text-sm font-semibold mt-auto">
              Read more →
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function CareGuideDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-8">
        {/* Back button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-purple-700 font-semibold mb-8 hover:text-purple-900 transition"
        >
          <X size={20} />
          Back to Guide
        </button>

        {/* Hero Header Section */}
        <div className="mb-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-10 shadow-lg">
          <h1 className="text-5xl font-bold mb-4">{careGuideContent.title}</h1>
          <div className="flex gap-4 text-purple-100 flex-wrap text-sm">
            <span className="bg-purple-500/50 px-3 py-1 rounded-full">By {careGuideContent.author}</span>
            <span className="bg-purple-500/50 px-3 py-1 rounded-full">Reviewed by {careGuideContent.medicalReviewer}</span>
            <span className="bg-purple-500/50 px-3 py-1 rounded-full">Updated {careGuideContent.lastUpdated}</span>
          </div>
        </div>

        {/* Key takeaways */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-2xl p-8 mb-12 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-600 text-white p-3 rounded-lg">
              <span className="text-xl font-bold">✓</span>
            </div>
            <h2 className="text-2xl font-bold text-purple-900">Key Takeaways</h2>
          </div>
          <ul className="space-y-4">
            {careGuideContent.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex gap-4 bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <span className="text-purple-600 font-bold text-lg flex-shrink-0">{idx + 1}</span>
                <span className="text-gray-700 leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Intro */}
        <div className="mb-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg text-gray-800 leading-relaxed text-lg italic">
          "{careGuideContent.intro}"
        </div>

        {/* Sections */}
        {careGuideContent.sections.map((section, idx) => (
          <div key={idx} className="mb-14">
            {/* Section Title with number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                {idx + 1}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
            </div>

            {section.content && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg mb-6 border border-gray-200">
                <p className="text-gray-800 leading-relaxed">{section.content}</p>
              </div>
            )}

            {section.subsections && (
              <div className="space-y-4">
                {section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx} className="bg-white border-2 border-gray-200 hover:border-purple-400 rounded-xl p-6 transition shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 text-purple-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        {String.fromCharCode(97 + (subIdx % 26))}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">{subsection.subtitle}</h3>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-base">
                          {subsection.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Takeaway */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex gap-4 items-start">
            <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3 text-xl">Key Takeaway</h3>
              <p className="text-blue-50 leading-relaxed text-lg">{careGuideContent.takeaway}</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-12 border-2 border-green-300 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-600 text-white p-3 rounded-lg">
              <span className="text-xl">📚</span>
            </div>
            <h3 className="font-bold text-green-900 text-2xl">Resources for Caregivers</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "A Place for Mom", url: "#" },
              { name: "Caregiver Action Network", url: "#" },
              { name: "Paying for Senior Care", url: "#" },
              { name: "NIA: Paying for Care", url: "#" },
              { name: "The Alzheimer's Association", url: "#" }
            ].map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                className="bg-white p-4 rounded-lg border-2 border-green-200 hover:border-green-500 hover:shadow-md transition text-green-700 font-semibold"
              >
                → {resource.name}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 text-sm text-gray-700">
          <p className="font-semibold text-yellow-900 mb-2">⚠️ Medical Disclaimer</p>
          <p>
            This content is for informational purposes only and does not replace
            professional medical advice. Consult with a healthcare provider for diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
}

function MemoryCareDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-8">
        {/* Back button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-blue-700 font-semibold mb-8 hover:text-blue-900 transition"
        >
          <X size={20} />
          Back to Guide
        </button>

        {/* Hero Header Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-10 shadow-lg">
          <h1 className="text-5xl font-bold mb-4">{memoryCareContent.title}</h1>
          <div className="flex gap-4 text-blue-100 flex-wrap text-sm">
            <span className="bg-blue-500/50 px-3 py-1 rounded-full">By {memoryCareContent.author}</span>
            <span className="bg-blue-500/50 px-3 py-1 rounded-full">Reviewed by {memoryCareContent.medicalReviewer}</span>
            <span className="bg-blue-500/50 px-3 py-1 rounded-full">Updated {memoryCareContent.lastUpdated}</span>
          </div>
        </div>

        {/* Intro Section */}
        <div className="mb-12 bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg text-gray-800 leading-relaxed text-lg italic">
          "{memoryCareContent.intro}"
        </div>

        {/* Key takeaways */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 mb-12 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-lg">
              <span className="text-xl font-bold">✓</span>
            </div>
            <h2 className="text-2xl font-bold text-blue-900">Key Points About Memory Care</h2>
          </div>
          <ul className="space-y-4">
            {memoryCareContent.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex gap-4 bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <span className="text-blue-600 font-bold text-lg flex-shrink-0">{idx + 1}</span>
                <span className="text-gray-700 leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        {memoryCareContent.sections.map((section, idx) => (
          <div key={idx} className="mb-14">
            {/* Section Title with number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                {idx + 1}
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
            </div>

            {section.content && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg mb-6 border border-gray-200">
                <p className="text-gray-800 leading-relaxed">{section.content}</p>
              </div>
            )}

            {section.subsections && (
              <div className="space-y-4">
                {section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx} className="bg-white border-2 border-gray-200 hover:border-teal-400 rounded-xl p-6 transition shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 text-teal-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        {String.fromCharCode(97 + (subIdx % 26))}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">{subsection.subtitle}</h3>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-base">
                          {subsection.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Takeaway */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex gap-4 items-start">
            <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3 text-xl">Bottom Line</h3>
              <p className="text-teal-50 leading-relaxed text-lg">{memoryCareContent.takeaway}</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 mb-12 border-2 border-indigo-300 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-600 text-white p-3 rounded-lg">
              <span className="text-xl">📚</span>
            </div>
            <h3 className="font-bold text-indigo-900 text-2xl">Helpful Resources</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "The Alzheimer's Association", url: "#" },
              { name: "Senior Care Facilities", url: "#" },
              { name: "Memory Care Communities", url: "#" },
              { name: "State Health Services", url: "#" }
            ].map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                className="bg-white p-4 rounded-lg border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-md transition text-indigo-700 font-semibold"
              >
                → {resource.name}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 text-sm text-gray-700">
          <p className="font-semibold text-yellow-900 mb-2">⚠️ Medical Disclaimer</p>
          <p>
            This content is for informational purposes only and does not replace
            professional medical advice. Consult with a healthcare provider for diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
}






function NursingHomeDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-8">
        <button onClick={onClose} className="flex items-center gap-2 text-green-700 font-semibold mb-8 hover:text-green-900 transition">
          <X size={20} />
          Back to Guide
        </button>

        <div className="mb-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-10 shadow-lg">
          <h1 className="text-5xl font-bold mb-4">{nursingHomeContent.title}</h1>
          <div className="flex gap-4 text-green-100 flex-wrap text-sm">
            <span className="bg-green-500/50 px-3 py-1 rounded-full">By {nursingHomeContent.author}</span>
            <span className="bg-green-500/50 px-3 py-1 rounded-full">Reviewed by {nursingHomeContent.medicalReviewer}</span>
            <span className="bg-green-500/50 px-3 py-1 rounded-full">Updated {nursingHomeContent.lastUpdated}</span>
          </div>
        </div>

        <div className="mb-12 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg text-gray-800 leading-relaxed text-lg italic">
          "{nursingHomeContent.intro}"
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-8 mb-12 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-600 text-white p-3 rounded-lg"><span className="text-xl font-bold"></span></div>
            <h2 className="text-2xl font-bold text-green-900">Key Points</h2>
          </div>
          <ul className="space-y-4">
            {nursingHomeContent.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex gap-4 bg-white rounded-lg p-4 border-l-4 border-green-500">
                <span className="text-green-600 font-bold text-lg flex-shrink-0">{idx + 1}</span>
                <span className="text-gray-700 leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {nursingHomeContent.sections.map((section, idx) => (
          <div key={idx} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">{idx + 1}</div>
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
            </div>
            {section.content && <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg mb-6 border border-gray-200"><p className="text-gray-800 leading-relaxed">{section.content}</p></div>}
            {section.subsections && (
              <div className="space-y-4">
                {section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx} className="bg-white border-2 border-gray-200 hover:border-emerald-400 rounded-xl p-6 transition shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 text-emerald-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">{String.fromCharCode(97 + (subIdx % 26))}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-3 text-lg">{subsection.subtitle}</h3>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-base">{subsection.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex gap-4 items-start">
            <div className="bg-white/20 p-3 rounded-lg flex-shrink-0"><span className="text-2xl"></span></div>
            <div>
              <h3 className="font-bold text-white mb-3 text-xl">Takeaway</h3>
              <p className="text-green-50 leading-relaxed text-lg">{nursingHomeContent.takeaway}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 mb-12 border-2 border-teal-300 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-teal-600 text-white p-3 rounded-lg"><span className="text-xl"></span></div>
            <h3 className="font-bold text-teal-900 text-2xl">Additional Resources</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[ { name: "Medicare Nursing Home Compare", url: "#" }, { name: "State Health Department Resources", url: "#" }, { name: "Alzheimers Association Facility Finder", url: "#" }, { name: "Nursing Home Quality Standards", url: "#" } ].map((resource, idx) => (
              <a key={idx} href={resource.url} className="bg-white p-4 rounded-lg border-2 border-teal-200 hover:border-teal-500 hover:shadow-md transition text-teal-700 font-semibold">
                 {resource.name}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 text-sm text-gray-700">
          <p className="font-semibold text-yellow-900 mb-2"> Medical Disclaimer</p>
          <p>This content is for informational purposes only and does not replace professional medical advice. Consult with a healthcare provider for diagnosis and treatment.</p>
        </div>
      </div>
    </div>
  );
}
