"use client";

import ConsultingExpertise from './ConsultingExpertise';
import ConsultingHero from './ConsultingHero';
import HeaderAlt from '@/components/ui/HeaderAlt';
import Footer from '@/components/footer';

const page = () => {
  return (
    <>
    <HeaderAlt />
    <ConsultingHero />
    <ConsultingExpertise />
    <Footer />
    </>
  );
};

export default page;
