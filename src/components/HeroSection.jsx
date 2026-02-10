import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  // Configuração do WhatsApp com Mensagem Estratégica
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    // Seu link direto do WhatsApp Business
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 lg:py-24 overflow-hidden">
      {/* Background com efeito de spotlight - Estética High Ticket */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo - Copy e CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              A assessoria que seu futuro precisa
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              Entenda como um planejamento para você e/ou sua empresa vai alavancar seus resultados no mercado financeiro, com quem assessora + R$ 50 milhões de reais e é destaque em assessoria transparente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              {/* Botão com ajuste Mobile-First */}
              <Button 
                onClick={handleWhatsApp} 
                className="
                  w-full sm:w-auto 
                  bg-[#D4AF37] hover:bg-[#C4A030] 
                  text-black font-bold 
                  px-6 py-8 sm:px-10 sm:py-7 
                  text-lg sm:text-xl 
                  rounded-xl transition-all duration-300 
                  hover:scale-105 
                  hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]
                  flex items-center justify-center
                "
              >
                <MessageCircle className="mr-3 h-6 w-6 flex-shrink-0" />
                <span className="whitespace-normal sm:whitespace-nowrap leading-tight">
                  Agendar Diagnóstico Patrimonial
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Lado Direito - Imagem de Autoridade */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col items-center lg:block"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-none mx-auto">
              <div className="absolute -inset-4 bg-blue-500/30 rounded-2xl blur-3xl" />
              <div className="relative w-full">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    transform: 'rotateY(-5deg) rotateX(2deg)',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <img
                    src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/928c124bad23db48363483874e4efd05.png"
                    alt="Theo Lima - Big Invest XP"
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-[center_30%]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
