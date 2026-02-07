"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="bg-[#f7f7f7] py-24 px-5 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Left Side: Images */}
                <div className="relative w-full lg:w-1/2 flex items-center justify-center py-12 md:py-20">
                    <div className="relative flex flex-row items-center justify-center gap-4 md:gap-8">
                        {/* Image 1: Left */}
                        <div className="relative w-[220px] h-[320px] md:w-[280px] md:h-[380px] lg:w-[320px] lg:h-[430px] mt-20 md:mt-32  z-10 transition-transform hover:translate-y-[-5px] duration-500">
                            <div className="relative w-full h-full overflow-hidden rounded-tr-[60px] rounded-bl-[60px]">
                                <img
                                    src="https://themegenix.com/demo/renova/assets/img/images/h4_about_img01.jpg"
                                    alt="Architecture working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Orange Dot Between Images */}
                        <div className="absolute left-[50%] top-[45%] translate-x-[-50%] w-3.5 h-3.5 rounded-full bg-[#ff5e13] z-30 border-2 border-[#f7f7f7]"></div>

                        {/* Image 2: Right */}
                        <div className="relative w-[220px] h-[320px] md:w-[280px] md:h-[380px] lg:w-[320px] lg:h-[430px] z-20 transition-transform hover:translate-y-[-5px] duration-500">
                            <div className="relative w-full h-full overflow-hidden rounded-tr-[60px] rounded-bl-[60px]">
                                <img
                                    src="https://themegenix.com/demo/renova/assets/img/images/h4_about_img02.jpg"
                                    alt="Building model"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2">
                    <span className="text-[#ff5e13] font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                        More About Us
                    </span>
                    <h2 className="text-[#1a1a1a] text-[42px] md:text-[52px] lg:text-[60px] font-black uppercase leading-[1] tracking-tighter mb-8 max-w-[600px]">
                        We Build Better For Your Company
                    </h2>
                    <p className="text-[#666666] text-[16px] leading-[1.8] font-medium mb-12 max-w-[550px]">
                        Mus gravida tellusras nibh dapibus bibendum litora phasellus curabit
                        natoque conubia suspendisse potenti viverra vehicula, vulputate dignissim
                        netus urna dis quisque used volutpat consequat fermentum.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        {/* Avatar Group */}
                        <div className="flex -space-x-4">
                            {[
                                "https://themegenix.com/demo/renova/assets/img/images/author01.png",
                                "https://themegenix.com/demo/renova/assets/img/images/author02.png",
                                "https://themegenix.com/demo/renova/assets/img/images/author03.png",
                                "https://themegenix.com/demo/renova/assets/img/images/author04.png"
                            ].map((src, i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-sm">
                                    <img src={src} alt={`Team Member ${i + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>

                        {/* Action Button */}
                        <button className="bg-[#ff5e13] hover:bg-[#e05210] text-white px-10 py-5 font-bold text-[14px] tracking-widest uppercase transition-all shadow-lg hover:translate-y-[-2px] active:translate-y-[0]">
                            Book Your Service
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
