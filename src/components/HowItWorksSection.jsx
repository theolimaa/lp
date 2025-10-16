import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BarChart, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Coleta de informações",
      description: "A parte que conheço você e sua história! É o momento que vou entender como posso te ajudar, no que você precisa de suporte e seu perfil de investidor!",
      icon: Search
    },
    {
      id: 2,
      title: "Apresentação de estratégia",
      description: "Apresento a carteira e estratégia que seguiremos, suas projeções, cenários ideais e fazemos os últimos ajustes.",
      icon: BarChart
    },
    {
      id: 3,
      title: "Acompanhamento de resultados",
      description: "Atualizações e suporte constantes, para sempre seguirmos em direção ao seu objetivo final!",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 px-4 bg-antiflash-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-oxford-blue mb-6">Como funciona?</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.id * 0.1 }}
              className="relative p-8 rounded-2xl bg-white shadow-lg border border-gray-200 cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <card.icon className="w-8 h-8 text-dark-goldenrod" />
                <h3 className="text-xl font-bold text-oxford-blue">{card.title}</h3>
              </div>
              <AnimatePresence>
                {hoveredCard === card.id && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-oxford-blue/70"
                  >
                    {card.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;