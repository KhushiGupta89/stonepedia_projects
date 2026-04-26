"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
    "/images/projects/img1.png",
    "/images/projects/img2.png",
    "/images/projects/img3.png",
    "/images/projects/img4.png",
];

export default function Projects() {
    const [index, setIndex] = useState(0);
    const [isMdUp, setIsMdUp] = useState(false);
    const [isLgUp, setIsLgUp] = useState(false);

    const sliderRef = useRef(null);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)");
        const onChange = () => setIsMdUp(media.matches);

        onChange();

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", onChange);
            return () => media.removeEventListener("change", onChange);
        }

        media.addListener(onChange);
        return () => media.removeListener(onChange);
    }, []);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)");
        const onChange = () => setIsLgUp(media.matches);
        onChange();

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", onChange);
            return () => media.removeEventListener("change", onChange);
        }

        media.addListener(onChange);
        return () => media.removeListener(onChange);
    }, []);

    const scrollToIndex = (i) => {
        const count = images.length;
        if (count === 0) return;

        const visibleCount = isMdUp && !isLgUp ? 3 : 1;
        const maxIndex = Math.max(0, count - visibleCount);
        const clamped = Math.max(0, Math.min(i, maxIndex));
        setIndex(clamped);
    };

    const next = () => scrollToIndex(index + 1);
    const prev = () => scrollToIndex(index - 1);

    const handleScroll = () => {
        const container = sliderRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const children = Array.from(container.children || []);
        if (children.length === 0) return;

        let bestIdx = 0;
        let bestDist = Infinity;
        for (let i = 0; i < children.length; i++) {
            const el = children[i];
            const dist = Math.abs(el.offsetLeft - scrollLeft);
            if (dist < bestDist) {
                bestDist = dist;
                bestIdx = i;
            }
        }
        if (bestIdx !== index) setIndex(bestIdx);
    };

    return (
        <div className="w-full px-[23px] md:px-[24px] lg:px-8  xl:px-10 ">
            <div className="max-w-[1800px] mx-auto h-full">
                {/* Heading */}
                <div className="text-center w-full ">
                    <h1 className="text-[23px] md:text-[30px] leading-[1.2] xl:text-[32px] 2xl:text-[42px] font-medium text-[#000000] ">
                        Where Your Imagination Comes{" "}
                        <br />
                        Alive Through{" "}
                        <span className="inline-flex justify-center items-center gap-2 align-middle">
                            {/* <Image
                                src="/images/projects/center-img.png"
                                alt=""
                                width={160}
                                height={60}
                                className="w-[100px] md:w-[140px] lg:w-[160px] h-auto object-contain align-middle"
                            /> */}
                            <Image
                                src="/images/projects/center-img.png"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-[100px] md:w-[140px] xl:w-[130px] 2xl:w-[160px] h-auto object-contain"
                            />
                            {" "}
                            Expert
                        </span>
                        <br />
                        Stone Installation
                    </h1>

                    <div className="max-w-[500px] 2xl:max-w-[620px]  mx-auto">
                        <p className="text-gray-500 text-xs  md:text-sm  xl:text-sm 2xl:text-[15px] mt-2">
                            Transform your space with Stonepedia’s professionally crafted stone projects. Our team ensures accurate measurements, flawless cutting, and perfect installation. Experience a seamless journey from selection to finishing built around your vision.
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-10 md:mt-12 sm:mt-8 md:mt-8 flex items-center justify-between">
                    <button className="text-[#000000] border border-[#000000] px-6 py-2 rounded-full  text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px] bg-white">
                        Our Projects
                    </button>

                    <div className="flex gap-2">
                        <button
                            onClick={prev}
                            className="w-10 h-10 md:w-12 md:h-12 border border-[#000000] rounded-full flex items-center justify-center bg-white cursor-pointer"
                            aria-label="Previous"
                        >
                            <FiChevronLeft className="text-black text-black text-sm xl:text-base " />
                        </button>

                        <button
                            onClick={next}
                            className="w-10 h-10 md:w-12 md:h-12 border border-[#000000] rounded-full flex items-center justify-center bg-white cursor-pointer"
                            aria-label="Next"
                        >
                            <FiChevronRight className="text-black text-sm xl:text-base" />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="relative mt-10">

                    {/* Cards */}
                    <div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        className="overflow-hidden lg:overflow-visible"
                        style={{ scrollbarWidth: "none" }}
                    >
                        <div
                            className="flex gap-4 md:gap-0 lg:grid lg:grid-cols-4 2xl:grid-cols-4 lg:gap-4 2xl:gap-4 transition-transform duration-300 ease-in-out lg:[transform:none]"
                            style={isLgUp ? undefined : { transform: `translateX(-${index * (isMdUp ? 33.3333 : 100)}%)` }}
                        >
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className="w-full shrink-0 md:w-1/3 md:px-2 transition-all duration-300 lg:w-auto lg:px-0"
                                >
                                    <div className="relative rounded-2xl h-[240px] md:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[340px]" >
                                        <Image
                                            src={img}
                                            alt=""
                                            fill
                                            loading="eager"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                                        // className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 md:mt-8 gap-2">
                        {Array.from({ length: Math.max(1, images.length - (isMdUp && !isLgUp ? 3 : 1) + 1) }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-black" : "w-2 bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}