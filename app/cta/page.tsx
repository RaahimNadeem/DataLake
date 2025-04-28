"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CtaPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in a real implementation
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
    // Show success message
    alert("Thank you for your message! We'll be in touch soon.")
  }

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
                  Get Started
                </span>
              </motion.div>

              <motion.h1
                custom={2}
                variants={fadeUpVariants}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              >
                Let's build your data-driven future together
              </motion.h1>

              <motion.p custom={3} variants={fadeUpVariants} className="text-lg md:text-xl text-gray-600 mb-10">
                Partner with Datalake to unlock the full potential of your data and drive innovation across your
                organization.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <ScrollReveal>
                <div>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                    Why Choose Datalake
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Transform your business with data-driven insights
                  </h2>
                  <p className="text-gray-600 mb-8">
                    At Datalake, we're committed to helping organizations harness the power of their data to drive
                    growth, innovation, and competitive advantage. Our team of experts brings deep technical knowledge
                    and industry experience to every engagement.
                  </p>

                  <div className="space-y-4 mb-10">
                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Expert Team</h3>
                        <p className="text-gray-600">
                          Our consultants bring years of experience across industries and technologies.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Tailored Solutions</h3>
                        <p className="text-gray-600">
                          We design custom solutions that address your specific business challenges.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">End-to-End Support</h3>
                        <p className="text-gray-600">
                          From strategy to implementation and beyond, we're with you every step of the way.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Proven Results</h3>
                        <p className="text-gray-600">
                          Our track record speaks for itself, with successful projects across diverse sectors.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-lg mb-2">Ready to get started?</h3>
                    <p className="text-gray-600 mb-4">
                      Fill out the form and one of our experts will contact you within 24 hours to discuss your needs.
                    </p>
                    <MagneticButton
                      href="#contact-form"
                      className="bg-blue-600 text-white px-6 py-3 text-sm font-medium"
                    >
                      Contact us now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div id="contact-form" className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        How can we help?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and requirements..."
                        rows={5}
                        required
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-black hover:bg-black/90">
                      Submit Request
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms" className="underline">
                        Terms of Service
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                  Success Stories
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">What our clients say</h2>
                <p className="text-gray-600 text-lg">
                  Don't just take our word for it. Here's what our clients have to say about working with Datalake.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">CTO, TechCorp</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Datalake transformed our data infrastructure, enabling us to make faster, more informed decisions.
                    Their expertise and dedication to our success were exceptional."
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
                      <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Michael Chen</h4>
                      <p className="text-sm text-gray-500">CIO, Global Retail Inc.</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Working with Datalake has been a game-changer for our organization. Their team helped us implement
                    a scalable data solution that grew with our business."
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
                      <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Emily Rodriguez</h4>
                      <p className="text-sm text-gray-500">Data Director, FinTech Solutions</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    "The expertise and commitment of the Datalake team exceeded our expectations. They delivered a
                    custom analytics solution that has become central to our operations."
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-black/5 text-black/70 mb-4">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Got questions?</h2>
                <p className="text-gray-600 text-lg">
                  Find answers to common questions about our services and how we can help your business.
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <ScrollReveal delay={100}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">What industries do you serve?</h3>
                    <p className="text-gray-600">
                      We work with clients across various industries, including finance, healthcare, retail,
                      manufacturing, technology, and more. Our solutions are adaptable to the specific needs and
                      challenges of each sector.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">How long does a typical project take?</h3>
                    <p className="text-gray-600">
                      Project timelines vary depending on scope and complexity. A small-scale implementation might take
                      4-6 weeks, while larger enterprise solutions can span several months. We'll provide a detailed
                      timeline during our initial consultation.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">Do you offer ongoing support after implementation?</h3>
                    <p className="text-gray-600">
                      Yes, we offer various support and maintenance packages to ensure your solution continues to
                      perform optimally. Our team can provide regular updates, monitoring, troubleshooting, and
                      continuous improvement recommendations.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">How do you ensure data security and privacy?</h3>
                    <p className="text-gray-600">
                      Security is a top priority in all our implementations. We follow industry best practices and
                      compliance standards, implement robust security measures, and provide recommendations for ongoing
                      security management.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold mb-2">What makes Datalake different from other providers?</h3>
                    <p className="text-gray-600">
                      Our combination of technical expertise, industry experience, and client-focused approach sets us
                      apart. We don't just implement technology; we partner with you to understand your business goals
                      and deliver solutions that drive real value.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={600}>
                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-4">Still have questions?</p>
                  <MagneticButton href="/contact" className="bg-black text-white px-6 py-3 text-sm font-medium">
                    Contact our team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
