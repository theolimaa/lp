import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ResultsSection = () => {
  const resultImages = [
    "https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/56178a75f4ec9ba0dfd9fc80058f96fa.jpg",
    "https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/1f3f06694a5008ede3029003949c5b01.jpg",
    "https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/4acdf45c37ef44419132c75d6b5e9f0a.jpg"
  ];

  return (
    <section className="py-20 px-4 bg-antiflash-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-oxford-blue mb-6">
            Resultados dos investidores
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resultImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img src={src} alt={`Resultado de carteira de investidor ${index + 1}`} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <a href="https://wa.me/message/UZZHBP7KOC5AJ1" target="_blank" rel="noopener noreferrer">
            <Button className="bg-dark-goldenrod hover:bg-dark-goldenrod/90 text-antiflash-white font-semibold px-4 py-3 text-sm md:px-8 md:py-6 md:text-lg transition-all hover:scale-105 mb-6">
              Monte agora sua estratégia
            </Button>
          </a>
          <p className="text-xs text-gray-500 italic max-w-2xl mx-auto">
            Os resultados se dão a depender da estratégia e perfil de cada cliente, não havendo promessas de resultados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;