"use client";

import ConsultingExpertise from './ConsultingExpertise';
import ConsultingHero from './ConsultingHero';
import HeaderAlt from '@/components/ui/HeaderAlt';
import Footer from '@/components/ui/footer';
import ConsultingAddedValues from './ConsultingAddedValues';

const page = () => {
  return (
    <>
    <HeaderAlt />
    <ConsultingHero />
    <ConsultingAddedValues />
    <ConsultingExpertise />
    <Footer />
    </>
  );
};

export default page;
