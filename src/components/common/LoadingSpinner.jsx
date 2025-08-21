import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen w-screen bg-white">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
  </div>
);

export default LoadingSpinner;