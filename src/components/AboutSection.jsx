import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const differentials = [
  { id: '01', label: 'Transparência', desc: 'Total clareza em todas as operações e estratégias' },
  { id: '02', label: 'Planejamento',  desc: 'Recomendações personalizadas para cada perfil' },
  { id: '03', label: 'Resultado',     desc: 'Seu patrimônio e objetivos são a nossa prioridade' },
];

const AboutSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #111111 0%, #0D0D0D 120px)' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Offset gold border frame — Henrique Tasca visual trick */}
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
                  maskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
                }}
              />
            </div>
            {/* Badge overlay */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-4 left-4 right-10 z-20 flex items-center gap-4 px-5 py-4"
              style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)' }}
            >
              <div
                className="w-8 h-8 flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: 'var(--gold)' }}
              >
                <span className="text-black font-black text-xs">★</span>
              </div>
              <div>
                <p className="eyebrow" style={{ fontSize: '0.65rem' }}>Assessor Destaque</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                  Atendimento transparente · 2024 e 2025
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Section header */}
            <div>
              <p className="eyebrow mb-4">Conheça seu assessor</p>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Minha história
              </h2>
              <span className="block w-12 h-1" style={{ backgroundColor: 'var(--gold)' }} />
            </div>

            <div className="space-y-5 leading-relaxed" style={{ color: 'var(--text-body)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
              <p>
                Me chamo Theo Lima, sócio e assessor na{' '}
                <strong style={{ color: '#FFFFFF' }}>Big Invest | XP Inc.</strong>{' '}
                Assessoro mais de R$ 50 milhões, com clientes no Brasil e no exterior — Portugal, Austrália, Malta, Estados Unidos e outros.
              </p>
              <p>
                Minha missão é conhecer sua história e onde você quer chegar. Com meu time, entrego um planejamento financeiro 360°, olhando para cada área da sua vida que precisa de cuidado e gestão.
              </p>
              <p>
                Hoje assessoro empresários, médicos, diretores e influenciadores — com conhecimento técnico e foco em entregar o melhor resultado de forma transparente.
              </p>
            </div>

            {/* Differentials list */}
            <div style={{ borderTop: '1px solid var(--border-sub)' }}>
              {differentials.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-5 py-4"
                  style={{ borderBottom: '1px solid var(--border-sub)' }}
                >
                  <span
                    className="flex-shrink-0 pt-0.5 font-bold tabular-nums"
                    style={{ color: 'var(--gold)', fontSize: '0.72rem', fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.id}
                  </span>
                  <div>
                    <p
                      className="font-bold uppercase tracking-wide mb-1"
                      style={{ color: '#FFFFFF', fontSize: '0.8rem', fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em' }}
                    >
                      {item.label}
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA after credibility moment */}
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 px-8 py-4 font-bold text-black uppercase transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                backgroundColor: 'var(--gold)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                minHeight: '52px',
              }}
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              ENTRAR EM CONTATO AGORA
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
