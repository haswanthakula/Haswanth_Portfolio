import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h2>
          Hi There,<br /> I'm Haswanth <span>Akula</span>
        </h2>

        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/haswanthakula/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/haswanthakula"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a
                className="whatsapp"
                aria-label="WhatsApp"
                href="https://wa.me/917207009566"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src={require('../assets/h.jpeg')} // Updated image path
          alt="Haswanth Akula"
        />
      </div>
    </section>
  );
};

export default Home;
