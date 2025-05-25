import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
