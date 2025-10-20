import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GraduationCap, TrendingUp, Plane } from 'lucide-react';

const CdiEasySection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Educação Financeira',
      description: 'Aprenda a organizar suas finanças de forma descomplicada'
    },
    {
      icon: TrendingUp,
      title: 'Primeiros Investimentos',
      description: 'Realize seus primeiros investimentos com segurança'
    },
    {
      icon: Plane,
      title: 'Pontos e Milhas',
      description: 'Módulos especiais sobre inteligência em pontos e milhas aéreas'
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
          <img src="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/b8146075e3baa506b53e3b2b3c96eb91.png" alt="CDIEA$Y Logo" className="h-24 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-oxford-blue mb-6">
            O caminho financeiro para os jovens
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-12 text-center"
          >
            <p className="text-lg text-oxford-blue/80 leading-relaxed">
              O CDIEA$Y é minha plataforma de educação financeira voltada principalmente para jovens e pessoas que estão 
              no início da sua jornada de construção de patrimônio e renda. Nele eu ensino como organizar-se financeiramente 
              e realizar os primeiros investimentos de forma segura, consciente e descomplicada!
            </p>
            <p className="text-lg text-oxford-blue/80 leading-relaxed">
              Não apenas isso, mas o CDIEA$Y é o ambiente ideal para inteligência financeira e de negócios, com módulos 
              que vão além do mundo de investimentos, como pontos e milhas aéreas!
            </p>
            <p className="text-lg text-oxford-blue/80 leading-relaxed">
              Com materiais de apoio, o CDIEA$Y é o que você precisa para dar o "start" na sua vida financeira.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg p-8 rounded-2xl border border-gray-200 text-center space-y-4"
              >
                <feature.icon className="w-12 h-12 text-dark-goldenrod mx-auto" />
                <h3 className="text-xl font-bold text-oxford-blue">{feature.title}</h3>
                <p className="text-oxford-blue/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a href="https://theolimaa.github.io/cdieasy/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-dark-goldenrod hover:bg-dark-goldenrod/90 text-antiflash-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105">
                Conheça o CDIEA$Y
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CdiEasySection;
