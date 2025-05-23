import React, { useEffect, useState } from 'react';

const images = ['/AI/AI-1.jpg', '/AI/AI-2.jpg', '/AI/AI-3.jpg'];
const SLIDE_DURATION = 4000;

const AIHero = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), SLIDE_DURATION - 600);
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOut);
    };
  }, [current]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-8 md:p-16 rounded-3xl">
      {/* Slideshow Background */}
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="AI background"
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${idx === current && fade ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionProperty: 'opacity' }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-5xl w-full flex flex-col justify-center items-start">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6" style={{fontFamily: 'inherit'}}>
          AI Solutions<br />
          for Data-Driven Success
        </h1>
        <p className="text-white text-base md:text-lg max-w-lg mt-4 opacity-90">
          Unlock the power of artificial intelligence with Datalake. We design, build, and deploy custom AI models and analytics platforms to help your business automate, predict, and grow with confidence.
        </p>
      </div>
    </section>
  );
};

export default AIHero; 