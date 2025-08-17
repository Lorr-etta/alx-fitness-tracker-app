import React, { useState, useEffect } from "react";
import featuresData from "../features.json";

const LandingPage = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(featuresData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <h1 className="text-green-600 font-bold text-xl">FIGURE 8</h1>
        <ul className="flex space-x-6 text-gray-700">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-green-600 cursor-pointer">Profile</li>
          <li className="hover:text-green-600 cursor-pointer">Pricing</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b')" }}>
        
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-6xl font-bold">FIGURE 8 Fitness</h2>
          <p className="mt-4 text-lg md:text-xl">Your Journey, Our Experience</p>
          <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h3 className="text-2xl font-bold text-center mb-10">Our Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;