import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

const TrendingCourses = () => {
  const courses = [
    { id: 1, img: "https://images.unsplash.com/photo-1523240715630-979bb07019a2?auto=format&fit=crop&q=80" },
    { id: 2, img: "https://images.unsplash.com/photo-1524178232363-1fb280714553?auto=format&fit=crop&q=80" },
    { id: 3, img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80" },
    { id: 4, img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80" },
  ];

  return (
    <section className="py-20 px-6 bg-[#F4F7FF]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Trending Courses</h2>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
              {/* Image */}
              <div className="rounded-[1.5rem] overflow-hidden mb-4 h-48">
                <img 
                  src={course.img} 
                  alt="Course Thumbnail" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-left px-2">
                <p className="text-gray-800 font-bold text-sm leading-tight mb-4">
                  Lorem Ipsum has been the industry's standard
                </p>

                <div className="flex justify-between items-center">
                  {/* Rating */}
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  {/* Action Icon */}
                  <div className="bg-[#5C34D2] p-2 rounded-full text-white cursor-pointer hover:bg-purple-700 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <button className="bg-black text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-all">
          Browse all Courses
        </button>
      </div>
    </section>
  );
};

export default TrendingCourses;