import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import SocialMedia from './components/SocialMedia';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header isScrolled={isScrolled} />
        <main>
          <Hero />
          <Programs />
          {/* More sections will be added here */}
        </main>
        <SocialMedia />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
