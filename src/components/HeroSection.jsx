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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 lg:py-32 overflow-hidden bg-black">
      {/* Background - Ajustado para não ofuscar o texto */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo - Texto e CTA com mais espaçamento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-10 text-center lg:text-left"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                A assessoria que seu <span className="text-[#D4AF37]">futuro precisa</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Entenda como um planejamento exclusivo vai alavancar seus resultados, com quem assessora <span className="text-white font-semibold">+ R$ 50 milhões</span> e é destaque em transparência.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button 
                onClick={handleWhatsApp} 
                className="
                  w-full sm:w-max 
                  bg-[#D4AF37] hover:bg-[#C4A030] 
                  text-black font-extrabold 
                  px-10 py-8 text-lg
                  rounded-xl transition-all duration-300 
                  hover:scale-105 
                  shadow-[0_10px_30px_rgba(212,175,55,0.3)]
                  flex items-center justify-center gap-3
                "
              >
                <MessageCircle className="h-6 w-6" />
                AGENDAR DIAGNÓSTICO PATRIMONIAL
              </Button>
            </div>
          </motion.div>

          {/* Lado Direito - Imagem com moldura de autoridade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/928c124bad23db48363483874e4efd05.png"
                alt="Theo Lima"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
