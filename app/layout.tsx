import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Georama as Georgia, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const georgia = Georgia({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "DataLake - Data Analytics for Modern Enterprises",
  description: "Enterprise-grade data solutions for innovators and industry leaders",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen font-sans antialiased", inter.variable, georgia.variable)}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
