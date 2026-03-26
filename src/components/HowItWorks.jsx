import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FileSearch, Presentation, LineChart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const steps = [
  { id: '01', icon: FileSearch,   title: 'Coleta de informações',       desc: 'Conheço você, sua história e entendo como posso ajudar. Analisamos seu perfil de investidor, necessidades e objetivos.' },
  { id: '02', icon: Presentation, title: 'Apresentação da estratégia',  desc: 'Apresento o planejamento patrimonial, a carteira e a estratégia com suas projeções e cenários ideais. Fazemos os ajustes finais juntos.' },
  { id: '03', icon: LineChart,     title: 'Acompanhamento ativo',        desc: 'Atualizações e suporte constantes. Revisões periódicas para garantir que seguimos sempre em direção ao seu objetivo.' },
];

const HowItWorks = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.');
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 px-6"
      style={{ background: 'linear-gradient(to bottom, var(--bg-dark) 0%, var(--bg-light) 150px)' }}
    >
      <div className="container mx-auto max-w-6xl">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-14 lg:mb-16">
          <p className="eyebrow mb-4">Como funciona?</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-on-light)', marginBottom: '0.75rem' }}>
            Um processo estruturado<br />para o seu sucesso
          </h2>
          <span className="block w-12 h-1" style={{ backgroundColor: 'var(--gold)' }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-8"
              style={{ backgroundColor: 'var(--bg-card-light)', border: '1px solid var(--border-light)', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
            >
              <div className="w-14 h-14 flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--gold-bg)', border: '1px solid var(--border-gold)' }}>
                <step.icon className="w-7 h-7" style={{ color: 'var(--gold)' }} strokeWidth={1.5} />
              </div>
              <p className="eyebrow mb-3" style={{ fontSize: '0.65rem' }}>{step.id}</p>
              <h3 className="font-bold mb-3" style={{ color: 'var(--text-on-light)', fontFamily: "'Montserrat', sans-serif", fontSize: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted-light)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="flex justify-center">
          <button onClick={handleWhatsApp} className="btn-gold">
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            Entrar em contato agora
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
