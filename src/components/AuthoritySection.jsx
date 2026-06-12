import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, prefix = '', suffix = '', inView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const steps = 60; let current = 0;
    const inc = target / steps;
    const t = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(t); }
      else setCount(current);
    }, 2000 / steps);
    return () => clearInterval(t);
  }, [target, inView]);
  return <>{prefix}{Math.floor(count).toLocaleString('pt-BR')}{suffix}</>;
};

const stats = [
  { value: 60,  prefix: 'R$\u00A0', suffix: 'M+', label: 'em assessoria', sub: 'sob gestão' },
  { value: 10,  prefix: '',         suffix: '',    label: 'NPS',            sub: 'satisfação máxima' },
  { value: 2,   prefix: '',         suffix: 'x',   label: 'Assessor',       sub: 'Destaque 2024 · 2025' },
];

const AuthoritySection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="px-5 lg:px-16 py-14 lg:py-20" style={{ backgroundColor: 'var(--paper)' }}>
      <hr className="section-rule mb-14" />
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 lg:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Large Cormorant italic number — signature element */}
              <span
                className="stat-num mb-1"
                style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', color: 'var(--gold)' }}
              >
                <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} inView={inView} />
              </span>
              <span className="label mb-0.5" style={{ color: 'var(--ink)', fontSize: '0.6rem' }}>{s.label}</span>
              <span style={{ color: 'var(--ink-muted)', fontSize: '0.72rem' }}>{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="section-rule mt-14" />
    </section>
  );
};

export default AuthoritySection;
