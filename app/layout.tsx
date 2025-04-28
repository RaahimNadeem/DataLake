import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DataLake - Your Data Management Solution",
  description: "Streamline your data management with DataLake's powerful platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider offset={80}>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
