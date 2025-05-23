import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    title: "AI Research Scientist",
    requirements: [
      "PhD or MS in Computer Science, Mathematics, or related field",
      "Strong background in machine learning and deep learning",
      "Proficiency in Python and ML frameworks (TensorFlow, PyTorch)",
      "Track record of publications or patents is a plus"
    ]
  },
  {
    title: "Data Engineer",
    requirements: [
      "Experience with ETL pipelines and data warehousing",
      "Proficient in SQL and cloud data platforms (AWS, GCP, Azure)",
      "Programming in Python or Scala",
      "Familiarity with big data tools (Spark, Hadoop)"
    ]
  },
  {
    title: "Product Manager (AI)",
    requirements: [
      "Experience managing AI/ML product lifecycle",
      "Strong communication and leadership skills",
      "Ability to translate business needs into technical requirements",
      "Familiarity with agile methodologies"
    ]
  },
  {
    title: "Frontend Developer",
    requirements: [
      "Expertise in React and TypeScript",
      "Strong sense of UI/UX design",
      "Experience with modern web stack (Vite, Tailwind, etc.)",
      "Portfolio of responsive web applications"
    ]
  },
  {
    title: "Backend Developer",
    requirements: [
      "Proficient in Node.js or Python",
      "API design and implementation",
      "Experience with databases (SQL/NoSQL)",
      "Cloud deployment experience"
    ]
  },
  {
    title: "Customer Success Engineer",
    requirements: [
      "Technical support and client onboarding experience",
      "Excellent communication skills",
      "Ability to troubleshoot and resolve issues",
      "Familiarity with SaaS products"
    ]
  }
];

const JobListings = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full mx-auto px-12 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="text-6xl font-extrabold mb-10 text-[#19232e]"
      >
        Job Listings
      </motion.h2>
      <div className="divide-y divide-gray-200">
        {jobs.map((job, idx) => (
          <div key={job.title}>
            <button
              className={`w-full flex items-center justify-between py-6 px-2 text-left focus:outline-none transition bg-transparent hover:bg-gray-50/80 rounded-xl group`}
              onClick={() => handleToggle(idx)}
            >
              <span className="text-2xl text-[#19232e] font-medium group-hover:text-blue-700 transition-colors duration-200">{job.title}</span>
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="flex items-center"
              >
                <ChevronDown
                  className={`text-gray-400 text-2xl transition-colors duration-200 group-hover:text-blue-500`}
                />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-xl shadow-lg px-8 pb-6 mt-1 mb-2 overflow-hidden"
                >
                  <ul className="list-disc pl-5 py-12  text-lg text-gray-700">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default JobListings; 