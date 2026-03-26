import React from 'react';
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

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Theo Lima — Assessoria Patrimonial | XP Investimentos</title>
        <meta name="description" content="Assessoria de investimentos personalizada para empresários, médicos e diretores. +R$ 50 milhões sob gestão. Agende seu diagnóstico patrimonial." />
      </Helmet>

      <main className="flex-1 w-full">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Ticker — âncora de autoridade imediata */}
        <TickerStrip />

        {/* 3. Números */}
        <AuthoritySection />

        {/* 4. Quem é o Theo */}
        <AboutSection />

        {/* 5. Qualificação */}
        <ForWhomSection />

        {/* 6. Big Invest */}
        <ConhecaBigInvest />

        {/* 7. Resultados reais */}
        <PerformanceSection />

        {/* 8. Os 6 pilares */}
        <PillarSection />

        {/* 9. Como funciona */}
        <HowItWorks />

        {/* 10. FAQ */}
        <FAQSection />

        {/* 11. CTA final */}
        <CallToAction />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
