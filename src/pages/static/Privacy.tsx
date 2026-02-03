import StaticPage from "@/components/layout/StaticPage";

const Privacy = () => {
  return (
    <StaticPage 
      title="Privacy Policy" 
      description="We are committed to protecting your personal information."
      lastUpdated="January 1, 2026"
    >
      <p>
        At SixHealth, we take your privacy seriously. This policy explains how we collect, use, and 
        safeguard your information when you visit our website.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect personal information such as your name and email address when you subscribe to our 
        newsletter or contact us. We also collect non-personal usage data to improve our site.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use your information to provide and improve our services, communicate with you, and comply 
        with legal obligations. We do not sell your personal data to third parties.
      </p>
      <h2>Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience. You can control cookie preferences through 
        your browser settings.
      </p>
    </StaticPage>
  );
};

export default Privacy;
