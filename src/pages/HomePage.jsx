
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorks from '@/components/HowItWorks';
import ConhecaBigInvest from '@/components/ConhecaBigInvest';
import PillarSection from '@/components/PillarSection';
import TimelineSection from '@/components/TimelineSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Big Invest - A assessoria que seu futuro precisa</title>
        <meta name="description" content="Multiplique seu patrimônio com a segurança da Big Invest. Mais de R$ 1.2 bilhão sob custódia e NPS 92.7." />
      </Helmet>
      
      {/* 
        NOTE: This page is intentionally designed without a top Header/Navigation 
        to maintain a focused landing page experience for potential clients.
      */}
      
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <HowItWorks />
        <ConhecaBigInvest />
        <PillarSection />
        <TimelineSection />
        <FAQSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
