"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import MagneticButton from "../magnetic-button"
import { ParallaxSection, ParallaxLayer } from "../parallax-section"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
}

export default function HeroSection() {
  return (
    <ParallaxSection className="min-h-screen flex items-center relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <ParallaxLayer speed={0.1} className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[150%] h-[150%] rounded-full border border-gray-200" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.2} className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[120%] h-[120%] rounded-full border border-gray-200" />
      </ParallaxLayer>

      <div className="container mx-auto px-6 md:px-10 pt-32 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div custom={1} variants={fadeUpVariants} className="mb-6 inline-block animate-glow">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#0c9ee3] to-[#ee850e] text-white">
              Redefining Data Analytics
            </span>
          </motion.div>

          <motion.h1
            custom={2}
            variants={fadeUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 text-gradient"
          >
            <span className="animate-float">Data Analytics</span> for
            <span className="relative">
              <span className="relative z-10 animate-float" style={{ animationDelay: "1s" }}>Modern Enterprises</span>
            </span>
          </motion.h1>

          <motion.p
            custom={2.5}
            variants={fadeUpVariants}
            className="text-lg md:text-2xl text-[#0c9ee3] font-semibold mb-6 text-primary"
          >
            Analytics Data Technology
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton
              href="/contact"
              className="premium-button"
            >
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>

            <MagneticButton
              href="/services"
              className="premium-button bg-transparent border border-[#0c9ee3] text-[#0c9ee3] hover:text-white"
            >
              Explore services
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
} 