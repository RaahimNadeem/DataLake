import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaRocket, FaUsers } from 'react-icons/fa';

const positions = [
  {
    icon: FaRobot,
    iconClass: 'text-4xl text-blue-600',
    title: 'AI Dreamer',
    desc: 'Imagine, design, and prototype the next wave of intelligent solutions.'
  },
  {
    icon: FaBrain,
    iconClass: 'text-4xl text-purple-600',
    title: 'Machine Learning Magician',
    desc: 'Turn data into magic with cutting-edge ML models and creative thinking.'
  },
  {
    icon: FaRocket,
    iconClass: 'text-4xl text-pink-500',
    title: 'Innovation Pilot',
    desc: 'Lead bold experiments and launch new AI-powered products.'
  },
  {
    icon: FaUsers,
    iconClass: 'text-4xl text-green-600',
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
    <section className="w-full flex flex-col md:flex-row items-stretch bg-[#101424] py-20 px-4 md:px-20">
      <div className="md:w-2/3 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
          A Culture of Innovation & Belonging
        </h2>
        <p className="text-lg md:text-xl text-[#eaf1f7] mb-8 max-w-2xl">
          At Datalake, we believe the best ideas come from diverse minds working together. Our culture is built on trust, curiosity, and a relentless drive to learn. We celebrate every win, support each other through challenges, and make sure every voice is heard. If you want to shape the future of AI in a place where you truly belong, you'll thrive here.
        </p>
        <div className="bg-[#1a2230] rounded-2xl p-6 shadow-lg mb-8 max-w-xl">
          <p className="text-xl italic text-[#f472b6] mb-2">"Datalake is the first place I've worked where I feel my ideas matter. The energy is contagious and the support is real."</p>
          <p className="text-[#eaf1f7] text-right">— Team Member</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2 text-[#eaf1f7]">
            <span className="font-bold">📞</span> +1 (555) 123-4567
          </div>
          <div className="flex items-center gap-2 text-[#eaf1f7]">
            <span className="font-bold">✉️</span> careers@datalake.ai
          </div>
        </div>
      </div>
      <div className="md:w-1/3 flex items-center justify-center mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400/40 to-purple-500/40 flex items-center justify-center"
        >
          <span className="text-6xl md:text-8xl text-white/40 font-extrabold">🚀</span>
        </motion.div>
      </div>
    </section>

    {/* Animated Positions Grid (as before) */}
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-[#eaf1f7] via-[#f6f8fa] to-[#d3deeb]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={heroVariants}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#101424] mb-4 tracking-tight">
          Open Positions
        </h2>
        <p className="text-xl md:text-2xl text-[#4a6d8c] max-w-2xl mx-auto">
          Explore our current opportunities and join a team that's changing the world.
        </p>
      </motion.div>
      <div className="relative w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {positions.map((pos, i) => {
          const Icon = pos.icon;
          return (
            <motion.div
              key={pos.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="mb-4 z-10">
                <Icon className={pos.iconClass} />
              </div>
              <h3 className="text-2xl font-bold text-[#101424] mb-2 z-10">{pos.title}</h3>
              <p className="text-md text-[#4a6d8c] mb-6 z-10">{pos.desc}</p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                className="mt-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-md z-10"
              >
                Join the Mission!
              </motion.button>
              {/* Animated background blob */}
              <motion.div
                initial={{ scale: 0, opacity: 0.2 }}
                whileInView={{ scale: 1.2, opacity: 0.08 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl z-0"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  </>
);

export default Careers; 