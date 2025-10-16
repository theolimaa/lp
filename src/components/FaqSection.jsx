import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Qual o retorno mensal?",
    answer: "Isso varia do perfil de riscos e momento de vida de cada pessoa. Mas nosso objetivo é maximizar os ganhos para cada tipo de perfil. Uma média de 0,8 a 2% ao mês, sem retornos garantidos, variando de estratégia para estratégia."
  },
  {
    question: "Por onde são realizados os investimentos?",
    answer: "Pela sua conta da XP Investimentos, onde somente você tem acesso. Nós apenas direcionamos os valores e tudo passa por sua aprovação!"
  },
  {
    question: "Quais os custos?",
    answer: "Também personalizado para cada caso, mas uma taxa fixa anual e sem taxas ocultas. Isso provê também uma melhora na rentabilidade da carteira com taxas da renda fixa mais alta e cashback dos fundos."
  },
  {
    question: "Qual o mínimo para começar a investir?",
    answer: "Trabalho com o ticket mínimo de R$ 300 mil."
  },
  {
    question: "Investir é seguro? Quais são os meus riscos quando invisto?",
    answer: "Utilizamos a plataforma da XP Investimentos, maior corretora da América Latina. Ela é a intermediadora entre você e o produto financeiro escolhido. Os riscos de investir variam de acordo com o tipo de ativo financeiro que está alocado os seus investimentos. Por isso, a diversificação da sua carteira é importante para reduzir os riscos do seu portfólio. As carteiras são montadas um time de especialistas respeitando o perfil do investidor e de cada cliente, explicando o produto para que você tome a sua decisão."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-oxford-blue">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-antiflash-white mb-4">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-antiflash-white/10 rounded-lg border-b-0">
                <AccordionTrigger className="text-lg font-semibold text-dark-goldenrod hover:no-underline px-6 py-4 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-antiflash-white">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;