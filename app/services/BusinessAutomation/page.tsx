"use client";

import Header from "@/components/ui/Header";
import BusinessAutomationHero from "./BusinessAutomationHero";
import BusinessAutomationDesc from "./BusinessAutomationDesc";
import Footer from "@/components/ui/footer";
import BusinessAutomationWhyUS from "./BusinessAutomationWhyUS";
import BusinessAutomationCTA from "./BusinessAutomationCTA";
import BusinessAutomationProcess from "./BusinessAutomationProcess";
import BusinessAutomationSlogan from "./BusinessAutomationSlogan";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BusinessAutomationPage() {
  const { language } = useLanguage();
  
  return (
    <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <BusinessAutomationHero />
      <BusinessAutomationDesc />
      <BusinessAutomationCTA />
      <BusinessAutomationWhyUS />
      {/* <BusinessAutomationProcess /> */}
      {/* <BusinessAutomationSlogan /> */}
      <Footer />
    </div>
  );
} 