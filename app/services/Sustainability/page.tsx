"use client";

import Header from "@/components/ui/Header";
import SustainabilityHero from "./SustainabilityHero";
import SustainabilityDesc from "./SustainabilityDesc";
import Footer from "@/components/ui/footer";
import SustainabilityWhyUS from "./SustainabilityWhyUS";
import SustainabilityCTA from "./SustainabilityCTA";
import SustainabilityProcess from "./SustainabilityProcess";
import SustainabilitySlogan from "./SustainabilitySlogan";

export default function DataPage() {
  return (
    <>
      <Header />
      <SustainabilityHero />
      <SustainabilityDesc />
      <SustainabilityCTA />

      <SustainabilityWhyUS />
      {/* <SustainabilityProcess /> */}
      {/* <SustainabilitySlogan /> */}
      <Footer />
    </>
  );
} 