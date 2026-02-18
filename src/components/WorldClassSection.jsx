import React from 'react';
import image1 from '../assets/info-1.jpg';
import image2 from '../assets/trendingcourse-2.jpg';
import image3 from '../assets/trendingcourse-3.jpg';
import image4 from '../assets/trendingcourse-4.jpg';

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
              src={image1} 
              alt="Person studying with laptop" 
              className="w-full h-full object-cover rounded-[3rem]"
            />
          </div>

          {/* Middle Column: Two Stacked Images */}
          <div className="grid grid-rows-2 gap-6 h-full">
            <img 
              src={image2} 
              alt="Graduates" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
            <img 
              src={image3} 
              alt="Close up of graduation gown" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>

          {/* Right Column: Large Image */}
          <div className="w-full h-full">
            <img 
              src={image4} 
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