import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
 
const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };
 
  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
 
      {/* Background photo — full bleed on mobile, right half on desktop */}
      <div className="absolute inset-0 lg:left-[46%]">
        <img
          src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/928c124bad23db48363483874e4efd05.png"
          alt="Theo Lima"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient: stronger on mobile (covers bottom), subtle on desktop (left edge only) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B09] via-[#0C0B09]/60 to-[#0C0B09]/10 lg:bg-gradient-to-r lg:from-[#0C0B09] lg:via-[#0C0B09]/40 lg:to-transparent" />
      </div>
 
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">
          <div className="lg:max-w-[52%] pb-16 pt-40 lg:py-32">
 
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="block w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}>
                Assessor Destaque 2024 · 2025 · Big Invest | XP
              </span>
            </motion.div>
 
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-7"
              style={{ color: 'var(--cream)', fontFamily: "'Cormorant Garamond', serif" }}
            >
              A assessoria que<br />
              o seu <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>futuro</em><br />
              precisa.
            </motion.h1>
 
            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: 'var(--text)', fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
            >
              Planejamento financeiro, patrimonial e sucessório personalizado.
              Gerindo <span style={{ color: 'var(--cream)', fontWeight: 600 }}>+R$ 50 milhões</span> na
              XP Investimentos com foco em transparência e resultado.
            </motion.p>
 
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              <button
                onClick={handleWhatsApp}
                className="btn-cta group"
              >
                <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 shrink-0" />
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
 
