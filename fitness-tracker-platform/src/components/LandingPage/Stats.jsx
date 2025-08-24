import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Active Users",
      description: "Fitness enthusiasts worldwide"
    },
    {
      number: "1,000+",
      label: "Workout Plans",
      description: "Curated by certified trainers"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Users achieve their goals"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brandNavy mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform has helped thousands of users transform their fitness journey with measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-brandOrange to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">{stat.number}</span>
              </div>
              <h3 className="text-xl font-bold text-brandNavy mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
