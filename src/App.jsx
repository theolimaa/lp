
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { ModalProvider } from '@/context/ModalContext';
import { Toaster } from '@/components/ui/toaster';

// Pages
import HomePage from '@/pages/HomePage';
import AdminLoginPage from '@/pages/AdminLoginPage';
import AdminDashboard from '@/pages/AdminDashboard';

// Components
import ProtectedRoute from '@/components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <div className="min-h-screen bg-black text-white scroll-smooth overflow-x-hidden">
            <Routes>
              {/* Public Routes - Landing Page */}
              <Route path="/" element={<HomePage />} />

              {/* Admin Routes */}
              <Route path="/admin-login" element={<AdminLoginPage />} />

              {/* Protected Admin Dashboard */}
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Redirect any unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Toaster />
          </div>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
