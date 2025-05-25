import React from 'react';

function Experience() {
  return (
    <section className="experience">
      <h2>Experience 👨‍💻</h2>

      {/* AU Ignite Experience */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>Full Stack Developer Trainee</h3>
          <a href="https://auignite.in" target="_blank" rel="noopener noreferrer">AU Ignite</a>
        </div>
        <span className="duration">🗓️ Sep 2024 – Nov 2024</span>
        <p>
          • Completed 3-month full stack training with React.js and backend fundamentals<br />
          • Built interactive full stack projects with responsive UI and API integration<br />
          • Worked on collaborative projects using Git and GitHub<br />
          • Strengthened practical skills in modern web development
        </p>
        <div className="memory-photo">
          <h4>📸 Memory Moment</h4>
          <img
            src="/assets/Experience_AU_Ignite.jpg"
            alt="AU Ignite Team Photo"
            className="memory-img"
          />
          <p className="memory-caption">
            Group photo with the amazing full stack batch at AU Ignite — a truly unforgettable journey! 💜
          </p>
        </div>
      </div>

      {/* Apptech Infosoft Experience */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>Web Operations Intern (SEO Executive)</h3>
          <a href="https://apptechinfosoft.com" target="_blank" rel="noopener noreferrer">Apptech Infosoft Pvt. Ltd.</a>
        </div>
        <span className="duration">🗓️ Jan 2025 – Jun 2025</span>
        <p>
          • Handled website updates, layout changes, and performance tweaks<br />
          • Collaborated with developers for UI fixes and content updates<br />
          • Enhanced site responsiveness and accessibility<br />
          • Learned practical aspects of frontend operations in a live environment
        </p>
        <div className="memory-photo">
          <h4>📸 Memory Moment</h4>
          <img
            src="/assets/apptech-memory.png"
            alt="Apptech Digital Marketing Visual"
            className="memory-img"
          />
          <p className="memory-caption">
            My contribution to the creative and fast-paced digital marketing environment at Apptech! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
