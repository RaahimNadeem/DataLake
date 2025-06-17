"use client";

import Header from "@/components/ui/Header";
import AIHero from "./AIHero";
import AIDesc from "./AIDesc";
import Footer from "@/components/ui/footer";
import AIWhyUS from "./AIWhyUS";
import AICTA from "./AICTA";
import AIProcess from "./AIProcess";
import Slogan from "./AISlogan";

export default function AIPage() {
  return (
    <>
      <Header />
      <AIHero />
      <AIDesc />
      <AIWhyUS />
      <AICTA />
      <AIProcess />
      <Slogan />
      <Footer />
    </>
  );
}
