"use client";

import React from "react";
import { Check, ArrowUpRight } from "lucide-react";

const ProjectDetails = () => {
    return (
        <section className="bg-white py-24 px-5 md:px-10">
            <div className="max-w-[1300px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch border p-10">

                    {/* Left Column: Content + Bottom Images */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-12">
                        <div>
                            <span className="text-[#ff5e13] font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                                December 2023 - March 2024
                            </span>
                            <h2 className="text-[#1a1a1a] text-[32px] md:text-[36px] font-black uppercase leading-[1.1] tracking-tighter mb-8 max-w-[340px]">
                                Private House Renovation
                            </h2>
                            <p className="text-[#666666] text-[15px] leading-[1.8] font-medium mb-10 max-w-[420px]">
                                Porttitor tortor pellentesque at parturient congue eacurabitur tristique erat
                                rutrum fusce libero felis, arcu mattis eros taciti.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "5 Year Warranty on Workmanship",
                                    "Every Project is Run by a Team of Experts",
                                    "We Save You Time, Money, and Space",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#1a1a1a] text-[14px] font-bold">
                                        <Check size={16} strokeWidth={3} className="text-[#1a1a1a]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="flex items-center gap-2 border border-gray-100 px-6 py-3 text-[#ff5e13] font-bold text-[12px] uppercase tracking-widest hover:border-[#ff5e13] transition-all duration-300">
                                View Details <ArrowUpRight size={16} />
                            </button>
                        </div>

                        {/* Bottom Row of 3 Images */}
                        <div className="grid grid-cols-3 gap-2 h-24 md:h-32">
                            <img src="https://themegenix.com/demo/renova/assets/img/project/inner_project01.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="project" />
                            <img src="https://themegenix.com/demo/renova/assets/img/project/inner_project02.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="project" />
                            <img src="https://themegenix.com/demo/renova/assets/img/project/inner_project03.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="project" />
                        </div>
                    </div>

                    {/* Center Column: Large Vertical Image */}
                    <div className="lg:col-span-4 h-full">
                        <div className="w-full h-[500px] lg:h-full overflow-hidden">
                            <img
                                src="https://themegenix.com/demo/renova/assets/img/project/inner_project04.jpg"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 h-full"
                                alt="Large focus"
                            />
                        </div>
                    </div>

                    {/* Right Column: Top Image + Bottom Images */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-2">
                        <div className="flex-grow overflow-hidden relative min-h-[300px]">
                            <img
                                src="https://themegenix.com/demo/renova/assets/img/project/inner_project05.jpg"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                alt="Large horizontal"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-2 h-24 md:h-32">
                            <img src="https://themegenix.com/demo/renova/assets/img/project/inner_project06.jpg" className="w-full h-full object-cover" alt="project" />
                            <img src="https://themegenix.com/demo/renova/assets/img/project/inner_project07.jpg" className="w-full h-full object-cover" alt="project" />
                            <img src="https://themegenix.com/demo/renova/assets/img/project/inner_project08.jpg" className="w-full h-full object-cover" alt="project" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
