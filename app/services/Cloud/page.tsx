"use client";

import Header from "@/components/ui/Header";
import CloudHero from "./CloudHero";
import CloudDesc from "./CloudDesc";
import Footer from "@/components/ui/footer";
import CloudWhyUS from "./CloudWhyUS";
import CloudCTA from "./CloudCTA";
import CloudProcess from "./CloudProcess";
import CloudSlogan from "./CloudSlogan";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CloudPage() {
  const { language } = useLanguage();
  
  return (
    <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <CloudHero />
      <CloudDesc />
      <CloudCTA />
      <CloudWhyUS />

      {/* <CloudProcess /> */}
      {/* <CloudSlogan /> */}
      <Footer />
    </div>
  );
} 