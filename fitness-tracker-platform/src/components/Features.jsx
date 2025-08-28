import { Dumbbell, TrendingUp, LayoutDashboard, UserCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="w-8 h-8 text-white" />,
      title: "Workout Plans",
      bgClass: "bg-gradient-pink",
      hoverClass: "hover:scale-110",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Progress Tracking",
      bgClass: "bg-gradient-purple",
      hoverClass: "hover:scale-110",
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-white" />,
      title: "Dashboard",
      bgClass: "bg-gradient-orange",
      hoverClass: "hover:scale-110",
    },
    {
      icon: <UserCircle className="w-8 h-8 text-white" />,
      title: "Profile",
      bgClass: "bg-gradient-navy",
      hoverClass: "hover:scale-110",
    },
  ];

  return (
    <section className="relative z-20 -mt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-300 ${feature.hoverClass}`}
            >
              <div
                className={`${feature.bgClass} rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {feature.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
