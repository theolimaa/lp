
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Wallet, Target, ShieldAlert, Users, Landmark, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const PillarSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activePillar, setActivePillar] = useState(null);

  const pillars = [
    {
      id: 1,
      title: "GESTÃO DE CAIXA",
      description: "Controle e planejamento entrada (receita) e saída (despesa) mensal",
      icon: Wallet
    },
    {
      id: 2,
      title: "GESTÃO DE OBJETIVOS",
      description: "Entender suas necessidades, planos de futuro, objetivos de curto, médio e longo prazos.",
      icon: Target
    },
    {
      id: 3,
      title: "GESTÃO DE RISCO",
      description: "Traçar plano para mitigar possíveis riscos ao patrimônio",
      icon: ShieldAlert
    },
    {
      id: 4,
      title: "SUCESSÃO",
      description: "Facilitar o acesso ao patrimônio dos herdeiros de forma eficiente e planejada.",
      icon: Users
    },
    {
      id: 5,
      title: "PLANEJAMENTO TRIBUTÁRIO",
      description: "Estudo de estratégias que permitam o cliente a pagar menos imposto de forma legal",
      icon: Landmark
    },
    {
      id: 6,
      title: "GESTÃO DE INVESTIMENTO",
      description: "Avaliação carteira de investimentos conforme objetivos e necessidades já estruturadas nos pilares anteriores",
      icon: TrendingUp
    }
  ];

  return (
    <section ref={ref} className="relative py-16 lg:py-20 px-4 bg-[#020408] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/4bd8244517a3736fd28a03803b4b70e3.png')] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Mobile View (Vertical Cards) */}
        <div className="lg:hidden space-y-6">
           <h2 className="text-3xl font-bold text-[#D4AF37] text-center mb-10">
              PILARES PLANEJAMENTO FINANCEIRO
           </h2>
           {pillars.map((pillar) => (
             <motion.div
               key={pillar.id}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#0A101E] border border-white/10 rounded-xl p-6 hover:border-[#00E5FF] transition-all duration-300"
             >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF]">
                    <pillar.icon size={20} />
                  </div>
                  <h3 className="font-bold text-white">{pillar.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{pillar.description}</p>
             </motion.div>
           ))}
        </div>

        {/* Desktop View (Circular/Grid Layout) */}
        <div className="hidden lg:flex flex-col items-center justify-center min-h-[600px]">
          <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center">
            
            {/* Center Circle */}
            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={inView ? { scale: 1, opacity: 1 } : {}}
               transition={{ duration: 0.8 }}
               className="absolute z-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C4A030] flex flex-col items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(212,175,55,0.3)]"
            >
               <h2 className="text-2xl font-bold text-black leading-tight">
                 PILARES<br/>PLANEJAMENTO<br/>FINANCEIRO
               </h2>
            </motion.div>

            {/* Orbiting Pillars */}
            {pillars.map((pillar, index) => {
              const angle = (index * (360 / pillars.length)) - 90;
              const radius = 280;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={inView ? { opacity: 1, x: x, y: y } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="absolute z-10"
                  onMouseEnter={() => setActivePillar(pillar.id)}
                  onMouseLeave={() => setActivePillar(null)}
                >
                  <div className={cn(
                    "relative w-48 p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer flex flex-col items-center text-center group",
                    activePillar === pillar.id 
                      ? "bg-[#00E5FF]/10 border-[#00E5FF] scale-110 shadow-[0_0_30px_rgba(0,229,255,0.2)] z-30" 
                      : "bg-[#0A101E]/80 border-white/10 hover:border-[#00E5FF]/50"
                  )}>
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300",
                      activePillar === pillar.id ? "bg-[#00E5FF] text-black" : "bg-white/5 text-[#00E5FF]"
                    )}>
                      <pillar.icon size={24} />
                    </div>
                    
                    <h3 className={cn(
                      "font-bold text-sm mb-2 transition-colors duration-300",
                      activePillar === pillar.id ? "text-[#00E5FF]" : "text-white"
                    )}>
                      {pillar.title}
                    </h3>

                     <AnimatePresence>
                        {activePillar === pillar.id && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-gray-200"
                          >
                            {pillar.description}
                          </motion.p>
                        )}
                     </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Connecting lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
               <circle cx="50%" cy="50%" r="280" stroke="#00E5FF" strokeWidth="1" strokeDasharray="10 10" fill="none" />
             </svg>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarSection;
