'use client'

import MainAbout from './MainAbout';
import HeaderAlt from '../../components/ui/HeaderAlt';
import LocationsAlt from '../../components/LocationsAlt';
import Philosophy from './Philosophy';
import Footer from '@/components/ui/footer';
import OverlayImageSection from '@/app/consulting/OverlayImage';
import Slogan from '@/components/ui/Slogan';
import Mission from './Mission';
import ClientLogosMarquee from '../../components/ClientLogosMarquee';

export default function AboutPage() {
  return (
    <>
      <HeaderAlt />
      <MainAbout />
      <Mission />
      <Philosophy />
      <LocationsAlt />
      <ClientLogosMarquee />
      <Footer />
    </>
  );
} 