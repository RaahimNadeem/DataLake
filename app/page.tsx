"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, ArrowUpRight, ChevronDown, BarChart2, Database, Server, Shield, Code, Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { ParallaxSection, ParallaxLayer } from "@/components/parallax-section"
import StaggeredReveal from "@/components/staggered-reveal"
import MagneticButton from "@/components/magnetic-button"
import BlurImage from "@/components/blur-image"
import Preloader from "@/components/preloader"

// Animation variants
const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const scaleVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

const liftVariants = {
  initial: { y: 0 },
  hover: { 
    y: -5,
    transition: { duration: 0.3 }
  }
}

const rotateVariants = {
  initial: { rotate: 0 },
  hover: { 
    rotate: 5,
    transition: { duration: 0.3 }
  }
}

const pulseVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const arrowVariants = {
  initial: { x: 0 },
  hover: { 
    x: 5,
    transition: { duration: 0.3 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculate video expansion based on scroll position
  const getVideoExpansion = () => {
    if (!videoRef.current) return 0
    
    const videoTop = videoRef.current.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    
    // Adjust expansion parameters for mobile
    const startPoint = isMobile ? windowHeight * 0.7 : windowHeight * 0.5
    let endPoint = 0
    if (isMobile) {
      endPoint = 0 // On mobile, expand to full viewport
    } else {
      endPoint = 0
    }
    
    // Calculate expansion percentage (0 to 1)
    let expansion = 1 - (videoTop - endPoint) / (startPoint - endPoint)
    expansion = Math.max(0, Math.min(1, expansion))
    
    return expansion
  }

  const videoExpansion = getVideoExpansion()
  const videoScale = 1 + videoExpansion * (isMobile ? 0.8 : 0.5)
  // Calculate text opacity based on video expansion with a smoother transition
  const textOpacity = Math.max(0, Math.min(1, (videoExpansion - 0.7) * 3))

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  return (
    <>
      <Preloader onLoadingComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <Navigation />

          <main className="bg-background text-foreground overflow-hidden">
            {/* Hero Section */}
            <ParallaxSection className="min-h-screen flex items-center relative bg-background">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

              <ParallaxLayer speed={0.1} className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[150%] h-[150%] rounded-full border border-gray-200" />
              </ParallaxLayer>

              <ParallaxLayer speed={0.2} className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[120%] h-[120%] rounded-full border border-gray-200" />
              </ParallaxLayer>

              <div className="container mx-auto px-6 md:px-10 pt-32 relative z-10 ">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="max-w-5xl mx-auto text-center"
                >
                  <motion.div custom={1} variants={fadeUpVariants} className="mb-6 inline-block">
                    <motion.span 
                      variants={floatVariants}
                      initial="initial"
                      animate="animate"
                      className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-[#ee7202] text-white"
                    >
                      Redefining Data Analytics
                    </motion.span>
                  </motion.div>

                  <motion.h1
                    custom={2}
                    variants={fadeUpVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2"
                  >
                    <span className="">Data Analytics</span> for
                    <span className="relative">
                      <span className="relative z-10"> Modern Enterprises</span>
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
                      className="bg-primary text-white px-8 py-4 text-sm font-medium hover:bg-primary/90 group"
                    >
                      <motion.span
                        variants={arrowVariants}
                        initial="initial"
                        whileHover="hover"
                        className="flex items-center"
                      >
                        Start a project
                        <motion.div
                          variants={arrowVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </motion.span>
                    </MagneticButton>

                    <MagneticButton
                      href="/services"
                      className="text-primary border border-primary px-8 py-4 text-sm font-medium hover:bg-primary/10 group"
                    >
                      <motion.span
                        variants={arrowVariants}
                        initial="initial"
                        whileHover="hover"
                        className="flex items-center"
                      >
                        Explore services
                        <motion.div
                          variants={arrowVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </motion.span>
                    </MagneticButton>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mt-20 md:mt-32 relative"
                  ref={videoRef}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0c9ee3] to-[#ee850e] rounded-3xl blur-xl opacity-20 animate-pulse" />
                  <div 
                    className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl flex items-center justify-center"
                    style={{
                      transform: `scale(${videoScale})`,
                      transformOrigin: 'center center',
                      transition: 'transform 0.1s ease-out',
                      height: isMobile
                        ? (videoExpansion < 1 ? 'max(110vw, 100vh)' : '100vh')
                        : 'auto',
                      minHeight: isMobile ? (videoExpansion < 1 ? '300px' : '100vh') : 'auto',
                      width: isMobile ? '90vw' : 'auto',
                      maxWidth: isMobile ? '500px' : 'none',
                      margin: isMobile ? '0 auto' : undefined,
                      position: videoExpansion >= 1 ? 'relative' : undefined,
                    }}
                  >
                    <video
                      src="/BannerVideo.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                    <div 
                      className={`absolute inset-0 w-full max-w-full flex flex-col items-center justify-center bg-black/40 text-white px-4 text-center`}
                      style={{
                        opacity: textOpacity,
                        pointerEvents: textOpacity > 0 ? 'auto' : 'none',
                        transition: 'opacity 0.3s ease-out',
                        zIndex: 2,
                        display: 'flex',
                      }}
                    >
                      <h3 className="text-md  md:text-3xl font-bold mb-3 break-words">Transform Data into Insights</h3>
                      <p className="text-xs md:text-xl max-w-xs md:max-w-2xl px-12 break-words">
                        Datalake helps businesses unlock the power of their data through advanced analytics, 
                        machine learning, and expert consulting services.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="flex justify-center mt-12"
                >
                  <a
                    href="#services"
                    className="flex flex-col items-center text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    <span className="mb-2">Scroll to explore</span>
                    <ChevronDown className="w-5 h-5 animate-bounce" />
                  </a>
                </motion.div>
              </div>
            </ParallaxSection>

            {/* Clients & Testimonials Section */}
            <section className="py-24 md:py-32 bg-background relative z-50 border-t border-primary/10">
              <div className="container mx-auto px-6 md:px-10">
                <ScrollReveal>
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                      Trusted by Industry Leaders
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      Our <span className="text-primary">Valued</span> Partners
                    </h2>
                    <p className="text-gray-600 text-lg">
                      See how we've helped organizations transform their data operations and drive business growth.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center mb-20">
                  <ScrollReveal delay={100}>
                    <div className="group relative">
                      <div className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        <Facebook className="w-8 h-8 text-[#1877F2]" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                        <span className="text-xs font-medium text-gray-600 whitespace-nowrap">Meta</span>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <div className="group relative">
                      <div className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        <Instagram className="w-8 h-8 text-[#E4405F]" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                        <span className="text-xs font-medium text-gray-600 whitespace-nowrap">Instagram</span>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="group relative">
                      <div className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        <Twitter className="w-8 h-8 text-[#1DA1F2]" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                        <span className="text-xs font-medium text-gray-600 whitespace-nowrap">X</span>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={400}>
                    <div className="group relative">
                      <div className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        <Linkedin className="w-8 h-8 text-[#0A66C2]" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                        <span className="text-xs font-medium text-gray-600 whitespace-nowrap">LinkedIn</span>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={500}>
                    <div className="group relative">
                      <div className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                        <Github className="w-8 h-8 text-[#181717]" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                        <span className="text-xs font-medium text-gray-600 whitespace-nowrap">GitHub</span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ScrollReveal delay={100}>
                    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                            <Facebook className="w-6 h-6 text-[#1877F2]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-primary">Client 1</h4>
                            <p className="text-sm text-muted-foreground">Position 1</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                        </p>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                            <Instagram className="w-6 h-6 text-[#E4405F]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-primary">Client 2</h4>
                            <p className="text-sm text-muted-foreground">Position 2</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
                        </p>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={300}>
                    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500">
                            <Twitter className="w-6 h-6 text-[#1DA1F2]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-primary">Client 3</h4>
                            <p className="text-sm text-muted-foreground">Position 3</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
                        </p>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={400}>
                  <div className="text-center mt-12">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-2 transition-transform duration-500">
                      View all case studies <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 md:py-32 bg-background border-t border-primary/10">
              <div className="container mx-auto px-6 md:px-10">
                <ScrollReveal>
                  <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#ee850e]/10 text-[#ee850e]/90 mb-4">
                      Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      Comprehensive <span className="text-[#ee850e]">data solutions</span> for modern businesses
                    </h2>
                    <p className="text-gray-600 text-lg">
                      We offer a wide range of services to help you harness the power of your data and transform it into
                      actionable insights.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ScrollReveal delay={100}>
                    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-[#ee850e]/20 hover:border-[#ee850e]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee850e]/5 h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ee850e]/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#ee850e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <BarChart2 className="w-6 h-6 text-[#ee850e]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                          Transform raw data into actionable insights with our advanced analytics solutions tailored to your
                          business needs.
                        </p>
                        <div className="flex items-center text-[#ee850e] group-hover:translate-x-2 transition-transform duration-500">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-[#ee850e]/20 hover:border-[#ee850e]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee850e]/5 h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ee850e]/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#ee850e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Database className="w-6 h-6 text-[#ee850e]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Big Data Solutions</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                          Harness the power of big data with our scalable infrastructure and advanced processing capabilities.
                        </p>
                        <div className="flex items-center text-[#ee850e] group-hover:translate-x-2 transition-transform duration-500">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={300}>
                    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-[#ee850e]/20 hover:border-[#ee850e]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee850e]/5 h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ee850e]/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#ee850e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Code className="w-6 h-6 text-[#ee850e]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Custom Development</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                          Bespoke software solutions designed to address your specific business challenges and requirements.
                        </p>
                        <div className="flex items-center text-[#ee850e] group-hover:translate-x-2 transition-transform duration-500">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={400}>
                    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-[#ee850e]/20 hover:border-[#ee850e]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee850e]/5 h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ee850e]/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#ee850e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Server className="w-6 h-6 text-[#ee850e]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">IT Infrastructure</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                          Design, implementation, and management of robust IT infrastructure tailored to your organization's
                          needs.
                        </p>
                        <div className="flex items-center text-[#ee850e] group-hover:translate-x-2 transition-transform duration-500">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={500}>
                    <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-[#ee850e]/20 hover:border-[#ee850e]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee850e]/5 h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ee850e]/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#ee850e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Shield className="w-6 h-6 text-[#ee850e]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Security Management</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                          Protect your valuable data and systems with our comprehensive security solutions and best practices.
                        </p>
                        <div className="flex items-center text-[#ee850e] group-hover:translate-x-2 transition-transform duration-500">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={600} className="md:col-span-2 lg:col-span-1">
                    <div className="group relative bg-[#ee850e]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#ee850e]/40 hover:border-[#ee850e]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee850e]/10 h-full flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ee850e]/10 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                      <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-xl font-bold mb-4 text-[#ee850e]">Need a custom solution?</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                          Our team of experts is ready to help you with your specific requirements and challenges.
                        </p>
                        <MagneticButton href="/contact" className="bg-[#ee850e] text-white px-6 py-3 text-sm font-medium group-hover:translate-x-2 transition-transform duration-500">
                          Contact us
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </MagneticButton>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* Feature Highlight Section */}
            <section className="py-24 md:py-32 rounded-3xl bg-[#0d0d0d] text-white border-t border-primary/10">
              <div className="container mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <ScrollReveal>
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#0c9ee3] to-[#ee850e] rounded-2xl blur-xl opacity-30 animate-pulse" />
                      <div className="relative rounded-2xl overflow-hidden border border-white/10">
                        <BlurImage
                          src="/working.png"
                          alt="Data Analytics Dashboard"
                          width={800}
                          height={600}
                          className="w-full h-[600px] object-cover"
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                  <div className="space-y-8">
                    <ScrollReveal>
                      <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white mb-4">
                        Advanced Analytics
                      </span>
                      <h2 className="text-3xl md:text-5xl font-bold mb-6">Transform your data into actionable insights</h2>
                      <p className="text-gray-300 text-lg mb-8">
                        Our advanced analytics platform helps you make sense of complex data, identify patterns, and make
                        data-driven decisions with confidence.
                      </p>
                    </ScrollReveal>

                    <StaggeredReveal className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Real-time analytics</h3>
                          <p className="text-gray-400">
                            Monitor your business performance in real-time with customizable dashboards.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Predictive insights</h3>
                          <p className="text-gray-400">
                            Leverage machine learning to forecast trends and anticipate market changes.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Seamless integration</h3>
                          <p className="text-gray-400">
                            Connect with your existing systems and data sources without disruption.
                          </p>
                        </div>
                      </div>
                    </StaggeredReveal>

                    <ScrollReveal delay={400}>
                      <div className="pt-4">
                        <MagneticButton
                          href="/services#analytics"
                          className="bg-white text-black px-8 py-4 text-sm font-medium"
                        >
                          Explore analytics solutions
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </MagneticButton>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </section>

            {/* Culture Section */}
            <div className="relative py-24 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
              
              {/* Culture Content */}
              <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <ScrollReveal>
                    <div className="text-center mb-16">
                      <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                        Our Culture
                      </span>
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Where Innovation Meets <span className="text-primary">Excellence</span>
                      </h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We foster a culture of creativity, collaboration, and continuous growth, 
                        where every team member's contribution shapes our success.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Culture Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Innovation Card */}
                    <ScrollReveal delay={100}>
                      <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold mb-4">Innovation First</h3>
                          <p className="text-muted-foreground mb-6">
                            We embrace bold ideas and encourage creative thinking to solve complex challenges.
                          </p>
                          <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-500">
                            <span className="text-sm font-medium">Learn more</span>
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Collaboration Card */}
                    <ScrollReveal delay={200}>
                      <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold mb-4">Collaborative Spirit</h3>
                          <p className="text-muted-foreground mb-6">
                            We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.
                          </p>
                          <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-500">
                            <span className="text-sm font-medium">Learn more</span>
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Growth Card */}
                    <ScrollReveal delay={300}>
                      <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold mb-4">Continuous Growth</h3>
                          <p className="text-muted-foreground mb-6">
                            We invest in our team's development and create opportunities for learning and advancement.
                          </p>
                          <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-500">
                            <span className="text-sm font-medium">Learn more</span>
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Culture Stats */}
                  <ScrollReveal delay={400}>
                    <div className="mt-24 relative">
                      {/* Decorative Elements */}
                      <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
                      <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        <ScrollReveal delay={500}>
                          <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                            <div className="relative z-10 text-center">
                              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">100%</div>
                              <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                            </div>
                          </div>
                        </ScrollReveal>

                        <ScrollReveal delay={600}>
                          <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                            <div className="relative z-10 text-center">
                              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">50+</div>
                              <div className="text-sm text-muted-foreground">Team Members</div>
                            </div>
                          </div>
                        </ScrollReveal>

                        <ScrollReveal delay={700}>
                          <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                            <div className="relative z-10 text-center">
                              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">4+</div>
                              <div className="text-sm text-muted-foreground">Countries</div>
                            </div>
                          </div>
                        </ScrollReveal>

                        <ScrollReveal delay={800}>
                          <div className="group relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                            <div className="relative z-10 text-center">
                              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">24/7</div>
                              <div className="text-sm text-muted-foreground">Global Collaboration</div>
                            </div>
                          </div>
                        </ScrollReveal>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <section className="py-24 rounded-t-3xl md:py-32 bg-[#0d0d0d] text-white border-t border-primary/10">
              <div className="container mx-auto px-6 md:px-10">
                <div className="max-w-4xl mx-auto text-center">
                  <ScrollReveal>
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white mb-6">
                      Ready to Transform Your Data?
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
                      Let's build your data-driven future together
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                      Partner with Datalake to unlock the full potential of your data and drive innovation across your
                      organization.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <MagneticButton href="/contact" className="bg-white text-black px-8 py-4 text-sm font-medium">
                        Start your project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </MagneticButton>

                      <MagneticButton
                        href="/services"
                        className="bg-transparent text-white border border-white/20 px-8 py-4 text-sm font-medium hover:bg-white/5"
                      >
                        Explore our services
                      </MagneticButton>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

          </main>

          <Footer />
        </>
      )}
    </>
  )
}
