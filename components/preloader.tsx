"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const greetings = [
  { text: "مرحبا", lang: "Arabic" },
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "French" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "Hola", lang: "Spanish" },
  { text: "Ciao", lang: "Italian" },
  { text: "Hej", lang: "Swedish" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "السلام علیکم", lang: "Urdu" },
]

export default function Preloader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 300) // Reduced to half of previous time (600ms -> 300ms)

    // Total duration for the preloader (9 greetings * 300ms + 150ms buffer)
    const totalDuration = greetings.length * 300 + 150

    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(onLoadingComplete, 800) // Keep exit animation the same
    }, totalDuration)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {greetings[currentGreeting].text}
            </h1>
            <p className="text-gray-400 text-sm">{greetings[currentGreeting].lang}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 