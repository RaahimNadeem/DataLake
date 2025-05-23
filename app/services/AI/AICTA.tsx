import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const AICTA = () => (
  <section className="w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]">
    <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
      <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
        Don't let your business fall behind—embracing AI is no longer optional, it's essential. Companies that ignore AI risk losing their competitive edge, missing out on efficiency, innovation, and growth. Stay ahead with Datalake and make AI your advantage.
      </h2>
    </RevealAnimation>
  </section>
);

export default AICTA; 