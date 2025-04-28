"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, ChevronDown, BarChart2, Database, Server, Shield, Code, Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import { ParallaxSection, ParallaxLayer } from "@/components/parallax-section"
import StaggeredReveal from "@/components/staggered-reveal"
import MagneticButton from "@/components/magnetic-button"
import BlurImage from "@/components/blur-image"
import Preloader from "@/components/preloader"

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

          <main className="overflow-hidden">
            {/* Hero Section */}
            <ParallaxSection className="min-h-screen flex items-center relative">
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
                  <motion.div custom={1} variants={fadeUpVariants} className="mb-6 inline-block">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-black text-white">
                      Redefining Data Analytics
                    </span>
                  </motion.div>

                  <motion.h1
                    custom={2}
                    variants={fadeUpVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                  >
                    <span className="text-gradient">Data Analytics</span> for
                    <span className="relative">
                      <span className="relative z-10"> Modern Enterprises</span>
                      
                    </span>
                  </motion.h1>

                  <motion.p
                    custom={3}
                    variants={fadeUpVariants}
                    className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                  >
                    Datalake transforms your business data into actionable insights through expert consulting,
                    implementation, and optimization of your IT environment.
                  </motion.p>

                  <motion.div
                    custom={4}
                    variants={fadeUpVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <MagneticButton
                      href="/contact"
                      className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-black/90"
                    >
                      Start a project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>

                    <MagneticButton
                      href="/services"
                      className="bg-white text-black border border-gray-200 px-8 py-4 text-sm font-medium hover:bg-gray-50"
                    >
                      Explore services
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 animate-pulse" />
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
            <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
              <div className="container mx-auto px-6 md:px-10">
                <ScrollReveal>
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                      Trusted by Industry Leaders
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Valued Clients</h2>
                    <p className="text-gray-600 text-lg">
                      See how we've helped organizations transform their data operations and drive business growth.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center mb-20">
                  <ScrollReveal delay={100}>
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <Facebook className="w-8 h-8 text-blue-600" />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <Instagram className="w-8 h-8 text-pink-600" />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <Twitter className="w-8 h-8 text-blue-400" />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={400}>
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <Linkedin className="w-8 h-8 text-blue-700" />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={500}>
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <Github className="w-8 h-8 text-gray-800" />
                    </div>
                  </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ScrollReveal delay={100}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <Facebook className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium">Sarah Johnson</h4>
                          <p className="text-sm text-gray-500">CTO, TechCorp</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">
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
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                            <Instagram className="w-6 h-6 text-pink-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium">Michael Chen</h4>
                          <p className="text-sm text-gray-500">CIO, Global Retail Inc.</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">
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
                  </ScrollReveal>

                  <ScrollReveal delay={300}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <Twitter className="w-6 h-6 text-blue-400" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium">Emily Rodriguez</h4>
                          <p className="text-sm text-gray-500">Data Director, FinTech Solutions</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">
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
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={400}>
                  <div className="text-center mt-12">
                    <Link href="/" className="inline-flex items-center text-sm font-medium">
                      View all case studies <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 md:py-32">
              <div className="container mx-auto px-6 md:px-10">
                <ScrollReveal>
                  <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                      Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      Comprehensive data solutions for modern businesses
                    </h2>
                    <p className="text-gray-600 text-lg">
                      We offer a wide range of services to help you harness the power of your data and transform it into
                      actionable insights.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ScrollReveal delay={100}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover-scale">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                        <BarChart2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Data Analytics</h3>
                      <p className="text-gray-600 mb-6">
                        Transform raw data into actionable insights with our advanced analytics solutions tailored to your
                        business needs.
                      </p>
                      <Link
                        href="/services#analytics"
                        className="inline-flex items-center text-sm font-medium text-blue-600"
                      >
                        Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover-scale">
                      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                        <Database className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Big Data Solutions</h3>
                      <p className="text-gray-600 mb-6">
                        Harness the power of big data with our scalable infrastructure and advanced processing capabilities.
                      </p>
                      <Link
                        href="/services#bigdata"
                        className="inline-flex items-center text-sm font-medium text-purple-600"
                      >
                        Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={300}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover-scale">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                        <Code className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Custom Development</h3>
                      <p className="text-gray-600 mb-6">
                        Bespoke software solutions designed to address your specific business challenges and requirements.
                      </p>
                      <Link
                        href="/services#development"
                        className="inline-flex items-center text-sm font-medium text-green-600"
                      >
                        Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={400}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover-scale">
                      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                        <Server className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">IT Infrastructure</h3>
                      <p className="text-gray-600 mb-6">
                        Design, implementation, and management of robust IT infrastructure tailored to your organization's
                        needs.
                      </p>
                      <Link
                        href="/services#infrastructure"
                        className="inline-flex items-center text-sm font-medium text-orange-600"
                      >
                        Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={500}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover-scale">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Security Management</h3>
                      <p className="text-gray-600 mb-6">
                        Protect your valuable data and systems with our comprehensive security solutions and best practices.
                      </p>
                      <Link href="/services#security" className="inline-flex items-center text-sm font-medium text-red-600">
                        Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={600} className="md:col-span-2 lg:col-span-1">
                    <div className="bg-black p-8 rounded-2xl text-white shadow-xl hover-scale h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-3">Need a custom solution?</h3>
                        <p className="text-gray-300 mb-6">
                          Our team of experts is ready to help you with your specific requirements and challenges.
                        </p>
                      </div>
                      <MagneticButton href="/contact" className="bg-white text-black px-6 py-3 text-sm font-medium">
                        Contact us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>

            {/* Feature Highlight Section */}
            <section className="py-24 md:py-32 bg-[#0d0d0d] text-white">
              <div className="container mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <ScrollReveal>
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse" />
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

            {/* CTA Section */}
            <section className="py-24 md:py-32 bg-[#0d0d0d] text-white">
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
