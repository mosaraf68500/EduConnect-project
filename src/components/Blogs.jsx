import React from "react";
import { ArrowRight } from "lucide-react";
// blog post data 
const blogPosts = [
  {
    date: "28 JAN",
    author: "John D. Alexon",
    title: "10 Proven Strategies to excel Online Learning",
    image: "https://i.ibb.co/v5BmD2x/blog-thumb2.png",
    buttonColor: "bg-sky-100 text-sky-700",
  },
  {
    date: "29 JAN",
    author: "Anjelina Watson",
    title: "Trends that are shaping the Learning experience",
    image: "https://i.ibb.co/7xhTmQCM/blog-thumb3.png",
    buttonColor: "bg-emerald-100 text-emerald-700",
  },
  {
    date: "30 JAN",
    author: "David X. Barmer",
    title: "Learning is the Key soft skills and Professional",
    image: "https://i.ibb.co/F45FYG91/blog-thumb1.png",
    buttonColor: "bg-orange-100 text-orange-700",
  },
];

const Blogs = () => {
  return (
    <section className="py-10 px-4 md:px-16">

        {/* Header and Title Row */}
      <div className="flex flex-col md:flex-row gap-4 py-8">
        {/* Left: Header */}
        <div className="flex-1 border-b-1 border-[#1EC28E] pb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500"></div>
          <span className="uppercase font-semibold text-sm tracking-wide">LATEST BLOG</span>
        </div>

        {/* Right: Title */}
        <div className="flex-1">
          <h1 className="text-xl md:text-3xl font-bold text-right leading-snug">
             Read the Latest Insights and <br className="hidden md:block" />
           Updates Educate Blog
          </h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md bg-white"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-white text-sm font-bold px-2 py-1 rounded">
                {post.date}
              </span>
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-600 mb-2">{post.author}</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                {post.title}
              </h3>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold ${post.buttonColor}`}
              >
                Continue Reading <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
