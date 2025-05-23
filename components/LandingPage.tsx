"use client";

import React from 'react';
import Header from './ui/Header';
import Hero from './ui/Hero';
import Slogan from './Slogan';
import AboutUsLanding from './AboutUsLanding';
import WhyUs from './WhyUs';
import ServicesLanding from './ServicesLanding';
import Locations from './Locations';
import Footer from './footer';

const LandingPage = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <AboutUsLanding />
      <WhyUs />
      <ServicesLanding />
      <Locations />
      <Footer />
    </main>
  );
};

export default LandingPage; 