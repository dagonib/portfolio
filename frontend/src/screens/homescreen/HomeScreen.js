import React from 'react';

// Sections
import Home from './sections/HomeSection';
import About from './sections/AboutSection';
import Skills from './sections/skills/SkillsSection';
import Services from './sections/ServicesSection';
import Qualification from './sections/QualificationSection';
import Testimonial from './sections/testimonials/TestimonialSection';
import Contact from './sections/ContactSection';

const HomeScreen = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Skills />
      <Qualification />
      <Testimonial />
      <Contact />
    </>
  );
};

export default HomeScreen;
