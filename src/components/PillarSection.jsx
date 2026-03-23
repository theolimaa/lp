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
    <section ref={ref} style={{ background: 'linear-gradient(to bottom, #111009 0%, #0C0B09 120px)' }} className="py-20 lg:py-28 px-6">
      <div className="container mx-auto max-w-6xl">
 
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 lg:mb-16 lg:flex lg:items-end lg:justify-between"
        >
          <div>
            <span className="block w-8 h-0.5 mb-6" style={{ backgroundColor: 'var(--gold)' }} />
            <h2
              className="text-4xl lg:text-5xl font-bold"
              style={{ color: 'var(--cream)', fontFamily: "'Cormorant Garamond', serif" }}
            >
              6 pilares do<br />planejamento financeiro
            </h2>
          </div>
          <p className="text-sm lg:text-base leading-relaxed max-w-xs mt-5 lg:mt-0 lg:mb-1" style={{ color: 'var(--muted)' }}>
            Uma visão 360° do seu patrimônio, da renda ao legado.
          </p>
        </motion.div>
 
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border-subtle)' }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group flex flex-col gap-4 p-8 transition-colors duration-300"
              style={{ backgroundColor: 'var(--bg-card)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-2)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
            >
              <div className="flex items-start justify-between">
                <p.icon className="w-6 h-6 transition-colors duration-300" style={{ color: 'var(--gold)' }} strokeWidth={1.5} />
                <span className="text-xs tabular-nums font-semibold" style={{ color: 'var(--gold-dim)' }}>0{p.id}</span>
              </div>
              <div>
                <h3
                  className="text-base font-bold mb-2 uppercase tracking-wide"
                  style={{ color: 'var(--cream)', letterSpacing: '0.04em' }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
 
      </div>
    </section>
  );
};
 
export default PillarSection;
 
