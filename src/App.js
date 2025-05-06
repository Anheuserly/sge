import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react'; // ✅ Add this line
// Import loading screen
import LoadingScreen from './components/LoadingScreen';
import './firebase.js';

// Import pages
import Home from './pages/Home.jsx';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Career from './pages/Career';
import NotFound from './pages/NotFound';

// Import components
import Footer from './components/Footer';

// Import global styles
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(minLoadingTime);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen finishLoading={() => setLoading(false)} />
      ) : (
        <Router>
          <div className="app">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            <Footer />
            <Analytics /> {/* ✅ Add Analytics at the bottom inside Router */}
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
