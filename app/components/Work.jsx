"use client";

// app/page.jsx

export default function Work() {
    const workCards = [
        {
            id: 1,
            image: "/images/work/work1.png",
            alt: "Traditional Contractor",
            title: "Traditional Contractor Working",
            description: "Expect conventional approach with delays, communication challenges, and varied results in your stone installation project.",
            position: "left"
        },
        {
            id: 2,
            image: "/images/work/work2.png",
            alt: "Our Services",
            title: "What to Expect from Our Services",
            description: "Get ready for a seamless installation experience that highlights your stunning stone features while improving functionality and style.",
            position: "right"
        }
    ];

    return (
        <div className="w-full">
            <div className="max-w-[1800px] mx-auto   px-[23px] md:px-[24px] lg:px-8  xl:px-14 mt-6 sm:mt-8 md:mt-8">

                {/* Button */}
                <div className="mt-6 sm:mt-8 md:mt-8">
                    <button className="text-[#000000] border border-[#000000] px-6 py-2 rounded-full  text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px] bg-white ">
                        How We Work
                    </button>
                </div>

                {/* Heading */}
                <div className="max-w-[1280px] mt-4 md:mt-8 mb-6">
                    <h1 className="  text-xl md:text-[22px] lg:text-2xl xl:text-[28px] 2xl:text-4xl font-medium text-black">
                        We tailor stone installations to your vision for perfect results.
                    </h1>

                    <p className="mt-1 sm:mt-2 text-[#343434] text-xs  md:text-[13px] lg:text-sm xl:text-[15px] 2xl:text-[18px] text-[#343434] max-w-[360px] md:max-w-[600px] lg:max-w-[645px] xl:max-w-[710px] 2xl:max-w-[1000px] ">
                        Creating your dream space with stone and slab is simple with us. Just follow our easy process, and soon you'll have a beautiful installation that transforms your environment.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-8 pb-28 md:pb-32 lg:pb-24">
                    {workCards.map((card) => (
                        <div
                            key={card.id}
                            className={`relative ${card.position === 'right' ? 'mt-33 md:mt-0' : ''}`}
                        >
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-[240px] md:h-[280px] lg:h-[260px] xl:h-[320px] 2xl:h-[365px] rounded-xl"
                            />

                            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-90px] md:bottom-[-100px] lg:bottom-[-75px] w-[85%] md:w-[80%] bg-white rounded-2xl shadow-lg px-5 md:px-7 py-4 text-center">

                                <h3 className="text-sm text-sm md:max-w-[200x] md:text-sm lg:text-[15px]  xl:text-[18px] xl:text-[18px] 2xl:text-[24px] font-semibold text-[#000000]">
                                    {card.title}
                                </h3>

                                <p className="mt-2 text-[#4D4D4D] text-xs md:text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-lg   lg:max-w-[320px] xl:max-w-[340px] 2xl:max-w-[400px] mx-auto">
                                    {card.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}