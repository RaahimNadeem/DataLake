import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const SustainabilitySlogan = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#19232e] text-[#28394b]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            "Sustainability is not just good for the planet, it's good for business."
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-xl text-[#4a6d8c]">
            Let us help you build a sustainable business that thrives in the future.
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default SustainabilitySlogan;