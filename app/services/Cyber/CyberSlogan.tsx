import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const CyberSlogan = () => {
  return (
    <section className="w-full py-16 md:py-24  bg-[#19232e] text-[#28394b]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            "Security is not a cost, it's an investment in your business future."
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-xl text-[#4a6d8c]">
            Let us help you build a resilient security foundation for your digital transformation.
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CyberSlogan;