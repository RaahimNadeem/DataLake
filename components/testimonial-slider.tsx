"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Luna",
    owner: "Sarah M.",
    quote:
      "Satori has transformed our walks from rushed obligations to mindful experiences. Luna is noticeably calmer after her time with them.",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Max",
    owner: "James T.",
    quote:
      "The thoughtful approach to Max's anxiety has made all the difference. He's now comfortable being left with a sitter, which was unimaginable before.",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Bailey",
    owner: "Emma L.",
    quote:
      "Bailey has always been high-energy, but Satori has helped her find moments of calm. Their mindful approach is exactly what we needed.",
    image: "/images/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "Charlie",
    owner: "Michael R.",
    quote:
      "The care and attention to Charlie's individual needs has been remarkable. It's not just pet care, it's a holistic approach to wellbeing.",
    image: "/images/testimonial-4.jpg",
  },
]

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div className="relative aspect-[16/9] md:aspect-[2/1]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 relative">
                <Image
                  src={testimonials[current].image || "/placeholder.svg?height=600&width=600"}
                  alt={`${testimonials[current].name} with their owner`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:bg-gradient-to-r md:from-black/30 md:via-black/20 md:to-transparent"></div>
              </div>

              <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.93333 12.2667 6.13333 10.5333C7.33333 8.8 9.06667 7.33333 11.3333 6.13333L13.3333 8.66667C11.7333 9.46667 10.5333 10.3333 9.73333 11.2667C8.93333 12.2 8.53333 13.0667 8.53333 13.8667C8.53333 14.2 8.6 14.4667 8.73333 14.6667C8.86667 14.8667 9.06667 15 9.33333 15.0667C10.0667 15.2 10.6667 15.5333 11.1333 16.0667C11.6 16.6 11.8333 17.2667 11.8333 18.0667C11.8333 19 11.5 19.8 10.8333 20.4667C10.1667 21.0667 9.33333 21.3333 8.33333 21.3333H9.33333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14 16.9333 12.2667 18.1333 10.5333C19.3333 8.8 21.0667 7.33333 23.3333 6.13333L25.3333 8.66667C23.7333 9.46667 22.5333 10.3333 21.7333 11.2667C20.9333 12.2 20.5333 13.0667 20.5333 13.8667C20.5333 14.2 20.6 14.4667 20.7333 14.6667C20.8667 14.8667 21.0667 15 21.3333 15.0667C22.0667 15.2 22.6667 15.5333 23.1333 16.0667C23.6 16.6 23.8333 17.2667 23.8333 18.0667C23.8333 19 23.5 19.8 22.8333 20.4667C22.1667 21.0667 21.3333 21.3333 20.3333 21.3333H21.3333Z"
                      fill="#4a6d8c"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>

                <blockquote className="font-serif text-2xl font-light text-gray-800 italic mb-8">
                  {testimonials[current].quote}
                </blockquote>

                <div>
                  <p className="font-medium text-gray-900">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-600">& {testimonials[current].owner}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === current ? "bg-[#4a6d8c]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  )
}
