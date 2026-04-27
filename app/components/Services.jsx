"use client";

// components/ServicesSection.jsx
import { FiArrowUpRight } from "react-icons/fi";
export default function Services() {
    const services = [
        {
            title: "INTERIOR\nINSTALLATION",
            desc: "Enhance your home with perfectly installed, elegant stonework.Seamless finishing that adds beauty and sophistication to any room.",
        },
        {
            title: "EXTERIOR\nINSTALLATION",
            desc: "Strong, weather-resistant stone installations built to last.Ideal for pathways, facades, and outdoor spaces that demand durability.",
        },
        {
            title: "CUSTOM\nINSTALLATION",
            desc: "Unique designs crafted to match your vision and requirements.Precision cutting, special finishes, and tailor-made stonework just for you.",
        },
    ];

    return (
        <div className="w-full">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-[23px] md:px-[24px] lg:px-8 xl:px-14 mt-4 md:mt-4">

                {/* Top Button */}
                <div className="mt-4 mb-6 sm:mt-8 sm:mb-8 md:mt-8 md:mb-8 ">
                    <button className="text-[#000000] border border-[#000000] px-6 py-2 rounded-full  text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px] bg-white">
                        Our services
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className="border border-[#6e6e6e] rounded-[16px] sm:rounded-[20px] bg-transparent p-4 sm:p-5 md:p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:border-black cursor-pointer group"
                        >
                            <div className="flex items-start justify-between gap-3 sm:gap-4">
                                <h3 className="text-xs  md:text-sm xl:text-[18px] 2xl:text-[20px]  font-medium  text-black whitespace-pre-line flex-1">
                                    {item.title}
                                </h3>

                                <div className="w-7 h-7  md:w-[36px] md:h-[36px] rounded-full bg-black text-white flex items-center justify-center text-[16px] sm:text-[18px] md:text-[20px] flex-shrink-0 group-hover:bg-gray-800 transition-colors duration-300">
                                    <FiArrowUpRight />
                                </div>
                            </div>

                            <p className="mt-3 sm:mt-4 text-[#494949] text-[11px] font-medium md:text-xs lg:text-[13px] xl:text-[15px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}