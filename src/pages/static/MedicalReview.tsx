import StaticPage from "@/components/layout/StaticPage";

const MedicalReview = () => {
  return (
    <StaticPage 
      title="Medical Review Board" 
      description="Meet the experts who ensure our content is accurate and safe."
    >
      <p>
        The SixHealth Medical Review Board consists of board-certified physicians, nurses, dietitians, 
        and mental health professionals. They rigorously vet our content to ensure it meets the highest 
        standards of medical accuracy.
      </p>
      <h2>Our Reviewers</h2>
      <p>
        Our reviewers bring decades of clinical experience from top medical institutions. Their expertise 
        covers a wide range of specialties, including cardiology, oncology, psychology, and nutrition.
      </p>
      <p>
        <em>Full list of reviewers coming soon.</em>
      </p>
    </StaticPage>
  );
};

export default MedicalReview;
