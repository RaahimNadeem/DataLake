'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import RevealAnimation from '../../components/ui/RevealAnimation';

const images = ['/services/Data.jpg', '/services/Data.jpg', '/services/Data.jpg'];
const SLIDE_DURATION = 4000;

const DataHero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [current]);

  const handleIndicatorClick = (index: number) => {
    if (index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 500);
  };

  const handleImageError = (src: string) => {
    console.error(`Failed to load image: ${src}`);
    setImageError(prev => ({...prev, [src]: true}));
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden flex items-center font-sans">
        {/* Slideshow Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          {images.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
                idx === current ? 'translate-x-0' : 
                idx < current ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {!imageError[src] ? (
                <Image
                  src={src}
                  alt="Data analytics background"
                  fill
                  priority={idx === 0}
                  quality={90}
                  className="object-cover"
                  onError={() => handleImageError(src)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-white">Failed to load image</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />
        
        {/* Content */}
        <div className="relative z-20 flex flex-col items-start justify-center h-full pl-4 pr-4 md:pl-24 md:pr-0 max-w-full md:max-w-4xl w-full">
          <RevealAnimation direction="up" delay={0.2}>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6">
              Data-Driven Intelligence<br />
              Unlock Your Data Potential
            </h1>
          </RevealAnimation>
          
          <RevealAnimation direction="up" delay={0.4}>
            <p className="text-white text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-full">
              Transform raw data into actionable insights. Make strategic decisions based on facts, not assumptions. We help you harness the power of your data to drive business growth and competitive advantage.
            </p>
          </RevealAnimation>
          
          <RevealAnimation direction="up" delay={0.6}>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition border border-white"
            >
              Let's Talk
              <span className="ml-2">→</span>
            </a>
          </RevealAnimation>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleIndicatorClick(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DataHero; 