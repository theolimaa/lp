import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Qual o retorno mensal?', a: 'Entregamos uma taxa de retorno acima da inflação, pré-acordada com cada cliente de acordo com seu perfil, histórico e objetivos.' },
  { q: 'Por onde são realizados os investimentos?', a: 'Pela sua conta na XP Investimentos, maior corretora da América Latina e custodiante de todos os seus ativos.' },
  { q: 'Quais os custos?', a: 'Personalizado para cada caso — uma taxa fixa anual, sem taxas ocultas. Isso também melhora a rentabilidade da carteira com taxas de renda fixa mais altas e cashback dos fundos.' },
  { q: 'Qual o mínimo para começar?', a: 'Trabalho com ticket mínimo de R$ 300 mil.' },
  { q: 'Investir é seguro?', a: 'Utilizamos a plataforma da XP Investimentos. Os riscos variam conforme o ativo, por isso a diversificação da carteira é fundamental. Tudo é montado respeitando seu perfil de investidor, com total transparência na escolha de cada produto.' },
];

const FAQItem = ({ item, i, inView }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: i * 0.07 }}
      style={{ borderBottom: '1px solid var(--rule)' }}>
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-start justify-between gap-6 py-5 text-left">
        <span style={{ color: open ? 'var(--gold)' : 'var(--ink)', fontWeight: 500, fontSize: 'clamp(0.92rem, 3.5vw, 1rem)', lineHeight: 1.5, transition: 'color 0.2s' }}>
          {item.q}
        </span>
        <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="pb-5 pr-6" style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', lineHeight: 1.75 }}>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="px-5 lg:px-16 py-16 lg:py-24" style={{ backgroundColor: 'var(--paper)' }}>
      <hr className="section-rule mb-14" />
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <p className="label mb-4">Dúvidas</p>
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 8vw, 4rem)' }}>Perguntas<br />frequentes</h2>
          <span className="gold-rule mt-5 block" />
        </motion.div>
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {faqs.map((item, i) => <FAQItem key={i} item={item} i={i} inView={inView} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
