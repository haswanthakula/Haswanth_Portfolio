// Projects.js
import React from 'react';
import './Projects.css'; // Importing the CSS for the projects section
import frontend from '../assets/fro.webp';
import market from '../assets/mar.webp';
import awspro from '../assets/aws.webp';
import reac from '../assets/rea.png';

const ProjectCard = ({ imgSrc, title, description }) => (
  <div className="project-card" id="Projects">
    <img src={imgSrc} alt={title} className="project-image" />
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href="" className="project-button">View Project</a> {/* View Project Button */}
    </div>
  </div>
);

const Projects = () => (
  <section className="projects-section" id="projects-section">
    <div className="container">
      <h2 className="section-title">
        <span><i className="fas fa-laptop-code"></i> P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span>
      </h2>
      <div className="projects-grid">
        <ProjectCard
          imgSrc={frontend}
          title="Front-End Development Projects: HTML, CSS, JS"
          description="Developed a responsive calculator application, a two-player Tic Tac Toe game with reset functionality, and an interactive to-do list app for managing tasks."
        
        />

        <ProjectCard
          imgSrc={market}
          title="Market Basket Analysis Using Deep Learning Techniques"
          description="Predicted next-item purchases with 85% accuracy using a CNN-LSTM model, revealing customer behavior patterns, Using Apriori and FP-Growth algorithms."
        />
        <ProjectCard
          imgSrc={awspro}
          title="AWS Project: EC2, RDS, S3, VPC"
          description="The project involved using services like EC2 instances, VPC, RDS, AutoScallingGroups, and Load Balancers to connect to a MySQL Server."
        />
        <ProjectCard
          imgSrc={reac}
          title="React Project"
          description="Developed a dynamic food ordering application using React.js, leveraging the Context API for efficient global state management and fetching data from a backend REST API."
        />
      </div>
    </div>
  </section>
);

export default Projects;
