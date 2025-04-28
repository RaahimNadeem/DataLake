"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()

  // const navLinks = [
  //   { name: "Home", path: "/" },
  //   { name: "About Us", path: "/about" },
  //   { name: "Services", path: "/services" },
  //   { name: "Contact Us", path: "/cta" },
  //   { name: "Clients", path: "/clients" },
  // ]

  const navLinks = [
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Clients", path: "#clients" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const element = document.querySelector(path)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)

      // Calculate scroll progress for indicator
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollPosition / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4 md:py-6",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" stroke="black" strokeWidth="2" fill="white" />
                <path d="M50 30L70 40V60L50 70L30 60V40L50 30Z" stroke="black" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight">Datalake</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.path)}
                className={cn(
                  "nav-link text-sm font-medium transition-colors",
                  pathname === link.path ? "text-black active" : "text-gray-600 hover:text-black",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/cta"
            className={cn(
              "hidden md:inline-flex items-center px-4 py-2 ml-4 text-sm font-medium rounded-full bg-black text-white hover:bg-black/80 transition-colors duration-300",
              isScrolled ? "shadow-sm" : "",
            )}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-8 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.path)}
                className={cn("text-lg font-medium", pathname === link.path ? "text-black" : "text-gray-600")}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
