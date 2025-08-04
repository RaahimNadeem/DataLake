"use client";

import React from 'react';
import Header from '../ui/Header';
import Hero from './Hero';
import AboutUsLanding from './AboutUsLanding';
import ServicesLanding from './ServicesLanding';
import ProjectsLanding from './ProjectsLanding';
import Footer from '../ui/footer';
import LocationsAlt from '../LocationsAlt';
import ClientLogosMarquee from '../ClientLogosMarquee';

const LandingPage = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <AboutUsLanding />
      <ServicesLanding />
      <LocationsAlt />
      <ClientLogosMarquee />
      <ProjectsLanding />

      <Footer />
    </main>
  );
};

export default LandingPage; 