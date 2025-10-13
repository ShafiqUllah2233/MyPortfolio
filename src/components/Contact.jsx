import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const languages = [
    { name: "English", level: "B2+" },
    { name: "Urdu", level: "B2+" },
    { name: "Pashto", level: "native" }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">CONTACT & LANGUAGES</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>shafiqullahkhan033@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <span>03471321033</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="contact-item">
              <FaGlobe className="icon" />
              <span>portafolio.com</span>
            </div>
            <div className="contact-item">
              <FaGithub className="icon" />
              <span>GitHub Profile</span>
            </div>
            <div className="contact-item">
              <FaLinkedin className="icon" />
              <span>LinkedIn Profile</span>
            </div>
          </div>
          
          <div className="languages">
            <h3>Languages:</h3>
            <div className="languages-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">- {lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
