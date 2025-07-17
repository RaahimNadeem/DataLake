"use client";

import ConsultingExpertise from './ConsultingExpertise';
import ConsultingHero from './ConsultingHero';
import HeaderAlt from '@/components/ui/HeaderAlt';
import Footer from '@/components/ui/footer';
import ConsultingAddedValues from './ConsultingAddedValues';
import ClientLogosMarquee from '@/components/ClientLogosMarquee';
import OverlayImageSection from './OverlayImage';
import InternationalTeam from '../careers/InternationalTeam';

const page = () => {
  return (
    <>
    <HeaderAlt />
    <ConsultingHero />
    <OverlayImageSection />
    <ConsultingExpertise />
    {/* <InternationalTeam /> */}
    <ConsultingAddedValues />
    {/* <ClientLogosMarquee /> */}
    <Footer />
    </>
  );
};

export default page;
