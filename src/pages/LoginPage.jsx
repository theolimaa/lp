
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsSubmitting(true);
    const { error } = await login(email, password);
    setIsSubmitting(false);

    if (!error) {
      // Redirect to admin dashboard after successful login
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#050A14] border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <div className="h-12 w-12 bg-[#D4AF37] rounded-lg mx-auto flex items-center justify-center mb-4">
            <span className="text-black font-bold text-xl">B</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Acesso Administrativo</h1>
          <p className="text-gray-400">Faça login para gerenciar as solicitações</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all"
              placeholder="admin@biginvest.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all"
              placeholder="••••••••"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#00E5FF] hover:bg-[#00D1E8] text-black font-bold h-12 text-base mt-2"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Entrar no Painel"}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-400">
            <Link to="/" className="text-gray-500 hover:text-white transition-colors">
              &larr; Voltar para o site
            </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
