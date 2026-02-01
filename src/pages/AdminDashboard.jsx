
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Loader2, LayoutDashboard, Calendar, DollarSign, MessageSquare, Mail, Phone, User, LogOut } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('advisory_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao carregar",
        description: error.message
      });
    } else {
      setSubmissions(data || []);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir esta solicitação?")) return;

    const { error } = await supabase
      .from('advisory_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao excluir",
        description: error.message
      });
    } else {
      toast({
        title: "Sucesso",
        description: "Solicitação removida com sucesso."
      });
      setSubmissions(prev => prev.filter(sub => sub.id !== id));
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin-login');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050A14] backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-[#D4AF37] flex items-center justify-center font-bold text-black">
              B
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">Big Invest <span className="text-gray-500 font-normal">| Admin</span></span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden md:block">
              {currentUser?.email}
            </span>
            <Button 
              onClick={handleLogout} 
              variant="ghost" 
              size="sm"
              className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto max-w-7xl pt-8 pb-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <LayoutDashboard className="h-8 w-8 text-[#D4AF37]" />
              Gestão de Leads
            </h1>
            <p className="text-gray-400">Acompanhe as solicitações de assessoria em tempo real</p>
          </div>
          
          <div className="bg-white/5 rounded-lg px-6 py-3 border border-white/10 flex items-center gap-3">
            <span className="text-sm text-gray-400">Total Recebido</span>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <span className="text-2xl font-bold text-[#00E5FF]">{submissions.length}</span>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-[#D4AF37] animate-spin" />
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <LayoutDashboard className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">Nenhuma solicitação encontrada</h3>
            <p className="text-gray-400">Nenhum lead chegou ainda.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#050A14] border border-white/10 rounded-xl p-6 relative group hover:border-[#D4AF37]/50 transition-colors shadow-lg"
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(submission.id)}
                    className="text-gray-500 hover:text-red-400 hover:bg-red-500/10 h-8 w-8 transition-colors"
                    title="Excluir"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 mt-2">
                  {/* Contact Info */}
                  <div className="flex-1 space-y-4 min-w-[300px]">
                     <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest bg-[#D4AF37]/10 w-fit px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      {formatDate(submission.created_at)}
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-white group-hover:text-[#D4AF37] transition-colors">
                            <User className="w-5 h-5 text-gray-500" />
                            <span className="font-bold text-xl">{submission.name}</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300">
                            <Mail className="w-4 h-4 text-gray-500" />
                            <span>{submission.email}</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <span>{submission.phone}</span>
                        </div>
                    </div>
                  </div>

                  {/* Divider on desktop */}
                  <div className="hidden lg:block w-[1px] bg-white/10"></div>

                  {/* Investment & Message */}
                  <div className="flex-[2] space-y-4">
                     <div>
                        <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold block mb-2">Potencial de Investimento</span>
                        <div className="bg-[#00E5FF]/5 rounded-lg p-3 inline-flex items-center gap-2 text-[#00E5FF] border border-[#00E5FF]/20">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-semibold">{submission.investment_amount || "Valor não informado"}</span>
                        </div>
                     </div>
                    
                    {(submission.message) && (
                      <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                        <div className="flex items-center gap-2 text-gray-400 mb-2 text-xs uppercase tracking-wider font-semibold">
                          <MessageSquare className="w-3 h-3" />
                          Mensagem do Cliente
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">"{submission.message}"</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
