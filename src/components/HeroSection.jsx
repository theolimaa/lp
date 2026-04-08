import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section
      className="relative min-h-screen flex items-end lg:items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-dark)' }}
    >
      {/* Photo */}
      <div className="absolute inset-0 lg:left-[38%]">
        <img
          src="/capa.jpeg"
          alt="Theo Lima"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%' }}
        />
        {/* Mobile: fade bottom only */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: 'linear-gradient(to top, #0D0D0D 0%, rgba(13,13,13,0.55) 45%, rgba(13,13,13,0.05) 100%)' }}
        />
        {/* Desktop: subtle left fade, almost transparent on right */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(to right, #0D0D0D 0%, rgba(13,13,13,0.4) 38%, rgba(13,13,13,0.0) 62%)' }}
        />
      </div>

      {/* Gradient into next section (light) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0D0D0D)' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
          <div className="lg:max-w-[50%] pb-14 pt-40 lg:py-36">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="block w-8 h-px flex-shrink-0" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="eyebrow">Assessor Destaque 2024 · 2025 · Big Invest | XP</span>
              <span className="block w-8 h-px flex-shrink-0" style={{ backgroundColor: 'var(--gold)' }} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)',
                lineHeight: 1.0,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
              }}
            >
              A assessoria que<br />
              o seu{' '}
              <span style={{ color: 'var(--gold)' }}>futuro</span>
              <br />precisa.
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="leading-relaxed mb-10 max-w-md"
              style={{ color: 'var(--text-body-dark)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}
            >
              Planejamento financeiro, patrimonial e sucessório personalizado.
              Gerindo{' '}
              <strong style={{ color: '#FFFFFF' }}>+R$ 50 milhões</strong>
              {' '}na XP Investimentos com foco em transparência e resultado.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              <button onClick={handleWhatsApp} className="btn-gold">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                Agendar diagnóstico gratuito
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
