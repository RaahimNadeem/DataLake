// @ts-ignore: No types for react-world-flags
import Flag from "react-world-flags";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    header: {
      subtitle: "OUR LOCATIONS",
      title: "Global Presence",
      description: "We are proud to serve clients across multiple regions, bringing our expertise and solutions to businesses in:"
    },
    locations: [
      { country: "France", code: "FR" },
      { country: "Saudi Arabia", code: "SA" },
      { country: "Tunisia", code: "TN" },
      { country: "Morocco", code: "MA" },
    ]
  },
  ar: {
    header: {
      subtitle: "مواقعنا",
      title: "تواجد عالمي",
      description: "نحن فخورون بخدمة العملاء في مناطق متعددة، حيث نقدم خبرتنا وحلولنا للشركات في:"
    },
    locations: [
      { country: "فرنسا", code: "FR" },
      { country: "المملكة العربية السعودية", code: "SA" },
      { country: "تونس", code: "TN" },
      { country: "المغرب", code: "MA" },
    ]
  }
};

const countries = [
  { name: "France", code: "FR" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Tunisia", code: "TN" },
  { name: "Morocco", code: "MA" },
];

const testimonial = {
  name: "Sarah, Direct Sourcing Consultant",
  quote:
    "Popp is an easy-to-use AI tool that is making my life a lot easier – it is helping me cut down the number of calls I need to make to fill a booking. You can easily set up a campaign in ten minutes and move on to your next job.",
};

const stats = {
  countries: countries.length,
  languages: 3,
};

const funFact = {
  title: "Global Reach",
  value: "98%",
  description: "of our clients are international",
};

const internationalText =
  "We proudly serve clients across multiple continents, helping businesses grow and connect globally.";

const Locations = () => {
  const { language } = useLanguage();
  const currentLang = translations[language];

  return (
    <section className={`w-full min-h-[80vh] flex items-center justify-center py-12 md:py-24  ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 md:auto-rows-fr gap-6 px-4 md:px-0">
        {/* Top Left: Number of Countries */}
        <motion.div
          className="rounded-2xl bg-[#2454a1] flex flex-col justify-between p-8 shadow-lg h-full w-full min-h-48 md:min-h-56"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold text-xs md:text-sm bg-white/40 px-3 py-1 rounded-full text-white mb-2 self-start">Countries Served</span>
          <div className="flex-1 flex items-center justify-center">
            <span className="font-bold text-white text-[12vw] md:text-[7vw] leading-none">{stats.countries}</span>
          </div>
        </motion.div>

        {/* Top Middle: Map Image */}
        <motion.div
          className="rounded-2xl flex flex-col items-center justify-center shadow-lg overflow-hidden p-0 h-full w-full min-h-64"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img
            src="/Countries.png"
            alt={language === 'ar' ? "خريطة العالم مع إبراز مواقع الشركة" : "World map highlighting company locations"}
            className="w-full object-cover rounded-2xl"
            style={{ aspectRatio: '16/9', objectFit: 'cover' }}
          />
        </motion.div>

        {/* Top Right: List of Countries */}
        <motion.div
          className="rounded-2xl bg-[#63ac5c] flex flex-col justify-between p-8 shadow-lg h-full w-full min-h-52"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="font-semibold text-xs md:text-sm bg-white/40 px-3 py-1 rounded-full text-white mb-2 self-start">Country List</span>
          <ul className="flex flex-col gap-2 mt-2">
            {countries.map((c) => (
              <li key={c.code} className="flex items-center gap-2 text-white text-lg">
                <Flag code={c.code} style={{ width: 28, height: 20, borderRadius: 4, boxShadow: '0 1px 4px #0001' }} />
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Bottom Left: Languages Supported */}
        <motion.div
          className="rounded-2xl bg-[#e08d37] flex flex-col justify-between p-8 shadow-lg h-full w-full min-h-48"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="font-semibold text-xs md:text-sm bg-[#c9dceb] px-3 py-1 rounded-full text-white mb-2 self-start">Languages Supported</span>
          <div className="flex-1 flex items-center justify-center">
            <span className="font-bold text-white text-[12vw] md:text-[7vw] leading-none">{stats.languages}</span>
            <span className="text-lg text-white mb-1 ml-2 self-end">languages</span>
          </div>
        </motion.div>

        {/* Bottom Middle: International Presence Text */}
        <motion.div
          className="rounded-2xl bg-[#c9dceb] flex flex-col justify-center items-center p-8 shadow-lg h-full w-full min-h-40 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="font-semibold text-xs md:text-sm bg-white/40 px-3 py-1 rounded-full text-[#2d225a] mb-2">International Presence</span>
          <p className="text-lg text-[#2d225a]">{internationalText}</p>
        </motion.div>

        {/* Bottom Right: Fun Fact / Stat */}
        <motion.div
          className="rounded-2xl bg-[#479ddc] flex flex-col justify-between p-8 shadow-lg h-full w-full min-h-56"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="font-semibold text-xs md:text-sm bg-white/40 px-3 py-1 rounded-full text-white mb-2 self-start">{funFact.title}</span>
          <div className="flex-1 flex items-center justify-center">
            <span className="font-bold text-white text-[12vw] md:text-[7vw] leading-none">{funFact.value}</span>
          </div>
          <span className="text-lg text-white mb-1">{funFact.description}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
