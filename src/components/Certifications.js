// Certifications.js
import React from 'react';
import './Certifications.css'; // Importing the CSS for the certifications section
import a from '../assets/awsc.jpg';
import p from '../assets/pyc.png';
import j from '../assets/jac.jpg';
import l from '../assets/lic.jpg';
import e from '../assets/epc.jpg';

const CertificationCard = ({ imgSrc, title, description }) => (
  <div className="certification-card">
    <div className="card-inner">
      <div className="card-front">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-back">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Certifications = () => (
  <section id="Certifications" className="Certifications" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
    <h1 className="section-title"><i className="fa-sharp fa-solid fa-file-certificate"></i> Certifications</h1>
    <div className="certifications-container">
      <CertificationCard
        imgSrc={a}
        title="AWS Academy Cloud Foundations"
        description="Learned core AWS cloud concepts, services, and best practices, preparing for roles in cloud operations and solutions architecture."
      />
      <CertificationCard
        imgSrc={p}
        title="MTA Introduction to Programming Using Python"
        description="Mastered the basics of Python programming, including syntax, problem-solving, and algorithm design, to build beginner-level software applications."
      />
      <CertificationCard
        imgSrc={j}
        title="Oracle Java Certificate"
        description="Acquired in-depth knowledge of Java programming, covering object-oriented concepts, data structures, and application development for real-world scenarios."
      /> 
      <CertificationCard
        imgSrc={l}
        title="NDG Linux-certificate"
        description="Developed foundational Linux skills, including system management, shell scripting, and command-line operations, essential for IT and DevOps roles."
      />
      <CertificationCard
        imgSrc={e}
        title="Epam Systems Cloud & Devops"
        description="Gained hands-on expertise in cloud infrastructure management and DevOps practices, focusing on modern tools and methodologies to streamline software delivery."
      />
    </div>
  </section>
);

export default Certifications;
