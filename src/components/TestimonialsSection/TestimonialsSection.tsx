"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
    {
        company: "Xoyck",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-brand-2680373-2225501.png", // Placeholder for logo
        content: "The innovative designs presented by exceeded our expectations. Their creative approach and attention to detail were evident in every aspect of the project. Aesthetics showcased their commitment...",
        author: "Daniel Kobakt",
        authorLabel: "MARKWTO.INC",
        hasDot: true
    },
    {
        company: "Xoyck",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-brand-2680373-2225501.png", // Placeholder for logo
        content: "The innovative designs presented by exceeded our expectations. Their creative approach and attention to detail were evident in every aspect of the project. Aesthetics showcased their commitment...",
        author: "Daniel Kobakt",
        authorLabel: "MARKWTO.INC",
        hasDot: false
    }
];

const TestimonialsSection = () => {
    return (
        <section className="bg-[#111111] py-24 px-5 md:px-10 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-white to-transparent rotate-45"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="w-full md:w-2/3">
                        <span className="text-[#ff5e13] font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                            Our Customers Feedbacks
                        </span>
                        <h2 className="text-white text-[32px] md:text-[42px] lg:text-[48px] font-black uppercase leading-[1.1] tracking-tighter">
                            What People Says About <br /> Our Company
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-0">
                        <button className="w-16 h-16 bg-black flex items-center justify-center text-white/50 hover:text-white transition-colors border-r border-white/5">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="w-16 h-16 bg-[#ff5e13] flex items-center justify-center text-white hover:bg-[#e05210] transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative bg-[#1a1a1a] p-10 md:p-14 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                        >
                            {/* Company Logo/Name */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-11 h-11 bg-gradient-to-br from-[#8a3ffc] to-[#08bdff] rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white text-[22px] font-black leading-none">X</span>
                                </div>
                                <span className="text-white text-[26px] font-black tracking-tight">{testimonial.company}</span>
                            </div>

                            {/* Content */}
                            <p className="text-[#999999] text-[16px] md:text-[18px] leading-[1.8] mb-12 font-medium italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author Info */}
                            <div className="flex flex-wrap items-center text-[12px] md:text-[13px] uppercase tracking-[0.2em]">
                                <span className="text-white font-black">{testimonial.author},</span>
                                <span className="text-[#ff5e13] font-black ml-2">{testimonial.authorLabel}</span>
                            </div>

                            {/* Decorative Quote Icons - Using a custom double quote look */}
                            <div className="absolute bottom-6 right-10 text-white/[0.03] group-hover:text-white/[0.06] transition-opacity duration-500 pointer-events-none select-none">
                                <div className="text-[120px] font-black leading-none">””</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
