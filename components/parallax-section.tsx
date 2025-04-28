"use client"

import type React from "react"

import { useRef, useEffect, type ReactNode } from "react"

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxLayer({ children, speed = 0.1, className = "" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      const yPos = -(scrollY * speed)
      ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`parallax-layer ${className}`}>
      {children}
    </div>
  )
}

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function ParallaxSection({ children, className = "", style }: ParallaxSectionProps) {
  return (
    <div className={`parallax-container ${className}`} style={style}>
      {children}
    </div>
  )
}
