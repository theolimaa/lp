
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, FileText, Rocket, BarChart3, RefreshCw } from 'lucide-react';

const TimelineSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: Search,
      title: 'Diagnóstico',
      description: 'Análise completa do seu perfil e objetivos financeiros'
    },
    {
      icon: FileText,
      title: 'Planejamento',
      description: 'Elaboração de estratégia personalizada para seu patrimônio'
    },
    {
      icon: Rocket,
      title: 'Execução',
      description: 'Implementação das recomendações e alocação de recursos'
    },
    {
      icon: BarChart3,
      title: 'Acompanhamento',
      description: 'Monitoramento constante e relatórios periódicos'
    },
    {
      icon: RefreshCw,
      title: 'Rebalanceamento',
      description: 'Ajustes estratégicos conforme mudanças do mercado'
    }
  ];

  return (
    <section ref={ref} className="relative py-16 lg:py-20 px-4 bg-gradient-to-b from-black to-[#050A14]">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16"
        >
          A Jornada do Planejamento Financeiro
        </motion.h2>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] via-[#00E5FF] to-[#00E5FF]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-[#00E5FF] origin-left"
                style={{
                  boxShadow: '0 0 20px rgba(0, 229, 255, 0.8)',
                }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4 lg:gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#0099CC] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,229,255,0.5)] relative z-10 cursor-pointer transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(0,229,255,0.8)]"
                  >
                    <step.icon className="w-12 h-12 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm px-2">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Icon and line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#0099CC] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.5)] flex-shrink-0">
                  <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 flex-1 bg-[#00E5FF]/30 my-2" style={{ minHeight: '40px' }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
