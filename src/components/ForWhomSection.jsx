import React from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ForWhomSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.');
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  const forYou = [
    'Você tem R$ 300 mil ou mais para investir',
    'Quer mais do que a poupança ou o Tesouro Direto',
    'É empresário, médico, diretor ou profissional liberal',
    'Busca planejamento patrimonial e sucessório',
    'Quer pagar menos imposto de forma legal',
    'Tem investimentos no exterior ou pensa em ter',
  ];

  const notForYou = [
    'Busca dicas de ações para operar sozinho',
    'Não tem clareza sobre seus objetivos financeiros',
    'Quer retornos milagrosos sem risco',
  ];

  return (
    <section ref={ref} className="relative py-16 lg:py-24 px-4 bg-[#020408]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#00E5FF]/5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-4">
            Qualificação
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Essa assessoria é para você?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trabalho com um perfil específico de investidor. Veja se faz sentido para o seu momento.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-2xl border border-[#D4AF37]/30 bg-[#0A101E]/80 p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none" />
            <h3 className="text-xl font-bold text-[#D4AF37] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
              É para você se...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 text-gray-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#0A101E]/40 p-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-red-900/5 rounded-full blur-[80px] pointer-events-none" />
              <h3 className="text-xl font-bold text-gray-300 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-gray-500" />
                Não é para você se...
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <XCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl border border-[#00E5FF]/20 bg-gradient-to-br from-[#050A14] to-[#0A101E] p-8 flex flex-col justify-between"
            >
              <p className="text-white text-lg font-medium mb-2">
                Se você se identificou com o perfil acima...
              </p>
              <p className="text-gray-400 text-sm mb-6">
                O próximo passo é um diagnóstico gratuito. Sem compromisso. Você entende onde está, onde pode chegar e como.
              </p>
              <Button
                onClick={handleWhatsApp}
                style={{ backgroundColor: '#D4AF37', color: '#000000' }}
                className="w-full py-6 text-base font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                Quero meu diagnóstico gratuito
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
