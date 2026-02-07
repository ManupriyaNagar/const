"use client";

import React from "react";

const blogPosts = [
    {
        title: "The Impact of Renova on Modern Construction Business",
        author: "David Smith",
        date: "03 January, 2024",
        image: "https://themegenix.com/demo/renova/assets/img/blog/h4_blog_post01.jpg",
        large: false,
    },
    {
        title: "One of the World Largest Passive House Buildings Solution",
        author: "David Smith",
        date: "03 January, 2024",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        large: false,
    },
    {
        title: "Understanding the Legal Framework of Building Projects",
        author: "David Smith",
        date: "03 January, 2024",
        image: "https://themegenix.com/demo/renova/assets/img/blog/h3_blog_img02.jpg",
        large: true,
    }
];

const BlogSection = () => {
    return (
        <section className="bg-white py-24 px-5 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#ff5e13] font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                        Our Blog Posts
                    </span>
                    <h2 className="text-[#1a1a1a] text-[32px] md:text-[42px] lg:text-[48px] font-black uppercase leading-[1.1] tracking-tighter max-w-5xl mx-auto">
                        Subscribe To Our Newsletter To Get The Latest News & Amazing Offers
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Left Column - Two Small horizontal cards */}
                    <div className="flex flex-col col-span-2 gap-8">
                        {blogPosts.filter(post => !post.large).map((post, index) => (
                            <div key={index} className="flex flex-col sm:flex-row h-full group overflow-hidden">
                                <div className="w-full sm:w-1/2 h-[50px] sm:h-auto overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2 bg-[#111111] p-10 flex flex-col justify-center">
                                    <div className="text-[#888888] text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                        <span>By {post.author}</span>
                                        <span className="w-[1px] h-3 bg-white/20"></span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-white text-[19px] font-black uppercase leading-[1.2] mb-10 tracking-tighter transition-colors group-hover:text-[#ff5e13]">
                                        {post.title}
                                    </h3>
                                    <button className="self-start px-7 py-3 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#ff5e13] transition-all duration-300">
                                        Read Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - One Large vertical card */}
                    <div className="flex flex-col">
                        {blogPosts.filter(post => post.large).map((post, index) => (
                            <div key={index} className="flex flex-col h-full group overflow-hidden relative">
                                <div className="w-full h-[300px] md:h-[450px] lg:h-[300px] overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="w-full flex-grow bg-[#111111] p-12 flex flex-col justify-center">
                                    <div className="text-[#888888] text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                        <span>By {post.author}</span>
                                        <span className="w-[1px] h-3 bg-white/20"></span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-white text-[28px] lg:text-[32px] font-black uppercase leading-[1.1] mb-12 tracking-tighter transition-colors group-hover:text-[#ff5e13]">
                                        {post.title}
                                    </h3>
                                    <button className="self-start px-8 py-4 bg-[#1a1a1a] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#ff5e13] transition-all duration-300">
                                        Read Details
                                    </button>
                                </div>

                                {/* Scroll Top Aesthetic Overlay (Matches screenshot) */}
                                <div className="absolute bottom-4 right-4 z-10 hidden lg:block">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center text-[#1a1a1a] shadow-2xl">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 1L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M1 7L7 1L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
