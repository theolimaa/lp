import React from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Coleta de informações',
    desc: 'Conheço você, sua história e entendo como posso ajudar. Analisamos seu perfil de investidor, necessidades e objetivos.',
  },
  {
    id: '02',
    title: 'Apresentação da estratégia',
    desc: 'Apresento o planejamento patrimonial, a carteira e a estratégia com suas projeções e cenários ideais. Fazemos os ajustes finais juntos.',
  },
  {
    id: '03',
    title: 'Acompanhamento ativo',
    desc: 'Atualizações e suporte constantes. Revisões periódicas para garantir que seguimos sempre em direção ao seu objetivo.',
  },
];

const HowItWorks = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background: 'linear-gradient(to bottom, #0C0B09 0%, #111009 120px)' }} className="py-20 lg:py-28 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 lg:mb-16"
        >
          <span className="block w-8 h-0.5 mb-6" style={{ backgroundColor: 'var(--gold)' }} />
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ color: 'var(--cream)', fontFamily: "'Playfair Display', serif" }}
          >
            Como funciona<br />a assessoria?
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-10"
              style={{ borderBottom: '1px solid var(--border-subtle)' }}
            >
              {/* Number */}
              <div className="flex items-start">
                <span
                  className="text-5xl lg:text-6xl font-bold leading-none"
                  style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif", opacity: 0.35 }}
                >
                  {step.id}
                </span>
              </div>
              {/* Content */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
                <h3
                  className="text-xl lg:text-2xl font-bold mb-3 lg:mb-0 lg:min-w-[240px]"
                  style={{ color: 'var(--cream)' }}
                >
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {step.desc}
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
