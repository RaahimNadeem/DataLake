import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";

const DigitalCTA = () => (
  <section className="w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]">
    <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
      <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
      Transform your business with cutting-edge digital solutions. At Datalake, we help you craft innovative products, design standout customer experiences, and build scalable digital capabilities that fuel long-term growth in a fast-changing world.
      <br />
      <br />
      Stay relevant. Stay agile. Stay ahead.       
      </h2>
    </RevealAnimation>
  </section>
);

export default DigitalCTA;
