import React from 'react';
import { useAuth } from './hooks/useAuth';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import HouseholdPrompt from './pages/HouseholdPrompt';
import LoadingSpinner from './components/common/LoadingSpinner';

const AppController = () => {
  const { user, loading } = useAuth();
  if (loading) return <LoadingSpinner />;
  if (!user) return <AuthPage />;
  if (!user.householdId) return <HouseholdPrompt />;
  return <Dashboard />;
};

export default AppController;