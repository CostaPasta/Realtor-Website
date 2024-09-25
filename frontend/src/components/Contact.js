import React from 'react';
import '../components-css/Contact.css'
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div className="contact-container" id='contactC'>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Jose Costa",
              "description": "Contact page for real estate agent Jose Costa. Get in touch to buy or sell properties in South Florida.",
              "mainEntity": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+1-954-614-1351",
                "email": "mailto:USARealtor1@gmail.com",
                "areaServed": "US",
                "availableLanguage": ["English", "Spanish", "Portuguese"]
              }
            }
          `}
        </script>
      </Helmet>
      <h1 className="title-container">CONTACT</h1>
      <div id="MBBv3_LcForm" filter="mbbagent:19099+backgroundpanel:44,62,80,1+labelcolor:ffffffff+textcolor:ffffffff+formname:Contact+form:contactme"></div>
        {/* <h1 className="title-container">CONTACT</h1>
        <div className="profile-image">
            <img src={DadImageTransparent} alt="Jose Costa" />
        </div> */}
    </div>
  );
}

export default Contact;
