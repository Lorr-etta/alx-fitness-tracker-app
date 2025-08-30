import { Dumbbell, HeartPulse, Users, Clock, Award, Calendar, Activity } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="w-10 h-10 text-yellow-500" />,
      title: "Professional Trainers",
      description: "Certified trainers to guide you through your fitness journey"
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-yellow-500" />,
      title: "Modern Equipment",
      description: "State-of-the-art equipment for effective workouts"
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-500" />,
      title: "Group Classes",
      description: "Join our energetic group fitness classes"
    },
    {
      icon: <Clock className="w-10 h-10 text-yellow-500" />,
      title: "Flexible Hours",
      description: "Open 24/7 to fit your schedule"
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      title: "Certified Programs",
      description: "Proven workout programs for all levels"
    },
    {
      icon: <Activity className="w-10 h-10 text-yellow-500" />,
      title: "Personal Training",
      description: "One-on-one sessions tailored to your goals"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR FEATURES</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer the best fitness services with modern equipment and professional trainers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
