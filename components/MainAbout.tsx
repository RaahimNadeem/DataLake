import React from "react";
import { motion } from "framer-motion";

const MainAbout = () => (
  <section className="w-full min-h-screen bg-[#f5f6f7] flex pt-12 items-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-24 px-4 md:pl-8 md:pr-0 w-full">
      {/* Left: Text */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 w-full md:w-1/2 flex flex-col justify-center items-start"
      >
        <div className="mb-6 w-full max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-semibold text-gray-700 tracking-widest uppercase mb-6"
          >
            ABOUT DATALAKE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold text-black leading-tight mb-8"
          >
            Intelligent Data<br />for Smart Decisions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 max-w-xl"
          >
            We are a leading data analytics company specializing in enterprise-grade data solutions, AI-driven insights, and scalable data infrastructure. Our team of experts helps organizations transform their data into actionable intelligence, driving innovation and growth in the digital age.
          </motion.p>
        </div>
      </motion.div>
      {/* Right: Video */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[50vw] h-[340px] md:h-[520px] flex flex-col items-center md:items-end md:pr-0"
      >
        <video
          src="/About.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[340px] md:h-[520px] object-cover rounded-l-3xl md:rounded-l-3xl md:rounded-r-none md:rounded-t-none md:rounded-b-none shadow-none"
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        />
      </motion.div>
    </div>
  </section>
);

export default MainAbout; 