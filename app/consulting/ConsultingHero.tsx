import React from 'react';
import { motion } from 'framer-motion';

export default function ConsultingHero() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12 md:gap-24 py-16 md:py-24 lg:py-32 px-4 md:px-6 min-h-[500px]">
      {/* Left: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 flex flex-col justify-center h-full"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="uppercase tracking-widest text-sm md:text-base text-[#7c7c7c] mb-4 font-medium"
        >
          Our Consulting Services
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6 md:mb-8"
        >
          Looking for <span className="text-[#4a6d8c]">once-in-a-lifetime</span> <br className="hidden md:block" />
          <span className="text-[#4a6d8c]">Consulting experiences?</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base md:text-lg mb-4 text-gray-700"
        >
          Specializing in high-impact, tailored consulting, we cater to clients who seek exclusive and transformative business solutions.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base md:text-lg mb-4 text-gray-700"
        >
          We offer a peerless collection of the best consulting expertise across industries. Our consultants deliver true people-to-people collaboration and provide insider access to outstanding strategies, offering a deeper view into your business's potential, technology, and growth.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-base md:text-lg mb-8 text-gray-700"
        >
          Our expert team ensures your time is well-spent, your solutions are authentic, and your results are exceptional.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex gap-4 md:gap-6 mt-2"
        >
          <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full border border-[#4a6d8c] text-[#4a6d8c] font-semibold text-sm md:text-base hover:bg-[#4a6d8c] hover:text-white transition-colors duration-300">
            <span className="text-xl">↓</span> SEE MORE DETAILS
          </button>
        </motion.div>
      </motion.div>
      {/* Right: Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 flex items-center justify-center"
      >
        <div className="w-full max-w-[600px] aspect-[3/4] h-full flex items-center justify-center">
          <img 
            src="/Consulting.jpg" 
            alt="Consulting Experience" 
            className="rounded-3xl shadow-lg w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" 
          />
        </div>
      </motion.div>
    </section>
  );
} 