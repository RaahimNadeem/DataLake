import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const aiPoints = [
  {
    title: 'Automate Smarter',
    desc: 'Empower your team to focus on creative and strategic work by letting AI take care of repetitive, time-consuming tasks. From data entry to scheduling and customer support, automation streamlines your operations and reduces human error, saving you time and money.'
  },
  {
    title: 'See the Future',
    desc: 'Leverage advanced AI analytics to uncover hidden patterns, forecast trends, and anticipate market changes before they happen. Make proactive, data-driven decisions with confidence, and stay ahead of your competition in a rapidly evolving business landscape.'
  },
  {
    title: 'Delight Customers',
    desc: 'Deliver hyper-personalized experiences at scale. AI enables you to understand customer needs, predict preferences, and provide instant, tailored recommendations and support—building loyalty and driving satisfaction with every interaction.'
  },
  {
    title: 'Grow Without Limits',
    desc: 'Scale your business seamlessly without a linear increase in resources or costs. AI optimizes workflows, adapts to new challenges, and helps you expand into new markets, all while maintaining efficiency and quality as you grow.'
  }
];

const AnimatedPoint = ({ title, desc, index }: { title: string; desc: string; index: number }) => {
  return (
    <RevealAnimation direction="right" delay={0.2 * index} className="w-full">
      <div>
        <h3 className="text-4xl md:text-5xl font-medium text-[#101424] mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-2xl md:text-3xl text-[#4a6d8c] font-light max-w-3xl">
          {desc}
        </p>
      </div>
    </RevealAnimation>
  );
};

const AIDesc = () => {
  return (
    <section className="w-full flex flex-col rounded-t-3xl md:flex-row bg-white font-sans min-h-[120vh]">
      {/* Sticky Left Column */}
      <div className="md:w-1/2 flex flex-col justify-start items-start px-4 md:pl-24 pt-16 md:pt-32 sticky top-0 h-fit md:h-screen z-10">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-6xl font-extrabold text-black leading-tight mb-3 text-left max-w-lg">
            Why Use AI in Your Business?
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-lg md:text-2xl text-[#4a6d8c] font-light max-w-md mb-0 md:mb-2">
            Unlock speed, insight, and growth—effortlessly.
          </p>
        </RevealAnimation>
      </div>
      {/* Right Column: Vertically spaced points */}
      <div className="md:w-1/2 flex flex-col gap-40 px-4 md:pr-24 py-16 md:py-32">
        {aiPoints.map((point, index) => (
          <AnimatedPoint key={point.title} title={point.title} desc={point.desc} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AIDesc;
