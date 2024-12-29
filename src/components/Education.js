import React from 'react';
import './Education.css'; // Assuming you keep the CSS in a separate file

const Education = () => {
  return (
    <div id="Education">
      <h1 className="heading">
        <span>🎓Education</span>
      </h1>
      <div className="line">
        <div className="item">
          <div className="icon">🎓</div>
          <div className="content1">
            <div className="degree">B.Tech</div>
            <div className="school">Aditya College of Engineering & Technology, Surampalem, AP</div>
            <div className="cgpa">7.59</div>&nbsp;
            <div className="year">2020 - 2024</div>
          </div>
        </div>

        <div className="item">
          <div className="icon">🏫</div>
          <div className="content1">
            <div className="degree">Intermediate</div>
            <div className="school">Tirumala Junior Kalasala, Katheru, Rajamahendravaram, AP</div>
            <div className="cgpa">9.44</div>&nbsp;
            <div className="year">2018 - 2020</div>
          </div>
        </div>

        <div className="item">
          <div className="icon">📚</div>
          <div className="content1">
            <div className="degree">School</div>
            <div className="school">Tirumala Proactive (EM) High School, Katheru, Rajamahendravaram, AP</div>
            <div className="cgpa">10.0</div>&nbsp;
            <div className="year">2017 - 2018</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
