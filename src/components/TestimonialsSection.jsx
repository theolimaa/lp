import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
 
const testimonials = [
  {
    name: 'Rafael M.',
    role: 'Empresário — Setor de Construção Civil',
    initials: 'RM',
    color: '#4A8FE7',
    stars: 5,
    text: 'Antes eu deixava dinheiro parado em conta corrente sem saber o que fazer. O Theo mapeou toda minha situação, reorganizou minha carteira e hoje tenho clareza sobre cada real que invisto. O atendimento é outro nível — sempre disponível e sem enrolação.',
  },
  {
    name: 'Dra. Camila S.',
    role: 'Médica — Cardiologista',
    initials: 'CS',
    color: '#00E5FF',
    stars: 5,
    text: 'Como médica, não tinha tempo para me preocupar com investimentos. Hoje tenho um planejamento completo, que cuida do meu patrimônio, da previdência e até do meu CNPJ. O Theo traduz tudo de forma simples e transparente. Me arrependo de não ter começado antes.',
  },
  {
    name: 'Marcelo A.',
    role: 'Diretor Comercial — Indústria',
    initials: 'MA',
    color: '#4A8FE7',
    stars: 5,
    text: 'Já tive outro assessor antes, mas a diferença é gritante. O Theo não fica empurrando produto — ele entende meu objetivo e monta a estratégia certa. Em menos de 1 ano, minha carteira rendeu mais de 200% do CDI. Recomendo sem hesitar.',
  },
  {
    name: 'Fernanda L.',
    role: 'Influenciadora Digital',
    initials: 'FL',
    color: '#00E5FF',
    stars: 5,
    text: 'Minha renda é variável e eu não sabia como organizar isso. O Theo me ajudou a estruturar uma reserva, diversificar os investimentos e ainda pensar no longo prazo. Me sinto muito mais segura financeiramente hoje.',
  },
];
 
const TestimonialsSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);
 
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
 
  const t = testimonials[current];
 
  return (
    <section ref={ref} className="relative py-16 lg:py-24 px-4 bg-gradient-to-b from-[#050A14] to-black overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#4A8FE7]/5 rounded-full blur-[120px] pointer-events-none" />
 
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#4A8FE7] uppercase tracking-widest text-sm font-semibold mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Clientes que transformaram seu patrimônio
          </h2>
        </motion.div>
 
        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative rounded-2xl border border-white/10 bg-[#0A101E]/80 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5" />
 
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#4A8FE7] text-[#4A8FE7]" />
                  ))}
                </div>
 
                {/* Text */}
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                  "{t.text}"
                </p>
 
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
 
          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#4A8FE7]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
 
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#4A8FE7]/50 flex items-center justify-center text-white hover:text-[#4A8FE7] transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#4A8FE7]/50 flex items-center justify-center text-white hover:text-[#4A8FE7] transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
 
export default TestimonialsSection;
 
