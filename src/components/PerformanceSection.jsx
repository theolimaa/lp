import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Calendar, Wallet } from 'lucide-react';

const portfolios = [
  { id: 1, imageUrl: "/resultado-1.jpg.jpg", yield: "R$ 234.286,00", return: "21,6%", cdiReturn: "194,08%", period: "09/03/2024 a 27/10/2024" },
  { id: 2, imageUrl: "/resultado-2.jpg.jpg", yield: "R$ 414.543,67", return: "21,76%", cdiReturn: "200,15%", period: "05/03/2024 a 27/10/2024" },
  { id: 3, imageUrl: "/resultado-3.jpg.jpg", yield: "R$ 860.957,72", return: "14,60%", cdiReturn: "134,30%", period: "09/03/2024 a 27/10/2024" },
];

const PerformanceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = () => setCurrent(p => (p + 1) % portfolios.length);
  const prev = () => setCurrent(p => (p - 1 + portfolios.length) % portfolios.length);
  useEffect(() => {
    if (inView && !paused) { const t = setInterval(next, 4000); return () => clearInterval(t); }
  }, [inView, current, paused]);
  const p = portfolios[current];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-dark) 0%, var(--bg-light) 150px, var(--bg-light) 100%)' }}
    >
      <div className="container mx-auto max-w-6xl">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
          <p className="eyebrow mb-4">Resultados comprovados</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-on-light)', marginBottom: '0.75rem' }}>
            Resultados que superam
          </h2>
          <span className="block w-12 h-1" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="mt-5 max-w-xl leading-relaxed" style={{ color: 'var(--text-muted-light)', fontSize: '1rem' }}>
            Performance real de carteiras sob nossa gestão, superando o CDI com estratégias personalizadas.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="relative max-w-5xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

          {/* Nav buttons */}
          <button onClick={prev} className="btn-gold absolute top-1/2 -translate-y-1/2 -left-5 lg:-left-14 z-20 hidden md:flex !min-h-0 !px-0 w-11 h-11 justify-center" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="btn-gold absolute top-1/2 -translate-y-1/2 -right-5 lg:-right-14 z-20 hidden md:flex !min-h-0 !px-0 w-11 h-11 justify-center" aria-label="Próximo">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card — white on light bg */}
          <div style={{ backgroundColor: 'var(--bg-card-light)', border: '1px solid var(--border-light)', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex flex-col lg:flex-row">
                <div className="lg:w-[58%] p-4 flex items-center justify-center" style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <div className="w-full overflow-hidden" style={{ border: '1px solid var(--border-light)' }}>
                    <img src={p.imageUrl} alt="Gráfico de Rentabilidade" className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className="lg:w-[42%] p-7 flex flex-col justify-center space-y-6" style={{ borderLeft: '1px solid var(--border-light)' }}>
                  <div>
                    <p className="eyebrow mb-1">Rentabilidade da Carteira</p>
                    <span className="block w-8 h-0.5 mt-2" style={{ backgroundColor: 'var(--gold)' }} />
                  </div>
                  <div className="p-5" style={{ backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-gold)' }}>
                    <p style={{ color: 'var(--text-muted-light)', fontSize: '0.78rem', marginBottom: '0.4rem' }}>Rendimento Total</p>
                    <p className="font-black tabular-nums" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: 'var(--gold)' }}>{p.yield}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4" style={{ backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
                      <p className="flex items-center gap-1 mb-1" style={{ color: 'var(--text-muted-light)', fontSize: '0.72rem' }}><TrendingUp className="w-3 h-3" /> Rentabilidade</p>
                      <p className="font-bold" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.1rem', color: 'var(--text-on-light)' }}>{p.return}</p>
                    </div>
                    <div className="p-4" style={{ backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
                      <p className="flex items-center gap-1 mb-1" style={{ color: 'var(--text-muted-light)', fontSize: '0.72rem' }}><TrendingUp className="w-3 h-3" style={{ color: 'var(--gold)' }} /> % do CDI</p>
                      <p className="font-bold" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.1rem', color: 'var(--gold)' }}>{p.cdiReturn}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--text-muted-light)' }} />
                    <span style={{ color: 'var(--text-muted-light)', fontSize: '0.8rem' }}>{p.period}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {portfolios.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="transition-all duration-300" style={{ height: '3px', width: i === current ? '28px' : '8px', backgroundColor: i === current ? 'var(--gold)' : 'var(--border-light)', borderRadius: '2px' }} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>

          {/* Mobile nav */}
          <div className="flex justify-between mt-4 md:hidden">
            <button onClick={prev} className="flex items-center gap-1 py-2 font-bold uppercase" style={{ color: 'var(--gold)', fontSize: '0.75rem', fontFamily: "'Montserrat', sans-serif" }}><ChevronLeft className="w-4 h-4" /> Anterior</button>
            <button onClick={next} className="flex items-center gap-1 py-2 font-bold uppercase" style={{ color: 'var(--gold)', fontSize: '0.75rem', fontFamily: "'Montserrat', sans-serif" }}>Próximo <ChevronRight className="w-4 h-4" /></button>
          </div>
        </motion.div>

        <p className="text-center mt-10" style={{ color: 'var(--text-muted-light)', fontSize: '0.7rem', maxWidth: '640px', margin: '2.5rem auto 0' }}>
          *Rentabilidade passada não é garantia de rentabilidade futura. Os resultados apresentados são referentes a carteiras reais, mas podem variar de acordo com o perfil, volume investido e data de início de cada investidor.
        </p>
      </div>
    </section>
  );
};

export default PerformanceSection;
