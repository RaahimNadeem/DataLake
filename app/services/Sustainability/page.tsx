"use client";

import Header from "@/components/ui/Header";
import SustainabilityHero from "./SustainabilityHero";
import SustainabilityDesc from "./SustainabilityDesc";
import Footer from "@/components/ui/footer";
import SustainabilityWhyUS from "./SustainabilityWhyUS";
import SustainabilityCTA from "./SustainabilityCTA";
import SustainabilityProcess from "./SustainabilityProcess";
import SustainabilitySlogan from "./SustainabilitySlogan";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SustainabilityPage() {
  const { language } = useLanguage();

  return (
    <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <SustainabilityHero />
      <SustainabilityDesc />
      <SustainabilityProcess />
      <SustainabilitySlogan />
      <SustainabilityCTA />
      <SustainabilityWhyUS />
      <Footer />
    </div>
  );
} 