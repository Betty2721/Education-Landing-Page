import React, { useState } from 'react';
import { Eye, ChevronRight } from 'lucide-react';
import heroBg from '../assets/Hero-1.jpg'

const SignUp = ({ onClose, onCreateAccount }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: true,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password &&
      formData.terms
    ) {
      setSuccess(true);

      setTimeout(() => {
        if (onCreateAccount) {
          onCreateAccount();
        }
          }, 1500);
    } else {
      alert("Please fill all fields and accept terms.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1625] p-4 font-sans text-white">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-[#001140] shadow-2xl">

        {/* Left Side */}
        <div className="relative hidden w-1/2 flex-col justify-between p-12 lg:flex">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${heroBg})`}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-[#252031]" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xl font-black tracking-tighter">BORCELLE</span>
            <button 
              onClick={onClose} 
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

        {/* Right Side */}
        <div className="flex w-full flex-col justify-center p-8 md:p-16 lg:w-1/2">
          <div className="mb-8">
            <h2 className="mb-2 text-4xl font-semibold">Create an account</h2>
            <p className="text-gray-400">
              Already have an account? <a href="#" className="text-gray-300 underline underline-offset-4 hover:text-white">Log in</a>
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name" 
                className="w-1/2 rounded-xl bg-[#2d273a] p-4 text-sm outline-none transition focus:bg-[#362f46]"
              />
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name" 
                className="w-1/2 rounded-xl bg-[#2d273a] p-4 text-sm outline-none transition focus:bg-[#362f46]"
              />
            </div>

            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              className="w-full rounded-xl bg-[#2d273a] p-4 text-sm outline-none transition focus:bg-[#362f46]"
            />

            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
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
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="h-5 w-5 rounded border-none bg-white accent-white"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the <a href="#" className="text-gray-300 underline underline-offset-4">Terms & Conditions</a>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full rounded-xl bg-[#FF6B00] py-4 font-semibold text-white transition hover:bg-white hover:text-black active:scale-[0.98] shadow-lg"
            >
              Create account
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="text-green-400 text-sm text-center">
                 Account created successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;