
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';

const AboutTheoSection = () => {
  const testimonials = [
    {
      name: 'Marcus Vinicius',
      age: 34,
      role: 'Empresário',
      text: 'O Theo e sua equipe são muito cordiais, competentes e assertivos nos investimentos que me recomendam ou ao avaliar e executar ordens que eu sugiro.'
    },
    {
      name: 'Suzana Carvalho',
      age: 55,
      role: 'Empresária',
      text: 'Profissional competente e compromissado. Sempre atento, cordial, transmite confiança.'
    },
    {
      name: 'Enrico Souza',
      age: 22,
      role: 'Empresário',
      text: 'O conhecimento e confiança do Theo me passam muita segurança.'
    }
  ];

  return (
    <section id="about-theo" className="py-20 px-4 bg-antiflash-white relative">
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-oxford-blue mb-6">Minha história</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/bf0ba71c07d64e46e18029958d3ac8fe.png" 
              alt="Theo Lima com prêmio de Assessor Destaque 2024"
              className="rounded-2xl shadow-xl w-full max-w-sm"
            />
            <p className="mt-4 text-sm text-gray-500 italic">
              Assessor destaque em atendimento transparente 2024 Big Invest.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center md:text-left"
          >
            <p className="text-md text-oxford-blue/80 leading-relaxed">
              Me chamo Theo Lima, sócio e assessor na Big Invest | XP Inc. Assessor de mais de R$ 40 milhões de reais, 
              com investidores no Brasil e no exterior, como Portugal, Austrália, Malta, Estados Unidos e outros...
            </p>
            <p className="text-md text-oxford-blue/80 leading-relaxed">
              Minha missão é conhecer sua história e onde você quer chegar, e com meu time entregar um planejamento 
              financeiro 360 graus, olhando pra cada área da sua vida que precisa de cuidado e gestão.
            </p>
            <p className="text-md text-oxford-blue/80 leading-relaxed">
              Hoje assessoro empresários, médicos, diretores, influenciadores e suas empresas com todo conhecimento técnico 
              e de mercado, focado em entregar o melhor resultado de forma transparente!
            </p>
          </motion.div>
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-oxford-blue mb-12">
            O que dizem meus clientes
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm shadow-lg p-8 rounded-2xl border border-gray-200/50 space-y-4"
              >
                <Quote className="w-10 h-10 text-dark-goldenrod" />
                <p className="text-oxford-blue/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-dark-goldenrod font-semibold">{testimonial.name}</p>
                  <p className="text-oxford-blue/60 text-sm">{testimonial.role}, {testimonial.age} anos</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://wa.me/message/UZZHBP7KOC5AJ1" target="_blank" rel="noopener noreferrer">
              <Button className="bg-dark-goldenrod hover:bg-dark-goldenrod/90 text-antiflash-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105">
                Agende sua reunião
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTheoSection;
