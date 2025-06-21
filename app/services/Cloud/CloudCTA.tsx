import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const CloudCTA = () => (
  <section className="w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]">
    <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
      <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
      Companies that resist the cloud risk slower operations, higher costs, and limited scalability. Modern businesses are built in the cloud—secure, agile, and ready for anything.
      <br />
      <br />
Stay future-proof with Datalake and unlock the full potential of cloud computing.

      </h2>
    </RevealAnimation>
  </section>
);

export default CloudCTA; 