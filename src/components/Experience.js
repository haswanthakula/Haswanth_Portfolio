import React from 'react';
import './Experience.css'; // Import your CSS for Experience

const Experience = () => {
  return (
    <div id="Experience">
      <h1>💼 Experience</h1>
      <div className="experience-container">
        {/* Experience Item 1: Java */}
        <div className="experience-item">
          <div className="exp-icon">
            <i className="bi bi-code-slash"></i> {/* Java Icon */}
          </div>
          <div className="exp-content">
            <div className="role">Java Full Stack Developer Intern</div>
            <div className="location-duration">
              <div className="location">Ennea Solutions Company, Jubilee Hills, Hyderabad</div>
              <div className="duration">Nov 2024 - Present</div>
            </div>
            <div className="description">
              Contributing as an intern to developing responsive web interfaces using HTML, CSS, and JavaScript while building and deploying interactive web applications. Currently learning and working on back-end technologies like Java, Spring, Hibernate, and relational databases.
            </div>
          </div>
        </div>

        {/* Experience Item 2: AWS */}
        <div className="experience-item">
          <div className="exp-icon">
            <i className="bi bi-cloud"></i> {/* AWS Cloud Icon */}
          </div>
          <div className="exp-content">
            <div className="role">AWS Cloud Intern</div>
            <div className="location-duration">
              <div className="location">F13 Technologies, Remote</div>
              <div className="duration">May 2023 – Aug 2023</div>
            </div>
            <div className="description">
              Worked as an intern to develop and deploy a machine learning-powered movie recommendation system using Amazon Personalize. Gained experience in configuring EC2 instances, VPCs, subnets, and load balancers while collaborating with and guiding a team of four interns.
            </div>
          </div>
        </div>

        {/* Experience Item 3: DevOps */}
        <div className="experience-item">
          <div className="exp-icon">
            <i className="bi bi-tools"></i> {/* DevOps Tools Icon */}
          </div>
          <div className="exp-content">
            <div className="role">AWS & DevOps Trainee</div>
            <div className="location-duration">
              <div className="location">Technical Hub, Surampalem</div>
              <div className="duration">Jul 2022 – Nov 2022</div>
            </div>
            <div className="description">
              Gained hands-on experience with AWS services like EC2, S3, and RDS, and deployed containerized applications using Docker and Kubernetes. Proficient in Git and source code management while monitoring deployments with CloudWatch.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
