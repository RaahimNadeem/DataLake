import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";

const CyberCTA = () => (
  <section className="w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]">
    <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
      <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
        Businesses that overlook security face threats to their data,
        reputation, and bottom line. In a world of rising digital risks,
        protection isn’t a feature—it’s a foundation.
        <br />
        <br />
        Stay secure with Datalake and make cybersecurity your first line of
        defense.
      </h2>
    </RevealAnimation>
  </section>
);

export default CyberCTA;
