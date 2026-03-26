import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, prefix = '', suffix = '', inView, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else { setCount(current); }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [target, inView]);
  const display = decimals > 0
    ? count.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    : Math.floor(count).toLocaleString('pt-BR');
  return <>{prefix}{display}{suffix}</>;
};

const stats = [
  { value: 50,  prefix: 'R$ ', suffix: 'M+', label: 'em assessoria sob gestão' },
  { value: 10,  prefix: '',    suffix: '',    label: 'NPS — satisfação máxima dos clientes' },
  { value: 2,   prefix: '',    suffix: 'x',   label: 'Assessor Destaque — 2024 e 2025' },
];

const AuthoritySection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="py-14 lg:py-16 px-6"
      style={{ background: 'linear-gradient(to bottom, #0D0D0D 0%, var(--bg-light) 130px)' }}
    >
      <div className="container mx-auto max-w-5xl">
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ border: '1px solid var(--border-light)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="flex flex-col items-center text-center py-10 px-8"
              style={{ borderRight: i < 2 ? '1px solid var(--border-light)' : 'none' }}
            >
              <span
                className="font-black mb-2 tabular-nums"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}
              >
                <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} inView={inView} />
              </span>
              <span
                className="uppercase tracking-widest leading-snug"
                style={{ color: 'var(--text-muted-light)', fontSize: '0.68rem', letterSpacing: '0.15em' }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
