'use client'

import MainAbout from './MainAbout';
import HeaderAlt from '../../components/ui/HeaderAlt';
import Locations from '../../components/Locations';
import Philosophy from './Philosophy';
import Footer from '@/components/ui/footer';
import OverlayImageSection from '@/app/about/OverlayImage';
import Slogan from '@/components/ui/Slogan';


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