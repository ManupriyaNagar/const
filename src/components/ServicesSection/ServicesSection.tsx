"use client";

import React from "react";

const services = [
    {
        number: "01",
        title: "General Contracting",
        description: "Volutpat fringilla blandit rhoncus proin duis, curae a molestie dui ligula fames faucibus eu dis class vitae",
        hasDot: false
    },
    {
        number: "02",
        title: "Product Design",
        description: "Volutpat fringilla blandit rhoncus proin duis, curae a molestie dui ligula fames faucibus eu dis class vitae",
        hasDot: true
    },
    {
        number: "03",
        title: "Project Planning",
        description: "Volutpat fringilla blandit rhoncus proin duis, curae a molestie dui ligula fames faucibus eu dis class vitae",
        hasDot: false
    },
    {
        number: "04",
        title: "Interior Design",
        description: "Volutpat fringilla blandit rhoncus proin duis, curae a molestie dui ligula fames faucibus eu dis class vitae",
        hasDot: false
    }
];

const ServicesSection = () => {
    return (
        <section className="bg-[#1a1a1a] w-full border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative p-12 md:p-14 lg:p-16 flex flex-col border-white/10 border-b md:border-b-0 md:border-r last:border-r-0 hover:bg-[#202020] transition-colors group cursor-pointer"
                    >
                        {/* Big Number */}
                        <div className="text-[52px] font-black text-white/5 tracking-tighter mb-8 group-hover:text-white/10 transition-colors leading-none">
                            {service.number}
                        </div>

                        {/* Content Container */}
                        <div className="relative">

                            <h3 className="text-white text-[17px] font-bold uppercase tracking-[0.2em] mb-6 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-[#888888] text-[14px] leading-[1.8] font-medium">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
