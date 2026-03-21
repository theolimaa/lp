import React from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background: 'linear-gradient(to bottom, #0C0B09 0%, #111009 120px)' }} className="py-20 lg:py-28 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative gold line behind */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full"
              style={{ border: '1px solid var(--border)', zIndex: 0 }}
            />
            <div className="relative z-10 overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://horizons-cdn.hostinger.com/c25d6b49-33f2-461d-8ced-feb874cc0e61/b9ad289ca37819944174cdd56cf21456.png"
                alt="Theo Lima — Assessor XP"
                className="w-full h-full object-cover object-top"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                }}
              />
            </div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-4 left-4 right-10 z-20 flex items-center gap-4 px-5 py-4"
              style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--gold)' }}>
                <span className="text-black font-bold text-xs">★</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>Assessor Destaque</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Atendimento transparente · 2024 e 2025</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="block w-8 h-0.5 mb-6" style={{ backgroundColor: 'var(--gold)' }} />
              <h2
                className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ color: 'var(--cream)', fontFamily: "'Playfair Display', serif" }}
              >
                Minha história
              </h2>
            </div>

            <div className="space-y-5 text-base lg:text-[17px] leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                Me chamo Theo Lima, sócio e assessor na <strong style={{ color: 'var(--cream)' }}>Big Invest | XP Inc.</strong> 
                Assessoro mais de R$ 50 milhões, com clientes no Brasil e no exterior — Portugal, Austrália, Malta, Estados Unidos e outros.
              </p>
              <p>
                Minha missão é conhecer sua história e onde você quer chegar. Com meu time, entrego um planejamento financeiro 360°, olhando para cada área da sua vida que precisa de cuidado e gestão.
              </p>
              <p>
                Hoje assessoro empresários, médicos, diretores e influenciadores — com conhecimento técnico e foco em entregar o melhor resultado de forma transparente.
              </p>
            </div>

            {/* Three pillars — editorial list */}
            <div className="space-y-0 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {[
                { label: 'Transparência', desc: 'Total clareza em todas as operações e estratégias' },
                { label: 'Planejamento',  desc: 'Recomendações personalizadas para cada perfil' },
                { label: 'Resultado',     desc: 'Seu patrimônio e objetivos são a nossa prioridade' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 py-5" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <span className="text-xs font-semibold tabular-nums pt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }}>0{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--cream)' }}>{item.label}</p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
