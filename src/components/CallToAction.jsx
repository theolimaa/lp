import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const CallToAction = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.');
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section
      ref={ref}
      style={{ backgroundColor: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}
      className="py-20 lg:py-28 px-6 overflow-hidden relative"
    >
      {/* Subtle gold ambient */}
      <div
        className="absolute right-0 top-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="block w-8 h-0.5 mb-8" style={{ backgroundColor: 'var(--gold)' }} />
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
              style={{ color: 'var(--cream)', fontFamily: "'Playfair Display', serif" }}
            >
              Dinheiro parado<br />não cresce.
            </h2>
            <p className="text-lg italic mb-2" style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif" }}>
              O momento certo é agora.
            </p>
          </motion.div>

          {/* Right — card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-10 lg:mt-0 p-8 lg:p-10"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text)' }}>
              Agende uma conversa gratuita. Vou analisar sua situação e mostrar o que é possível fazer com o seu patrimônio — sem enrolação, sem compromisso.
            </p>

            <div className="flex flex-col gap-3 mb-8 text-sm" style={{ color: 'var(--muted)' }}>
              {['Diagnóstico gratuito', 'Sem compromisso', 'Resposta em até 24h'].map((t, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--gold)' }} />
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={handleWhatsApp}
              className="group w-full flex items-center justify-center gap-3 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:brightness-110"
              style={{ backgroundColor: 'var(--gold)', letterSpacing: '0.1em' }}
            >
              <MessageCircle className="w-4 h-4" />
              Agendar meu diagnóstico
            </button>

            <p className="text-center text-xs mt-4" style={{ color: 'var(--muted)' }}>
              Ticket mínimo: R$ 300 mil · Plataforma XP Investimentos
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
