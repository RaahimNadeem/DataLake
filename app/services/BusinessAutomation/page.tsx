"use client";

import Header from "@/components/ui/Header";
import BusinessAutomationHero from "./BusinessAutomationHero";
import BusinessAutomationDesc from "./BusinessAutomationDesc";
import Footer from "@/components/ui/footer";
import BusinessAutomationWhyUS from "./BusinessAutomationWhyUS";
import BusinessAutomationCTA from "./BusinessAutomationCTA";
import BusinessAutomationProcess from "./BusinessAutomationProcess";
import BusinessAutomationSlogan from "./BusinessAutomationSlogan";

export default function BusinessAutomationPage() {
  return (
    <>
      <Header />
      <BusinessAutomationHero />
      <BusinessAutomationDesc />
      <BusinessAutomationCTA />
      <BusinessAutomationWhyUS />
      {/* <BusinessAutomationProcess /> */}
      {/* <BusinessAutomationSlogan /> */}
      <Footer />
    </>
  );
} 