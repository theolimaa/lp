import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Wallet, Target, ShieldAlert, Users, Landmark, TrendingUp } from 'lucide-react';

const pillars = [
  { id: 1, title: 'Gestão de Caixa',           desc: 'Controle e planejamento de entrada e saída mensal', icon: Wallet },
  { id: 2, title: 'Gestão de Objetivos',        desc: 'Entender necessidades e objetivos de curto, médio e longo prazo', icon: Target },
  { id: 3, title: 'Gestão de Risco',            desc: 'Plano para mitigar possíveis riscos ao patrimônio', icon: ShieldAlert },
  { id: 4, title: 'Sucessão',                   desc: 'Acesso eficiente ao patrimônio pelos herdeiros', icon: Users },
  { id: 5, title: 'Planejamento Tributário',    desc: 'Estratégias legais para reduzir a carga de impostos', icon: Landmark },
  { id: 6, title: 'Gestão de Investimentos',    desc: 'Carteira alinhada aos objetivos e perfil do investidor', icon: TrendingUp },
];

const PillarSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 px-6"
      style={{ background: 'linear-gradient(to bottom, var(--bg-light) 0%, var(--bg-dark) 150px)' }}
    >
      <div className="container mx-auto max-w-6xl">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-14 lg:mb-16 lg:flex lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-4">Metodologia</p>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-on-dark)', marginBottom: '0.75rem' }}>
              6 pilares do<br />planejamento financeiro
            </h2>
            <span className="block w-12 h-1" style={{ backgroundColor: 'var(--gold)' }} />
          </div>
          <p className="mt-6 lg:mt-0 lg:mb-2 max-w-xs leading-relaxed" style={{ color: 'var(--text-muted-dark)', fontSize: '0.92rem' }}>
            Uma visão 360° do seu patrimônio, da renda ao legado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ borderTop: '1px solid var(--border-dark)', borderLeft: '1px solid var(--border-dark)' }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 p-8 transition-colors duration-200 cursor-default"
              style={{ backgroundColor: 'var(--bg-card-dark)', borderRight: '1px solid var(--border-dark)', borderBottom: '1px solid var(--border-dark)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e1c12'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-card-dark)'}
            >
              <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: 'var(--gold-bg)', border: '1px solid var(--border-gold)' }}>
                <p.icon className="w-6 h-6" style={{ color: 'var(--gold)' }} strokeWidth={1.5} />
              </div>
              <div>
                <p className="eyebrow mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.12em' }}>{String(p.id).padStart(2, '0')}</p>
                <h3 className="font-bold uppercase mb-2" style={{ color: 'var(--text-on-dark)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', letterSpacing: '0.06em' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.88rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PillarSection;
