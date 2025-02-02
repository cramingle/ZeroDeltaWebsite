import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Research from './components/Research';
import ResearchDetail from './components/ResearchDetail';
import Careers from './components/Careers';
import ComingSoon from './components/ComingSoon';
import OpenPosition from './components/OpenPosition';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark/90">
        {/* Background with grid */}
        <BackgroundGrid />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Research />
                  <Careers />
                </>
              } />
              <Route path="/earn-yield" element={<ComingSoon />} />
              <Route path="/basis-trading" element={<Technology />} />
              <Route path="/research" element={<Research />} />
              <Route path="/research/:id" element={<ResearchDetail />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/python-developer" element={<OpenPosition />} />
              <Route path="/about" element={<About />} />
              {/* Catch all route for 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;