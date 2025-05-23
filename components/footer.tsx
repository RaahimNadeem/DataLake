import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const services = [
  { name: "Data Engineering", href: "/services/data-engineering" },
  { name: "Machine Learning", href: "/services/machine-learning" },
  { name: "Data Analytics", href: "/services/data-analytics" },
  { name: "AI Solutions", href: "/services/ai" },
  { name: "Data Infrastructure", href: "/services/data-infrastructure" },
  { name: "Business Intelligence", href: "/services/business-intelligence" },
  { name: "Custom Analytics", href: "/services/custom-analytics" },
  { name: "Data Strategy", href: "/services/data-strategy" },
  { name: "Cloud Solutions", href: "/services/cloud" },
];

const company = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
  { name: "Get Started", href: "/#contact" },
];

const Footer = () => (
  <footer className="w-full bg-[#19232e] text-white pt-12 md:pt-16 pb-6 px-4 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
      {/* Left: Heading and Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-start justify-between h-full min-h-[280px] md:min-h-[320px]"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-6xl font-light leading-tight mb-6 md:mb-8"
        >
          Ready to transform<br />your data?
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center mb-8"
        >
          <Link href="/contact">
            <button className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border border-white flex flex-col items-center justify-center text-center text-base md:text-lg font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-[#101424] hover:scale-105">
              START YOUR<br />JOURNEY
              <span className="mt-2 text-2xl">&darr;</span>
            </button>
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xs text-gray-400 flex flex-wrap gap-4 mt-8"
        >
          <span>© 2024 Datalake. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
        </motion.div>
        <div className="mt-6 text-sm text-gray-400">
          <span className="block">Datalake AI Solutions</span>
          <span className="block">123 Innovation Drive, Suite 100, San Francisco, CA</span>
          <span className="block">Email: <a href="mailto:hello@datalake.com" className="underline hover:text-white">hello@datalake.com</a></span>
        </div>
      </motion.div>

      {/* Right: Links and Reviews */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col md:flex-row justify-between w-full md:w-auto gap-8 md:gap-24"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="font-bold mb-4">SERVICES</div>
            <ul className="space-y-2 text-gray-200">
              {services.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="font-bold mb-4">COMPANY</div>
            <ul className="space-y-2 text-gray-200">
              {company.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Social Icons */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="max-w-7xl mx-auto flex justify-end items-center gap-4 mt-8 pr-2"
    >
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://linkedin.com/company/datalake-ai" 
        target="_blank" rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://twitter.com/datalakeai" 
        target="_blank" rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
        aria-label="Twitter"
      >
        <FaTwitter size={24} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/datalake-ai" 
        target="_blank" rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:hello@datalake.com" 
        className="text-gray-400 hover:text-white transition-colors duration-300"
        aria-label="Email"
      >
        <FaEnvelope size={24} />
      </motion.a>
    </motion.div>
  </footer>
);

export default Footer;
