import React from 'react';
// In index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Achievements.css'; // Assuming you still have the CSS in a separate file

const Achievements = () => {
  return (
    <div id="Achievements">
      <h1>🏆 Achievements</h1>
      <div className="achievements-container">
        {/* Achievement 1 */}
        <div className="achievement-item boxing" style={{ animationDelay: '0.2s' }}>
          <div className="achievement-icon">
            <i className="fas fa-medal"></i>
          </div>
          <div className="achievement-content">
            <h3>Hackathon Web Development</h3>
            <p className="category">Teks Academy</p>
            <div className="medal-badge gold">
              <i className="fas fa-crown"></i>
              Bronze Medal
            </div>
          </div>
          <div className="achievement-glow"></div>
        </div>

        {/* Achievement 2 */}
        <div className="achievement-item cricket" style={{ animationDelay: '0.4s' }}>
          <div className="achievement-icon">
            <i className="fas fa-certificate"></i>
          </div>
          <div className="achievement-content">
            <h3>Programmers' Day Event</h3>
            <p className="category">Programmers' Day by Technical Hub</p>
            <div className="medal-badge silver">
              <i className="fas fa-crown"></i>
              Received Certificate of Active Participation for engaging in activities and coding events (Year).
            </div>
          </div>
          <div className="achievement-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
