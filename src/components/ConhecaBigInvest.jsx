import React from 'react';
import { motion, useInView } from 'framer-motion';

const bigStats = [
  { value: 'R$ 1,2Bi', label: 'Patrimônio gerido' },
  { value: '2.500+',   label: 'Clientes' },
  { value: '93,7',     label: 'NPS Big Invest' },
];

const ConhecaBigInvest = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 px-6"
      style={{ background: 'linear-gradient(to bottom, var(--bg-light) 0%, var(--bg-dark) 150px)' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-6">A estrutura por trás</p>
            {/* Logo — versão fundo escuro */}
            <img
              src="/__logo-big-fundopreto.png.png"
              alt="Big Invest"
              style={{ height: '56px', width: 'auto', marginBottom: '1.5rem' }}
            />
            <p className="font-bold italic" style={{ color: 'var(--gold)', fontFamily: "'Montserrat', sans-serif", fontSize: '1rem' }}>
              Credenciada XP Investimentos
            </p>
            <span className="block w-12 h-1 mt-4" style={{ backgroundColor: 'var(--gold)' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 lg:mt-0 space-y-6"
          >
            <p className="leading-relaxed" style={{ color: 'var(--text-body-dark)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
              A Big Invest é uma assessoria de investimentos credenciada pela XP, fundada em 2019. Auxiliamos cada cliente individualmente com estratégias sob medida para atender a seus objetivos financeiros e de vida.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text-body-dark)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
              Investimos continuamente no desenvolvimento da nossa equipe para garantir que estejam sempre atualizados com o mercado e prontos para desenvolver as melhores estratégias.
            </p>
            <p className="font-bold italic" style={{ color: 'var(--gold)', fontFamily: "'Montserrat', sans-serif", fontSize: '1rem' }}>
              "Conte com a gente para alcançar suas conquistas, agora e no futuro."
            </p>

            <div className="grid grid-cols-3 mt-8" style={{ borderTop: '1px solid var(--border-gold)', borderLeft: '1px solid var(--border-gold)' }}>
              {bigStats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center p-5" style={{ borderRight: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
                  <span className="font-black mb-1" style={{ color: 'var(--gold)', fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
                    {s.value}
                  </span>
                  <span style={{ color: 'var(--text-muted-dark)', fontSize: '0.72rem', letterSpacing: '0.06em' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConhecaBigInvest;
