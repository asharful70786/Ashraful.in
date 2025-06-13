import React from 'react';
import About from './About';
import Projects from './Projects';
import ContactUs from "./ContactUs";
import Skills from './Skills';
import Reviews from './Reviews';

function Home() {
  return (
    <div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="reviews"><Reviews /></div>
      <div id="contact"><ContactUs /></div>
    </div>
  );
}

export default Home;
