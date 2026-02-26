import image1 from '../assets/info-1.jpg';
import image2 from '../assets/info-2.jpg';

const InfoSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Images Container */}
        <div className="flex gap-4 w-full md:w-1/2">
          {/* Left Image - Rounded Corners */}
          <div className="flex-1">
            <img 
              src={image1} 
              alt="Students studying" 
              className="w-full h-[400px] object-cover rounded-[3rem]"
            />
          </div>
          {/* Right Image - Rounded Corners */}
          <div className="flex-1 mt-8 md:mt-12">
            <img 
              src={image2}
              alt="Student with books" 
              className="w-full h-[400px] object-cover rounded-[3rem]"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum 
            is that it has a more-or-less normal distribution of letters.
          </p>

          {/* Button Group */}
          <div className="flex items-center gap-4 pt-4">
            <button className="bg-[#FF6B00] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg">
              Read More
            </button>
            <button className="border-2 border-gray-400 hover:border-gray-900 text-gray-900 px-8 py-3 rounded-full font-bold text-sm transition-all">
              Get Started Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;