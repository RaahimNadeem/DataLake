"use client";

import Header from "@/components/ui/Header";
import AIHero from "./AIHero";
import AIDesc from "./AIDesc";
import Footer from "@/components/ui/footer";
import AIWhyUS from "./AIWhyUS";
import AICTA from "./AICTA";
import AIProcess from "./AIProcess";
import Slogan from "./AISlogan";
import { useLanguage } from '@/contexts/LanguageContext';

export default function AIPage() {
  const { language } = useLanguage();
  
  return (
    <div className={language === 'ar' ? 'font-arabic' : 'font-sans'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <AIHero />
      <AIDesc />
      <AICTA />
      <AIWhyUS />
      {/* <AIProcess /> */}
      {/* <Slogan /> */}
      <Footer />
    </div>
  );
}
