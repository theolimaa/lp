import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import HeroSection from '@/components/HeroSection';
import TickerStrip from '@/components/TickerStrip';
import AuthoritySection from '@/components/AuthoritySection';
import AboutSection from '@/components/AboutSection';
import ForWhomSection from '@/components/ForWhomSection';
import ConhecaBigInvest from '@/components/ConhecaBigInvest';
import PerformanceSection from '@/components/PerformanceSection';
import PillarSection from '@/components/PillarSection';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const HomePage = () => {
  const [heroVisible, setHeroVisible] = useState(true);

  return (
    <>
      <Helmet>
        <title>Theo Lima — Assessoria Patrimonial | XP Investimentos</title>
        <meta name="description" content="Assessoria de investimentos personalizada para empresários, médicos e diretores. +R$ 60 milhões sob gestão. Agende seu diagnóstico patrimonial." />
      </Helmet>

      <main>
        <HeroSection onVisibilityChange={setHeroVisible} />
        <TickerStrip />
        <AuthoritySection />
        <AboutSection />
        <ForWhomSection />
        <ConhecaBigInvest />
        <PerformanceSection />
        <PillarSection />
        <HowItWorks />
        <FAQSection />
        <CallToAction />
      </main>

      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA heroVisible={heroVisible} />
    </>
  );
};

export default HomePage;
