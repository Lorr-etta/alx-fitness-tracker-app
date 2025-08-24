import React from "react";

const FeatureCard = ({ icon, title, description, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
