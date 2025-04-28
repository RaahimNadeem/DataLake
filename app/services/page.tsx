"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, BarChart2, Database, Server, Shield, Code, CheckCircle } from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import StaggeredReveal from "@/components/staggered-reveal"
import MagneticButton from "@/components/magnetic-button"
import BlurImage from "@/components/blur-image"

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

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
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 md:px-10">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div custom={1} variants={fadeUpVariants} className="mb-6 inline-block">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-black text-white">
                  Our Services
                </span>
              </motion.div>

              <motion.h1
                custom={2}
                variants={fadeUpVariants}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              >
                Comprehensive data solutions for modern businesses
              </motion.h1>

              <motion.p custom={3} variants={fadeUpVariants} className="text-lg md:text-xl text-gray-600 mb-10">
                We offer a wide range of services to help you harness the power of your data and transform it into
                actionable insights.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                  <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                    <BlurImage
                      src="/placeholder.svg?height=600&width=800"
                      alt="Data Analytics Dashboard"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                    What We Offer
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertise across the data value chain</h2>
                  <p className="text-gray-600 mb-8">
                    At Datalake, we provide end-to-end services to help organizations plan, implement, secure, manage,
                    and optimize their IT environment. Our expertise spans across the entire data value chain, from
                    infrastructure to analytics and insights.
                  </p>
                </ScrollReveal>

                <StaggeredReveal className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Strategic Consulting</h3>
                      <p className="text-gray-600">
                        Expert guidance to align your data strategy with business objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Implementation & Integration</h3>
                      <p className="text-gray-600">
                        Seamless deployment of data solutions that integrate with your existing systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Managed Services</h3>
                      <p className="text-gray-600">
                        Ongoing support and optimization to ensure your data infrastructure performs at its best.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Training & Knowledge Transfer</h3>
                      <p className="text-gray-600">
                        Empowering your team with the skills to leverage your data assets effectively.
                      </p>
                    </div>
                  </div>
                </StaggeredReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section id="analytics" className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive service offerings</h2>
                <p className="text-gray-600 text-lg">
                  Explore our range of specialized services designed to address your unique data challenges.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-24">
              {/* Data Analytics */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal>
                  <div>
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                      <BarChart2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Data Analytics</h3>
                    <p className="text-gray-600 mb-6">
                      Transform raw data into actionable insights with our advanced analytics solutions tailored to your
                      business needs. Our team of data scientists and analysts work closely with you to uncover
                      patterns, trends, and opportunities hidden in your data.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">Descriptive, predictive, and prescriptive analytics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">Custom dashboard development and visualization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">Machine learning model development and deployment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">Real-time analytics and monitoring solutions</span>
                      </li>
                    </ul>
                    <MagneticButton href="/contact" className="bg-blue-600 text-white px-6 py-3 text-sm font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                      <BlurImage
                        src="/placeholder.svg?height=500&width=700"
                        alt="Data Analytics"
                        width={700}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Big Data Solutions */}
              <div id="bigdata" className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                      <BlurImage
                        src="/placeholder.svg?height=500&width=700"
                        alt="Big Data Solutions"
                        width={700}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="order-1 lg:order-2" delay={200}>
                  <div>
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                      <Database className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Big Data Solutions</h3>
                    <p className="text-gray-600 mb-6">
                      Harness the power of big data with our scalable infrastructure and advanced processing
                      capabilities. We help you collect, store, process, and analyze large volumes of data efficiently
                      and cost-effectively.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                        <span className="text-gray-600">Data lake and data warehouse implementation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                        <span className="text-gray-600">Stream processing and real-time analytics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                        <span className="text-gray-600">Data integration and ETL/ELT pipelines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                        <span className="text-gray-600">Distributed computing and processing frameworks</span>
                      </li>
                    </ul>
                    <MagneticButton href="/contact" className="bg-purple-600 text-white px-6 py-3 text-sm font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                </ScrollReveal>
              </div>

              {/* Custom Development */}
              <div id="development" className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal>
                  <div>
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Custom Development</h3>
                    <p className="text-gray-600 mb-6">
                      Bespoke software solutions designed to address your specific business challenges and requirements.
                      Our development team combines technical expertise with industry knowledge to deliver high-quality,
                      scalable applications.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-600">Custom web and mobile application development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-600">API development and integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-600">Legacy system modernization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-600">DevOps and continuous integration/deployment</span>
                      </li>
                    </ul>
                    <MagneticButton href="/contact" className="bg-green-600 text-white px-6 py-3 text-sm font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                      <BlurImage
                        src="/placeholder.svg?height=500&width=700"
                        alt="Custom Development"
                        width={700}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* IT Infrastructure */}
              <div id="infrastructure" className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                      <BlurImage
                        src="/placeholder.svg?height=500&width=700"
                        alt="IT Infrastructure"
                        width={700}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="order-1 lg:order-2" delay={200}>
                  <div>
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                      <Server className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">IT Infrastructure</h3>
                    <p className="text-gray-600 mb-6">
                      Design, implementation, and management of robust IT infrastructure tailored to your organization's
                      needs. We help you build a scalable, secure, and efficient foundation for your data and
                      applications.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <span className="text-gray-600">Cloud infrastructure design and migration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <span className="text-gray-600">Hybrid and multi-cloud solutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <span className="text-gray-600">Infrastructure as Code (IaC) implementation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <span className="text-gray-600">Performance optimization and scaling</span>
                      </li>
                    </ul>
                    <MagneticButton href="/contact" className="bg-orange-600 text-white px-6 py-3 text-sm font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                </ScrollReveal>
              </div>

              {/* Security Management */}
              <div id="security" className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal>
                  <div>
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Security Management</h3>
                    <p className="text-gray-600 mb-6">
                      Protect your valuable data and systems with our comprehensive security solutions and best
                      practices. We help you identify vulnerabilities, implement robust security measures, and respond
                      effectively to threats.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span className="text-gray-600">Security assessment and vulnerability testing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span className="text-gray-600">Data protection and privacy compliance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span className="text-gray-600">Identity and access management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <span className="text-gray-600">Security monitoring and incident response</span>
                      </li>
                    </ul>
                    <MagneticButton href="/contact" className="bg-red-600 text-white px-6 py-3 text-sm font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                      <BlurImage
                        src="/placeholder.svg?height=500&width=700"
                        alt="Security Management"
                        width={700}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">How we work with you</h2>
                <p className="text-gray-600 text-lg">
                  Our proven methodology ensures successful outcomes and a seamless experience from start to finish.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal delay={100}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover-scale">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-blue-600">01</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Discovery</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business objectives, challenges, and requirements through in-depth
                    consultations and assessments.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover-scale">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-purple-600">02</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Strategy</h3>
                  <p className="text-gray-600">
                    We develop a tailored roadmap and solution architecture that aligns with your goals and addresses
                    your specific needs.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover-scale">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-green-600">03</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Implementation</h3>
                  <p className="text-gray-600">
                    Our expert team executes the plan with precision, following best practices and maintaining clear
                    communication throughout.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover-scale">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-orange-600">04</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Optimization</h3>
                  <p className="text-gray-600">
                    We continuously monitor, evaluate, and refine the solution to ensure optimal performance and maximum
                    value.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-black text-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white mb-6">
                  Ready to Get Started?
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Let's transform your data strategy</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Contact us today to discuss how our services can help your organization leverage data for competitive
                  advantage and growth.
                </p>
                <MagneticButton href="/contact" className="bg-white text-black px-8 py-4 text-sm font-medium">
                  Schedule a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
