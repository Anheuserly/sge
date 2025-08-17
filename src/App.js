import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import LoadingScreen from './components/LoadingScreen';
import './firebase.js';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Documents from './pages/Documents';
import Career from './pages/Career';
import OurApp from './pages/OurApp';
import BecomePartner from './pages/BecomePartner';   // ✅ NEW
import NotFound from './pages/NotFound';
import OurAppPrivacyPolicy from "./pages/OurAppPrivacyPolicy";
import PartnerRegistration from "./pages/PartnerRegistration"; // ✅ at top
// Components
import Footer from './components/Footer';

// Styles
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
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
                <Route path="/become-partner" element={<BecomePartner />} /> 
                <Route path="/our-app" element={<OurApp />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/our-app-privacy-policy" element={<OurAppPrivacyPolicy />} />
                <Route path="/partner-registration" element={<PartnerRegistration />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            <Footer />
            <Analytics />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
