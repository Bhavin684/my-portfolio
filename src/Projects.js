import React, { useState } from 'react';

function Projects() {
  const [showMore, setShowMore] = useState({ journal: false, portfolio: false });

  const toggleReadMore = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="projects">
      <h2>Projects 💻</h2>

      <div className="project-grid">

        {/* Journal Creation Project */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <a
              href="https://bhavin684.github.io/journal_creation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/journal_project.png"
                alt="Journal Creation App"
                className="project-image"
              />
            </a>
          </div>
          <h4>Journal Creation App</h4>
          <p>
            A simple journal web app that allows users to create, view, and store daily thoughts and entries.
            {showMore.journal && (
              <>
                <br />
                Built using HTML, CSS, and JavaScript. This project demonstrates local storage functionality, clean user experience, and mobile responsiveness — great for journaling enthusiasts.
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleReadMore('journal')}>
            {showMore.journal ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Personal Portfolio Project */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <a
              href="https://bhavin684.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/portfolio_project.png"
                alt="Personal Portfolio"
                className="project-image"
              />
            </a>
          </div>
          <h4>Personal Portfolio</h4>
          <p>
            My personal developer portfolio showcasing skills, projects, and experience.
            {showMore.portfolio && (
              <>
                <br />
                Designed with React and custom CSS, this portfolio emphasizes smooth UI, responsive layout, and clarity of information. It reflects my passion for frontend development and includes real-world project links and an interactive interface.
              </>
            )}
          </p>
          <button className="read-more-btn" onClick={() => toggleReadMore('portfolio')}>
            {showMore.portfolio ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
