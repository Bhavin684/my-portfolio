import React from 'react';

function About() {
  return (
    <section className="about">
      <h2>👋 About Me</h2>
      
      <p>
        I'm <strong>Bhavin Sharma</strong> — a frontend developer with a B.Tech in Computer Science and a deep passion for crafting clean, interactive, and accessible web interfaces. My strength lies in transforming ideas into user-centric digital experiences using modern frontend technologies.
      </p>

      <p>
        I started by building static sites in college and have since grown into building dynamic web apps using React.js. My approach combines a keen eye for design with logical problem-solving to ensure that every interface is not just functional, but delightful to use.
      </p>

      <p>
        🧠 <strong>What I value:</strong> Scalable UI architecture, responsive design, accessibility, clean code, and intuitive user experiences.<br />
        🔧 <strong>Tech I use daily:</strong> HTML, CSS, JavaScript, React.js, Git, GitHub, Figma, and Canva.<br />
        🎯 <strong>My goal:</strong> To contribute to frontend teams that prioritize quality, creativity, and impact.
      </p>

      <div className="fun-facts">
        <h3>🎉 Fun Facts</h3>
        <ul>
          <li>🎨 I enjoy designing UI mockups in Figma to prototype ideas before coding.</li>
          <li>🎧 I’m at my most productive when coding with cinematic soundtracks in the background.</li>
          <li>📱 I love making interfaces that feel just right — smooth animations, smart layouts, and all.</li>
        </ul>
      </div>

      <p className="cta">🚀 Let’s collaborate and bring intuitive digital products to life!</p>
    </section>
  );
}

export default About;
