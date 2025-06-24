'use client'

import MainAbout from './MainAbout';
import HeaderAlt from '../../components/ui/HeaderAlt';
import LocationsAlt from '../../components/LocationsAlt';
import Philosophy from './Philosophy';
import Footer from '@/components/ui/footer';
import OverlayImageSection from '@/app/about/OverlayImage';
import Slogan from '@/components/ui/Slogan';
import Mission from './Mission';

export default function AboutPage() {
  return (
    <>
      <HeaderAlt />
      <MainAbout />
      <Mission />
      <Philosophy />
      <LocationsAlt />
      <OverlayImageSection />
      {/* <Slogan /> */}
      <Footer />
    </>
  );
} 