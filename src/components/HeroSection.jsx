import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section style={{ backgroundColor: '#000000' }} className="relative min-h-screen flex items-center justify-center pt-10 pb-16 lg:py-0">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-8">
        {/* Mobile: foto no topo, texto embaixo. Desktop: lado a lado */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Assessor Destaque 2024 e 2025 · Big Invest | XP
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              A assessoria que seu{' '}
              <span style={{ color: '#D4AF37' }}>futuro precisa</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Planejamento financeiro, patrimonial e sucessório personalizado.
              Assessoria com quem gere{' '}
              <span className="text-white font-bold">+R$ 50 milhões</span> na XP Investimentos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button
                onClick={handleWhatsApp}
                style={{ backgroundColor: '#D4AF37', color: '#000000' }}
                className="w-full sm:w-auto px-8 py-6 text-base font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.35)]"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                Agendar diagnóstico gratuito
              </Button>
            </div>

            {/* Social proof micro-line */}
            <p className="text-gray-500 text-sm">
              +2.500 clientes · NPS 93,7 · Plataforma XP Investimentos
            </p>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-md mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/928c124bad23db48363483874e4efd05.png"
                alt="Theo Lima — Assessor Patrimonial XP"
                className="w-full h-auto object-cover"
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
