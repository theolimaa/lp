import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SimulatorSection from '@/components/SimulatorSection';

const HeroSection = () => {
  const [showSimulator, setShowSimulator] = useState(false);

  const handleSimulatorToggle = () => {
    const isOpening = !showSimulator;
    setShowSimulator(isOpening);
    if (isOpening) {
      setTimeout(() => {
        const simulatorSection = document.getElementById('simulator-container');
        if (simulatorSection) {
          simulatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); 
    }
  };


  return (
    <>
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-oxford-blue">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-dark-goldenrod font-semibold text-lg tracking-wide"
                >
                  Especialista em investimentos
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-antiflash-white leading-tight"
                >
                  A assessoria que seu futuro precisa
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-antiflash-white leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  Entenda como um planejamento para você e/ou sua empresa vai alavancar seus resultados no mercado financeiro, com quem assessora + R$ 40 milhões de reais e é destaque em assessoria transparente.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="https://wa.me/message/UZZHBP7KOC5AJ1" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-dark-goldenrod w-full sm:w-auto hover:bg-dark-goldenrod/90 text-antiflash-white font-semibold py-6 px-8 text-sm sm:text-lg transition-all hover:scale-105">
                    Entre em contato agora
                  </Button>
                </a>
                <Button 
                  onClick={handleSimulatorToggle}
                  className="bg-green-600 w-full sm:w-auto hover:bg-green-700 text-white font-semibold py-6 px-8 text-lg transition-all hover:scale-105"
                >
                  Faça uma simulação
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-goldenrod/20 to-transparent rounded-3xl blur-3xl"></div>
                <img src="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/foto-profissional-2-RMWDF.png" alt="Theo Lima - Assessor de Investimentos" className="relative rounded-3xl shadow-2xl w-full" />
                <div className="absolute bottom-8 left-8 bg-oxford-blue/90 backdrop-blur-md px-6 py-3 rounded-xl border border-dark-goldenrod/30">
                  <p className="text-antiflash-white font-semibold text-sm">Sócio Big Invest XP</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div id="simulator-container">
        <AnimatePresence>
          {showSimulator && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <SimulatorSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HeroSection;