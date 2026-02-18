import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section style={{ backgroundColor: '#000000' }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background simplificado para evitar erros de renderização */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Lado Esquerdo - Conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              A assessoria que seu <br/>
              <span style={{ color: '#D4AF37' }}>futuro precisa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
              Planejamento exclusivo para quem busca o próximo nível. 
              Assessoria com quem gere <span className="text-white font-bold">+ R$ 50 milhões</span> na XP Investimentos.
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <Button 
                onClick={handleWhatsApp} 
                style={{ backgroundColor: '#D4AF37', color: '#000000' }}
                className="w-full sm:w-auto px-10 py-8 text-lg font-bold rounded-xl transition-transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
                AGENDAR DIAGNÓSTICO PATRIMONIAL
              </Button>
            </div>
          </motion.div>

          {/* Lado Direito - Imagem */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 hidden lg:block"
          >
            <div className="relative max-w-md mx-auto rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <img
                src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/928c124bad23db48363483874e4efd05.png"
                alt="Theo Lima"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
