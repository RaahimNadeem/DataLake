"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';



const InfiniteSlideshow = () => {

  const slides = [
    '/LandingPage/Slide1.jpg',
    '/LandingPage/Slide2.jpg',
    '/LandingPage/Slide3.jpg',
    '/LandingPage/Slide4.jpg',
    '/LandingPage/Slide5.jpg',
  ];

  return (
    <section className="w-full overflow-hidden pb-24 md:pt-0" dir='ltr'>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of images */}
            {slides.map((slide, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-64 h-48 md:w-80 md:h-64 lg:w-96 lg:h-80 xl:w-[500px] xl:h-[400px] mx-3 md:mx-4 lg:mx-6 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1} - First Set`}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={index < 2}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {slides.map((slide, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-64 h-48 md:w-80 md:h-64 lg:w-96 lg:h-80 xl:w-[500px] xl:h-[400px] mx-3 md:mx-4 lg:mx-6 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1} - Second Set`}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteSlideshow; 