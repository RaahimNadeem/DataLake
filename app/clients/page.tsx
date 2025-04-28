"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Quote } from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import BlurImage from "@/components/blur-image"

export default function ClientsPage() {
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
                  Our Clients
                </span>
              </motion.div>

              <motion.h1
                custom={2}
                variants={fadeUpVariants}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              >
                Success stories from our valued clients
              </motion.h1>

              <motion.p custom={3} variants={fadeUpVariants} className="text-lg md:text-xl text-gray-600 mb-10">
                Discover how Datalake has helped organizations across industries transform their data operations and
                drive business growth.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Featured Clients */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                  Trusted By
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Industry leaders who trust us</h2>
                <p className="text-gray-600 text-lg">
                  We're proud to work with innovative companies across various sectors, helping them leverage data for
                  competitive advantage.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={`/placeholder.svg?text=Client+${i}&width=150&height=50`}
                      alt={`Client ${i}`}
                      width={150}
                      height={50}
                      className="h-10 md:h-12 w-auto"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                  Case Studies
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Real results for real businesses</h2>
                <p className="text-gray-600 text-lg">
                  Explore how our solutions have helped organizations overcome challenges and achieve their goals.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-16">
              {/* Case Study 1 */}
              <ScrollReveal>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                      <BlurImage
                        src="/placeholder.svg?height=500&width=700"
                        alt="TechCorp Case Study"
                        width={700}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/placeholder.svg?text=Logo&width=60&height=60"
                        alt="TechCorp Logo"
                        width={60}
                        height={60}
                        className="mr-4"
                      />
                      <h3 className="text-2xl font-bold">TechCorp</h3>
                    </div>
                    <h4 className="text-xl font-bold mb-4">
                      Transforming data infrastructure for faster decision-making
                    </h4>
                    <p className="text-gray-600 mb-6">
                      TechCorp, a leading software company, needed to modernize their data infrastructure to support
                      rapid growth and enable faster decision-making. Datalake implemented a comprehensive solution that
                      streamlined data processing and provided real-time insights.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Challenge:</span>
                          <p className="text-gray-600">Legacy systems causing data silos and slow reporting</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Solution:</span>
                          <p className="text-gray-600">Modern data platform with real-time analytics capabilities</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Results:</span>
                          <p className="text-gray-600">
                            70% faster reporting and 35% increase in data-driven decisions
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Quote className="w-10 h-10 text-blue-100 mr-4" />
                      <blockquote className="italic text-gray-600">
                        "Datalake transformed our data infrastructure, enabling us to make faster, more informed
                        decisions. Their expertise and dedication to our success were exceptional."
                      </blockquote>
                    </div>

                    <div className="mt-8">
                      <MagneticButton
                        href="/case-studies/techcorp"
                        className="bg-blue-600 text-white px-6 py-3 text-sm font-medium"
                      >
                        Read full case study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Case Study 2 */}
              <ScrollReveal>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/placeholder.svg?text=Logo&width=60&height=60"
                        alt="Global Retail Inc. Logo"
                        width={60}
                        height={60}
                        className="mr-4"
                      />
                      <h3 className="text-2xl font-bold">Global Retail Inc.</h3>
                    </div>
                    <h4 className="text-xl font-bold mb-4">Scaling data operations to support global expansion</h4>
                    <p className="text-gray-600 mb-6">
                      Global Retail Inc. was expanding rapidly into new markets and needed a scalable data solution that
                      could grow with their business. Datalake designed and implemented a cloud-based data platform that
                      supported their international operations.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Challenge:</span>
                          <p className="text-gray-600">Fragmented data across regions and limited scalability</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Solution:</span>
                          <p className="text-gray-600">Cloud-based data platform with global accessibility</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Results:</span>
                          <p className="text-gray-600">
                            Unified view of global operations and 50% reduction in IT costs
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Quote className="w-10 h-10 text-purple-100 mr-4" />
                      <blockquote className="italic text-gray-600">
                        "Working with Datalake has been a game-changer for our organization. Their team helped us
                        implement a scalable data solution that grew with our business."
                      </blockquote>
                    </div>

                    <div className="mt-8">
                      <MagneticButton
                        href="/case-studies/global-retail"
                        className="bg-purple-600 text-white px-6 py-3 text-sm font-medium"
                      >
                        Read full case study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="relative order-1 lg:order-2">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                      <BlurImage
                        src="/placeholder.svg?height=500&width=700"
                        alt="Global Retail Inc. Case Study"
                        width={700}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Case Study 3 */}
              <ScrollReveal>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-xl opacity-20 animate-pulse" />
                    <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                      <BlurImage
                        src="/placeholder.svg?height=500&width=700"
                        alt="FinTech Solutions Case Study"
                        width={700}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/placeholder.svg?text=Logo&width=60&height=60"
                        alt="FinTech Solutions Logo"
                        width={60}
                        height={60}
                        className="mr-4"
                      />
                      <h3 className="text-2xl font-bold">FinTech Solutions</h3>
                    </div>
                    <h4 className="text-xl font-bold mb-4">Building a secure, compliant analytics platform</h4>
                    <p className="text-gray-600 mb-6">
                      FinTech Solutions needed a robust analytics platform that met strict financial industry
                      regulations while providing powerful insights. Datalake delivered a secure, compliant solution
                      that enhanced their analytical capabilities.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Challenge:</span>
                          <p className="text-gray-600">Balancing regulatory compliance with advanced analytics needs</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Solution:</span>
                          <p className="text-gray-600">
                            Secure, compliant analytics platform with advanced capabilities
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Results:</span>
                          <p className="text-gray-600">
                            100% compliance with regulations and 40% improvement in risk assessment
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Quote className="w-10 h-10 text-green-100 mr-4" />
                      <blockquote className="italic text-gray-600">
                        "The expertise and commitment of the Datalake team exceeded our expectations. They delivered a
                        custom analytics solution that has become central to our operations."
                      </blockquote>
                    </div>

                    <div className="mt-8">
                      <MagneticButton
                        href="/case-studies/fintech-solutions"
                        className="bg-green-600 text-white px-6 py-3 text-sm font-medium"
                      >
                        Read full case study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-16">
                <MagneticButton href="/case-studies" className="bg-black text-white px-8 py-4 text-sm font-medium">
                  View all case studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                  Testimonials
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">What our clients say</h2>
                <p className="text-gray-600 text-lg">
                  Don't just take our word for it. Here's what our clients have to say about working with Datalake.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  title: "CTO, TechCorp",
                  quote:
                    "Datalake transformed our data infrastructure, enabling us to make faster, more informed decisions. Their expertise and dedication to our success were exceptional.",
                },
                {
                  name: "Michael Chen",
                  title: "CIO, Global Retail Inc.",
                  quote:
                    "Working with Datalake has been a game-changer for our organization. Their team helped us implement a scalable data solution that grew with our business.",
                },
                {
                  name: "Emily Rodriguez",
                  title: "Data Director, FinTech Solutions",
                  quote:
                    "The expertise and commitment of the Datalake team exceeded our expectations. They delivered a custom analytics solution that has become central to our operations.",
                },
                {
                  name: "David Kim",
                  title: "VP of Technology, HealthTech",
                  quote:
                    "Datalake's healthcare data solutions helped us improve patient outcomes while maintaining strict compliance with regulations. Their industry knowledge was invaluable.",
                },
                {
                  name: "Jennifer Lee",
                  title: "Analytics Manager, E-commerce Plus",
                  quote:
                    "The insights we've gained from our Datalake solution have directly contributed to a 25% increase in customer retention and significant revenue growth.",
                },
                {
                  name: "Robert Martinez",
                  title: "COO, Manufacturing Innovations",
                  quote:
                    "Datalake helped us optimize our production processes through advanced analytics, resulting in reduced costs and improved quality control across our facilities.",
                },
              ].map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} delay={index * 100}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="flex-1">
                      <Quote className="w-10 h-10 text-gray-100 mb-4" />
                      <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                      <div className="mr-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-black text-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white mb-6">
                  Join Our Client Community
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
                  Ready to transform your data strategy?
                </h2>
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
