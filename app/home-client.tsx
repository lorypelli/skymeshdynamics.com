'use client';

import { ContactModal } from '@/components/contact-modal';
import { DisclaimerPopup } from '@/components/disclaimer-popup';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Services } from '@/components/services';
import { Values } from '@/components/values';
import { Vision } from '@/components/vision';
import { useState } from 'react';

export function HomeClient() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <DisclaimerPopup isOpen={showDisclaimer} onClose={() => setShowDisclaimer(false)} />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
      <Header />
      <main>
        <Hero onContactClick={() => setShowContact(true)} onDisclaimerClick={() => setShowDisclaimer(true)} />
        <Values />
        <Vision />
        <Services onContactClick={() => setShowContact(true)} />
      </main>
      <ScrollToTop />
    </>
  );
}
