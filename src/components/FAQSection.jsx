
import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    {
      question: 'Qual o retorno mensal?',
      answer: 'Entregamos uma taxa de retorno, acima da INFLAÇÃO, pré acordada com cada cliente para cada caso, perfil e história.'
    },
    {
      question: 'Por onde são realizados os investimentos?',
      answer: 'Pela sua conta da XP Investimentos, que é a custodiante de todos os seus ativos.'
    },
    {
      question: 'Quais os custos?',
      answer: 'Também personalizado para cada caso, mas uma taxa fixa anual e sem taxas ocultas. Isso prové também uma melhoria na rentabilidade da carteira com taxas da renda fixa mais alta e cashback dos fundos.'
    },
    {
      question: 'Qual o mínimo para começar a investir?',
      answer: 'Trabalho com o ticket mínimo de R$ 300 mil.'
    },
    {
      question: 'Investir é seguro? Quais são os meus riscos quando invisto?',
      answer: 'Utilizamos a plataforma da XP Investimentos, maior corretora da América Latina. Ela é a intermediadora entre você e o produto financeiro escolhido. Os riscos de investir variam de acordo com o tipo de ativo financeiro que está alocado nos seus investimentos. Por isso, a diversificação da sua carteira é importante para reduzir os riscos do seu portfólio. As carteiras são montadas um time de especialistas respeitando o perfil do investidor e de cada cliente, explicando o produto para que você tome sua decisão.'
    }
  ];

  return (
    <section ref={ref} className="relative py-16 lg:py-20 px-4 bg-gradient-to-b from-[#050A14] to-black">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-lg">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm px-6 transition-all duration-300 hover:bg-white/10 hover:border-[#00E5FF]/30"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#00E5FF] transition-colors duration-300 py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
