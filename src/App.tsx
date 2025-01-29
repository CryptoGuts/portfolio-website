import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SEO from './components/SEO';
import LoadingScreen from './components/Loading';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 2 seconds
    }, 2500); // Simulate data fetching or other async operations

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative z-10">
          <SEO />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Blog />
          <Contact />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
