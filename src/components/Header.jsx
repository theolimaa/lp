
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { LogOut, Lock, LayoutDashboard } from 'lucide-react';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
           <div className="h-8 w-8 rounded bg-[#D4AF37] flex items-center justify-center font-bold text-black">
             B
           </div>
           <span className="text-lg font-bold text-white hidden sm:block">Big Invest</span>
        </Link>

        <div className="flex items-center gap-4">
          {currentUser ? (
            <>
              <span className="text-sm text-gray-400 hidden md:block">
                Admin: <span className="text-white">{currentUser.email}</span>
              </span>

              <Link to="/admin">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#00E5FF] hover:bg-white/5">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              </Link>

              <Button 
                onClick={handleLogout} 
                variant="outline" 
                size="sm"
                className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#D4AF37] hover:bg-white/5">
                <Lock className="mr-2 h-4 w-4" />
                Admin Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
