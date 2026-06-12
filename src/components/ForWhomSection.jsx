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
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.');
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${msg}`, '_blank');
  };

  return (
    <section ref={ref} className="px-5 lg:px-16 py-16 lg:py-24" style={{ backgroundColor: 'var(--paper-2)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <p className="label mb-4">Qualificação</p>
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 8vw, 4rem)' }}>
            Essa assessoria<br />é para você?
          </h2>
          <span className="gold-rule mt-5 block" />
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* For you */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="label mb-5" style={{ color: 'var(--gold)' }}>É para você se…</p>
            <ul>
              {forYou.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                  className="flex items-start gap-4 py-3.5"
                  style={{ borderBottom: '1px solid var(--rule)' }}
                >
                  <span className="stat-num flex-shrink-0 mt-0.5" style={{ fontSize: '1rem', color: 'var(--gold)', lineHeight: 1 }}>—</span>
                  <span style={{ color: 'var(--ink-warm)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not for you + CTA */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 lg:mt-0 flex flex-col gap-10">
            <div>
              <p className="label mb-5" style={{ color: 'var(--ink-muted)' }}>Não é para você se…</p>
              <ul>
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 py-3.5" style={{ borderBottom: '1px solid var(--rule)' }}>
                    <span style={{ color: 'var(--ink-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA box */}
            <div className="p-7 lg:p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(201,168,76,0.25)' }}>
              <p className="display mb-3" style={{ fontSize: '1.6rem' }}>Se você se identificou…</p>
              <p className="mb-6" style={{ color: 'var(--ink-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                O próximo passo é uma conversa. Gratuita, sem compromisso.
              </p>
              <button onClick={handleWhatsApp} className="btn-primary w-full justify-center">
                <MessageCircle className="w-4 h-4" />
                Quero meu diagnóstico gratuito
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
