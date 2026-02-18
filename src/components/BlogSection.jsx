import React from 'react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      title: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
      title: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1523240715639-99f840e4f50d?q=80&w=800&auto=format&fit=crop",
      title: "Lorem Ipsum is simply dummy text of the printing"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            There are many variations of passages of Lorem Ipsum available, but the majority have 
            suffered alteration in some form, by injected humour, or randomised words which 
            don't look even slightly believable.
          </p>
        </div>
        
        {/* CTA Button */}
        <div>
          <button className="bg-[#5842E3] hover:bg-[#4732c2] text-white px-8 py-3 rounded-full font-medium text-sm transition-all shadow-lg shadow-indigo-100">
            View All Posts
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            {/* Image Wrapper */}
            <div className="overflow-hidden rounded-[2.5rem] mb-6">
              <img 
                src={post.image} 
                alt="Blog thumbnail" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#5842E3] transition-colors">
              {post.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;