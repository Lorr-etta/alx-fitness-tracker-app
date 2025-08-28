const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')", // ✅ using your public/hero-bg.jpg
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="mb-2">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-white drop-shadow-lg">FIGURE</span>{" "}
              <span className="text-fitness-green drop-shadow-lg">8</span>
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-2 drop-shadow-lg">
              Fitness
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-medium drop-shadow-md">
            Your Journey, Our Experience
          </p>

          {/* CTA Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-lg">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
