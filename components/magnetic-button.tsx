"use client"

import { useState, useRef, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
}

export default function MagneticButton({ children, className, strength = 30, onClick, href }: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = (clientX - (left + width / 2)) / (strength / 2)
    const y = (clientY - (top + height / 2)) / (strength / 2)

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  const buttonContent = (
    <div
      ref={ref}
      className={cn(
        "magnetic-button inline-flex items-center justify-center rounded-full transition-all duration-300",
        hovered ? "scale-105" : "scale-100",
        className,
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${hovered ? "scale(1.05)" : "scale(1)"}`,
        boxShadow: hovered ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="relative z-10 flex items-center justify-center">{children}</div>
      {hovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-sm" />
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}
