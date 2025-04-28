"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  scale?: boolean
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  direction = "up",
  scale = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold])

  const getTransformStyle = () => {
    let transform = ""

    switch (direction) {
      case "up":
        transform = "translateY(30px)"
        break
      case "down":
        transform = "translateY(-30px)"
        break
      case "left":
        transform = "translateX(30px)"
        break
      case "right":
        transform = "translateX(-30px)"
        break
      default:
        transform = "none"
    }

    if (scale) {
      transform += " scale(0.95)"
    }

    return transform
  }

  return (
    <div
      ref={ref}
      className={`section-reveal ${className}`}
      style={{
        transform: getTransformStyle(),
        opacity: 0,
        transition:
          "transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)",
      }}
    >
      {children}
    </div>
  )
}
