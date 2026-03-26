import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <motion.a
    href="https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?autoload=1&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale no WhatsApp"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 1.5 }}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 text-black font-bold shadow-lg transition-all duration-200 hover:brightness-110"
    style={{
      backgroundColor: '#25D366',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.72rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    }}
  >
    <MessageCircle className="w-4 h-4" />
    <span className="hidden sm:inline">WhatsApp</span>
  </motion.a>
);

export default WhatsAppButton;
