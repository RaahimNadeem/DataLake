"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface BlurImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  placeholderSrc?: string
}

export default function BlurImage({ src, alt, width, height, className = "", placeholderSrc }: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  return (
    <div
      ref={containerRef}
      className={`blur-load ${isLoaded ? "loaded" : ""} ${className}`}
      style={{
        backgroundImage: placeholderSrc ? `url(${placeholderSrc})` : undefined,
      }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${className}`}
        onLoad={() => setIsLoaded(true)}
        priority
      />
    </div>
  )
}
