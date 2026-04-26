"use client";

// components/AboutUs.jsx

export default function AboutUs() {
  const stats = [
    {
      value: "12098",
      line1: "Plus Website",
      line2: "Visitors",
    },
    {
      value: "23",
      line1: "Installed Plus",
      line2: "Cities",
    },
    {
      value: "13+",
      line1: "Years Plus",
      line2: "Experience",
    },
  ];

  return (
    <div className="w-full ">
      <div className="max-w-[1800px] mx-auto   px-[23px] md:px-[24px] lg:px-8  xl:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">

          {/* LEFT SIDE */}
          <div className="">

            {/* BUTTON */}
            <button className="text-[#000000] border border-[#000000] px-6 py-2 rounded-full  text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px] bg-white ">

              About us
            </button>

            {/* TEXT */}
            <p className="mt-6 md:mt-6 text-black text-sm md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] max-w-[760px]">
              India’s first trusted platform for premium stones, expert installation, and verified dealers delivering quality, transparency, and a seamless experience from selection to finishing.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 lg:mt-14 max-w-[640px]">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F9F9F9] backdrop-blur-[15px] rounded-[20px] px-5 py-5 sm:px-6 sm:py-6 "
                >
                  <h3 className="text-black text-[23px] md:text-[25px] xl:text-3xl 2xl:text-[42px]  font-medium ">
                    {item.value}
                  </h3>

                  <div className="mt-4 md:mt-6">
                    <p className="text-[#777777] text-[14px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                      {item.line1}
                    </p>
                    <p className="text-[#777777] text-[14px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                      {item.line2}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center w-full md:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] lg:justify-end lg:flex hidden">
            <img
              src="/images/aboutUs.png"
              alt="House Sketch"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
}