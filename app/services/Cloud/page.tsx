"use client";

import Header from "@/components/ui/Header";
import CloudHero from "./CloudHero";
import CloudDesc from "./CloudDesc";
import Footer from "@/components/ui/footer";
import CloudWhyUS from "./CloudWhyUS";
import CloudCTA from "./CloudCTA";
import CloudProcess from "./CloudProcess";
import CloudSlogan from "./CloudSlogan";

export default function CloudPage() {
  return (
    <>
      <Header />
      <CloudHero />
      <CloudDesc />
      <CloudWhyUS />
      <CloudCTA />
      <CloudProcess />
      <CloudSlogan />
      <Footer />
    </>
  );
} 