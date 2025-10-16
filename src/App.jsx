import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BigInvestSection from '@/components/BigInvestSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutTheoSection from '@/components/AboutTheoSection';
import CdiEasySection from '@/components/CdiEasySection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import PillarsSection from '@/components/PillarsSection';
import ResultsSection from '@/components/ResultsSection';

function App() {
  return (
    <div className="min-h-screen bg-antiflash-white">
      <Helmet>
        <title>Theo Lima - Assessor de Investimentos | Big Invest XP</title>
        <meta name="description" content="Segurança e prosperidade em seus investimentos com Theo Lima, sócio da Big Invest XP. Soluções personalizadas para empresas e investidores individuais." />
        <meta property="og:title" content="Theo Lima - Assessoria de investidores" />
        <meta property="og:description" content="Segurança e prosperidade em seus investimentos com Theo Lima, sócio da Big Invest XP. Soluções personalizadas para empresas e investidores individuais." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/45dde2636111f13bce465e7473b99462.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/45dde2636111f13bce465e7473b99462.png" />

      </Helmet>
      
      <Header />
      <main>
        <div id="hero"><HeroSection /></div>
        <div id="about-theo"><AboutTheoSection /></div>
        <ResultsSection />
        <div id="big-invest"><BigInvestSection /></div>
        <div id="how-it-works"><HowItWorksSection /></div>
        <div id="pillars"><PillarsSection /></div>
        <div id="cdieasy"><CdiEasySection /></div>
        <div id="faq"><FaqSection /></div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;