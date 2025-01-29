// src/components/LoadingScreen.tsx
import React from 'react';
import Spline from '@splinetool/react-spline';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      {/* Spline Embed */}
      <div className="spline-container">
      <Spline scene="https://prod.spline.design/PnR6eUSVCXtVayBZ/scene.splinecode" />
      </div>
      

      {/* Loading Text with Animation */}
      <div className="loading-overlay">
        <span className="loading-text">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
