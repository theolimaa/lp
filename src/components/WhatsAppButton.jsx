import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <motion.a
    href="https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?autoload=1&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale no WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay: 1.2 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 text-sm font-semibold text-black shadow-lg"
    style={{ backgroundColor: '#25D366', letterSpacing: '0.05em' }}
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline uppercase tracking-wider text-xs font-bold">WhatsApp</span>
  </motion.a>
);

export default WhatsAppButton;
