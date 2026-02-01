
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FileSearch, Presentation, LineChart } from 'lucide-react';

const HowItWorks = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  const steps = [{
    id: 1,
    icon: FileSearch,
    title: "Coleta de informações",
    description: "A parte que conheço você e sua história! É o momento que vou entender como posso te ajudar, no que você precisa de suporte e seu perfil de investidor!"
  }, {
    id: 2,
    icon: Presentation,
    title: "Apresentação da estratégia",
    description: "Apresento o planejamento patrimonial, carteira e estratégia que seguiremos, suas projeções, cenários ideais e fazemos os últimos ajustes."
  }, {
    id: 3,
    icon: LineChart,
    title: "Acompanhamento ativo de resultados",
    description: "Atualizações, suporte constantes e revisões para sempre seguirmos em direção ao seu objetivo final!"
  }];

  return (
    <section ref={ref} className="relative py-16 lg:py-20 px-4 bg-[#050A14]">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Como funciona nossa assessoria?</h2>
          <p className="text-gray-400 text-lg">
            Um processo estruturado para o seu sucesso financeiro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 50 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] flex flex-col">
                {/* Number Badge */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#00E5FF] text-black font-bold text-xl rounded-full flex items-center justify-center shadow-lg border-4 border-[#050A14] z-10">
                  {step.id}
                </div>

                <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#00E5FF]/5 flex items-center justify-center group-hover:from-[#00E5FF]/40 group-hover:to-[#00E5FF]/10 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-[#00E5FF]" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-base flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
