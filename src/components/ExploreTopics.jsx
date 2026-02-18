import React from 'react';
import { Camera, Briefcase, Megaphone, Code, Monitor, Palette } from 'lucide-react';

const ExploreTopics = () => {
  const topics = [
    { title: "Photography", icon: <Camera size={18} />, desc: "Lorem Ipsum is simply dummy text of the printing." },
    { title: "Business", icon: <Briefcase size={18} />, desc: "Lorem Ipsum is simply dummy text of the printing." },
    { title: "Marketing", icon: <Megaphone size={18} />, desc: "Lorem Ipsum is simply dummy text of the printing." },
    { title: "Development", icon: <Code size={18} />, desc: "Lorem Ipsum is simply dummy text of the printing." },
    { title: "IT & Software", icon: <Monitor size={18} />, desc: "Lorem Ipsum is simply dummy text of the printing." },
    { title: "Art & Design", icon: <Palette size={18} />, desc: "Lorem Ipsum is simply dummy text of the printing." },
  ];

  return (
    <section className="py-20 px-6 bg-[#001439] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Row: Text (Left) and 2 Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:pr-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Explore Topics</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              There are many variations of passages of Lorem Ipsum available, but the 
              majority have suffered alteration in some form, by injected humour, or 
              randomised words which don't look even slightly believable.
            </p>
          </div>

          {/* First 2 Cards */}
          {topics.slice(0, 2).map((topic, index) => (
            <TopicCard key={index} topic={topic} />
          ))}
        </div>

        {/* Bottom Row: 4 Cards Horizontally */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topics.slice(2).map((topic, index) => (
            <TopicCard key={index} topic={topic} />
          ))}
        </div>

        {/* Center Button */}
        <div className="flex justify-center">
          <button className="bg-[#FF6B00] hover:bg-orange-600 text-white px-10 py-3 rounded-full font-bold text-sm transition-all shadow-lg">
            Browse all Topics
          </button>
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component to keep code clean
const TopicCard = ({ topic }) => (
  <div className="bg-[#10244D] p-8 rounded-[2rem] hover:bg-[#1a3570] transition-colors flex flex-col gap-4">
    <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shrink-0">
      {topic.icon}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
      <p className="text-gray-400 text-sm leading-snug">
        {topic.desc}
      </p>
    </div>
  </div>
);

export default ExploreTopics;