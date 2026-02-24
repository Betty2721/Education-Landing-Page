import React, { useState } from 'react';
import { Eye, ChevronRight } from 'lucide-react';
import heroBg from '../assets/Hero-1.jpg'

const SignUp = ({ onClose, onCreateAccount }) => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1625] p-4 font-sans text-white">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-[#001140] shadow-2xl">
        
        {/* Left Side: Image/Branding */}
        <div className="relative hidden w-1/2 flex-col justify-between p-12 lg:flex">
          {/* Background Image Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${heroBg})`}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-[#252031]" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xl font-black tracking-tighter">BORCELLE</span>
            <button 
              onClick={onClose} // <- just call the passed function
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-md transition hover:bg-white/20">
                 Back to website 
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-medium leading-tight">
              Anytime,<br />Anywhere Learning
            </h2>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex w-full flex-col justify-center p-8 md:p-16 lg:w-1/2">
          <div className="mb-8">
            <h2 className="mb-2 text-4xl font-semibold">Create an account</h2>
            <p className="text-gray-400">
              Already have an account? <a href="#" className="text-gray-300 underline underline-offset-4 hover:text-white">Log in</a>
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="First name" 
                className="w-1/2 rounded-xl border border-purple-500/50 bg-[#2d273a] p-4 text-sm outline-none ring-purple-500 focus:ring-1"
              />
              <input 
                type="text" 
                placeholder="Last name" 
                className="w-1/2 rounded-xl bg-[#2d273a] p-4 text-sm outline-none transition focus:bg-[#362f46]"
              />
            </div>

            <input 
              type="email" 
              placeholder="Email" 
              className="w-full rounded-xl bg-[#2d273a] p-4 text-sm outline-none transition focus:bg-[#362f46]"
            />

            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                className="w-full rounded-xl bg-[#2d273a] p-4 text-sm outline-none transition focus:bg-[#362f46]"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <Eye size={20} />
              </button>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="h-5 w-5 rounded border-none bg-white accent-white"
                defaultChecked
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the <a href="#" className="text-gray-300 underline underline-offset-4">Terms & Conditions</a>
              </label>
            </div>

            <button 
                type="button"
                onClick={onCreateAccount}
                className="w-full rounded-xl bg-[#FF6B00] py-4 font-semibold text-white transition hover:bg-white hover:text-black active:scale-[0.98] shadow-lg"
              >
                Create account
            </button>
            <div className="relative my-6 flex items-center py-4">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="mx-4 flex-shrink text-xs text-gray-500">Or register with</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            <div className="flex gap-4">
              <button className="flex w-1/2 items-center justify-center gap-2 rounded-xl border border-gray-700 py-3 transition hover:bg-gray-800">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex w-1/2 items-center justify-center gap-2 rounded-xl border border-gray-700 py-3 transition hover:bg-gray-800">
                <img src="https://www.svgrepo.com/show/511330/apple-173.svg" className="h-5 w-5 invert" alt="Apple" />
                <span className="text-sm font-medium">Apple</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;