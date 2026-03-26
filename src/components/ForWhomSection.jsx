import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const forYou = [
  'Você tem R$ 300 mil ou mais para investir',
  'Quer ser atendido com confiança e de forma transparente',
  'Busca planejamento patrimonial e/ou sucessório',
  'Quer pagar menos imposto de forma legal',
  'Tem investimentos no exterior ou pensa em ter',
  'Precisa de planejamento de aposentadoria',
  'Tem rotina corrida e não consegue acompanhar o mercado',
];

const notForYou = [
  'Busca retorno milagroso',
  'Não se preocupa com o futuro e liberdade financeira',
];

const ForWhomSection = () => {
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
      style={{ background: 'linear-gradient(to bottom, #0D0D0D 0%, var(--bg-light) 140px)' }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 lg:mb-16"
        >
          <p className="eyebrow mb-4">Qualificação</p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-on-light)', marginBottom: '0.75rem' }}>
            Essa assessoria<br />é para você?
          </h2>
          <span className="block w-12 h-1" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="mt-5 max-w-lg leading-relaxed" style={{ color: 'var(--text-muted-light)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
            Trabalho com um perfil específico de investidor. Veja se faz sentido para o seu momento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--gold)', fontSize: '0.72rem', fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.18em' }}>
              É para você se...
            </p>
            <ul>
              {forYou.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
                  className="flex items-start gap-4 py-4"
                  style={{ borderBottom: '1px solid var(--border-light)' }}
                >
                  <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: 'var(--gold)', fontFamily: "'Montserrat', sans-serif" }}>→</span>
                  <span style={{ color: 'var(--text-body-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted-light)', fontSize: '0.72rem', fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.18em' }}>
                Não é para você se...
              </p>
              <ul>
                {notForYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.28 + i * 0.07 }}
                    className="flex items-start gap-4 py-4"
                    style={{ borderBottom: '1px solid var(--border-light)' }}
                  >
                    <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: 'var(--text-muted-light)' }}>×</span>
                    <span style={{ color: 'var(--text-muted-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA Card — on light bg, card is white */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 lg:p-10 mt-auto"
              style={{ backgroundColor: 'var(--bg-card-light)', border: '1px solid var(--border-gold)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              <p className="font-bold mb-3" style={{ color: 'var(--text-on-light)', fontFamily: "'Montserrat', sans-serif", fontSize: '1.15rem' }}>
                Se você se identificou...
              </p>
              <p className="leading-relaxed mb-7" style={{ color: 'var(--text-muted-light)', fontSize: '0.9rem' }}>
                O próximo passo é uma conversa. Gratuita, sem compromisso.
                Você entende onde está e onde pode chegar.
              </p>
              <button onClick={handleWhatsApp} className="btn-gold w-full justify-center">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                Quero meu diagnóstico gratuito
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
