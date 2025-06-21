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
  icons: {
    icon: '/Logo.svg',
    shortcut: '/Logo.svg',
    apple: '/Logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/Logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/Logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/Logo.svg" />
      </head>
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
