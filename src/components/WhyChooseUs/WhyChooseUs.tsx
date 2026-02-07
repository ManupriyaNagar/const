"use client";

import React from "react";

const WhyChooseUs = () => {
    const stats = [
        { label: "Design Developments", percentage: 85 },
        { label: "Construction Works", percentage: 65 },
        { label: "Project Complete", percentage: 75 },
    ];

    return (
        <section className="bg-white py-24 px-5 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Left Side: Content */}
                <div className="w-full lg:w-[80%]">
                    <span className="text-[#ff5e13] font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-[#1a1a1a] text-[36px] md:text-[36px] lg:text-[42px] font-black uppercase leading-[1.1] max-w-[1000px] relative">
                        Delivering our clients more project clarity, greater insight, and less chaos.
                    </h2>
                </div>

                {/* Right Side: Progress Bars */}
                <div className="w-full lg:w-1/2 space-y-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="w-full">
                            <span className="text-[#1a1a1a] font-bold text-[12px] uppercase tracking-[0.1em] mb-4 block">
                                {stat.label}
                            </span>
                            <div className="relative h-[44px] w-full bg-[#f4f4f4] flex items-center overflow-hidden">
                                <div
                                    className="h-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${stat.percentage}%`,
                                        background: "linear-gradient(90deg, #1a1a1a 0%, #1a1a1a 70%, #ff5e13 100%)"
                                    }}
                                ></div>
                                <span className="absolute right-4 text-[#1a1a1a] font-black text-[22px] tracking-tighter">
                                    {stat.percentage}<span className="text-[14px] ml-0.5">%</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
