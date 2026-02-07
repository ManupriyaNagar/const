"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const teamMembers = [
    {
        name: "Samuel Alexander",
        role: "Head of Construction",
        image: "https://themegenix.com/demo/renova/assets/img/team/team_img01.jpg",
    },
    {
        name: "Edward Steven",
        role: "Head of Construction",
        image: "https://themegenix.com/demo/renova/assets/img/team/team_img02.jpg",
        isSpecial: true,
    },
    {
        name: "Samuel Robert",
        role: "Head of Construction",
        image: "https://themegenix.com/demo/renova/assets/img/team/team_img03.jpg",
    }
];

const TeamSection = () => {
    return (
        <section className="bg-white py-24 px-5 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-[#ff5e13] font-bold text-[13px] uppercase tracking-[0.2em] mb-4 block">
                        Our Team Members
                    </span>
                    <h2 className="text-[#1a1a1a] text-[32px] md:text-[42px] lg:text-[48px] font-black uppercase leading-[1.1] tracking-tighter max-w-4xl mx-auto">
                        The Team Behind The Successful Architecture Company
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col group">
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden mb-8">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${member.isSpecial ? ' brightness-[0.8]' : ''} group-hover:grayscale-0 group-hover:brightness-100`}
                                />

                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white/20 backdrop-blur-md">
                                    <div className="flex gap-2">
                                        {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                            <button key={i} className="w-11 h-11 bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-[#ff5e13] hover:text-white transition-colors shadow-sm">
                                                <Icon size={18} strokeWidth={1.5} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div>
                                <h3 className="text-[#1a1a1a] text-[22px] font-bold uppercase tracking-tight mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[#888888] text-[14px] font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
