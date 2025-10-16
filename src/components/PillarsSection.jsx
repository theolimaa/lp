import React from 'react';
import PillarsDiagram from '@/components/PillarsDiagram';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PillarsSection = () => {
  return (
    <section className="py-20 px-4 bg-oxford-blue">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-dark-goldenrod">
            O que abrange?
          </h3>
          <p className="text-lg text-antiflash-white/80 leading-relaxed max-w-4xl mx-auto">
            Precisamos olhar para o "todo" e não apenas a melhor taxa do dia. Gosto de seguir o seguinte modelo:
          </p>
        </motion.div>

        <PillarsDiagram />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8"
        >
          <p className="text-xl text-antiflash-white mb-6 font-semibold">
            Entre em contato agora mesmo e agende sua reunião!
          </p>
          <a href="https://wa.me/message/UZZHBP7KOC5AJ1" target="_blank" rel="noopener noreferrer">
            <Button className="bg-dark-goldenrod hover:bg-dark-goldenrod/90 text-antiflash-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105">
              Agendar reunião
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;