"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { ReactNode } from 'react'

interface FontProviderProps {
  children: ReactNode
  className?: string
}

export function FontProvider({ children, className = '' }: FontProviderProps) {
  const { language } = useLanguage()
  
  const fontClass = language === 'ar' ? 'font-arabic' : 'font-sans'
  
  return (
    <div className={`${fontClass} ${className}`}>
      {children}
    </div>
  )
} 