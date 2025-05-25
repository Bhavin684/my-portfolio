import React from 'react';
import plaineIcon from './assets/logo3.webp'; // ✅ Correct relative path from src/

function Footer() {
  return (
    <footer className="footer">
      <img src={plaineIcon} alt="Bhavin Sharma" className="footer-img" />
      <p className="footer-message">🚀 Let’s build cool stuff together!</p>

      <div className="footer-social">
        <a href="https://github.com/Bhavin684" target="_blank" rel="noopener noreferrer">
          🐙 GitHub
        </a>
        <a href="https://linkedin.com/in/bhavinsharma11" target="_blank" rel="noopener noreferrer">
          💼 LinkedIn
        </a>
        <a href="mailto:bhavinsharma684@gmail.com">
          📧 Email
        </a>
        <a href="/assets/Bhavin_Sharma_Resume.pdf" target="_blank" rel="noopener noreferrer">
          📄 Resume
        </a>
      </div>

      <p className="fun-quote">“🎨 Design meets logic — that’s where I live.”</p>
    </footer>
  );
}

export default Footer;
