const fs = require('fs');
const path = require('path');

const services = [
  {
    name: 'BusinessAutomation',
    displayName: 'Business Automation',
    image: '/services/BusinessAutomation.jpg',
    whyUsTitle: 'Why Choose Datalake for Business Automation?',
    slides: [
      {
        title: 'Process Optimization Experts',
        desc: 'Our team specializes in analyzing and optimizing business processes to identify automation opportunities that deliver maximum ROI and operational efficiency.'
      },
      {
        title: 'End-to-End Implementation',
        desc: 'From process analysis to deployment and ongoing optimization, we handle every aspect of your automation journey with proven methodologies and best practices.'
      },
      {
        title: 'Technology Agnostic',
        desc: 'We select the right automation tools and platforms for your specific needs, whether it\'s RPA, workflow automation, or custom integrations.'
      }
    ],
    processTitle: 'Our Automation Journey',
    steps: [
      { title: 'Discovery', desc: 'We analyze your current processes to identify automation opportunities and prioritize based on impact and feasibility.' },
      { title: 'Design', desc: 'We design automated workflows and select the right technologies to optimize your specific business processes.' },
      { title: 'Development', desc: 'Our experts build and configure automation solutions, ensuring seamless integration with your existing systems.' },
      { title: 'Deployment', desc: 'We implement automation solutions with minimal disruption, providing training and support for your team.' },
      { title: 'Optimization', desc: 'Ongoing monitoring and refinement to ensure your automation continues to deliver maximum value and efficiency.' }
    ],
    ctaTitle: 'Ready to Automate Your Operations?',
    ctaDesc: 'Let\'s discuss how our automation solutions can streamline your business processes and boost productivity.',
    slogan: '"Automation is not about replacing people, it\'s about amplifying their potential."',
    sloganDesc: 'Let us help you unlock the full potential of your team through intelligent automation.'
  },
  {
    name: 'Cyber',
    displayName: 'Cybersecurity',
    image: '/services/Cyber.jpg',
    whyUsTitle: 'Why Choose Datalake for Cybersecurity?',
    slides: [
      {
        title: 'Security Experts',
        desc: 'Our certified security professionals bring deep expertise in threat intelligence, incident response, and security architecture to protect your organization.'
      },
      {
        title: 'Comprehensive Protection',
        desc: 'We provide end-to-end security solutions covering network security, application security, data protection, and compliance management.'
      },
      {
        title: 'Proactive Defense',
        desc: 'Stay ahead of threats with our proactive security approach, including threat hunting, vulnerability assessments, and security awareness training.'
      }
    ],
    processTitle: 'Our Security Implementation Process',
    steps: [
      { title: 'Assessment', desc: 'We conduct comprehensive security assessments to identify vulnerabilities and understand your current security posture.' },
      { title: 'Strategy', desc: 'Develop a tailored security strategy that addresses your specific risks and compliance requirements.' },
      { title: 'Implementation', desc: 'Deploy security solutions and establish security policies and procedures across your organization.' },
      { title: 'Monitoring', desc: 'Implement continuous monitoring and threat detection systems to identify and respond to security incidents.' },
      { title: 'Maintenance', desc: 'Ongoing security updates, training, and optimization to maintain robust protection against evolving threats.' }
    ],
    ctaTitle: 'Ready to Secure Your Business?',
    ctaDesc: 'Let\'s discuss how our cybersecurity solutions can protect your organization from evolving threats.',
    slogan: '"Security is not a cost, it\'s an investment in your business future."',
    sloganDesc: 'Let us help you build a resilient security foundation for your digital transformation.'
  },
  {
    name: 'Data',
    displayName: 'Data Analytics',
    image: '/services/Data.jpg',
    whyUsTitle: 'Why Choose Datalake for Data Analytics?',
    slides: [
      {
        title: 'Data Science Excellence',
        desc: 'Our team of data scientists and analysts bring deep expertise in statistical analysis, machine learning, and business intelligence.'
      },
      {
        title: 'End-to-End Solutions',
        desc: 'From data collection and warehousing to advanced analytics and visualization, we provide comprehensive data solutions.'
      },
      {
        title: 'Actionable Insights',
        desc: 'We don\'t just analyze data—we translate complex findings into clear, actionable recommendations that drive business value.'
      }
    ],
    processTitle: 'Our Data Analytics Process',
    steps: [
      { title: 'Discovery', desc: 'Understand your business objectives and identify the data sources and analytics requirements needed to achieve your goals.' },
      { title: 'Data Preparation', desc: 'Collect, clean, and prepare your data for analysis, ensuring quality and consistency across all sources.' },
      { title: 'Analysis', desc: 'Apply advanced analytics techniques to uncover insights, patterns, and trends in your data.' },
      { title: 'Visualization', desc: 'Create intuitive dashboards and reports that make complex data accessible and actionable for stakeholders.' },
      { title: 'Implementation', desc: 'Integrate insights into your business processes and establish ongoing analytics capabilities for continuous improvement.' }
    ],
    ctaTitle: 'Ready to Unlock Your Data\'s Potential?',
    ctaDesc: 'Let\'s discuss how our data analytics solutions can transform your business intelligence and decision-making.',
    slogan: '"Data is the new oil, but analytics is the refinery."',
    sloganDesc: 'Let us help you extract maximum value from your data assets.'
  },
  {
    name: 'Digital',
    displayName: 'Digital Business & Products',
    image: '/services/Digital.jpg',
    whyUsTitle: 'Why Choose Datalake for Digital Products?',
    slides: [
      {
        title: 'Product Development Experts',
        desc: 'Our team combines technical expertise with business acumen to deliver digital products that drive real business value and user satisfaction.'
      },
      {
        title: 'User-Centered Design',
        desc: 'We prioritize user experience and design products that are intuitive, accessible, and delightful to use.'
      },
      {
        title: 'Agile Development',
        desc: 'Our iterative development approach ensures rapid delivery, continuous improvement, and the ability to adapt to changing market needs.'
      }
    ],
    processTitle: 'Our Digital Product Development Process',
    steps: [
      { title: 'Discovery', desc: 'Research market opportunities, understand user needs, and define product requirements and success metrics.' },
      { title: 'Design', desc: 'Create user-centered designs, wireframes, and prototypes that validate concepts and guide development.' },
      { title: 'Development', desc: 'Build your digital product using modern technologies and best practices for performance, security, and scalability.' },
      { title: 'Testing', desc: 'Rigorous testing ensures quality, usability, and performance across all devices and platforms.' },
      { title: 'Launch', desc: 'Deploy your product to market with comprehensive launch support, monitoring, and optimization strategies.' }
    ],
    ctaTitle: 'Ready to Build Your Digital Product?',
    ctaDesc: 'Let\'s discuss how we can help you bring your digital vision to life and achieve market success.',
    slogan: '"The best digital products don\'t just solve problems, they create possibilities."',
    sloganDesc: 'Let us help you build digital solutions that transform your business and delight your users.'
  },
  {
    name: 'Sustainability',
    displayName: 'Sustainability',
    image: '/services/Sustainable.jpg',
    whyUsTitle: 'Why Choose Datalake for Sustainability?',
    slides: [
      {
        title: 'Sustainability Experts',
        desc: 'Our team brings deep expertise in ESG frameworks, carbon accounting, and sustainable business practices across industries.'
      },
      {
        title: 'Holistic Approach',
        desc: 'We integrate sustainability into every aspect of your business strategy, from operations to product development and stakeholder engagement.'
      },
      {
        title: 'Measurable Impact',
        desc: 'We help you set meaningful sustainability goals, track progress, and communicate your impact with transparent reporting and analytics.'
      }
    ],
    processTitle: 'Our Sustainability Implementation Process',
    steps: [
      { title: 'Assessment', desc: 'Evaluate your current environmental and social impact to establish baseline metrics and identify improvement opportunities.' },
      { title: 'Strategy', desc: 'Develop a comprehensive sustainability strategy aligned with your business objectives and stakeholder expectations.' },
      { title: 'Implementation', desc: 'Execute sustainability initiatives across your organization, from operational changes to stakeholder engagement programs.' },
      { title: 'Measurement', desc: 'Establish monitoring and reporting systems to track progress and demonstrate impact to stakeholders.' },
      { title: 'Optimization', desc: 'Continuously improve your sustainability performance through data-driven insights and stakeholder feedback.' }
    ],
    ctaTitle: 'Ready to Build a Sustainable Future?',
    ctaDesc: 'Let\'s discuss how our sustainability solutions can help you create value while protecting our planet.',
    slogan: '"Sustainability is not just good for the planet, it\'s good for business."',
    sloganDesc: 'Let us help you build a sustainable business that thrives in the future.'
  }
];

// Generate components for each service
services.forEach(service => {
  const serviceDir = path.join(__dirname, 'app', 'services', service.name);
  
  // Generate WhyUS component
  const whyUsContent = `import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import RevealAnimation from '../../components/ui/RevealAnimation';

const slides = [
${service.slides.map(slide => `  {
    image: '${service.image}',
    title: '${slide.title}',
    desc: '${slide.desc}'
  }`).join(',\n')}
];

const ${service.name}WhyUS = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full flex flex-col items-center py-12 lg:py-24 px-2">
      {/* Section Heading */}
      <RevealAnimation direction="up" delay={0.2}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#101424]">
          ${service.whyUsTitle}
        </h2>
      </RevealAnimation>
      
      <RevealAnimation direction="up" delay={0.4} className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg min-h-[400px] bg-[#d3deeb]">
          {/* Text Left */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 text-[#101424]">
            <AnimatePresence mode="wait">
              <div
                key={slides[current].title}
                className="animate-fade-in"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {slides[current].title}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-[#4a6d8c]">
                  {slides[current].desc}
                </p>
              </div>
            </AnimatePresence>
            {/* Controls */}
            <div className="flex gap-4 items-center mt-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#eaf1f7] text-[#4a6d8c] flex items-center justify-center text-2xl font-bold hover:bg-[#dbeafe] transition"
                aria-label="Previous slide"
              >
                &#8592;
              </button>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={\`w-3 h-3 rounded-full transition-all duration-300 \${
                      idx === current ? 'bg-[#4a6d8c]' : 'bg-[#eaf1f7]'
                    }\`}
                    aria-label={\`Go to slide \${idx + 1}\`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#eaf1f7] text-[#4a6d8c] flex items-center justify-center text-2xl font-bold hover:bg-[#dbeafe] transition"
                aria-label="Next slide"
              >
                &#8594;
              </button>
            </div>
          </div>
          {/* Image Right */}
          <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
            <AnimatePresence mode="wait">
              <img
                key={slides[current].image}
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover md:rounded-r-3xl md:rounded-l-none animate-fade-in"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20 md:rounded-r-3xl" />
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default ${service.name}WhyUS;`;

  fs.writeFileSync(path.join(serviceDir, `${service.name}WhyUS.tsx`), whyUsContent);

  // Generate Process component
  const processContent = `import React from 'react';
import { FaSearch, FaLightbulb, FaCogs, FaRocket, FaHandsHelping } from 'react-icons/fa';
import RevealAnimation from '../../components/ui/RevealAnimation';

const steps = [
${service.steps.map((step, index) => `  {
    icon: ${['FaSearch', 'FaLightbulb', 'FaCogs', 'FaRocket', 'FaHandsHelping'][index]},
    title: '${step.title}',
    desc: '${step.desc}'
  }`).join(',\n')}
];

const ${service.name}Process = () => (
  <section className="w-full flex flex-col items-center py-16 px-4 bg-white">
    <RevealAnimation direction="up" delay={0.2}>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 text-[#101424]">
        ${service.processTitle}
      </h2>
    </RevealAnimation>
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-300 via-blue-100 to-blue-300 z-0" style={{ transform: 'translateX(-50%)' }} />
      <div className="flex flex-col gap-16 w-full z-10">
        {steps.map((step, idx) => (
          <RevealAnimation
            key={step.title}
            direction={idx % 2 === 0 ? "right" : "left"}
            delay={0.2 * idx}
            className={\`flex items-center w-full \${idx % 2 === 0 ? 'justify-start' : 'justify-end'}\`}
          >
            <div className={\`relative flex items-center \${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}\`} style={{ minWidth: 0 }}>
              {/* Icon in circle */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-blue-200 z-10">
                {React.createElement(step.icon, { size: 24, className: "text-blue-700" })}
              </div>
              {/* Connecting arrow */}
              {idx < steps.length - 1 && (
                <div className={\`absolute \${idx % 2 === 0 ? 'right-[-60px]' : 'left-[-60px]'} top-1/2 transform -translate-y-1/2\`}> 
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12 Q30 0 60 12 Q30 24 0 12" stroke="#60a5fa" strokeWidth="3" fill="none" />
                  </svg>
                </div>
              )}
              {/* Step content */}
              <div className={\`ml-8 mr-8 max-w-xs bg-[#fafafb] rounded-2xl shadow-md px-6 py-4 \${idx % 2 === 0 ? '' : 'order-first'}\`}> 
                <h3 className="text-xl font-bold mb-2 text-[#101424]">{step.title}</h3>
                <p className="text-md text-[#4a6d8c]">{step.desc}</p>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  </section>
);

export default ${service.name}Process;`;

  fs.writeFileSync(path.join(serviceDir, `${service.name}Process.tsx`), processContent);

  // Generate CTA component
  const ctaContent = `import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const ${service.name}CTA = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ${service.ctaTitle}
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            ${service.ctaDesc}
          </p>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/consulting"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ${service.name}CTA;`;

  fs.writeFileSync(path.join(serviceDir, `${service.name}CTA.tsx`), ctaContent);

  // Generate Slogan component
  const sloganContent = `import React from 'react';
import RevealAnimation from '../../components/ui/RevealAnimation';

const ${service.name}Slogan = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <RevealAnimation direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#101424] mb-6">
            ${service.slogan}
          </h2>
        </RevealAnimation>
        <RevealAnimation direction="up" delay={0.4}>
          <p className="text-xl text-[#4a6d8c]">
            ${service.sloganDesc}
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ${service.name}Slogan;`;

  fs.writeFileSync(path.join(serviceDir, `${service.name}Slogan.tsx`), sloganContent);
});

console.log('All service components generated successfully!'); 