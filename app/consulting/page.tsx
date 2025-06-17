"use client";

import ConsultingExpertise from './ConsultingExpertise';
import ConsultingHero from './ConsultingHero';
import HeaderAlt from '@/components/ui/HeaderAlt';
import Footer from '@/components/ui/footer';

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
