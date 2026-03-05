import StaticPage from "@/components/layout/StaticPage";

const Contact = () => {
  return (
    <StaticPage 
      title="Contact Us" 
      description="We'd love to hear from you."
    >
      <p>
        Have a question, comment, or suggestion? Please reach out to us using the contact information below.
      </p>
      <h2>General Inquiries</h2>
      <p>
        Email: <a href="mailto:contact@doctorsix.com" className="text-primary hover:underline">contact@doctorsix.com</a>
      </p>
      <h2>Press & Media</h2>
      <p>
        Email: <a href="mailto:press@doctorsix.com" className="text-primary hover:underline">press@doctorsix.com</a>
      </p>
      <h2>Mailing Address</h2>
      <p>
        DoctorSix HQ<br />
        123 Wellness Way<br />
        Suite 400<br />
        New York, NY 10001
      </p>
    </StaticPage>
  );
};

export default Contact;
