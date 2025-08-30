import { useEffect, useRef } from 'react';
import { Play, Award, Clock, Users, Activity } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const stats = [
    { icon: <Award className="w-6 h-6 text-yellow-500" />, number: '30+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6 text-yellow-500" />, number: '500+', label: 'Happy Clients' },
    { icon: <Activity className="w-6 h-6 text-yellow-500" />, number: '50+', label: 'Expert Trainers' },
    { icon: <Clock className="w-6 h-6 text-yellow-500" />, number: '24/7', label: 'Support' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/gym-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column - Text Content */}
          <div className="text-white max-w-2xl text-center lg:text-left mb-16 lg:mb-0">
            <span className="inline-block bg-yellow-500 text-gray-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              WELCOME TO FITNESS CENTER
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              BUILD YOUR BODY <span className="text-yellow-500">TRANSFORM</span> YOUR LIFE
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              We help people to achieve their fitness goals with personalized training programs and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                GET STARTED
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-full transition-all duration-300">
                <Play className="w-5 h-5" fill="currentColor" />
                WATCH VIDEO
              </button>
            </div>
          </div>

          {/* Right Column - Image/Video Preview */}
          <div className="relative w-full max-w-xl">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/hero-trainer.jpg" 
                alt="Fitness trainer" 
                className="w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-gray-900 p-4 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm font-semibold">YEARS EXPERIENCE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-yellow-500 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
