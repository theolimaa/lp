import React from 'react';
import { motion, useInView } from 'framer-motion';

const ConhecaBigInvest = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }} className="py-20 lg:py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="block w-8 h-0.5 mb-6" style={{ backgroundColor: 'var(--gold)' }} />
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: 'var(--cream)', fontFamily: "'Playfair Display', serif" }}
            >
              A estrutura<br />por trás
            </h2>
            <p className="text-4xl lg:text-5xl font-bold italic" style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif" }}>
              Big Invest.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 lg:mt-0 space-y-6"
          >
            <p className="text-base lg:text-[17px] leading-relaxed" style={{ color: 'var(--text)' }}>
              A Big Invest é uma assessoria de investimentos credenciada pela XP, fundada em 2019. Auxiliamos cada cliente individualmente com estratégias sob medida para atender a seus objetivos financeiros e de vida.
            </p>
            <p className="text-base lg:text-[17px] leading-relaxed" style={{ color: 'var(--text)' }}>
              Investimos continuamente no desenvolvimento da nossa equipe para garantir que estejam sempre atualizados com o mercado e prontos para desenvolver as melhores estratégias.
            </p>
            <p className="text-base italic" style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif" }}>
              "Conte com a gente para alcançar suas conquistas, agora e no futuro."
            </p>

            {/* Stats inline */}
            <div
              className="grid grid-cols-3 gap-0 mt-8"
              style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
            >
              {[
                { value: 'R$ 1,2Bi', label: 'patrimônio gerido' },
                { value: '2.500+',   label: 'clientes' },
                { value: '93,7',     label: 'NPS Big Invest' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center p-5" style={{ borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                  <span className="text-xl font-bold" style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif" }}>{s.value}</span>
                  <span className="text-xs mt-1 leading-tight" style={{ color: 'var(--muted)' }}>{s.label}</span>
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
