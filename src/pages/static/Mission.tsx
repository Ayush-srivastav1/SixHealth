import StaticPage from "@/components/layout/StaticPage";

const Mission = () => {
  return (
    <StaticPage 
      title="Our Mission" 
      description="To make the world healthier, one person at a time."
    >
      <p>
        At DoctorSix, our mission is simple: to provide high-quality, accessible health information that empowers 
        individuals to take control of their well-being.
      </p>
      <h2>Bridging the Gap</h2>
      <p>
        We strive to bridge the gap between complex medical research and daily life. We believe that understanding 
        your health should not require a medical degree.
      </p>
      <h2>Commitment to Quality</h2>
      <p>
        We are committed to the highest standards of editorial integrity. Our content is continuously updated 
        to reflect the latest medical guidelines and research findings.
      </p>
    </StaticPage>
  );
};

export default Mission;
