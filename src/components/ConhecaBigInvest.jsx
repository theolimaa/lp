
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';

const ConhecaBigInvest = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: TrendingUp,
      value: "R$ 1,2 bilhão",
      label: "Em patrimônio investido pelos nossos clientes"
    },
    {
      icon: Users,
      value: "2,5 mil",
      label: "Clientes em nossa carteira"
    },
    {
      icon: Award,
      value: "93,7",
      label: "NPS – alto nível de satisfação de nossos clientes"
    }
  ];

  return (
    <section ref={ref} className="relative py-16 lg:py-20 px-4 bg-gradient-to-b from-[#050A14] to-black">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20 space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Conheça a Big Invest!
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Somos uma assessoria de investimentos credenciada pela XP, fundada em 2019, que auxilia cada cliente individualmente, com estratégias sob medida para atender aos seus objetivos financeiros e de vida.
            </p>
            <p>
              Investimos continuamente no desenvolvimento e capacitação de nossa equipe, para garantir que estejam sempre atualizados com as informações do mercado e prontos para desenvolver as melhores estratégias de investimento.
            </p>
            <p>
              Nosso propósito é assessorar nossos clientes na jornada para a realização de seus planos de vida.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="py-6"
          >
            <p className="text-[#D4AF37] text-xl md:text-2xl font-bold italic">
              "Conte com a gente para alcançar suas conquistas, agora e no futuro."
            </p>
          </motion.div>
        </motion.div>

        {/* Achievements Cards */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Nossas conquistas</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-[#00E5FF]/30 hover:border-[#00E5FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:-translate-y-2 flex flex-col items-center">
                
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-[#D4AF37]" strokeWidth={2} />
                </div>

                <h4 className="text-3xl font-bold text-[#D4AF37] mb-3">
                  {stat.value}
                </h4>
                
                <p className="text-gray-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConhecaBigInvest;
