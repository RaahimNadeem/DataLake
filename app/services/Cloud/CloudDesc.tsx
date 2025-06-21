import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const cloudPoints = [
  {
    title: 'Scale Seamlessly',
    desc: 'Grow your infrastructure automatically to meet demand without the complexity of traditional scaling. Our cloud solutions adapt to your business needs, ensuring optimal performance during peak times and cost efficiency during quiet periods.'
  },
  {
    title: 'Secure by Design',
    desc: 'Protect your data with enterprise-grade security built into every layer of your cloud infrastructure. From encryption at rest and in transit to advanced threat detection, we ensure your applications and data remain secure and compliant.'
  },
  {
    title: 'Reduce Complexity',
    desc: 'Simplify your IT operations with managed cloud services that handle the heavy lifting. Focus on your core business while we manage infrastructure, updates, security, and performance optimization—allowing you to innovate faster.'
  },
  {
    title: 'Drive Innovation',
    desc: 'Accelerate your digital transformation with modern cloud-native technologies. Deploy applications faster, experiment with new features, and leverage cutting-edge services like serverless computing and container orchestration.'
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

const CloudDesc = () => {
  return (
    <section className="w-full flex flex-col md:flex-row bg-white font-sans min-h-[120vh]">
      {/* Sticky Left Column */}
      <div className="md:w-1/2 flex flex-col justify-start items-start px-4 md:pl-24 pt-16 md:pt-32 sticky top-0 h-fit md:h-screen z-10">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-6xl font-extrabold text-black leading-tight mb-3 text-left max-w-lg">
            Why Choose Cloud Solutions?
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-lg md:text-2xl text-[#4a6d8c] font-light max-w-md mb-0 md:mb-2">
            Unlock agility, security, and cost efficiency.
          </p>
        </RevealAnimation>
      </div>
      {/* Right Column: Vertically spaced points */}
      <div className="md:w-1/2 flex flex-col gap-40 px-4 md:pr-24 py-16 md:py-32">
        {cloudPoints.map((point, index) => (
          <AnimatedPoint key={point.title} title={point.title} desc={point.desc} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CloudDesc; 