import StaticPage from "@/components/layout/StaticPage";

const EditorialPolicy = () => {
  return (
    <StaticPage 
      title="Editorial Policy" 
      description="How we create, review, and maintain our content."
      lastUpdated="January 15, 2026"
    >
      <p>
        Our editorial process is designed to ensure accuracy, relevance, and clarity. We follow a strict 
        multi-step creation and review process for every piece of content on our site.
      </p>
      <h2>1. Topic Selection</h2>
      <p>
        We select topics based on public health relevance, emerging research, and the needs of our community.
      </p>
      <h2>2. Evidence-Based Writing</h2>
      <p>
        Our writers use only high-quality sources, including peer-reviewed journals, government health agencies, 
        and academic institutions.
      </p>
      <h2>3. Medical Review</h2>
      <p>
        Before publication, medical content is reviewed by a qualified healthcare professional from our 
        Medical Review Board to ensure clinical accuracy.
      </p>
      <h2>4. Regular Updates</h2>
      <p>
        Medical knowledge evolves. We regularly audit our content to ensure it remains current with the 
        latest standards of care.
      </p>
    </StaticPage>
  );
};

export default EditorialPolicy;
