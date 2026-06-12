import React from 'react';
import { motion, useInView } from 'framer-motion';

const bigStats = [
  { value: 'R$ 1,2Bi', label: 'patrimônio gerido' },
  { value: '2.500+',   label: 'clientes' },
  { value: '93,7',     label: 'NPS Big Invest' },
];

const ConhecaBigInvest = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="px-5 lg:px-16 py-16 lg:py-24" style={{ backgroundColor: 'var(--paper)' }}>
      <hr className="section-rule mb-14" />
      <div className="max-w-5xl mx-auto">
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <p className="label mb-6">A estrutura por trás</p>
            <img src="/__logo-big-fundopreto.png.png" alt="Big Invest"
              style={{ height: '48px', width: 'auto', marginBottom: '1.5rem', opacity: 0.85 }} />
            <p style={{ color: 'var(--ink-muted)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              Credenciada XP Investimentos
            </p>
            <span className="gold-rule block" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="mt-10 lg:mt-0 space-y-5">
            <p style={{ color: 'var(--ink-warm)', fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)', lineHeight: 1.75 }}>
              A Big Invest é uma assessoria de investimentos credenciada pela XP, fundada em 2019. Auxiliamos cada cliente individualmente com estratégias sob medida para atender a seus objetivos financeiros e de vida.
            </p>
            <p style={{ color: 'var(--ink-warm)', fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)', lineHeight: 1.75 }}>
              Investimos continuamente no desenvolvimento da nossa equipe para garantir que estejam sempre atualizados com o mercado e prontos para desenvolver as melhores estratégias.
            </p>
            <p style={{ color: 'var(--gold)', fontSize: '1rem', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
              "Conte com a gente para alcançar suas conquistas, agora e no futuro."
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 pt-8 mt-4" style={{ borderTop: '1px solid var(--rule)' }}>
              {bigStats.map((s, i) => (
                <div key={i} className="pr-4" style={{ borderRight: i < 2 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? '1rem' : 0 }}>
                  <p className="stat-num" style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', color: 'var(--ink)' }}>{s.value}</p>
                  <p style={{ color: 'var(--ink-muted)', fontSize: '0.68rem', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      <hr className="section-rule mt-14" />
    </section>
  );
};

export default ConhecaBigInvest;
