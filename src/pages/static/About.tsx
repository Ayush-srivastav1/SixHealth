import StaticPage from "@/components/layout/StaticPage";

const About = () => {
  return (
    <StaticPage 
      title="About DoctorSix" 
      description="Empowering you with trusted, evidence-based health information."
    >
      <p>
        DoctorSix is your dedicated partner in wellness, offering comprehensive, medically-reviewed information
        to help you make informed decisions about your health.
      </p>
      <h2>Who We Are</h2>
      <p>
        We are a team of medical professionals, health writers, and patient advocates committed to 
        demystifying healthcare. In a world of misinformation, DoctorSix stands as a beacon of trust, 
        accuracy, and empathy.
      </p>
      <h2>What We Do</h2>
      <p>
        From detailed condition guides to daily wellness tips, we cover the full spectrum of health. 
        Our content is rigorous yet accessible, ensuring that complex medical topics are easy to understand.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Accuracy:</strong> Every article is vetted by medical experts.</li>
        <li><strong>Empathy:</strong> We understand that health journeys are personal.</li>
        <li><strong>Inclusivity:</strong> Health is for everyone, regardless of background or identity.</li>
      </ul>
    </StaticPage>
  );
};

export default About;
