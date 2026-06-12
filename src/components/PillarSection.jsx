import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Wallet, Target, ShieldAlert, Users, Landmark, TrendingUp } from 'lucide-react';

const pillars = [
  { id: 1, title: 'Gestão de Caixa',        desc: 'Controle e planejamento de entrada e saída mensal', icon: Wallet },
  { id: 2, title: 'Gestão de Objetivos',     desc: 'Entender necessidades e objetivos de curto, médio e longo prazo', icon: Target },
  { id: 3, title: 'Gestão de Risco',         desc: 'Plano para mitigar possíveis riscos ao patrimônio', icon: ShieldAlert },
  { id: 4, title: 'Sucessão',                desc: 'Acesso eficiente ao patrimônio pelos herdeiros', icon: Users },
  { id: 5, title: 'Planejamento Tributário', desc: 'Estratégias legais para reduzir a carga de impostos', icon: Landmark },
  { id: 6, title: 'Gestão de Investimentos', desc: 'Carteira alinhada aos objetivos e perfil do investidor', icon: TrendingUp },
];

const PillarSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="px-5 lg:px-16 py-16 lg:py-24" style={{ backgroundColor: 'var(--paper)' }}>
      <hr className="section-rule mb-14" />
      <div className="max-w-5xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <p className="label mb-4">Metodologia</p>
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 8vw, 4rem)' }}>
            6 pilares do<br />planejamento
          </h2>
          <span className="gold-rule mt-5 block" />
        </motion.div>

        {/* Stacked list — not grid on mobile */}
        <div>
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-5 py-5"
              style={{ borderBottom: '1px solid var(--rule)' }}
            >
              {/* Cormorant number */}
              <span className="stat-num flex-shrink-0 w-8 text-right" style={{ fontSize: '1.5rem', color: 'var(--gold)', lineHeight: 1.3 }}>
                {String(p.id).padStart(2, '0')}
              </span>
              <p.icon className="flex-shrink-0 mt-1 w-5 h-5" style={{ color: 'var(--ink-muted)' }} strokeWidth={1.5} />
              <div>
                <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.2rem' }}>{p.title}</p>
                <p style={{ color: 'var(--ink-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <hr className="section-rule mt-14" />
    </section>
  );
};

export default PillarSection;
