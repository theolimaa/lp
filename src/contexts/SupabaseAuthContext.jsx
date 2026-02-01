
import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSession = useCallback((session) => {
    setSession(session);
    setUser(session?.user ?? null);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSession(session);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        handleSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, [handleSession]);

  const signup = useCallback(async (email, password, options = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options,
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro no cadastro",
        description: error.message,
      });
      return { error };
    }

    toast({
      title: "Cadastro realizado!",
      description: "Verifique seu email para confirmar a conta (se necessário) ou faça login.",
    });

    return { data, error: null };
  }, [toast]);

  const login = useCallback(async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro no login",
        description: "Email ou senha incorretos.",
      });
      return { error };
    }

    return { data, error: null };
  }, [toast]);

  const logout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao sair",
        description: error.message,
      });
    }
  }, [toast]);

  const value = useMemo(() => ({
    currentUser: user,
    session,
    loading,
    signup,
    login,
    logout,
  }), [user, session, loading, signup, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/*
  SQL SETUP REFERENCE:

  CREATE TABLE users (
    id uuid primary key references auth.users(id),
    username text unique,
    email text unique not null,
    created_at timestamp default now()
  );

  CREATE TABLE advisory_submissions (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) not null,
    name text not null,
    email text not null,
    phone text not null,
    investment_amount text,
    message text,
    created_at timestamp with time zone default now()
  );

  -- RLS POLICIES
  alter table advisory_submissions enable row level security;
  
  create policy "Users can view own submissions" 
  on advisory_submissions for select using (auth.uid() = user_id);

  create policy "Users can insert own submissions" 
  on advisory_submissions for insert with check (auth.uid() = user_id);

  create policy "Users can delete own submissions" 
  on advisory_submissions for delete using (auth.uid() = user_id);
*/
