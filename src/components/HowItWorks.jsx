import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const steps = [
  { id: '01', title: 'Coleta de informações',      desc: 'Conheço você, sua história e entendo como posso ajudar. Analisamos seu perfil de investidor, necessidades e objetivos.' },
  { id: '02', title: 'Apresentação da estratégia', desc: 'Apresento o planejamento patrimonial, a carteira e a estratégia com suas projeções e cenários ideais. Fazemos os ajustes finais juntos.' },
  { id: '03', title: 'Acompanhamento ativo',        desc: 'Atualizações e suporte constantes. Revisões periódicas para garantir que seguimos sempre em direção ao seu objetivo.' },
];

const HowItWorks = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.');
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${msg}`, '_blank');
  };

  return (
    <section ref={ref} className="px-5 lg:px-16 py-16 lg:py-24" style={{ backgroundColor: 'var(--paper-2)' }}>
      <div className="max-w-5xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <p className="label mb-4">Como funciona?</p>
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 8vw, 4rem)' }}>
            Um processo<br />para o seu sucesso
          </h2>
          <span className="gold-rule mt-5 block" />
        </motion.div>

        {/* Steps — large numbered, clean */}
        <div className="mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6 lg:gap-10 py-7"
              style={{ borderBottom: '1px solid var(--rule)' }}
            >
              {/* Big number */}
              <span className="stat-num flex-shrink-0" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: 'var(--gold)', lineHeight: 0.9, opacity: 0.4 }}>
                {step.id}
              </span>
              <div className="pt-1">
                <h3 style={{ color: 'var(--ink)', fontWeight: 600, fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.45 }} className="hidden lg:flex">
          <button onClick={handleWhatsApp} className="btn-primary">
            <MessageCircle className="w-4 h-4" />
            Entrar em contato agora
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
