import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brandNavy to-blue-800">
      <div className="max-w-4xl mx-auto text-center px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Fitness Journey?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join thousands of users who have already achieved their fitness goals with Figure 8 Fitness. Start your free trial today and experience the difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-brandOrange hover:bg-orange-500 text-white font-bold rounded-lg shadow-lg transition-colors duration-300 transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brandNavy transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
        
        <p className="text-sm text-gray-300 mt-6">
          No credit card required • Cancel anytime • 14-day free trial
        </p>
      </div>
    </section>
  );
};

export default CTA;
