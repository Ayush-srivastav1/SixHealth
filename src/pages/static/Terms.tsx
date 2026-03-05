import StaticPage from "@/components/layout/StaticPage";

const Terms = () => {
  return (
    <StaticPage 
      title="Terms of Service" 
      description="Please read these terms carefully before using our site."
      lastUpdated="January 1, 2026"
    >
      <p>
        By accessing or using DoctorSix, you agree to be bound by these Terms of Service. If you do not 
        agree to these terms, please do not use our website.
      </p>
      <h2>Use of Content</h2>
      <p>
        All content on DoctorSix is for informational purposes only. It is not intended to be a substitute 
        for professional medical advice, diagnosis, or treatment.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        The content, design, and graphics on this site are owned by DoctorSix and are protected by 
        copyright laws. You may not reproduce or distribute any content without our prior written permission.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        DoctorSix is not liable for any damages arising from your use of this site or reliance on any 
        information provided herein.
      </p>
    </StaticPage>
  );
};

export default Terms;
