"use client"

import { Facebook, Instagram, Twitter, Linkedin, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "../scroll-reveal"

export default function ClientsSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative z-50 border-t border-primary/10">
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
            <div className="premium-card hover-scale">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Client 1</h4>
                  <p className="text-sm text-gray-500">Position 1</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            <div className="premium-card hover-scale">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Client 2</h4>
                  <p className="text-sm text-gray-500">Position 2</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
            <div className="premium-card hover-scale">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Twitter className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Client 3</h4>
                  <p className="text-sm text-gray-500">Position 3</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
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
  )
} 