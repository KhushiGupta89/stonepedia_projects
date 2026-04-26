// components/FeaturedWorks.jsx
"use client";

import { useState } from "react";

export default function FeaturedWorks() {
  const [active, setActive] = useState("All");

  const tabs = ["All", "Residential", "Commercial", "Individual"];

  const projects = [
    {
      id: 1,
      category: "Commercial",
      title: "IoT Commercial Real Estate Solutions",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Residential",
      title: "Modern Residence Tower",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Individual",
      title: "Luxury Family Villa",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Commercial",
      title: "Green Corporate Building",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-[23px] md:px-[24px] lg:px-8 xl:px-14">

        <div className="mt-6 sm:mt-8 md:mt-4">
          <button className="text-[#000000] border border-[#000000] px-6 py-2 rounded-full  text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px] bg-white">
            Featured Works
          </button>
        </div>

        {/* Subtitle */}
        <p className="mt-3 text-xs md:text-sm 2xl:text-[16px]  text-black  max-w-[700px]">
          Discover Our handpicked selection of premium works
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#d6d6d6] mt-4 lg:mt-6" />

        {/* Tabs */}
        <div className="flex  gap-2 mt-4 lg:mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`py-1.5 md:py-2 px-2 cursor-pointer md:px-3 xl:px-4 rounded-full border text-xs md:text-[13px] xl:text-sm font-medium  duration-300 ease-in-out whitespace-nowrap flex-shrink-0 ${active === tab

                ? "border border-black bg-black text-white"
                : "bg-[#ECECEC] text-black"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mt-8 lg:mt-8">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[22px] group w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] md:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[365px] object-cover rounded-[22px] group-hover:scale-105 transition duration-500"
              />

              {/* Overlay text only first card */}
              {index === 0 && (
                <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <h3 className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-medium max-w-[90%]">
                    {item.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}