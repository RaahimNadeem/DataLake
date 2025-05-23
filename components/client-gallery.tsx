"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/placeholder.svg?height=500&width=500",
    alt: "A serene dog resting in a zen garden",
    caption: "Luna finding peace in the garden",
  },
  {
    src: "/placeholder.svg?height=500&width=500",
    alt: "A dog walking mindfully on a forest path",
    caption: "Max exploring the forest path",
  },
  {
    src: "/placeholder.svg?height=500&width=500",
    alt: "A dog sitting by a calm lake",
    caption: "Bailey enjoying the stillness of the lake",
  },
  {
    src: "/placeholder.svg?height=500&width=500",
    alt: "A dog among cherry blossoms",
    caption: "Daisy surrounded by cherry blossoms",
  },
  {
    src: "/placeholder.svg?height=500&width=500",
    alt: "A dog in meditation pose",
    caption: "Charlie in perfect meditation form",
  },
  {
    src: "/placeholder.svg?height=500&width=500",
    alt: "A dog watching sunset on the beach",
    caption: "Bella contemplating the sunset",
  },
]

export function ClientGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
          <p className="text-lg font-light">{images[currentIndex].caption}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#4a6d8c]" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  )
}
