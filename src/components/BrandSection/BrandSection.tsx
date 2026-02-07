"use client";

import React from "react";

const brands = [
    { name: "allcot", logo: "Leaf" },
    { name: "Cityblok", logo: "Building" },
    { name: "German Estates", logo: "Home" },
    { name: "BRIKSTON", logo: "Square" },
    { name: "Hyedge", logo: "Hexagon" }
];

const BrandSection = () => {
    return (
        <section className="bg-white py-20 px-5 md:px-10 border-t border-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-between items-center gap-12 md:gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {/* Brand 1: allcot */}
                    <div className="flex items-center gap-2 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300 cursor-pointer">
                        <svg width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4L12 16C12 16 16 20 24 20C32 20 36 16 36 16L24 4Z" fill="#1a1a1a" />
                            <path d="M24 44L36 32C36 32 32 28 24 28C16 28 12 32 12 32L24 44Z" fill="#1a1a1a" />
                            <path d="M4 24L16 36C16 36 20 32 20 24C20 16 16 12 16 12L4 24Z" fill="#1a1a1a" />
                            <path d="M44 24L32 12C32 12 28 16 28 24C28 32 32 36 32 36L44 24Z" fill="#1a1a1a" />
                        </svg>
                        <span className="text-[26px] font-bold tracking-tighter text-[#1a1a1a]">allcot</span>
                    </div>

                    {/* Brand 2: Cityblok */}
                    <div className="flex items-center gap-2 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300 cursor-pointer">
                        <div className="flex gap-[3px] items-center h-8">
                            <div className="w-[5px] h-3 bg-gray-300 rounded-full"></div>
                            <div className="w-[5px] h-6 bg-[#1a1a1a] rounded-full"></div>
                            <div className="w-[5px] h-3 bg-gray-300 rounded-full"></div>
                            <div className="w-[5px] h-8 bg-[#1a1a1a] rounded-full"></div>
                        </div>
                        <span className="text-[26px] font-semibold tracking-tight text-[#1a1a1a]">Cityblok</span>
                    </div>

                    {/* Brand 3: German Estates */}
                    <div className="flex items-center gap-3 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300 cursor-pointer">
                        <div className="w-10 h-10 flex flex-col items-center justify-center border-2 border-[#1a1a1a]">
                            <div className="w-6 h-[2px] bg-[#1a1a1a] mb-1"></div>
                            <div className="w-6 h-[2px] bg-[#1a1a1a] mb-1"></div>
                            <div className="w-6 h-[2px] bg-[#1a1a1a]"></div>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[14px] font-black uppercase tracking-tight text-[#1a1a1a]">German</span>
                            <span className="text-[14px] font-black uppercase tracking-tight text-[#1a1a1a]">Estates</span>
                        </div>
                    </div>

                    {/* Brand 4: BRIKSTON */}
                    <div className="flex items-center gap-2 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300 cursor-pointer">
                        <div className="w-8 h-8 bg-[#1a1a1a] flex items-center justify-center text-white p-1">
                            <div className="w-full h-full border border-white/30"></div>
                        </div>
                        <span className="text-[26px] font-black tracking-tight text-[#1a1a1a]">BRIKSTON</span>
                    </div>

                    {/* Brand 5: Hyedge */}
                    <div className="flex items-center gap-2 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300 cursor-pointer">
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round" />
                            <path d="M9 21V12H15V21" stroke="#1a1a1a" strokeWidth="2.5" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[26px] font-black tracking-tight text-[#1a1a1a]">Hyedge</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandSection;
