"use client";

import React from "react";
import { ClipboardList, Cog, Users, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Project Research",
        description: "One of the key components of best logistics solutions industry",
        icon: <ClipboardList size={32} strokeWidth={1.5} />,
        stagger: "mt-12 md:mt-24",
    },
    {
        number: "02",
        title: "Development",
        description: "One of the key components of best logistics solutions industry",
        icon: <Cog size={32} strokeWidth={1.5} />,
        stagger: "mt-0",
        hasDot: true,
    },
    {
        number: "03",
        title: "Team Works",
        description: "One of the key components of best logistics solutions industry",
        icon: <Users size={32} strokeWidth={1.5} />,
        stagger: "mt-12 md:mt-24",
    },
    {
        number: "04",
        title: "Quality Finished",
        description: "One of the key components of best logistics solutions industry",
        icon: <Rocket size={32} strokeWidth={1.5} />,
        stagger: "mt-0",
    }
];

const WorkingProcess = () => {
    return (
        <section className="bg-[#111111] py-24 px-5 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 md:mb-0">
                    <span className="text-[#ff5e13] font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                        We Strive To Be A Step Ahead
                    </span>
                    <h2 className="text-white text-[32px] md:text-[42px] lg:text-[48px] font-black uppercase leading-[1.1] tracking-tighter max-w-4xl mx-auto mb-16">
                        The Four Steps Working Process To Get Amazing Works
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mt-16 md:mt-24">
                    {steps.map((step, index) => (
                        <div key={index} className={`relative flex flex-col items-center text-center group w-full lg:w-1/4 ${step.stagger}`}>

                            {/* Circle with Icon */}
                            <div className="relative mb-10 transition-transform duration-500 group-hover:scale-105">
                                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center text-[#ff5e13] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                    {step.icon}
                                </div>
                                {/* Step Number Badge */}
                                <div className="absolute top-2 right-2 w-10 h-10 rounded-full bg-[#ff5e13] border-[6px] border-[#111111] flex items-center justify-center text-white font-black text-[13px] tracking-tighter">
                                    {step.number}
                                </div>
                            </div>

                            {/* Connecting Arrow (Desktop Only) */}
                            {index < steps.length - 1 && (
                                <div
                                    className={`hidden lg:block absolute top-[15%] left-[80%] w-32 h-16 pointer-events-none opacity-20`}
                                >
                                    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className={index % 2 === 0 ? "translate-y-10" : "scale-y-[-1] translate-y-[-10px]"}
                                    >
                                        <path d="M5 55C30 45 90 15 115 5" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                                        <path d="M108 5L115 5L115 12" stroke="white" strokeWidth="1" />
                                    </svg>
                                </div>
                            )}

                            {/* Content */}
                            <div className="flex flex-col items-center px-4">
                                <h3 className="text-white text-[19px] font-extrabold uppercase tracking-widest mb-4 relative">
                                    {step.title}
                                    {step.hasDot && (
                                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ff5e13]"></span>
                                    )}
                                </h3>
                                <p className="text-[#888888] text-[14px] leading-[1.7] mb-8 max-w-[220px] font-medium">
                                    {step.description}
                                </p>
                                <button className="text-[#ff5e13] font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-1 transition-transform group-hover:text-white">
                                    Learn More <ArrowRight size={14} strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkingProcess;
