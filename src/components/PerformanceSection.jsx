import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Calendar, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PerformanceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const portfolios = [
    {
      id: 1,
      imageUrl: "https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/a33d7cbaa33330fd211bcad7812ab6d4.jpg",
      yield: "R$ 234.286,00",
      return: "21,6%",
      cdiReturn: "194,08%",
      period: "09/03/2024 a 27/10/2024"
    },
    {
      id: 2,
      imageUrl: "https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/acf7583a7ad2a64fec4a0bd13f6ba0b7.jpg",
      yield: "R$ 414.543,67",
      return: "21,76%",
      cdiReturn: "200,15%",
      period: "05/03/2024 a 27/10/2024"
    },
    {
      id: 3,
      imageUrl: "https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/2dbadab984b2f1933ef36e6ce2105652.jpg",
      yield: "R$ 860.957,72",
      return: "14,60%",
      cdiReturn: "134,30%",
      period: "09/03/2024 a 27/10/2024"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolios.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolios.length) % portfolios.length);
  };

  useEffect(() => {
    if (inView && !isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // 4 seconds interval

      return () => clearInterval(interval);
    }
  }, [inView, currentIndex, isPaused]);

  return (
    <section 
      ref={ref} 
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #050A14 0%, #000000 100%)'
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Resultados que <span className="text-[#00E5FF]">Superam</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Veja a performance real de carteiras sob nossa gestão, superando consistentemente o CDI com estratégias personalizadas.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 border-[#00E5FF]/30 bg-black/40 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF] text-white hover:text-[#00E5FF] transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 border-[#00E5FF]/30 bg-black/40 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF] text-white hover:text-[#00E5FF] transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Main Slide Card */}
          <div className="relative rounded-2xl border border-[#00E5FF]/20 bg-[#0A101E]/40 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent opacity-30" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col lg:flex-row"
              >
                {/* Image Section */}
                <div className="lg:w-[60%] relative min-h-[300px] bg-black/20 p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border border-white/10 group">
                    <img
                      src={portfolios[currentIndex].imageUrl}
                      alt="Gráfico de Rentabilidade"
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Metrics Section */}
                <div className="lg:w-[40%] p-6 md:p-8 flex flex-col justify-center space-y-8 bg-gradient-to-br from-white/5 to-transparent">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-white/90 flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-[#D4AF37]" />
                      Rentabilidade da Carteira
                    </h3>
                    <div className="h-[2px] w-12 bg-[#D4AF37] rounded-full" />
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                      <p className="text-sm text-gray-400 mb-1">Rendimento Total</p>
                      <p className="text-2xl md:text-3xl font-bold text-[#D4AF37] tracking-tight">
                        {portfolios[currentIndex].yield}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-[#00E5FF]/30 transition-colors">
                        <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Rentabilidade
                        </p>
                        <p className="text-xl font-bold text-white">
                          {portfolios[currentIndex].return}
                        </p>
                      </div>

                      <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-[#00E5FF]/30 transition-colors">
                        <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-[#00E5FF]" /> % do CDI
                        </p>
                        <p className="text-xl font-bold text-[#00E5FF]">
                          {portfolios[currentIndex].cdiReturn}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/5 py-2 px-3 rounded-lg w-fit">
                      <Calendar className="w-4 h-4" />
                      {portfolios[currentIndex].period}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {portfolios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-[#00E5FF] w-8 shadow-[0_0_10px_rgba(0,229,255,0.5)]" 
                    : "bg-white/20 w-2 hover:bg-white/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Controls (Visible only on small screens) */}
          <div className="flex justify-between mt-4 md:hidden px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="text-white hover:text-[#00E5FF]"
            >
              <ChevronLeft className="mr-1 w-4 h-4" /> Anterior
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="text-white hover:text-[#00E5FF]"
            >
              Próximo <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-gray-600 text-[10px] md:text-xs text-center mt-12 max-w-3xl mx-auto px-4"
        >
          *Rentabilidade passada não é garantia de rentabilidade futura. Os resultados apresentados são referentes a carteiras reais, mas podem variar de acordo com o perfil, volume investido e data de início de cada investidor.
        </motion.p>
      </div>
    </section>
  );
};

export default PerformanceSection;