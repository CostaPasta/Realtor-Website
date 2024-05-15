import React from 'react';
import BackHeader from './BackHeader';

const TermsOfService = () => {
  const headingStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '20px',
    color: '#ecf0f1'
  };

  const subheadingStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '15px',
    color: '#ecf0f1'
  };

  const listStyle = {
    listStyleType: 'disc',
    marginLeft: '20px',
    color: '#ecf0f1'
  };

  const paragraphStyle = {
    color: '#ecf0f1'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    backgroundColor: '#2c3e50', // A darker background for contrast
    borderRadius: '8px',
    padding: '30px'
  };

  const handleBackButtonClick = () => {
      window.location.href = "/"; // Navigate to the home page and refresh it
  };

  return (
    <div className="TOScontainer">
      <BackHeader/>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Terms of Service for josecostarealtor.com</h1>

        <h2 style={subheadingStyle}>1. Introduction</h2>
        <p style={paragraphStyle}>Welcome to josecostarealtor.com. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions ("Terms of Service" or "Terms"). Please read these Terms carefully before using our website. If you do not agree to these Terms, please do not use our site.</p>

        <h2 style={subheadingStyle}>2. Use of the Website</h2>
        <ul style={listStyle}>
          <li>You agree to use the website only for lawful purposes.</li>
          <li>You shall not disrupt or attempt to interfere with the operation of the website or tamper with its contents.</li>
          <li>The website is provided "as is," and you acknowledge and accept that we make no warranties or guarantees about the website's accuracy or suitability.</li>
        </ul>

        <h2 style={subheadingStyle}>3. User Accounts</h2>
        <ul style={listStyle}>
          <li>Some sections of the website may require account registration.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials and all activities that occur under your account.</li>
          <li>Notify us immediately of any unauthorized use of your account.</li>
        </ul>

        <h2 style={subheadingStyle}>4. Listings and Property Information</h2>
        <ul style={listStyle}>
          <li>Property listings are provided via BeachesMLS.</li>
          <li>While we strive for accuracy, Atlantic Florida Properties and josecostarealtor.com do not guarantee the completeness, accuracy, or current status of property listings.</li>
          <li>Users should verify any details they deem important before making purchasing decisions.</li>
        </ul>

        <h2 style={subheadingStyle}>5. Third-Party Links and Content</h2>
        <ul style={listStyle}>
          <li>The website may contain links to third-party websites that are not under our control.</li>
          <li>We are not responsible for the content, policies, or practices of third-party websites.</li>
          <li>The website may also contain third-party content, including images and videos. We aim to provide proper attribution and comply with licensing requirements.</li>
          <li>If you believe your intellectual property is being used improperly, please contact us with your claim, and we will review and address the issue promptly.</li>
        </ul>

        <h2 style={subheadingStyle}>6. Privacy Policy</h2>
        <p style={paragraphStyle}>Our Privacy Policy explains how we handle user information. By using the website, you agree to the terms outlined in the Privacy Policy.</p>

        <h2 style={subheadingStyle}>7. Intellectual Property</h2>
        <ul style={listStyle}>
          <li>All content, including text, graphics, logos, and software, is the property of josecostarealtor.com or its licensors unless otherwise noted.</li>
          <li>You may not use, reproduce, or distribute any content without our prior written permission or the permission of the respective third-party owner.</li>
          <li>Third-party materials used on the website remain the property of their respective owners.</li>
        </ul>

        <h2 style={subheadingStyle}>8. Indemnification</h2>
        <p style={paragraphStyle}>You agree to indemnify and hold harmless josecostarealtor.com, Atlantic Florida Properties, and their employees from any claims, damages, or losses resulting from your use of the website.</p>

        <h2 style={subheadingStyle}>9. Limitation of Liability</h2>
        <p style={paragraphStyle}>josecostarealtor.com is not liable for any direct, indirect, incidental, or consequential damages arising from your use or inability to use the website.</p>

        <h2 style={subheadingStyle}>10. Changes to Terms</h2>
        <p style={paragraphStyle}>We may update these Terms at any time. We will post the most current version on the website. Continued use of the website after the updated Terms have been posted constitutes acceptance of the new Terms.</p>

        <h2 style={subheadingStyle}>11. Contact Information</h2>
        <p style={paragraphStyle}>For questions about these Terms of Service or other inquiries, please contact us at:</p>
        <ul style={listStyle}>
          <li>Email: [Your Email]</li>
          <li>Phone: [Your Phone Number]</li>
          <li>Address: [Your Physical Address]</li>
        </ul>
      </div>
    </div>

    
  );
};

export default TermsOfService;
