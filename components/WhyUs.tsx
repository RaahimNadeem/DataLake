"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const words = [
  "Expertise",
  "Innovation",
  "Insight",
  "Trust"
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Adjust animation trigger points to be more responsive
  const startProgress = 0.3; // Start very early
  const endProgress = 0.6;   // End earlier to ensure smooth transition
  const getWordAnimation = (index: number) => {
    const totalWords = words.length;
    const step = (endProgress - startProgress) / totalWords;
    const start = startProgress + index * step;
    const end = start + step;
    return {
      opacity: useTransform(scrollYProgress, [start, end, 1], [0, 1, 1]),
      y: useTransform(scrollYProgress, [start, end, 1], [0, 0, 0]),
      filter: useTransform(scrollYProgress, [start, end, 1], ["blur(20px)", "blur(0px)", "blur(0px)"])
    };
  };

  // Adjust parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Adjust text container position
  const textContainerStyle = {
    position: useTransform(
      scrollYProgress,
      [0, startProgress, endProgress, 1],
      ['relative', 'fixed', 'relative', 'relative']
    ),
    top: useTransform(
      scrollYProgress,
      [0, startProgress, endProgress, 1],
      ['auto', '50%', 'auto', 'auto']
    ),
    left: useTransform(
      scrollYProgress,
      [0, startProgress, endProgress, 1],
      ['auto', '50%', 'auto', 'auto']
    ),
    transform: useTransform(
      scrollYProgress,
      [0, startProgress, endProgress, 1],
      ['none', 'translate(-50%, -50%)', 'none', 'none']
    ),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[200vh] flex justify-center overflow-hidden"
    >
      {/* Background Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Parallax Background Image */}
        <motion.div
          style={{
            y,
            backgroundImage: 'url("/handshake.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            zIndex: 0
          }}
        />
      </div>
      
      {/* Content Container */}
      <motion.div 
        style={textContainerStyle}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4"
      >
        {words.map((word, idx) => {
          const animation = getWordAnimation(idx);
          return (
            <motion.div
              key={word}
              style={animation}
              className="text-white text-6xl md:text-8xl font-bold mb-4 md:mb-6 text-center drop-shadow-lg"
            >
              {word}
            </motion.div>
          );
        })}
  
      </motion.div>
    </section>
  );
};

export default WhyUs; 