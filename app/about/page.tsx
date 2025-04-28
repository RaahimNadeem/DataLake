"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Users, Award, Briefcase, Clock } from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import BlurImage from "@/components/blur-image"

export default function AboutPage() {
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
                  About Datalake
                </span>
              </motion.div>

              <motion.h1
                custom={2}
                variants={fadeUpVariants}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              >
                We are a team of data experts and technology enthusiasts
              </motion.h1>

              <motion.p custom={3} variants={fadeUpVariants} className="text-lg md:text-xl text-gray-600 mb-10">
                Our ambition is to meet the different needs of companies by offering consulting and supporting
                activities to help plan, implement, secure, manage, and optimize the IT environment.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 relative max-w-5xl mx-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-xl opacity-20 animate-pulse" />
              <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-2xl">
                <BlurImage
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Datalake Team"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <ScrollReveal>
                <div>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                    Our Story
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">From vision to reality: The Datalake journey</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Founded with a vision to transform how businesses leverage their data, Datalake has grown into a
                      leading analytics and technology company serving clients across industries.
                    </p>
                    <p>
                      Our journey began with a simple belief: that data, when properly harnessed, can drive
                      unprecedented business value and innovation. This belief has guided our growth and shaped our
                      approach to every client engagement.
                    </p>
                    <p>
                      Today, we're proud to be a digital service company specializing in digital engineering.
                      Particularly agile, we promote technological excellence and place creativity at the heart of our
                      missions. Our areas of expertise revolve around development, IT production engineering, and big
                      data.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <Users className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">120+</h3>
                    <p className="text-gray-600">Expert consultants</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <Award className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">15+</h3>
                    <p className="text-gray-600">Industry awards</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <Briefcase className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">200+</h3>
                    <p className="text-gray-600">Successful projects</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <Clock className="w-10 h-10 text-orange-600 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">10+</h3>
                    <p className="text-gray-600">Years of experience</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-black text-white">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white mb-4">
                  Our Values
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">The principles that guide us</h2>
                <p className="text-gray-300 text-lg">
                  Expertise, commitment, and efficiency are the core values of our consultants, and which make Datalake
                  your partner for the success of your projects.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expertise</h3>
                  <p className="text-gray-300">
                    We bring deep technical knowledge and industry experience to every engagement, ensuring the highest
                    quality solutions.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Commitment</h3>
                  <p className="text-gray-300">
                    We're dedicated to our clients' success, going above and beyond to deliver results that exceed
                    expectations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                  <p className="text-gray-300">
                    We optimize processes and solutions to deliver maximum value with minimal waste, respecting our
                    clients' time and resources.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray-300">
                    We continuously explore new technologies and approaches to solve complex problems and create
                    competitive advantages.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                  <p className="text-gray-300">
                    We work closely with our clients, fostering partnerships built on trust, transparency, and shared
                    goals.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Integrity</h3>
                  <p className="text-gray-300">
                    We uphold the highest ethical standards in all our interactions, building lasting relationships
                    based on honesty and respect.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                  Our Team
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet the experts behind Datalake</h2>
                <p className="text-gray-600 text-lg">
                  Our diverse team of specialists brings together expertise across data science, engineering, and
                  business strategy.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Alex Morgan", title: "CEO & Founder", img: "/placeholder.svg?text=AM&width=400&height=400" },
                { name: "Sophia Chen", title: "CTO", img: "/placeholder.svg?text=SC&width=400&height=400" },
                {
                  name: "David Kim",
                  title: "Head of Data Science",
                  img: "/placeholder.svg?text=DK&width=400&height=400",
                },
                {
                  name: "Olivia Martinez",
                  title: "Lead Engineer",
                  img: "/placeholder.svg?text=OM&width=400&height=400",
                },
                {
                  name: "James Wilson",
                  title: "Client Success Director",
                  img: "/placeholder.svg?text=JW&width=400&height=400",
                },
                {
                  name: "Emma Thompson",
                  title: "Head of Strategy",
                  img: "/placeholder.svg?text=ET&width=400&height=400",
                },
              ].map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover-scale">
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <BlurImage
                        src={member.img}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.title}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={800}>
              <div className="mt-16 text-center">
                <MagneticButton href="/careers" className="bg-black text-white px-8 py-4 text-sm font-medium">
                  Join our team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your data strategy?</h2>
                <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
                  Let's discuss how Datalake can help your organization leverage data for competitive advantage and
                  growth.
                </p>
                <MagneticButton href="/contact" className="bg-white text-black px-8 py-4 text-sm font-medium">
                  Get in touch
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
