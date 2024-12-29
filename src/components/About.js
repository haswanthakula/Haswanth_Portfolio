import React, { useEffect } from 'react';
import './About.css';

// Correcting the import paths
import awsLogo from '../assets/aws logo';
import devopsLogo from '../assets/devops logo';
import sqlLogo from '../assets/logo.svg';
import pythonLogo from '../assets/python logo';
import javaLogo from '../assets/java.png';
import fullStackLogo from '../assets/f3.png';
import profileImage from '../assets/h.jpeg';
import resume from '../assets/Haswanth_Akula.pdf';

const About = () => {
  useEffect(() => {
    const aboutSection = document.querySelector('.about');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        aboutSection.classList.add('animate');
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about" id="About">
      <br /><br />
      <h2 className="heading1">About <span>Me</span></h2>
      <div className="row">
        <div className="image">
          <img draggable="false" className="tilt" src={profileImage} alt="Haswanth" />
        </div>
        <div className="content">
          <h3>I'm Haswanth</h3>
          <span className="tag">Java Full-Stack Intern</span>

          <p>
            Hi, I’m Haswanth, a 2024 B.Tech IT graduate with experience as an AWS Cloud Intern, gaining expertise in services like EC2 and VPC.
            Currently, I’m enhancing my skills in Java Full Stack development at Ennea Solutions Private Limited, focusing on frontend (HTML, CSS, JavaScript) and backend technologies. I’m also skilled in Python, SQL, and DevOps tools like Git, Docker, Kubernetes, and Jenkins, with a passion for creating scalable, efficient solutions and continuous learning in technology.
          </p>

          <div className="box-container">
            <div className="box">
              <p><span>email : </span> haswanthakula5@gmail.com</p>
              <p><span>phone : </span> +91 7207009566</p>
              <p><span>place : </span> Madhapur, Hyderabad, India - 500038</p>
            </div>
          </div>

          <h3 className="skill_head">My Skills</h3>
          <div id="skills">
            <div className="sk1">
              <img src={awsLogo} width="50" alt="AWS" />
              <figcaption>&nbsp;<b>AWS</b></figcaption>
            </div>
            <div className="sk2">
              <img src={devopsLogo} width="55" height="50" alt="DevOps" />
              <figcaption><b>DevOps</b></figcaption>
            </div>
            <div className="sk3">
              <img src={sqlLogo} width="45" alt="SQL" />
              <figcaption><b>&nbsp;&nbsp;SQL</b></figcaption>
            </div>
            <div className="sk4">
              <img src={pythonLogo} width="50" alt="Python" />
              <figcaption><b>Python</b></figcaption>
            </div>
            <div className="sk6">
              <img src={javaLogo} width="44" alt="Java" />
              <figcaption><b>&nbsp;&nbsp;Java</b></figcaption>
            </div>
            <div className="sk5">
              <img src={fullStackLogo} width="45" alt="Full-Stack" />
              <figcaption><b>Full-Stack</b></figcaption>
            </div>
          </div>

          <div className="resumebtn">
            <a href={resume} target="_blank" className="btn">
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
