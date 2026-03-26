import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* Photo — full bleed mobile, right half desktop */}
      <div className="absolute inset-0 lg:left-[46%]">
        <img
          src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/928c124bad23db48363483874e4efd05.png"
          alt="Theo Lima"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0D0D0D 0%, rgba(13,13,13,0.6) 50%, rgba(13,13,13,0.1) 100%)' }}
        />
        <div className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(to right, #0D0D0D 0%, rgba(13,13,13,0.5) 50%, transparent 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
          <div className="lg:max-w-[52%] pb-14 pt-40 lg:py-32">

            {/* Eyebrow — flanked by gold lines (Henrique Tasca pattern) */}
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
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1.05,
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
              style={{ color: 'var(--text-body)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}
            >
              Planejamento financeiro, patrimonial e sucessório personalizado.
              Gerindo{' '}
              <strong style={{ color: '#FFFFFF' }}>+R$ 50 milhões</strong>
              {' '}na XP Investimentos com foco em transparência e resultado.
            </motion.p>

            {/* CTA — sharp, uppercase, gold fill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-3 px-8 py-4 font-bold text-black uppercase transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  backgroundColor: 'var(--gold)',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  minHeight: '52px',
                }}
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                AGENDAR DIAGNÓSTICO GRATUITO
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
