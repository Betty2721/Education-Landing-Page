import heroBg from '../assets/Hero-1.jpg'

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Anytime, Anywhere Learning
        </h1>
        <p className="text-gray-200 text-lg mb-8 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters.
        </p>
        
        <button className="bg-[#FF6B00] hover:bg-white hover:text-black text-white px-10 py-3 rounded-full font-semibold transition-all">
          Get Started Today
        </button>

      </div>
    </section>
  );
};

export default Hero;