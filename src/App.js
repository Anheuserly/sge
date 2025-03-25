import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import loading screen
import LoadingScreen from './components/LoadingScreen';

// Import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Import components
import Footer from './components/Footer';

// Import global styles
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);
  
  // Optional: Add a minimum loading time to ensure the loading screen is visible
  useEffect(() => {
    // Ensure loading screen shows for at least 2 seconds
    const minLoadingTime = setTimeout(() => {
      // This will only set loading to false if the finishLoading function has been called
      setLoading(prevLoading => {
        if (!prevLoading) return false;
        // If we're still loading after min time, wait for actual loading to complete
        return prevLoading;
      });
    }, 2000);
    
    return () => clearTimeout(minLoadingTime);
  }, []);
  
  // Function to finish loading
  const finishLoading = () => {
    setLoading(false);
  };
  
  return (
    <>
      {loading ? (
        <LoadingScreen finishLoading={finishLoading} />
      ) : (
        <Router>
          <div className="app">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
               
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;