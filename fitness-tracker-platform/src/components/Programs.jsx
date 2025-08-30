import { Dumbbell, HeartPulse, Users, Clock, Award, Activity } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <Dumbbell className="w-10 h-10 text-yellow-500" />,
      title: 'Weight Training',
      description: 'Build strength and muscle with our expert weight training programs.',
      duration: '60 mins',
      level: 'All Levels'
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-yellow-500" />,
      title: 'Cardio',
      description: 'Improve your cardiovascular health with our high-energy cardio workouts.',
      duration: '45 mins',
      level: 'Beginner'
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-500" />,
      title: 'Group Fitness',
      description: 'Join our group classes for a fun and motivating workout experience.',
      duration: '60 mins',
      level: 'All Levels'
    },
    {
      icon: <Activity className="w-10 h-10 text-yellow-500" />,
      title: 'Personal Training',
      description: 'Get personalized training programs tailored to your fitness goals.',
      duration: '60 mins',
      level: 'Intermediate'
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      title: 'Yoga & Pilates',
      description: 'Improve flexibility, strength, and mental focus with our yoga classes.',
      duration: '60 mins',
      level: 'All Levels'
    },
    {
      icon: <Clock className="w-10 h-10 text-yellow-500" />,
      title: 'HIIT',
      description: 'High-Intensity Interval Training for maximum fat burning in less time.',
      duration: '30 mins',
      level: 'Advanced'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            OUR PROGRAMS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Program</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            We offer a variety of fitness programs to help you achieve your health and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {program.duration}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    {program.level}
                  </span>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full py-2 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            VIEW ALL PROGRAMS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
