"use client"

import { useEffect } from "react"
import { initSmoothScroll } from "@/utils/smooth-scroll"

interface SmoothScrollProviderProps {
  children: React.ReactNode
  offset?: number
}

export default function SmoothScrollProvider({
  children,
  offset = 0,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    // Initialize smooth scroll behavior
    initSmoothScroll(offset)
    
    // Add smooth scroll behavior to the html element
    document.documentElement.style.scrollBehavior = "smooth"
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = ""
    }
  }, [offset])

  return <>{children}</>
} 