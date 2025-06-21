import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const BusinessAutomationCTA = () => (
  <section className="w-full min-h-[70vh] flex justify-center items-center py-12 px-16 bg-[#f6f8fa]">
    <RevealAnimation direction="up" delay={0.2} className="w-full text-left">
      <h2 className="text-3xl max-w-3xl md:text-4xl font-bold mb-4 text-[#101424]">
      Companies that delay automation waste time, money, and potential. Streamlined workflows, reduced errors, and faster decisions set successful businesses apart.
      <br />
      <br />
      Stay ahead with Datalake and make automation your competitive edge.      </h2>
    </RevealAnimation>
  </section>
);

export default BusinessAutomationCTA; 