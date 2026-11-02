'use client';

import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Destinations from '@/components/Destinations';
import Experiences from '@/components/Experiences';
import VideoShowcase from '@/components/VideoShowcase';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import ScrollReveal from '@/components/ScrollReveal';
import type { LightboxState } from '@/types';

const initialLightbox: LightboxState = {
  isOpen: false,
  mediaSrc: '',
  mediaType: 'image',
  title: '',
};

export default function Home() {
  const [lightbox, setLightbox] = useState<LightboxState>(initialLightbox);

  const openLightbox = useCallback(
    (state: Omit<LightboxState, 'isOpen'>) => {
      setLightbox({ isOpen: true, ...state });
    },
    []
  );

  const closeLightbox = useCallback(() => {
    setLightbox(initialLightbox);
  }, []);

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <main>
        <Introduction />
        <Destinations />
        <Experiences />
        <VideoShowcase onOpen={openLightbox} />
        <Gallery onOpen={openLightbox} />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
      <Lightbox state={lightbox} onClose={closeLightbox} />
    </>
  );
}
