import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ForWhomSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.');
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

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

  return (
    <section ref={ref} style={{ backgroundColor: 'var(--bg)' }} className="py-20 lg:py-28 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 lg:mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: 'var(--cream)', fontFamily: "'Playfair Display', serif" }}
          >
            Essa assessoria<br />é para você?
          </h2>
          <p className="text-base lg:text-lg leading-relaxed max-w-lg" style={{ color: 'var(--muted)' }}>
            Trabalho com um perfil específico de investidor.
            Veja se faz sentido para o seu momento.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-6" style={{ color: 'var(--gold)' }}>
              É para você se...
            </p>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.18 + i * 0.07 }}
                  className="flex items-start gap-4 pb-4"
                  style={{ borderBottom: '1px solid var(--border-subtle)' }}
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,168,76,0.15)' }}>
                    <Check className="w-3 h-3" style={{ color: 'var(--gold)' }} />
                  </span>
                  <span className="text-sm lg:text-base leading-relaxed" style={{ color: 'var(--text)' }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-6" style={{ color: 'var(--muted)' }}>
                Não é para você se...
              </p>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-4 pb-4"
                    style={{ borderBottom: '1px solid var(--border-subtle)' }}
                  >
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      <X className="w-3 h-3" style={{ color: 'var(--muted)' }} />
                    </span>
                    <span className="text-sm lg:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 lg:p-10 mt-auto"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <p className="text-xl lg:text-2xl font-bold mb-3" style={{ color: 'var(--cream)', fontFamily: "'Playfair Display', serif" }}>
                Se você se identificou...
              </p>
              <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--muted)' }}>
                O próximo passo é uma conversa. Gratuita, sem compromisso. 
                Você entende onde está e onde pode chegar.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:brightness-110"
                style={{ backgroundColor: 'var(--gold)', letterSpacing: '0.1em' }}
              >
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
