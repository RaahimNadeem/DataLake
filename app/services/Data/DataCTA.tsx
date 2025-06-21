import React from "react";
import RevealAnimation from "../../components/ui/RevealAnimation";

const DataCTA = () => (
  <section className="w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]">
    <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
      <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
        Businesses that ignore data miss critical insights, make slower
        decisions, and fall behind faster. Real growth comes from smart,
        informed action. <br />
        <br />
        Stay ahead with Datalake and turn your data into your sharpest
        advantage.
      </h2>
    </RevealAnimation>
  </section>
);

export default DataCTA;
