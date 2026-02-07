"use client";

import React from "react";
import Link from "next/link";
import {
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
    MapPin,
    Mail,
    Phone,
    ChevronUp
} from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 px-5 md:px-10 font-sans relative">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-gray-800">
                    <div className="flex flex-col items-start gap-2">
                        <div className="text-[32px] font-extrabold text-white tracking-tighter">
                            <img src="/image.png" alt="" className="w-26" />
                        </div>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-gray-400 text-sm leading-relaxed italic">
                            Their team's technical expertise is truly outstanding. They took the
                            time to thoroughly understand our goals and requirements and then
                            designed and implemented solutions...
                        </p>
                    </div>

                    <div className="flex gap-3">
                        {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#ff6b00] hover:border-[#ff6b00] transition-all duration-300"
                            >
                                <Icon size={16} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Middle Section - Contact Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800 py-12">
                    {/* Office Address */}
                    <div className="flex items-center gap-5 pb-8 md:pb-0 md:pr-8">
                        <div className="w-14 h-14 bg-[#ff6b00] rounded-full flex items-center justify-center shrink-0">
                            <MapPin size={24} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] text-[#ff6b00] uppercase font-bold tracking-widest mb-1">
                                Office Address
                            </span>
                            <span className="text-[14px] font-bold uppercase leading-tight">
                                12 Division Park, Frankfurt<br />
                                Sky 12546, Berlin
                            </span>
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="flex items-center gap-5 py-8 md:py-0 md:px-8">
                        <div className="w-14 h-14 bg-[#ff6b00] rounded-full flex items-center justify-center shrink-0">
                            <Mail size={24} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] text-[#ff6b00] uppercase font-bold tracking-widest mb-1">
                                Email Address
                            </span>
                            <span className="text-[14px] font-bold uppercase leading-tight">
                                HELP@RENOVA-MAIL.COM<br />
                                24/7@RENOVA.COM
                            </span>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center gap-5 pt-8 md:pt-0 md:pl-8">
                        <div className="w-14 h-14 bg-[#ff6b00] rounded-full flex items-center justify-center shrink-0">
                            <Phone size={24} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] text-[#ff6b00] uppercase font-bold tracking-widest mb-1">
                                Phone Number
                            </span>
                            <span className="text-[14px] font-bold uppercase leading-tight">
                                +(215) 2536-32156<br />
                                +(452) 3694-21587
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Navigation & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-800">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {["HOME", "ABOUT", "SERVICES", "BLOG", "CONTACT"].map((link) => (
                            <Link
                                key={link}
                                href={`/${link.toLowerCase()}`}
                                className="text-[13px] font-bold hover:text-[#ff6b00] transition-colors"
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                    <div className="text-[13px] text-gray-400 font-medium">
                        Copyright © 2024. All Rights Reserved.
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className="absolute bottom-10 right-10 w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-[#ff6b00] hover:text-white transition-all shadow-xl rounded-sm"
                aria-label="Scroll to top"
            >
                <ChevronUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;
