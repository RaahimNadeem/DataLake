"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect } from 'react'

interface LanguageWrapperProps {
  children: React.ReactNode
}

export function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { language } = useLanguage()

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== 'undefined') {
      // Set the data-lang attribute on the html element
      document.documentElement.setAttribute('data-lang', language)
      // Also set it on the body element as backup
      document.body.setAttribute('data-lang', language)
      // Also update the lang attribute for accessibility
      document.documentElement.setAttribute('lang', language)
    }
  }, [language])

  return <>{children}</>
} 