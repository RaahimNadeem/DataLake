"use client";

import Header from "@/components/ui/Header";
import CyberHero from "./CyberHero";
import CyberDesc from "./CyberDesc";
import Footer from "@/components/ui/footer";
import CyberWhyUS from "./CyberWhyUS";
import CyberCTA from "./CyberCTA";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CyberPage() {
  const { language } = useLanguage();
  
  return (
    <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <CyberHero />
      <CyberDesc />
      <CyberCTA />
      <CyberWhyUS />
      <Footer />
    </div>
  );
} 