"use client";

import Header from "@/components/ui/Header";
import DataHero from "./DataHero";
import DataDesc from "./DataDesc";
import Footer from "@/components/ui/footer";
import DataWhyUS from "./DataWhyUS";
import DataCTA from "./DataCTA";
import DataProcess from "./DataProcess";
import DataSlogan from "./DataSlogan";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DataPage() {
  const { language } = useLanguage();

  return (
    <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <DataHero />
      <DataDesc />
      <DataProcess />
      {/* <DataSlogan /> */}
      <DataCTA />
      <DataWhyUS />
      <Footer />
    </div>
  );
} 