"use client";

import Header from "@/components/ui/Header";
import DataHero from "./DataHero";
import DataDesc from "./DataDesc";
import Footer from "@/components/ui/footer";
import DataWhyUS from "./DataWhyUS";
import DataCTA from "./DataCTA";
import DataProcess from "./DataProcess";
import DataSlogan from "./DataSlogan";

export default function DataPage() {
  return (
    <>
      <Header />
      <DataHero />
      <DataDesc />
      <DataCTA />

      <DataWhyUS />
      {/* <DataProcess /> */}
      {/* <DataSlogan /> */}
      <Footer />
    </>
  );
} 