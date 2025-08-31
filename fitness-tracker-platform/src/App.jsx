import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import './index.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialMedia from './components/SocialMedia';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const smoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const element = document.querySelector(e.target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add smooth scroll to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-center" />
      <Header />
      <main className="relative pt-16">
        <Hero />
        <div className="relative z-20">
          <Features />
        </div>
      </main>
      <SocialMedia />
    </div>
  );
}

export default App;
