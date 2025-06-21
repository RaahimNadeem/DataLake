import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";

const SustainabilityCTA = () => (
  <section className="w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]">
    <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
      <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
      At Datalake, we help you understand your environmental impact, adapt information systems to environmental challenges, and leverage digital tools to build responsible digital services that drive sustainable growth.
      <br />
      <br />
      Think sustainable. Act responsibly. Build for the future.       
      </h2>
    </RevealAnimation>
  </section>
);

export default SustainabilityCTA;
