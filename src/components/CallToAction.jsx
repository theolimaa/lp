import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, CalendarCheck } from 'lucide-react';

const CallToAction = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.');
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="relative py-20 lg:py-28 px-4 bg-black overflow-hidden">
      {/* Radial golden glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#D4AF37]/8 blur-[140px]" />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C4A030] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)]">
              <CalendarCheck className="w-8 h-8 text-black" strokeWidth={2.5} />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Dinheiro parado não cresce. <br className="hidden md:block" />
            <span style={{ color: '#D4AF37' }}>O momento certo é agora.</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa gratuita. Vou analisar sua situação atual e mostrar exatamente o que é possível fazer com o seu patrimônio — sem enrolação, sem compromisso.
          </p>

          {/* What to expect */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400 pt-2">
            {['Diagnóstico gratuito', 'Sem compromisso', 'Resposta em até 24h'].map((item, i) => (
              <span key={i} className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl text-black shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <MessageCircle className="w-6 h-6" />
            Agendar meu diagnóstico agora
          </motion.button>

          <p className="text-gray-600 text-xs pt-2">
            Ticket mínimo: R$ 300 mil · Plataforma XP Investimentos
          </p>
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
};

export default CallToAction;
