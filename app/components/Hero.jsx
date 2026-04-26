"use client";

import { FaPlay } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
    return (
        // <div className="w-full  min-h-screen px-[12px] md:px-[20px]  mt-0 pt-14 md:pt-14 xl:pt-16">
        <div className="w-full min-h-[100svh] overflow-hidden pt-14 px-[12px] md:px-[20px]">
            <div className="max-w-[1800px] mx-auto h-[calc(100svh-56px)]">
                <div className="relative rounded-2xl overflow-hidden h-full">

                    {/* Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/hero.png"
                            alt="hero"
                            className="w-full h-full object-cover md:object-fill rounded-2xl"
                        />
                    </div>



                    {/* Dark overlay */}
                    {/* <div className="absolute inset-0 bg-black/40" /> */}

                    {/* LEFT CONTENT */}
                    <div className="absolute z-10   bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-12 max-w-[90%] sm:max-w-md md:max-w-xl text-white">

                        <h1 className="text-[21px]  text-[#FFFFFF]  md:text-[29px] lg:text-[32px] xl:text-[40px] 2xl:text-[43px] font-semibold ">
                            Your Investment Deserves <br />
                            the Best Management
                        </h1>
                        <p className="mt-2 pr-4 md:mt-3 font-medium text-xs  md:text-[13px] xl:text-[14px] w-[85%]  md:w-full  2xl:text-base text-white">
                            From accurate measurements to final polishing, we deliver seamless
                            <br className="hidden md:block" />
                            hassle-free installation that brings your design vision to life.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-2 sm:gap-3 mt-4 md:mt-6 flex-wrap">
                            <button className="flex items-center gap-2 bg-white text-black px-3 md:px-5 py-2 rounded-full text-xs md:text-[13px] xl:text-[15px]  font-medium hover:scale-105 transition cursor-pointer">
                                Contact us
                                <span className="bg-black text-white p-1.5 rounded-full flex items-center justify-center">
                                    <FiArrowUpRight size={12} />
                                </span>
                            </button>

                            <button className="flex items-center gap-2 bg-white text-black px-3 md:px-5 py-2 rounded-full text-xs md:text-[13px] xl:text-[15px]   font-medium hover:scale-105 transition cursor-pointer">
                                Watch Video
                                <span className="bg-black text-white p-1.5 rounded-full flex items-center justify-center">
                                    <FaPlay size={10} />
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* RIGHT CARDS */}
                    <div className="absolute right-3 z-10 sm:right-4 md:right-10 bottom-4 sm:bottom-6 md:bottom-4 hidden md:flex flex-col gap-3 sm:gap-4">

                        <div className="backdrop-blur-md bg-gradient-to-b from-white/10 to-black/20 border border-[#828282] text-white p-2  rounded-xl md:rounded-2xl w-[140px] sm:w-[160px] md:w-[200px] shadow-[0_8px_32px_rgba(0,0,0,0.25)]">

                            <h2 className="text-lg sm:text-xl md:text-[20px] lg:text-[24px]  xl:text-[30px] 2xl:text-[42px] font-medium">15+</h2>
                            <p className="text-[10px] sm:text-xs md:text-sm  xl:text-base text-gray-200 mt-1">
                                Years of stone Installation & Services
                            </p>
                        </div>

                        <div className="backdrop-blur-md bg-gradient-to-b from-white/10 to-black/20 border border-[#828282] text-white p-2  rounded-xl md:rounded-2xl w-[140px] sm:w-[160px] md:w-[200px] shadow-[0_8px_32px_rgba(0,0,0,0.25)]">

                            <h2 className="text-lg sm:text-xl md:text-[20px] lg:text-[24px]  xl:text-[30px] 2xl:text-[42px] font-medium">10+</h2>
                            <p className="text-[10px] sm:text-xs md:text-sm  xl:text-base text-gray-200 mt-1">
                                Ongoing Projects Managed
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;