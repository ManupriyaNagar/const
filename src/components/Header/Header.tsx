"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ChevronDown, Menu, Search } from "lucide-react";

const Header = () => {
    return (
        <header className="w-full font-sans">
            {/* Top Bar */}
            <div className="bg-black text-white px-5 md:px-10 py-2.5 flex flex-col md:flex-row justify-between items-center text-[13px] tracking-wider font-medium">
                <div className="mb-2 md:mb-0">
                    Express delivery and free returns within 24 hours
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex gap-4 font-bold">
                        <span className="cursor-pointer text-[12px] hover:text-gray-300">FB</span>
                        <span className="cursor-pointer text-[12px] hover:text-gray-300">TW</span>
                        <span className="cursor-pointer text-[12px] hover:text-gray-300">LI</span>
                        <span className="cursor-pointer text-[12px] hover:text-gray-300">IN</span>
                    </div>
                    <div className="flex gap-5">
                        <Link href="/contact" className="uppercase hover:opacity-80 transition-opacity">
                            Contact
                        </Link>
                        <Link href="/careers" className="uppercase hover:opacity-80 transition-opacity">
                            Careers
                        </Link>
                        <Link href="/insights" className="uppercase hover:opacity-80 transition-opacity">
                            Insights
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white px-5 md:px-10 py-6 flex justify-between items-center border-b border-gray-100">
                <div className="text-[32px] font-extrabold text-[#4a4a4a] tracking-tighter">
                    <img src="/image.png" alt="" className="w-26" />
                </div>

                <div className="hidden lg:flex items-center gap-10">
                    {/* Location */}
                    <div className="flex items-center gap-4">
                        <div className="bg-[#f5f5f5] w-11 h-11 rounded-full flex items-center justify-center text-[#1a1a1a]">
                            <MapPin size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] text-[#888888] uppercase font-medium mb-0.5">
                                Our location*
                            </span>
                            <span className="text-[14px] font-bold text-[#1a1a1a] uppercase leading-tight">
                                22 Madi Ave, New York
                            </span>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <div className="bg-[#f5f5f5] w-11 h-11 rounded-full flex items-center justify-center text-[#1a1a1a]">
                            <Mail size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] text-[#888888] uppercase font-medium mb-0.5">
                                Send us mail*
                            </span>
                            <span className="text-[14px] font-bold text-[#1a1a1a] uppercase leading-tight">
                                SERVICE@RENOVA.COM
                            </span>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="bg-[#f5f5f5] w-11 h-11 rounded-full flex items-center justify-center text-[#1a1a1a]">
                            <Phone size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] text-[#888888] uppercase font-medium mb-0.5">
                                Phone number*
                            </span>
                            <span className="text-[14px] font-bold text-[#1a1a1a] uppercase leading-tight">
                                +258 369 38 2153
                            </span>
                        </div>
                    </div>

                    <button className="border-2 border-[#1a1a1a] bg-transparent text-[#1a1a1a] px-6 py-3 font-bold text-sm uppercase transition-all hover:bg-[#1a1a1a] hover:text-white">
                        Free Consultation
                    </button>
                </div>

                {/* Mobile Consultation Button (visible only on md and smaller) */}
                <div className="lg:hidden">
                    <button className="border-2 border-[#1a1a1a] bg-transparent text-[#1a1a1a] px-4 py-2 font-bold text-xs uppercase transition-all hover:bg-[#1a1a1a] hover:text-white">
                        Consult
                    </button>
                </div>
            </div>

            {/* Navigation Header */}
            <div className="bg-white px-5 md:px-10 py-0 flex justify-between items-center border-b border-gray-100 h-16">
                <nav className="hidden lg:flex items-center h-full">
                    <Link href="/" className="text-[#ff5e13] font-bold text-[14px] tracking-widest uppercase h-full px-5 border-r border-gray-50 flex items-center">
                        Home
                    </Link>
                    <Link href="/pages" className="text-[#1a1a1a] font-bold text-[14px] tracking-widest uppercase h-full px-5 hover:text-[#ff5e13] transition-colors border-r border-gray-50 flex items-center">
                        About
                    </Link>
                    <Link href="/shop" className="text-[#1a1a1a] font-bold text-[14px] tracking-widest uppercase h-full px-5 hover:text-[#ff5e13] transition-colors border-r border-gray-50 flex items-center">
                        Projects
                        {/* <ChevronDown size={14} strokeWidth={3} className="ml-1 text-gray-400" /> */}
                    </Link>
                    <Link href="/portfolio" className="text-[#1a1a1a] font-bold text-[14px] tracking-widest uppercase h-full px-5 hover:text-[#ff5e13] transition-colors border-r border-gray-50 flex items-center">
                        Careers
                        {/* <ChevronDown size={14} strokeWidth={3} className="ml-1 text-gray-400" /> */}
                    </Link>
                    <Link href="/blog" className="text-[#1a1a1a] font-bold text-[14px] tracking-widest uppercase h-full px-5 hover:text-[#ff5e13] transition-colors border-r border-gray-50 flex items-center">
                        Contact
                        {/* <ChevronDown size={14} strokeWidth={3} className="ml-1 text-gray-400" /> */}
                    </Link>
                </nav>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="h-16 w-[1px] bg-gray-100"></div>
                    <button className="text-[#1a1a1a] hover:text-[#ff5e13] transition-colors pr-2">
                        <Menu size={28} strokeWidth={2} />
                    </button>
                </div>

                {/* Mobile Menu Toggle (only visible on mobile/tablet) */}
                <div className="lg:hidden flex items-center justify-between w-full h-16">
                    <span className="text-sm font-bold uppercase tracking-widest">Menu</span>
                    <button className="text-[#1a1a1a]">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
