import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
      {/* Main Footer Container with rounded top-left corner */}
      <div className="bg-[#051139] text-white rounded-tl-[100px] px-8 py-16 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500 p-1 rounded">
                <span className="text-xs font-bold">🎓</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                BORCELLE <br />
                <span className="text-xs font-normal opacity-80">Online Academy</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
              <span className="font-bold cursor-pointer hover:text-indigo-400">X</span>
              <Instagram className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-12">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms & Condition</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Sign up for the Newsletter</h3>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none"
              />
              <button 
                type="submit" 
                className="w-full bg-[#FF5C00] hover:bg-[#e65300] text-white font-bold py-3 rounded-lg transition-colors uppercase tracking-wider text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-white py-6 text-center text-xs text-gray-500">
        © 2026 Borcelle - Online academy. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;