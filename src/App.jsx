import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppController from './AppController';

function App() {
  return (
    <AuthProvider>
      <div className="font-sans">
        <AppController />
      </div>
    </AuthProvider>
  );
}

export default App;