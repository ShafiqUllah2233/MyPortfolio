import React from 'react';
import { FaGlobe, FaPhone, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <h1 className="name">SHAFIQ ULLAH KHAN</h1>
            <h2 className="title">Frontend Web Developer ~ SE</h2>
            <div className="contact-info">
              <div className="contact-item">
                <FaGlobe className="icon" />
                <span>portafolio.com</span>
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
                <FaEnvelope className="icon" />
                <span>shafiqullahkhan033@gmail.com</span>
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
          </div>
          <div className="header-right">
            <div className="profile-card">
              <div className="profile-avatar">
                <FaUser />
              </div>
              <h3 style={{color: 'white', marginBottom: '1rem'}}>Welcome to My Portfolio</h3>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1rem'}}>
                Passionate Frontend Developer with expertise in React, JavaScript, and modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
