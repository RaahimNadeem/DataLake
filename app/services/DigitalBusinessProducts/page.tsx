"use client";

import Header from "@/components/ui/Header";
import DigitalHero from "./DigitalHero";
import DigitalDesc from "./DigitalDesc";
import Footer from "@/components/ui/footer";
import DigitalWhyUS from "./DigitalWhyUS";
import DigitalCTA from "./DigitalCTA";
import DigitalProcess from "./DigitalProcess";
import DigitalSlogan from "./DigitalSlogan";

export default function DataPage() {
  return (
    <>
      <Header />
      <DigitalHero />
      <DigitalDesc />
      <DigitalCTA />

      <DigitalWhyUS />
      {/* <DigitalProcess /> */}
      {/* <DigitalSlogan /> */}
      <Footer />
    </>
  );
} 