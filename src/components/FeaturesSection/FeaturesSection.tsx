"use client";

import React from "react";
import { Lightbulb, GitBranch, Award, ArrowRight } from "lucide-react";

const features = [
    {
        title: "Sustainability and Innovation",
        description: "In addition to competition, factory companies also face challenges related.",
        icon: <Lightbulb size={40} strokeWidth={1.5} />,
        image: "https://themegenix.com/demo/renova/assets/img/services/h4_services_img01.jpg"
    },
    {
        title: "Versatility and Adaptability",
        description: "In addition to competition, factory companies also face challenges related.",
        icon: <GitBranch size={40} strokeWidth={1.5} />,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Attention to Detail and Quality",
        description: "In addition to competition, factory companies also face challenges related.",
        icon: <Award size={40} strokeWidth={1.5} />,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    }
];

const FeaturesSection = () => {
    return (
        <section className="bg-[#111111] py-24 px-5 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-[#ff5e13] font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-white text-[32px] md:text-[42px] lg:text-[48px] font-black uppercase leading-[1.1] tracking-tighter max-w-3xl mx-auto">
                        Find the most demanding features we provide
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#151515] p-12 flex flex-col group cursor-pointer border border-white/5 hover:border-[#ff5e13] transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className=" text-white mb-10 group-hover:text-[#ff5e13] transition-colors duration-300">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white text-[19px] font-bold uppercase tracking-widest mb-6 leading-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#808080] text-[14px] leading-[1.7] mb-8 font-medium">
                                {feature.description}
                            </p>

                            {/* Image */}
                            <div className="relative w-full h-[110px] overflow-hidden mb-8">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Link */}
                            <button className="text-white text-[12px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-[#ff5e13] transition-colors mt-auto pt-4">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
