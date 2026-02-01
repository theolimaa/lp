
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Target, Trophy } from 'lucide-react';

const AboutSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  const differentials = [{
    icon: Shield,
    title: 'Transparência',
    description: 'Total clareza em todas as operações e estratégias'
  }, {
    icon: Target,
    title: 'Planejamento',
    description: 'Recomendações personalizadas para seu patrimônio de acordo com suas necessidades.'
  }, {
    icon: Trophy,
    title: 'Sucesso',
    description: 'Seu patrimônio e objetivos são nossa prioridade'
  }];

  return (
    <section ref={ref} className="relative py-16 lg:py-20 px-4 bg-gradient-to-b from-[#050A14] to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center md:block"
          >
            <div className="relative w-full">
              {/* Cyan border/shadow frame */}
              <div className="absolute -inset-1 bg-[#00E5FF] rounded-2xl blur-md" />
              <div className="absolute -inset-2 bg-gradient-to-br from-[#00E5FF]/50 to-transparent rounded-2xl" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/b9ad289ca37819944174cdd56cf21456.png"
                  alt="Theo Lima, Big Invest founder, in front of XP logo"
                  className="w-full h-auto object-cover opacity-100"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                />
              </div>

              {/* Text Caption Overlay (Enhanced & Centralized) */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative mt-6 w-full md:absolute md:mt-0 md:bottom-6 md:left-0 md:right-0 px-4 z-20 flex justify-center"
              >
                <div className="bg-[#050A14]/90 backdrop-blur-xl border border-[#D4AF37]/50 p-4 md:p-5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center gap-4 text-center md:text-left max-w-lg w-full relative overflow-hidden group">
                  {/* Golden Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Trophy Icon */}
                  <div className="relative shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8a701f] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <Trophy className="w-6 h-6 text-[#050A14]" strokeWidth={2.5} />
                  </div>

                  {/* Text Content */}
                  <div className="relative">
                    <h3 className="text-[#D4AF37] font-bold text-lg leading-tight mb-1">
                      Assessor Destaque
                    </h3>
                    <p className="text-gray-300 text-sm leading-snug">
                      Excelência em atendimento transparente e qualidade comprovada em <span className="text-white font-semibold">2024 e 2025</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 mt-8 lg:mt-0"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Minha história
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Me chamo Theo Lima, sócio e assessor na Big Invest | XP Inc. Assessor de mais de R$ 50 milhões de reais, com investidores no Brasil e no exterior, como Portugal, Austrália, Malta, Estados Unidos e outros...
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Minha missão é conhecer sua história e onde você quer chegar, e com meu time entregar um planejamento financeiro 360 graus, olhando pra cada área da sua vida que precisa de cuidado e gestão.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Hoje assessoro empresários, médicos, diretores, influenciadores e suas empresas com todo conhecimento técnico e de mercado, focado em entregar o melhor resultado de forma transparente!
              </p>
            </div>

            {/* Differential cards */}
            <div className="space-y-4">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00E5FF]/20 to-[#00E5FF]/5 flex items-center justify-center flex-shrink-0 group-hover:from-[#00E5FF]/30 group-hover:to-[#00E5FF]/10 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-[#00E5FF]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
