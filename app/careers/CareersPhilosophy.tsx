import React from "react";
import { motion } from "framer-motion";

const Philosophy = () => (
  <section className="w-full flex justify-center items-center py-12 lg:py-36 px-2">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-7xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg min-h-[480px]"
    >
      {/* Left: Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full md:w-1/2 h-[300px] md:h-auto"
      >
        <img
          src="/Career4.jpg"
          alt="Career"
          className="w-full h-full object-cover md:rounded-l-3xl md:rounded-r-none"
        />
        <div className="absolute inset-0 bg-black/30 rounded-l-3xl" />
      </motion.div>
      {/* Right: Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full md:w-1/2 bg-[#19232e] flex flex-col justify-center p-8 md:p-16 text-white"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
        >
          Join Our Team of Innovators and Shape the Future of AI
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg md:text-xl mb-8 text-gray-200"
        >
          At Datalake, we're not just building AI solutions – we're creating the future. We're looking for passionate individuals who want to make a real impact. Whether you're a data scientist, engineer, or creative thinker, you'll find a place where your ideas are valued and your growth is prioritized. Join us in our mission to transform how businesses leverage AI and data.
        </motion.p>
      
      </motion.div>
    </motion.div>
  </section>
);

export default Philosophy; 