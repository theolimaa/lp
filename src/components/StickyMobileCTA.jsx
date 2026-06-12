import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const HeroSection = ({ onVisibilityChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!onVisibilityChange) return;
    const observer = new IntersectionObserver(
      ([entry]) => onVisibilityChange(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisibilityChange]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá, Theo. Gostaria de agendar um diagnóstico de eficiência patrimonial.");
    window.open(`https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col" style={{ backgroundColor: 'var(--dark)' }}>

      {/* Photo — top portion, full width */}
      <div className="relative w-full" style={{ height: '62vh', minHeight: '340px' }}>
        <img
          src="/capa.jpeg"
          alt="Theo Lima"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 18%' }}
        />
        {/* Fade to dark at bottom */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(20,18,16,0.15) 0%, rgba(20,18,16,0) 40%, rgba(20,18,16,0.85) 100%)'
        }} />
        {/* Photo caption — floating bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-5 left-5 right-5 flex items-center gap-2"
        >
          <span className="w-4 h-px flex-shrink-0" style={{ backgroundColor: 'var(--gold)' }} />
          <span className="label" style={{ color: 'rgba(201,168,76,0.9)', fontSize: '0.6rem' }}>
            Assessor Destaque 2024 · 2025 · Big Invest | XP Investimentos
          </span>
        </motion.div>
      </div>

      {/* Text content — below photo on mobile */}
      <div className="flex-1 flex flex-col justify-center px-5 pt-8 pb-28 lg:pb-16 lg:px-16 max-w-2xl mx-auto w-full lg:max-w-none lg:mx-0">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="label mb-5"
          style={{ color: 'var(--gold)' }}
        >
          Planejamento patrimonial · Successório · Financeiro
        </motion.p>

        {/* Headline — Cormorant italic, signature element */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="display mb-6"
          style={{
            fontSize: 'clamp(3rem, 12vw, 6rem)',
            color: '#FFFFFF',
            fontWeight: 300,
          }}
        >
          A assessoria que<br />
          o seu{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>futuro</em>
          {' '}precisa.
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="leading-relaxed mb-9"
          style={{ color: 'rgba(249,248,246,0.65)', fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)', maxWidth: '480px' }}
        >
          Gerindo <strong style={{ color: 'rgba(249,248,246,0.9)' }}>+R$ 60 milhões</strong> na
          XP Investimentos com foco em transparência e resultado.
        </motion.p>

        {/* CTA — only visible on desktop; mobile uses sticky bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="hidden lg:flex items-center gap-4"
        >
          <button onClick={handleWhatsApp} className="btn-primary" style={{ backgroundColor: 'var(--gold)', color: '#000' }}>
            <MessageCircle className="w-4 h-4" />
            Agendar diagnóstico gratuito
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
