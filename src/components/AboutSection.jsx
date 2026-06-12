import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const AboutSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${msg}`, '_blank');
  };

  return (
    <section ref={ref} className="px-5 lg:px-16 py-16 lg:py-24" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:items-start">

          {/* Photo — above text on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="mb-10 lg:mb-0 lg:sticky lg:top-20"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: '520px' }}>
              <img
                src="/segunda.jpeg"
                alt="Theo Lima"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: 'linear-gradient(to top, var(--paper), transparent)' }} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label mb-4">Conheça seu assessor</p>
            <h2 className="display mb-6" style={{ fontSize: 'clamp(2.4rem, 8vw, 4rem)' }}>
              Minha história
            </h2>
            <span className="gold-rule mb-8 block" />

            <div className="space-y-5 mb-10" style={{ color: 'var(--ink-warm)', fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)', lineHeight: 1.75 }}>
              <p>
                Me chamo Theo Lima, sócio e assessor na <strong style={{ color: 'var(--ink)' }}>Big Invest | XP Inc.</strong> Assessoro mais de R$ 60 milhões, com clientes no Brasil e no exterior — Portugal, Austrália, Malta, Estados Unidos e outros.
              </p>
              <p>
                Minha missão é conhecer sua história e onde você quer chegar. Com meu time, entrego um planejamento financeiro 360°, olhando para cada área da sua vida que precisa de cuidado e gestão.
              </p>
              <p>
                Hoje assessoro empresários, médicos, diretores e influenciadores — com conhecimento técnico e foco em entregar o melhor resultado de forma transparente.
              </p>
            </div>

            {/* Differentials */}
            <div className="mb-10">
              {[
                { n: '01', label: 'Transparência', desc: 'Total clareza em todas as operações e estratégias' },
                { n: '02', label: 'Planejamento',  desc: 'Recomendações personalizadas para cada perfil' },
                { n: '03', label: 'Resultado',     desc: 'Seu patrimônio e objetivos são a nossa prioridade' },
              ].map((item) => (
                <div key={item.n} className="flex gap-5 py-4" style={{ borderBottom: '1px solid var(--rule)' }}>
                  <span className="stat-num flex-shrink-0" style={{ fontSize: '1.5rem', color: 'var(--gold)', lineHeight: 1.3 }}>{item.n}</span>
                  <div>
                    <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.label}</p>
                    <p style={{ color: 'var(--ink-muted)', fontSize: '0.85rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleWhatsApp} className="btn-primary hidden lg:inline-flex">
              <MessageCircle className="w-4 h-4" />
              Entrar em contato
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
