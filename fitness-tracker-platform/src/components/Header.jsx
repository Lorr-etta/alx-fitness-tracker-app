import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={16} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={16} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={16} />, href: '#', label: 'YouTube' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className={`bg-yellow-500 text-gray-900 py-2 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@fitnesscenter.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`py-4 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>FITNESS</span>
              <span className="text-2xl font-bold text-yellow-500">CENTER</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-400'} font-medium uppercase text-sm tracking-wide transition-colors`}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-yellow-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-yellow-500 py-2 font-medium uppercase text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg w-full mt-4">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
