import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PillarsDiagram = () => {
  const [activePillar, setActivePillar] = useState(null);

  const pillars = [
    {
      id: 1,
      title: 'Gestão de caixa',
      description: 'Controle e planejamento da entrada (receita) e saída (despesa) mensal do seu patrimônio.',
      angle: 0
    },
    {
      id: 2,
      title: 'Gestão de objetivos',
      description: 'Entender suas necessidades, planos de futuro, e definir objetivos de curto, médio e longo prazos para seu capital.',
      angle: 60
    },
    {
      id: 3,
      title: 'Gestão de risco',
      description: 'Traçar um plano robusto para mitigar possíveis riscos ao seu patrimônio, garantindo sua segurança financeira.',
      angle: 120
    },
    {
      id: 4,
      title: 'Sucessão',
      description: 'Facilitar o acesso ao patrimônio dos herdeiros de forma eficiente e planejada, com organização e transparência.',
      angle: 180
    },
    {
      id: 5,
      title: 'Planejamento tributário',
      description: 'Estudo de estratégias inteligentes que permitem ao cliente pagar menos imposto de forma legal e otimizada.',
      angle: 240
    },
    {
      id: 6,
      title: 'Gestão de investimento',
      description: 'Avaliação e alocação da carteira de investimentos conforme seus objetivos e necessidades, já estruturadas nos pilares anteriores.',
      angle: 300
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center text-antiflash-white mb-12">
        6 pilares do planejamento financeiro
      </h3>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="relative w-full max-w-md aspect-square">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <motion.circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="#B58E40"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {pillars.map((pillar) => {
              const radius = 120;
              const x = 200 + radius * Math.cos((pillar.angle - 90) * Math.PI / 180);
              const y = 200 + radius * Math.sin((pillar.angle - 90) * Math.PI / 180);
              const isActive = activePillar === pillar.id;

              return (
                <g key={pillar.id}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={isActive ? "35" : "30"}
                    fill={isActive ? "#B58E40" : "#1B2637"}
                    stroke="#B58E40"
                    strokeWidth="2"
                    className="cursor-pointer pillar-segment"
                    onMouseEnter={() => setActivePillar(pillar.id)}
                    onMouseLeave={() => setActivePillar(null)}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isActive ? "#1B2637" : "#E8EBED"}
                    fontSize="24"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {pillar.id}
                  </text>
                </g>
              );
            })}

            <motion.text
              x="200"
              y="190"
              textAnchor="middle"
              fill="#E8EBED"
              fontSize="18"
              fontWeight="600"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Pilares
            </motion.text>
            <motion.text
              x="200"
              y="210"
              textAnchor="middle"
              fill="#E8EBED"
              fontSize="18"
              fontWeight="600"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              planejamento
            </motion.text>
            <motion.text
              x="200"
              y="230"
              textAnchor="middle"
              fill="#E8EBED"
              fontSize="18"
              fontWeight="600"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              financeiro
            </motion.text>
          </svg>
        </div>

        <div className="w-full lg:w-1/2 min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activePillar && (
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-oxford-blue/50 backdrop-blur-md p-8 rounded-2xl border border-dark-goldenrod/20"
              >
                <h4 className="text-2xl font-bold text-antiflash-white mb-4">
                  {pillars.find(p => p.id === activePillar)?.title}
                </h4>
                <p className="text-lg text-antiflash-white leading-relaxed">
                  {pillars.find(p => p.id === activePillar)?.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default PillarsDiagram;