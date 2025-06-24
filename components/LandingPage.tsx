"use client";

import React from 'react';
import Header from './ui/Header';
import Hero from './ui/Hero';
import Slogan from './ui/Slogan';
import AboutUsLanding from './AboutUsLanding';
import WhyUs from './WhyUs';
import ServicesLanding from './ServicesLanding';
import Projects from './Projects';
import CardsParallax from './CardsParallax/CardsParallax';
import Locations from './Locations';
import InfiniteSlideshow from './ui/InfiniteSlideshow';
import Footer from './ui/footer';
import LocationsAlt from './LocationsAlt';
import ClientLogosMarquee from './ClientLogosMarquee';

const LandingPage = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <AboutUsLanding />
      {/* <InfiniteSlideshow /> */}
      {/* <WhyUs /> */}
      <ServicesLanding />
        {/* <Locations /> */}
      <LocationsAlt />
      <ClientLogosMarquee />

      <Footer />
    </main>
  );
};

export default LandingPage; 