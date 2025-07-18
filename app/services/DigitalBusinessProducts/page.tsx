"use client";

import Header from "@/components/ui/Header";
import DigitalHero from "./DigitalHero";
import DigitalDesc from "./DigitalDesc";
import Footer from "@/components/ui/footer";
import DigitalWhyUS from "./DigitalWhyUS";
import DigitalCTA from "./DigitalCTA";
import DigitalProcess from "./DigitalProcess";
import DigitalSlogan from "./DigitalSlogan";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DigitalBusinessProductsPage() {
  const { language } = useLanguage();

  return (
    <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <DigitalHero />
      <DigitalDesc />
      <DigitalProcess />
      <DigitalSlogan />
      <DigitalCTA />
      <DigitalWhyUS />
      <Footer />
    </div>
  );
}
