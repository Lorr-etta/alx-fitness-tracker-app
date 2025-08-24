import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-brandOrange hover:text-orange-600 transition-colors cursor-pointer">
            Figure 8 Fitness
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#features" className="text-gray-700 hover:text-brandOrange transition-colors font-medium">Features</a></li>
            <li><a href="#workouts" className="text-gray-700 hover:text-brandOrange transition-colors font-medium">Workouts</a></li>
            <li><a href="#progress" className="text-gray-700 hover:text-brandOrange transition-colors font-medium">Progress</a></li>
            <li><a href="#pricing" className="text-gray-700 hover:text-brandOrange transition-colors font-medium">Pricing</a></li>
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-brandOrange transition-colors font-medium">
              Login
            </button>
            <button className="bg-brandOrange hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-medium transition-colors transform hover:scale-105">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <ul className="space-y-4">
              <li><a href="#features" className="block text-gray-700 hover:text-brandOrange transition-colors font-medium">Features</a></li>
              <li><a href="#workouts" className="block text-gray-700 hover:text-brandOrange transition-colors font-medium">Workouts</a></li>
              <li><a href="#progress" className="block text-gray-700 hover:text-brandOrange transition-colors font-medium">Progress</a></li>
              <li><a href="#pricing" className="block text-gray-700 hover:text-brandOrange transition-colors font-medium">Pricing</a></li>
            </ul>
            <div className="mt-6 space-y-3">
              <button className="block w-full text-left text-gray-700 hover:text-brandOrange transition-colors font-medium">
                Login
              </button>
              <button className="block w-full bg-brandOrange hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
