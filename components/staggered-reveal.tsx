"use client"

import { useEffect, useRef, type ReactNode, Children, isValidElement } from "react"

interface StaggeredRevealProps {
  children: ReactNode
  className?: string
  baseDelay?: number
  staggerDelay?: number
  threshold?: number
}

export default function StaggeredReveal({
  children,
  className = "",
  baseDelay = 0,
  staggerDelay = 100,
  threshold = 0.1,
}: StaggeredRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const childElements = entry.target.querySelectorAll(".staggered-item")
            childElements.forEach((child, index) => {
              setTimeout(
                () => {
                  child.classList.add("visible")
                },
                baseDelay + index * staggerDelay,
              )
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [baseDelay, staggerDelay, threshold])

  const staggeredChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return (
        <div
          className={`staggered-item ${child.props.className || ""}`}
          style={{ transitionDelay: `${baseDelay + index * staggerDelay}ms` }}
        >
          {child}
        </div>
      )
    }
    return child
  })

  return (
    <div ref={containerRef} className={className}>
      {staggeredChildren}
    </div>
  )
}
