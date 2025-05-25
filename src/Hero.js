import React, { useState } from 'react';
import planeIcon from './assets/logo3.webp'; // Make sure this file exists in src/assets/

function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="hero">
      <h2>Bhavin Sharma | Frontend Developer | UI/UX Designer</h2>

      <div className="badge">💡 Product Enthusiast | Web | Data | Design</div>

      <img
        src={planeIcon}
        alt="Bhavin Sharma"
        className="hero-img"
      />

      <h3>Hey there! 👋<br />I'm Bhavin Sharma</h3>
      <p className="email">📧 bhavinsharma684@gmail.com</p>

      <p className="links">
        🔗 <a href="https://linkedin.com/in/bhavinsharma11" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        📄 <a href="/assets/Bhavin_Sharma_Resume.pdf" download target="_blank" rel="noopener noreferrer">Download Resume</a>
      </p>

      <div className="hero-buttons">
        <button className="contact-btn" onClick={() => setShowContact(!showContact)}>
          📞 Contact Me
        </button>
        <a href="mailto:bhavinsharma684@gmail.com" className="hire-btn">
          💼 Hire Me
        </a>
      </div>

      {showContact && (
        <div className="contact-info">
          <p>📧 Email: bhavinsharma3011@gmail.com</p>
          <p>📱 Phone: +91-6377385333</p>
          <p>📍 Location: Jaipur, India</p>
        </div>
      )}
    </section>
  );
}

export default Hero;
