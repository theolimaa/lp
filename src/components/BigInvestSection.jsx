import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';

const BigInvestSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      value: 'R$ 1,2 bilhão',
      label: 'Em patrimônio investido pelos nossos clientes'
    },
    {
      icon: Users,
      value: '2,5 mil',
      label: 'Clientes em nossa carteira'
    },
    {
      icon: Award,
      value: '93,7',
      label: 'NPS – alto nível de satisfação de nossos clientes'
    }
  ];

  return (
    <section id="big-invest" className="py-20 px-4 bg-oxford-blue">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-antiflash-white mb-6">Conheça a Big Invest!</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 mb-16 text-center"
        >
          <p className="text-lg text-antiflash-white leading-relaxed">
            Somos uma assessoria de investimentos credenciada pela XP, fundada em 2019, que auxilia cada cliente 
            individualmente, com estratégias sob medida para atender aos seus objetivos financeiros e de vida.
          </p>
          <p className="text-lg text-antiflash-white leading-relaxed">
            Investimos continuamente no desenvolvimento e capacitação de nossa equipe, para garantir que estejam 
            sempre atualizados com as informações do mercado e prontos para desenvolver as melhores estratégias de investimento.
          </p>
          <p className="text-lg text-antiflash-white leading-relaxed">
            Nosso propósito é assessorar nossos clientes na jornada para a realização de seus planos de vida.
          </p>
          <p className="text-lg text-dark-goldenrod font-semibold leading-relaxed">
            Conte com a gente para alcançar suas conquistas, agora e no futuro.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-antiflash-white mb-12">
            Nossas conquistas
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-oxford-blue/50 backdrop-blur-md p-8 rounded-2xl border border-dark-goldenrod/20 text-center space-y-4"
              >
                <achievement.icon className="w-12 h-12 text-dark-goldenrod mx-auto" />
                <p className="text-3xl md:text-4xl font-bold text-dark-goldenrod">{achievement.value}</p>
                <p className="text-antiflash-white">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BigInvestSection;