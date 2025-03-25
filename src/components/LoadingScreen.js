import React, { useEffect } from 'react';
import '../styles/LoadingScreen.css'; // Ensure you have styles for the loading screen

const LoadingScreen = ({ finishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 2000); // Minimum loading time
    
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingScreen;
