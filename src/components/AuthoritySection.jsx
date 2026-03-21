import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, suffix = '', prefix = '', inView, decimals = 0 }) => {
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
  { value: 50, prefix: 'R$ ', suffix: 'M+', label: 'em assessoria\nsob gestão' },
  { value: 10, prefix: '',    suffix: '',   label: 'NPS — satisfação\nmáxima dos clientes' },
  { value: 2,  prefix: '',    suffix: 'x',  label: 'Assessor Destaque\n2024 e 2025' },
];

const AuthoritySection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ background: 'linear-gradient(to bottom, #0C0B09 0%, #111009 100px)' }} className="py-12 lg:py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': 1, divideColor: 'var(--border)' }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center py-8 sm:py-4 sm:px-10 first:pt-0 last:pb-0 sm:first:pt-4 sm:last:pb-4"
            >
              <span
                className="text-4xl lg:text-5xl font-bold mb-2 tabular-nums"
                style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif" }}
              >
                <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} inView={inView} decimals={s.decimals || 0} />
              </span>
              <span className="text-xs uppercase tracking-widest whitespace-pre-line leading-snug" style={{ color: 'var(--muted)' }}>
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
