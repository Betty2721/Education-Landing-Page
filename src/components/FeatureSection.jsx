import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import image1 from '../assets/info-1.jpg';

const FeatureSection = () => {
  const points = [
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text"
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Lorem ipsum dolor sit amet
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout.
          </p>

          <div className="space-y-4">
            <p className="font-bold text-gray-800">Contrary to popular belief</p>
            <ul className="space-y-3">
              {points.map((text, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm md:text-base">
                  <CheckCircle2 size={20} className="text-[#001140] fill-purple-100" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <button className="bg-[#FF6B00] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg">
              Browse all Courses
            </button>
          </div>
        </div>

        {/* Large Image Container */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img 
              src={image1}
              alt="Students collaborating" 
              className="w-full h-[450px] object-cover rounded-[4rem]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;