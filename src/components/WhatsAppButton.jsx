import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/message/UZZHBP7KOC5AJ1?autoload=1&app_absent=0', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsApp}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] flex items-center justify-center transition-all duration-300"
      aria-label="Fale no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
      
      {/* Pulsing animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.button>
  );
};

export default WhatsAppButton;