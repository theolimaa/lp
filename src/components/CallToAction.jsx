import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const CallToAction = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.');
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${msg}`, '_blank');
  };

  return (
    <section ref={ref} className="px-5 lg:px-16 py-20 lg:py-32" style={{ backgroundColor: 'var(--dark)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <p className="label mb-5" style={{ color: 'var(--gold)' }}>Próximo passo</p>
            <h2 className="display mb-4" style={{ fontSize: 'clamp(2.8rem, 9vw, 5rem)', color: '#FFFFFF', fontWeight: 300 }}>
              Seja o próximo<br />
              <em style={{ color: 'var(--gold)' }}>case de sucesso.</em>
            </h2>
            <p style={{ color: 'rgba(249,248,246,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
              Dinheiro parado não cresce.<br />O momento certo é agora.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 lg:mt-0 p-7 lg:p-10"
            style={{ backgroundColor: 'var(--dark-2)', border: '1px solid rgba(201,168,76,0.2)' }}
          >
            <p className="mb-6" style={{ color: 'rgba(249,248,246,0.65)', fontSize: '0.95rem', lineHeight: 1.75 }}>
              Agende uma conversa gratuita. Vou analisar sua situação e mostrar o que é possível fazer com o seu patrimônio — sem enrolação, sem compromisso.
            </p>
            <div className="flex flex-col gap-2.5 mb-7">
              {['Diagnóstico gratuito', 'Sem compromisso', 'Resposta em até 24h'].map((t, i) => (
                <span key={i} className="flex items-center gap-3" style={{ color: 'rgba(249,248,246,0.5)', fontSize: '0.88rem' }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--gold)' }} />
                  {t}
                </span>
              ))}
            </div>
            <button onClick={handleWhatsApp} className="btn-primary w-full justify-center" style={{ backgroundColor: 'var(--gold)', color: '#000' }}>
              <MessageCircle className="w-4 h-4" />
              Agendar meu diagnóstico
            </button>
            <p className="text-center mt-4" style={{ color: 'rgba(249,248,246,0.3)', fontSize: '0.68rem' }}>
              Ticket mínimo: R$ 300 mil · Plataforma XP Investimentos
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
