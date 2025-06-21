import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const DigitalSlogan = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#19232e] text-[#28394b]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            "The best digital products don't just solve problems, they create possibilities."
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-xl text-[#4a6d8c]">
            Let us help you build digital solutions that transform your business and delight your users.
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default DigitalSlogan;