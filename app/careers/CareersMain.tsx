import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaRocket, FaUsers } from 'react-icons/fa';

const positions = [
  {
    icon: <FaRobot className="text-4xl text-blue-600" />,
    title: 'AI Dreamer',
    desc: 'Imagine, design, and prototype the next wave of intelligent solutions.'
  },
  {
    icon: <FaBrain className="text-4xl text-purple-600" />,
    title: 'Machine Learning Magician',
    desc: 'Turn data into magic with cutting-edge ML models and creative thinking.'
  },
  {
    icon: <FaRocket className="text-4xl text-pink-500" />,
    title: 'Innovation Pilot',
    desc: 'Lead bold experiments and launch new AI-powered products.'
  },
  {
    icon: <FaUsers className="text-4xl text-green-600" />,
    title: 'Culture Champion',
    desc: 'Shape our team spirit and make Datalake the best place to grow.'
  }
];

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' }
  })
};

const Careers = () => (
  <>
    {/* Hero Section with Background Image */}
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/Career.jpg')" }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          Careers at Datalake
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-white max-w-2xl mb-4 drop-shadow"
        >
          Build the future of AI with us. Dream big, grow fast, and make a real impact.
        </motion.p>
      </div>
    </section>

    {/* Culture Section (like reference image) */}
    <section className="w-full flex flex-col md:flex-row items-stretch  py-20 px-4 md:px-20">
      <div className="md:w-2/3 flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-extrabold  mb-8 leading-tight"
        >
          A Culture of Innovation & Belonging
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-lg md:text-xl  mb-8 max-w-2xl"
        >
          At Datalake, we believe the best ideas come from diverse minds working together. Our culture is built on trust, curiosity, and a relentless drive to learn. We celebrate every win, support each other through challenges, and make sure every voice is heard. If you want to shape the future of AI in a place where you truly belong, you'll thrive here.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="rounded-2xl p-6 bg-[#f6f8fa] shadow-lg mb-8 max-w-xl"
        >
          <p className="text-xl italic text-[#19232e] mb-2">"Datalake is the first place I've worked where I feel my ideas matter. The energy is contagious and the support is real."</p>
          <p className=" text-right">— Team Member</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col gap-2 mt-4"
        >
          <div className="flex items-center gap-2 ">
            <span className="font-bold">📞</span> +1 (555) 123-4567
          </div>
          <div className="flex items-center gap-2 text-[#2b2b2b]">
            <span className="font-bold">✉️</span> careers@datalake.ai
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/3 flex items-center justify-center mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="/Career2.jpg" 
            alt="Career" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>


  </>
);

export default Careers; 