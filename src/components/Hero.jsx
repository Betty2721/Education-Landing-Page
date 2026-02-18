import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Decorative Lightbulb/Graphic (Mockup) */}
      <div className="absolute left-10 bottom-0 z-10 hidden lg:block">
         <img 
          src="https://cdn-icons-png.flaticon.com/512/3209/3209559.png" 
          alt="Learning Graphic" 
          className="w-96 opacity-80 filter brightness-125"
         />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Anytime, Anywhere Learning
        </h1>
        <p className="text-gray-200 text-lg mb-8 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters.
        </p>
        
        <button className="bg-[#5C34D2] hover:bg-purple-700 text-white px-10 py-3 rounded-full font-semibold transition-all">
          Get Started Today
        </button>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 border-2 border-white rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-white rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-white rounded-full cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;