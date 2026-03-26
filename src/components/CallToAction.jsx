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
      className="py-20 lg:py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, var(--bg-light) 0%, var(--bg-dark) 160px)' }}
    >
      {/* Warm gold ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,175,55,0.07) 0%, transparent 65%)' }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <p className="eyebrow mb-6">Próximo passo</p>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#FFFFFF', lineHeight: 1.05, marginBottom: '1rem' }}>
              SEJA O PRÓXIMO<br />
              <span style={{ color: 'var(--gold)' }}>CASE DE SUCESSO.</span>
            </h2>
            <p className="font-semibold" style={{ color: 'var(--text-muted-dark)', fontFamily: "'Open Sans', sans-serif", fontSize: '1rem' }}>
              Dinheiro parado não cresce. O momento certo é agora.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 lg:mt-0 p-8 lg:p-10"
            style={{ backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-gold)' }}
          >
            <p className="leading-relaxed mb-7" style={{ color: 'var(--text-body-dark)', fontSize: '0.95rem' }}>
              Agende uma conversa gratuita. Vou analisar sua situação e mostrar o que é possível fazer com o seu patrimônio — sem enrolação, sem compromisso.
            </p>
            <div className="flex flex-col gap-3 mb-8" style={{ color: 'var(--text-muted-dark)', fontSize: '0.88rem' }}>
              {['Diagnóstico gratuito', 'Sem compromisso', 'Resposta em até 24h'].map((t, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
                  {t}
                </span>
              ))}
            </div>
            <button onClick={handleWhatsApp} className="btn-gold w-full justify-center">
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              Agendar meu diagnóstico
            </button>
            <p className="text-center mt-4" style={{ color: 'var(--text-muted-dark)', fontSize: '0.72rem' }}>
              Ticket mínimo: R$ 300 mil · Plataforma XP Investimentos
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
