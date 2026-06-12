import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Calendar } from 'lucide-react';

const portfolios = [
  { id: 1, imageUrl: "/resultado-1.jpg.jpg", yield: "R$ 234.386,66", return: "21,6%", cdiReturn: "194,08%", period: "09/03/2024 a 27/10/2024" },
  { id: 2, imageUrl: "/resultado-2.jpg.jpg", yield: "R$ 414.543,67", return: "21,76%", cdiReturn: "200,15%", period: "05/03/2024 a 27/10/2024" },
  { id: 3, imageUrl: "/resultado-3.jpg.jpg", yield: "R$ 809.937,72", return: "14,60%", cdiReturn: "134,30%", period: "09/03/2024 a 27/10/2024" },
];

const PerformanceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = () => setCurrent(p => (p + 1) % portfolios.length);
  const prev = () => setCurrent(p => (p - 1 + portfolios.length) % portfolios.length);
  useEffect(() => {
    if (inView && !paused) { const t = setInterval(next, 4500); return () => clearInterval(t); }
  }, [inView, current, paused]);
  const p = portfolios[current];

  return (
    <section ref={ref} className="px-5 lg:px-16 py-16 lg:py-24" style={{ backgroundColor: 'var(--paper-2)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <p className="label mb-4">Resultados comprovados</p>
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 8vw, 4rem)' }}>Resultados<br />que superam</h2>
          <span className="gold-rule mt-5 block" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

          {/* Mobile: stacked. Desktop: side by side */}
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--rule)' }}>

              {/* Image */}
              <div className="p-4 lg:p-6" style={{ borderBottom: '1px solid var(--rule)' }}>
                <img src={p.imageUrl} alt="Gráfico de Rentabilidade" className="w-full h-auto" />
              </div>

              {/* Metrics — horizontal row on mobile */}
              <div className="p-5 lg:p-7">
                <p className="label mb-5">Rentabilidade da Carteira</p>
                <div className="flex flex-col sm:flex-row sm:items-end sm:gap-10 mb-5">
                  <div>
                    <p style={{ color: 'var(--ink-muted)', fontSize: '0.72rem', marginBottom: '0.3rem' }}>Rendimento Total</p>
                    <p className="stat-num" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--gold)' }}>{p.yield}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 pt-5" style={{ borderTop: '1px solid var(--rule)' }}>
                  <div className="pr-4" style={{ borderRight: '1px solid var(--rule)' }}>
                    <p style={{ color: 'var(--ink-muted)', fontSize: '0.68rem', marginBottom: '0.25rem' }}>Rentabilidade</p>
                    <p style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '1.1rem' }}>{p.return}</p>
                  </div>
                  <div className="px-4" style={{ borderRight: '1px solid var(--rule)' }}>
                    <p style={{ color: 'var(--ink-muted)', fontSize: '0.68rem', marginBottom: '0.25rem' }}>% do CDI</p>
                    <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '1.1rem' }}>{p.cdiReturn}</p>
                  </div>
                  <div className="pl-4">
                    <p style={{ color: 'var(--ink-muted)', fontSize: '0.68rem', marginBottom: '0.25rem' }}>Período</p>
                    <p style={{ color: 'var(--ink-warm)', fontSize: '0.78rem', lineHeight: 1.4 }}>{p.period}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex gap-2">
              {portfolios.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className="transition-all duration-300"
                  style={{ height: '2px', width: i === current ? '24px' : '8px', backgroundColor: i === current ? 'var(--gold)' : 'rgba(20,18,16,0.15)' }} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="btn-outline !min-h-0 !py-0 w-10 h-10 !px-0 justify-center" aria-label="Anterior"><ChevronLeft className="w-4 h-4" /></button>
              <button onClick={next} className="btn-outline !min-h-0 !py-0 w-10 h-10 !px-0 justify-center" aria-label="Próximo"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </motion.div>

        <p className="mt-8" style={{ color: 'var(--ink-muted)', fontSize: '0.68rem', lineHeight: 1.6 }}>
          *Rentabilidade passada não é garantia de rentabilidade futura. Os resultados apresentados são referentes a carteiras reais e podem variar de acordo com o perfil e volume investido.
        </p>
      </div>
    </section>
  );
};

export default PerformanceSection;
