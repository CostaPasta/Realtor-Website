import React from 'react';
import BackHeader from './BackHeader';
import '../components-css/Contact.css'
import DadImageTransparent from '../images/dadtransparent.png';

function Contact() {
  return (
    <div className="contact-container">
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
