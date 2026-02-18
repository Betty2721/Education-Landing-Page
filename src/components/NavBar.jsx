import React from 'react';
import { Mail, Phone, Facebook, Instagram, Youtube, Search } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-[#5C34D2] text-white py-2 px-6 flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail size={14} /> <span>hello@borcelle.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} /> <span>+0121-2155-5656</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Facebook size={16} className="cursor-pointer hover:opacity-80" />
          <span className="font-bold cursor-pointer">X</span>
          <Instagram size={16} className="cursor-pointer hover:opacity-80" />
          <Youtube size={16} className="cursor-pointer hover:opacity-80" />
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tighter">BORCELLE</span>
            <span className="text-[10px] font-bold text-center tracking-[0.2em]">Online Academy</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-700">
          <a href="#" className="hover:text-purple-700">COURSES</a>
          <a href="#" className="hover:text-purple-700">ACADEMICS</a>
          <a href="#" className="hover:text-purple-700">WHY BORCELLE</a>
          <a href="#" className="hover:text-purple-700">STUDENT LIFE</a>
          <a href="#" className="hover:text-purple-700">CONTACT</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#FF6B00] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-600 transition-colors">
            ENROLL NOW
          </button>
          <Search size={20} className="text-gray-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;