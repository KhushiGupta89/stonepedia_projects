"use client";

// components/WhyChooseUs.jsx
import { FiArrowRight } from "react-icons/fi";
export default function WhyChooseUs() {
  const items = [
    "Expert Installation Staff",
    "Advanced Tools & Techniques",
    "Accurate Measurement & Planning",
    "Skilled & Trusted Professionals",
    "Clean, Hassle-Free Execution",
  ];

  return (
    <div className="w-full   ">
      <div className="max-w-[1800px] mx-auto px-[23px] md:px-[24px] lg:px-8 xl:px-14 mt-6 sm:mt-8 md:mt-8">

        {/* Top Button */}
        <div className="mt-6 sm:mt-8 md:mt-8 mb-4 md:mb-8">
          <button className="text-[#000000] border border-[#000000] px-6 py-2 rounded-full  text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px] bg-white">
            Why Choose Us
          </button>
        </div>

        {/* Main UI */}
        <div className="relative w-full h-full">
          {/* h-[00px] md:h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[701px] */}
          {/* MOBILE VIEW */}
          <div className="block md:hidden h-[300px] relative pb-20">
            <img
              src="/images/choose/choose1.png"
              alt="Interior"
              className="w-full h-full object-cover rounded-[20px]"
            />

            {/* White Card - Mobile */}
            <div className="absolute left-4 right-4 -bottom-4 bg-[#f8f8f8] border border-[#CDCDCD] bg-white rounded-[20px] shadow-lg px-4 py-3 z-10">
              {items.slice(0, 6).map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-xs lg:text-[13px] xl:text-sm 2xl:text-base text-black">
                      {item}
                    </span>

                    {index === 0 && (
                      <FiArrowRight className="text-[#000000]" />
                    )}
                  </div>
                  {index !== items.length - 1 && (
                    <div className="border-b border-[#dddddd]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP/TABLET VIEW */}
          <div className="hidden md:block">

            {/* Main Big Image */}
            <div className="rounded-[20px] md:h-[400px] lg:h-full overflow-hidden md:pl-[120px] md:pr-[90px] h-full">
              <img
                src="/images/choose/choose1.png"
                alt="Interior"
                className="w-full h-full rounded-[20px] "
              />
            </div>

            {/* Left Floating White Card */}
            <div className="absolute left-0 top-[70px] xl:top-[100px] z-20">
              <div className="w-[280px] lg:w-[280px] xl:w-[330px] bg-[#f8f8f8] border border-[#CDCDCD] rounded-[28px] px-8 py-3 shadow-sm">

                {items.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-xs lg:text-[13px] xl:text-sm 2xl:text-base text-black">
                        {item}
                      </span>

                      {index === 0 && (
                        <FiArrowRight className="text-[20px] text-[#000000]" />
                      )}
                    </div>

                    {index !== items.length - 1 && (
                      <div className="border-b border-[#dddddd]" />
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* Right Image */}
            <div className="absolute right-[-6px] xl:right-[-4px] top-[35px]  lg:top-[25px] xl:top-[60px] z-30">
              <div className="w-[240px] lg:w-[340px] xl:w-[370px] 2xl:w-[370px] rounded-[26px] p-[8px]">
                <img
                  src="/images/choose/choose2.png"
                  alt="Room"
                  className="w-full h-[260px] xl:h-[240px] 2xl:h-[280px] rounded-[20px]"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}