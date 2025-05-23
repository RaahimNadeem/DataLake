'use client'

import MainAbout from '../../components/MainAbout';
import HeaderAlt from '../../components/ui/HeaderAlt';
import Locations from '../../components/Locations';
import Philosophy from '../../components/Philosophy';
import Footer from '@/components/footer';
import OverlayImageSection from '@/components/OverlayImage';
import Slogan from '@/components/Slogan';


export default function AboutPage() {
  return (
    <>
      <HeaderAlt />
      <MainAbout />
      <Philosophy />
      <Locations />
      <OverlayImageSection />
      <Slogan />
      <Footer />
    </>
  );
} 