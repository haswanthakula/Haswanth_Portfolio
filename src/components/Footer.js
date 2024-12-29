import React from 'react';
import './Footer.css';

const Footer = () => (
  <section className="footer">
    <div className="box-container">
      <div className="box">
        <h3>Haswanth's Portfolio</h3>
        <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
      </div>

      <div className="box">
        <h3>quick links</h3>
        <a href="#Home"><i className="fas fa-chevron-circle-right"></i> Home</a>
        <a href="#About"><i className="fas fa-chevron-circle-right"></i> About</a>
        <a href="#Education"><i className="fas fa-chevron-circle-right"></i> Education</a>
        <a href="#Experience"><i className="fas fa-chevron-circle-right"></i> Experience</a>
        <a href="#Projects"><i className="fas fa-chevron-circle-right"></i> Projects</a>
        <a href="#Certifications"><i className="fas fa-chevron-circle-right"></i> Certifications</a>
        <a href="#Contact"><i className="fas fa-chevron-circle-right"></i> Contact</a>
      </div>

      <div className="box">
        <h3>contact info</h3>
        <p><i className="fas fa-phone"></i> +91 7207009566</p>
        <p><i className="fas fa-envelope"></i> haswanthakula5@gmail.com</p>
        <p><i className="fas fa-map-marked-alt"></i> Madhapur, Hyderabad, India - 500038</p>
        <div className="share">
          <a href="https://www.linkedin.com/in/haswanthakula/" className="bi bi-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://github.com/haswanthakula" className="bi bi-github" aria-label="GitHub" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://wa.me/917207009566" className="bi bi-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
