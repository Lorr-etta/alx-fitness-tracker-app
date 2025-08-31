import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Workout Plans",
    description: "Explore exercises to build your training routine.",
    icon: "🏋️",
    bgColor: "from-pink-500 to-pink-600"
  },
  {
    id: 2,
    title: "Progress Tracking",
    description: "Track your workouts, calories, and progress over time.",
    icon: "📊",
    bgColor: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Dashboard",
    description: "Get a quick overview of your fitness activities and goals.",
    icon: "⏱️",
    bgColor: "from-orange-500 to-orange-600"
  },
  {
    id: 4,
    title: "My Profile",
    description: "Manage your personal information and fitness preferences.",
    icon: "👤",
    bgColor: "from-gray-700 to-gray-800"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Amazing Features
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${feature.bgColor} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;