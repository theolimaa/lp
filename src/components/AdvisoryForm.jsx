
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/context/ModalContext';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';

// Separated reusable form content
const FormContent = ({ onSubmit, isLoading, className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    message: ''
  });

  const investmentOptions = [
    "A partir de 100k",
    "R$ 100.000 - R$ 500.000",
    "Acima de R$ 500.000"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, () => setFormData({ name: '', email: '', phone: '', investmentAmount: '', message: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-200">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Seu nome completo"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-base"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-200">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="seu@email.com"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-base"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-200">Telefone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(00) 00000-0000"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-base"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="investmentAmount" className="text-sm font-medium text-gray-200">Qual o valor deseja investir?</label>
        <div className="relative">
          <select
            id="investmentAmount"
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleInputChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all cursor-pointer text-base"
          >
            <option value="" className="bg-[#050A14] text-gray-500">Selecione uma opção</option>
            {investmentOptions.map((option) => (
              <option key={option} value={option} className="bg-[#050A14] text-white">{option}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-200">Mensagem (Opcional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Descreva seus objetivos ou dúvidas..."
          rows={3}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-base resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#D4AF37] hover:bg-[#C4A030] text-black font-bold py-6 mt-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-70 disabled:cursor-not-allowed text-base"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Solicitação"
        )}
      </Button>
    </form>
  );
};

const AdvisoryForm = ({ variant = 'modal', className }) => {
  const { isModalOpen, closeModal } = useModal();
  const { toast } = useToast();
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (formData, resetForm) => {
    setIsLoading(true);

    try {
      const { error } = await supabase.from('advisory_submissions').insert({
        user_id: currentUser?.id || null, // Allow null for unauthenticated users
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        investment_amount: formData.investmentAmount,
        message: formData.message
      });

      if (error) throw error;
      
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em breve.",
        className: "bg-[#050A14] border-[#00E5FF] text-white"
      });

      resetForm();

      if (variant === 'modal') {
        setTimeout(() => {
          closeModal();
        }, 2000);
      }

    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro ao enviar. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Embedded Variant
  if (variant === 'embedded') {
    return (
      <div className={cn("relative bg-[#050A14]/90 border border-[#00E5FF]/20 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl max-w-md mx-auto w-full", className)}>
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-[50px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-[50px] pointer-events-none" />
        
        <div className="relative z-10">
           <h3 className="text-2xl font-bold text-white mb-2">Solicite uma Assessoria</h3>
           <p className="text-gray-400 text-sm mb-6">Preencha para falar com um especialista.</p>
           <FormContent onSubmit={handleFormSubmit} isLoading={isLoading} />
        </div>
      </div>
    );
  }

  // Modal Variant
  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative bg-[#050A14] border border-[#00E5FF]/20 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-md m-auto">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-[50px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-[50px] pointer-events-none" />
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-2">Solicitar Assessoria</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Preencha o formulário abaixo e nossos especialistas entrarão em contato.
                </p>
                <FormContent onSubmit={handleFormSubmit} isLoading={isLoading} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AdvisoryForm;
