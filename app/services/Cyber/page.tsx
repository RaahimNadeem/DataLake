"use client";

import Header from "@/components/ui/Header";
import CyberHero from "./CyberHero";
import CyberDesc from "./CyberDesc";
import Footer from "@/components/ui/footer";
import CyberWhyUS from "./CyberWhyUS";
import CyberCTA from "./CyberCTA";
import CyberProcess from "./CyberProcess";
import CyberSlogan from "./CyberSlogan";

export default function CyberPage() {
  return (
    <>
      <Header />
      <CyberHero />
      <CyberDesc />
      <CyberWhyUS />
      <CyberCTA />
      <CyberProcess />
      <CyberSlogan />
      <Footer />
    </>
  );
} 