"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Lenis from 'lenis';

const translations = {
  en: {
    seeMore: "See more"
  },
  ar: {
    seeMore: "شاهد المزيد"
  }
};

const projects = [
  {
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF"
  },
  {
    title: "Clément Chapillon",
    description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes - so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for 'The tawny rocks').",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D"
  },
  {
    title: "Zissou",
    description: "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal, they're encoded with an ambiguity - a certain tension - that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D"
  }
];

interface ProjectCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ i, title, description, src, link, color, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <div ref={container} className="relative h-screen w-full flex items-center justify-center">
      <motion.div 
        className="sticky top-0 w-full max-w-6xl mx-auto px-4"
        style={{
          scale, 
          top: `calc(-5vh + ${i * 25}px)`
        }}
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{ backgroundColor: color }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {title}
              </h2>
              <div className="mb-6">
                <p className="text-base md:text-lg text-white/80 mb-4 leading-relaxed">
                  {description}
                </p>
                <span className="inline-flex items-center">
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors duration-300 text-base font-medium"
                  >
                    {currentLang.seeMore}
                  </a>
                  <svg 
                    className="w-5 h-5 ml-2" 
                    width="22" 
                    height="12" 
                    viewBox="0 0 22 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" 
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 lg:h-80">
              <motion.div 
                className="absolute inset-0"
                style={{ scale: imageScale }}
              >
                <Image
                  fill
                  src={`/images/${src}`}
                  alt={title}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Cards: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section className="relative bg-[#19232e]">
      {/* Header */}
      <div className="relative z-20 pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70"
          >
            Discover our latest work and creative solutions
          </motion.p>
        </div>
      </div>

      {/* Cards Container - starts with cards stacked vertically */}
      <main ref={container} className="relative" style={{ marginTop: '50vh', marginBottom: '50vh' }}>
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <ProjectCard
              key={`project_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default Cards; 