import React from 'react';
import { Helmet } from 'react-helmet';

import HeroSection from '@/components/HeroSection';
import AuthoritySection from '@/components/AuthoritySection';
import ForWhomSection from '@/components/ForWhomSection';
import AboutSection from '@/components/AboutSection';
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
        {/* 1. Gancho imediato */}
        <HeroSection />

        {/* 2. Credibilidade com números — logo após o Hero */}
        <AuthoritySection />

        {/* 3. Qualificação — "Isso é pra mim?" */}
        <ForWhomSection />

        {/* 4. Humanização — quem é o Theo */}
        <AboutSection />

        {/* 5. A estrutura por trás — Big Invest */}
        <ConhecaBigInvest />

        {/* 6. Prova social com resultados reais */}
        <PerformanceSection />

        {/* 7. Metodologia — os 6 pilares */}
        <PillarSection />

        {/* 8. Processo — como funciona na prática */}
        <HowItWorks />

        {/* 9. Dúvidas frequentes */}
        <FAQSection />

        {/* 11. CTA final forte antes do rodapé */}
        <CallToAction />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
