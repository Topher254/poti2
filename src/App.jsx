import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Technologies from './Components/Technologies';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      
      <div id="technologies">
        <Technologies />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
