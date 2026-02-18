import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import testimonial1 from '../assets/testimonial-1.jpg';

const Testimonials = () => {
  // Sample data for the slider
  const reviews = [
    {
      id: 1,
      image: testimonial1,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: 2,
      image: testimonial1,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="bg-slate-50 py-20 px-4 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-3xl text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Testimonials</h2>
        <p className="text-gray-600 leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but the majority have 
          suffered alteration in some form, by injected humour, or randomised words which 
          don't look even slightly believable.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-2xl mt-12">
        
        {/* Avatar - Positioned to overlap the top border */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
          <div className="w-24 h-24 rounded-full border-8 border-slate-50 overflow-hidden shadow-lg">
            <img 
              src={reviews[currentIndex].image} 
              alt="Client" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="bg-[#051139] rounded-2xl p-12 pt-16 text-center shadow-xl">
          <p className="text-gray-200 italic leading-relaxed text-lg">
            "{reviews[currentIndex].text}"
          </p>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors border border-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors border border-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;