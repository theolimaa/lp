import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
 
const faqs = [
  {
    q: 'Qual o retorno mensal?',
    a: 'Entregamos uma taxa de retorno acima da inflação, pré-acordada com cada cliente de acordo com seu perfil, histórico e objetivos.',
  },
  {
    q: 'Por onde são realizados os investimentos?',
    a: 'Pela sua conta na XP Investimentos, maior corretora da América Latina e custodiante de todos os seus ativos.',
  },
  {
    q: 'Quais os custos?',
    a: 'Personalizado para cada caso — uma taxa fixa anual, sem taxas ocultas. Isso também melhora a rentabilidade da carteira com taxas de renda fixa mais altas e cashback dos fundos.',
  },
  {
    q: 'Qual o mínimo para começar?',
    a: 'Trabalho com ticket mínimo de R$ 300 mil.',
  },
  {
    q: 'Investir é seguro?',
    a: 'Utilizamos a plataforma da XP Investimentos. Os riscos variam conforme o ativo, por isso a diversificação da carteira é fundamental. Tudo é montado respeitando seu perfil de investidor, com total transparência na escolha de cada produto.',
  },
];
 
const FAQItem = ({ item, index, inView }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ borderBottom: '1px solid var(--border-subtle)' }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left"
      >
        <span
          className="text-base lg:text-lg font-medium leading-snug"
          style={{ color: open ? 'var(--gold)' : 'var(--cream)', transition: 'color 0.2s' }}
        >
          {item.q}
        </span>
        <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-sm lg:text-base leading-relaxed pr-8" style={{ color: 'var(--muted)' }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
 
const FAQSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
 
  return (
    <section ref={ref} style={{ background: 'linear-gradient(to bottom, #111009 0%, #0C0B09 120px)' }} className="py-20 lg:py-28 px-6">
      <div className="container mx-auto max-w-4xl">
 
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="block w-8 h-0.5 mb-6" style={{ backgroundColor: 'var(--gold)' }} />
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ color: 'var(--cream)', fontFamily: "'Cormorant Garamond', serif" }}
          >
            Perguntas<br />frequentes
          </h2>
        </motion.div>
 
        <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
 
      </div>
    </section>
  );
};
 
export default FAQSection;
 
