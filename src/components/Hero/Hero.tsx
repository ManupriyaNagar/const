"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-black font-sans">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
                    filter: "grayscale(1) brightness(0.4)"
                }}
            />

            {/* Background Overlay Pattern (Optional/Subtle) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

            {/* Faint Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <span className="text-[25vw] font-black uppercase tracking-tighter">
                    ARCHITECTURE
                </span>
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-end px-5 md:px-10 pb-20 md:pb-32">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col">
                        {/* First Line: Architectural + Button */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                            <h1 className="text-white text-[12vw] md:text-[8.5vw] leading-[0.8] font-black tracking-tighter uppercase mb-2 md:mb-0">
                                Architectural
                            </h1>
                            <div className="mt-4 md:mt-2">
                                <button className="bg-[#ff5e13] hover:bg-[#e05210] text-white px-6 py-3 md:px-7 md:py-4 flex items-center gap-3 font-bold text-[10px] md:text-[12px] tracking-widest uppercase transition-all transform hover:translate-x-1">
                                    Get an Estimate
                                    <ArrowUpRight size={18} strokeWidth={3} />
                                </button>
                            </div>
                        </div>

                        {/* Second Line: Empire Design with Orange Dot */}
                        <div className="relative flex flex-col mt-2 md:mt-4">
                            <div className="absolute top-[-10px] left-[0.5vw] w-2 h-2 rounded-full bg-[#ff5e13] hidden md:block"></div>
                            <h2 className="text-white text-[12vw] md:text-[8.5vw] leading-[0.8] font-black tracking-tighter uppercase">
                                Empire Design
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
        </section>
    );
};

export default Hero;
