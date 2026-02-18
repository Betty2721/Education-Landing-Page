import React from 'react';

const WorldClassSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Text */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          World – Class Learning for Anyone, Anywhere
        </h2>
        <p className="text-gray-500 max-w-4xl mx-auto mb-16 leading-relaxed text-sm md:text-base">
          There are many variations of passages of Lorem Ipsum available, but the majority 
          have suffered alteration in some form, by injected humour, or randomised words 
          which don't look even slightly believable. If you are going to use a passage 
          of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden 
          in the middle of text.
        </p>

        {/* Masonry Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          
          {/* Left Column: Tall Image */}
          <div className="w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80" 
              alt="Person studying with laptop" 
              className="w-full h-full object-cover rounded-[3rem]"
            />
          </div>

          {/* Middle Column: Two Stacked Images */}
          <div className="grid grid-rows-2 gap-6 h-full">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" 
              alt="Graduates" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08759dfc3f0?auto=format&fit=crop&q=80" 
              alt="Close up of graduation gown" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>

          {/* Right Column: Large Image */}
          <div className="w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80" 
              alt="Online learning session" 
              className="w-full h-full object-cover rounded-[3.5rem]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorldClassSection;