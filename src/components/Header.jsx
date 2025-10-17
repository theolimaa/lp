import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  
  const navItems = [
    { label: 'Quem sou eu', id: 'about-theo' },
    { label: 'Perguntas frequentes', id: 'faq' },
  ];

  return (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="relative w-full z-50 bg-oxford-blue backdrop-blur-md shadow-lg"
  >
    <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="transition-transform hover:scale-105">
              <img 
                src="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/4b41b22c0b6cdef505156d8d0259e359.png" 
                alt="Theo Lima Logo" 
                className="h-4 md:h-6"
              />
            </button>
            <a 
              href="https://biginvestimentos.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/08f86d68bf1b308e123c58f09e21a391.png" 
                alt="Big Invest XP" 
                className="h-4 md:h-6"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-antiflash-white hover:text-dark-goldenrod transition-colors font-bold"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/message/UZZHBP7KOC5AJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-antiflash-white hover:text-dark-goldenrod transition-colors font-bold"
            >
              Contato
            </a>
            <a
              href="https://cdieasy.github.io/lp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-antiflash-white hover:text-dark-goldenrod transition-colors"
            >
              <img src="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/1674f7b68534ac6993c53948536ea5fa.webp" alt="CDIEA$Y Logo" className="h-8" />
            </a>
            <a
              href="https://www.instagram.com/theorlimaa/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-antiflash-white hover:text-dark-goldenrod transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-4">
             <a
              href="https://cdieasy.github.io/lp/"
              target="_blank"
              rel="noopener noreferrer"
            >
               <img src="https://horizons-cdn.hostinger.com/12080f71-3205-428f-b607-bf02d18356a6/1674f7b68534ac6993c53948536ea5fa.webp" alt="CDIEA$Y Logo" className="h-7" />
            </a>
            <a
              href="https://www.instagram.com/theorlimaa/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-antiflash-white hover:text-dark-goldenrod transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-antiflash-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col items-center gap-4 mt-4 pt-4 border-t border-dark-goldenrod/20">
                 {navItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-antiflash-white hover:text-dark-goldenrod transition-colors font-bold text-lg"
                    >
                      {item.label}
                    </button>
                  ))}
                  <a
                    href="https://wa.me/message/UZZHBP7KOC5AJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-antiflash-white hover:text-dark-goldenrod transition-colors font-bold text-lg"
                  >
                    Contato
                  </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
