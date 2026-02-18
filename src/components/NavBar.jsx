import React, { useState } from 'react';
import { Mail, Phone, Facebook, Instagram, Youtube, Search, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-[#001140] text-white py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-2 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
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
      <div className="bg-white py-4 px-4 md:px-8 flex justify-between items-center shadow-sm relative">
        <div className="flex items-center gap-2">
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tighter">BORCELLE</span>
            <span className="text-[10px] font-bold text-center tracking-[0.2em]">
              Online Academy
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-700">
          <a href="#" className="hover:text-[#FF6B00]">COURSES</a>
          <a href="#" className="hover:text-[#FF6B00]">ACADEMICS</a>
          <a href="#" className="hover:text-[#FF6B00]">WHY BORCELLE</a>
          <a href="#" className="hover:text-[#FF6B00]">STUDENT LIFE</a>
          <a href="#" className="hover:text-[#FF6B00]">CONTACT</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-[#FF6B00] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-colors shadow-lg">
            ENROLL NOW
          </button>

          <Search size={20} className="text-gray-600 cursor-pointer hidden sm:block" />

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-sm font-bold text-gray-700 md:hidden">
            <a href="#" className="hover:text-[#FF6B00]">COURSES</a>
            <a href="#" className="hover:text-[#FF6B00]">ACADEMICS</a>
            <a href="#" className="hover:text-[#FF6B00]">WHY BORCELLE</a>
            <a href="#" className="hover:text-[#FF6B00]">STUDENT LIFE</a>
            <a href="#" className="hover:text-[#FF6B00]">CONTACT</a>

            <button className="bg-[#FF6B00] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-colors shadow-lg">
              ENROLL NOW
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;