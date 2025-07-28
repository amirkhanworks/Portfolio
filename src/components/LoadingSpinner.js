import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="relative">
      <div className="w-8 h-8 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
      <div className="mt-4 text-accent text-sm font-medium">Loading...</div>
    </div>
  </div>
);

export default LoadingSpinner; 