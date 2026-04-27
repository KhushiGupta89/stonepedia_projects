// // "use client";
// // import Image from "next/image";
// // import { useEffect, useRef, useState } from "react";
// // import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// // const images = [
// //     "/images/projects/img1.png",
// //     "/images/projects/img2.png",
// //     "/images/projects/img3.png",
// //     "/images/projects/img4.png",
// // ];

// // export default function Projects() {
// //     const [index, setIndex] = useState(0);
// //     const [isMdUp, setIsMdUp] = useState(false);
// //     const [isLgUp, setIsLgUp] = useState(false);

// //     const sliderRef = useRef(null);

// //     useEffect(() => {
// //         const media = window.matchMedia("(min-width: 768px)");
// //         const onChange = () => setIsMdUp(media.matches);

// //         onChange();

// //         if (typeof media.addEventListener === "function") {
// //             media.addEventListener("change", onChange);
// //             return () => media.removeEventListener("change", onChange);
// //         }

// //         media.addListener(onChange);
// //         return () => media.removeListener(onChange);
// //     }, []);

// //     useEffect(() => {
// //         const media = window.matchMedia("(min-width: 1024px)");
// //         const onChange = () => setIsLgUp(media.matches);
// //         onChange();

// //         if (typeof media.addEventListener === "function") {
// //             media.addEventListener("change", onChange);
// //             return () => media.removeEventListener("change", onChange);
// //         }

// //         media.addListener(onChange);
// //         return () => media.removeListener(onChange);
// //     }, []);

// //     const scrollToIndex = (i) => {
// //         const count = images.length;
// //         if (count === 0) return;

// //         const visibleCount = isMdUp && !isLgUp ? 3 : 1;
// //         const maxIndex = Math.max(0, count - visibleCount);
// //         const clamped = Math.max(0, Math.min(i, maxIndex));
// //         setIndex(clamped);
// //     };

// //     const next = () => scrollToIndex(index + 1);
// //     const prev = () => scrollToIndex(index - 1);

// //     const handleScroll = () => {
// //         const container = sliderRef.current;
// //         if (!container) return;

// //         const scrollLeft = container.scrollLeft;
// //         const children = Array.from(container.children || []);
// //         if (children.length === 0) return;

// //         let bestIdx = 0;
// //         let bestDist = Infinity;
// //         for (let i = 0; i < children.length; i++) {
// //             const el = children[i];
// //             const dist = Math.abs(el.offsetLeft - scrollLeft);
// //             if (dist < bestDist) {
// //                 bestDist = dist;
// //                 bestIdx = i;
// //             }
// //         }
// //         if (bestIdx !== index) setIndex(bestIdx);
// //     };

// //     return (
// //         <div className="w-full px-[23px] md:px-[24px] lg:px-8  xl:px-10 ">
// //             <div className="max-w-[1800px] mx-auto h-full">
// //                 {/* Heading */}
// <div className="text-center w-full ">
//     <h1 className="text-[23px] md:text-[30px] leading-[1.2] xl:text-[32px] 2xl:text-[42px] font-medium text-[#000000] ">
//         Where Your Imagination Comes{" "}
//         <br />
//         Alive Through{" "}
//         <span className="inline-flex justify-center items-center gap-2 align-middle">
//             {/* <Image
//                 src="/images/projects/center-img.png"
//                 alt=""
//                 width={160}
//                 height={60}
//                 className="w-[100px] md:w-[140px] lg:w-[160px] h-auto object-contain align-middle"
//             /> */}
//             <Image
//                 src="/images/projects/center-img.png"
//                 alt=""
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 className="w-[100px] md:w-[140px] xl:w-[130px] 2xl:w-[160px] h-auto object-contain"
//             />
//             {" "}
//             Expert
//         </span>
//         <br />
//         Stone Installation
//     </h1>

//     <div className="max-w-[500px] 2xl:max-w-[620px]  mx-auto">
//         <p className="text-gray-500 text-xs  md:text-sm  xl:text-sm 2xl:text-[15px] mt-2">
//             Transform your space with Stonepedia’s professionally crafted stone projects. Our team ensures accurate measurements, flawless cutting, and perfect installation. Experience a seamless journey from selection to finishing built around your vision.
//         </p>
//     </div>
// </div>

// //                 {/* Button */}
// //                 <div className="mt-10 md:mt-12 sm:mt-8 md:mt-8 flex items-center justify-between">
// //                     <button className="text-[#000000] border border-[#000000] px-6 py-2 rounded-full  text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px] bg-white">
// //                         Our Projects
// //                     </button>

// //                     <div className="flex gap-2">
// //                         <button
// //                             onClick={prev}
// //                             className="w-10 h-10 md:w-12 md:h-12 border border-[#000000] rounded-full flex items-center justify-center bg-white cursor-pointer"
// //                             aria-label="Previous"
// //                         >
// //                             <FiChevronLeft className="text-black text-black text-sm xl:text-base " />
// //                         </button>

// //                         <button
// //                             onClick={next}
// //                             className="w-10 h-10 md:w-12 md:h-12 border border-[#000000] rounded-full flex items-center justify-center bg-white cursor-pointer"
// //                             aria-label="Next"
// //                         >
// //                             <FiChevronRight className="text-black text-sm xl:text-base" />
// //                         </button>
// //                     </div>
// //                 </div>

// //                 {/* Slider */}
// //                 <div className="relative mt-10">

// //                     {/* Cards */}
// //                     <div
// //                         ref={sliderRef}
// //                         onScroll={handleScroll}
// //                         className="overflow-hidden lg:overflow-visible"
// //                         style={{ scrollbarWidth: "none" }}
// //                     >
// //                         <div
// //                             className="flex gap-4 md:gap-0 lg:grid lg:grid-cols-4 2xl:grid-cols-4 lg:gap-4 2xl:gap-4 transition-transform duration-300 ease-in-out lg:[transform:none]"
// //                             style={isLgUp ? undefined : { transform: `translateX(-${index * (isMdUp ? 33.3333 : 100)}%)` }}
// //                         >
// //                             {images.map((img, i) => (
// //                                 <div
// //                                     key={i}
// //                                     className="w-full shrink-0 md:w-1/3 md:px-2 transition-all duration-300 lg:w-auto lg:px-0"
// //                                 >
// //                                     <div className="relative rounded-2xl h-[240px] md:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[340px]" >
// //                                         <Image
// //                                             src={img}
// //                                             alt=""
// //                                             fill
// //                                             loading="eager"
// //                                             sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
// //                                         // className="object-cover"
// //                                         />
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>

// //                     {/* Dots */}
// //                     <div className="flex justify-center mt-6 md:mt-8 gap-2">
// //                         {Array.from({ length: Math.max(1, images.length - (isMdUp && !isLgUp ? 3 : 1) + 1) }).map((_, i) => (
// //                             <div
// //                                 key={i}
// //                                 className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-black" : "w-2 bg-gray-300"}`}
// //                             />
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { motion } from "framer-motion";

// const images = [
//     "/images/projects/img1.png",
//     "/images/projects/img2.png",
//     "/images/projects/img3.png",
//     "/images/projects/img4.png",
// ];

// export default function Projects() {
//     const [index, setIndex] = useState(0);
//     const [isMdUp, setIsMdUp] = useState(false);
//     const [isLgUp, setIsLgUp] = useState(false);

//     useEffect(() => {
//         const checkScreen = () => {
//             setIsMdUp(window.innerWidth >= 768);
//             setIsLgUp(window.innerWidth >= 1024);
//         };

//         checkScreen();
//         window.addEventListener("resize", checkScreen);
//         return () => window.removeEventListener("resize", checkScreen);
//     }, []);

//     const visibleCount = isLgUp ? 4 : isMdUp ? 3 : 1;
//     const maxIndex = Math.max(0, images.length - visibleCount);

//     const next = () => {
//         setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     };

//     const prev = () => {
//         setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
//     };

//     // useEffect(() => {
//     //     if (isLgUp) return;

//     //     const timer = setInterval(() => {
//     //         next();
//     //     }, 3500);

//     //     return () => clearInterval(timer);
//     // }, [index, isLgUp]);
//     useEffect(() => {
//         const timer = setInterval(() => {
//             next();
//         }, 3500);

//         return () => clearInterval(timer);
//     }, [index]);

//     return (
//         <section className="w-full px-[23px] md:px-[24px] lg:px-8 xl:px-10  overflow-hidden">
//             <div className="max-w-[1800px] mx-auto">
//                 {/* Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     viewport={{ once: true }}
//                     className="text-center"
//                 >
//                     <h1 className="text-[23px] md:text-[30px] xl:text-[32px] 2xl:text-[42px] font-medium leading-[1.2] text-black">
//                         Where Your Imagination Comes <br />
//                         Alive Through{" "}
//                         <span className="inline-flex items-center gap-2">
//                             <Image
//                                 src="/images/projects/center-img.png"
//                                 alt=""
//                                 width={160}
//                                 height={60}
//                                 className="w-[100px] md:w-[140px] xl:w-[130px] 2xl:w-[160px] h-auto"
//                             />
//                             Expert
//                         </span>
//                         <br />
//                         Stone Installation
//                     </h1>

//                     <p className="max-w-[620px] mx-auto text-gray-500 text-xs md:text-sm mt-3">
//                         Transform your space with Stonepedia’s professionally crafted stone
//                         projects. Our team ensures accurate measurements, flawless cutting,
//                         and perfect installation.
//                     </p>
//                 </motion.div>

//                 {/* Buttons */}
//                 <div className="mt-10 flex items-center justify-between">
//                     <button className="border border-black px-6 py-2 rounded-full text-base lg:text-lg xl:text-[20px] hover:bg-black hover:text-white transition duration-300">
//                         Our Projects
//                     </button>
//                     {/* 
//                     {!isLgUp && ( */}
//                     <div className="flex gap-2">
//                         <button
//                             onClick={prev}
//                             className="cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white active:scale-95 transition"
//                         >
//                             <FiChevronLeft />
//                         </button>

//                         <button
//                             onClick={next}
//                             className="cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white active:scale-95 transition"
//                         >
//                             <FiChevronRight />
//                         </button>
//                     </div>
//                     {/* )} */}
//                 </div>

//                 {/* Slider */}
//                 <div className="mt-10 ">
//                     <motion.div
//                         animate={{
//                             x: isLgUp ? 0 : `-${index * (100 / visibleCount)}%`,
//                         }}
//                         transition={{
//                             duration: 0.8,
//                             ease: [0.22, 1, 0.36, 1],
//                         }}
//                         className="flex lg:grid lg:grid-cols-4 gap-4"
//                     >
//                         {images.map((img, i) => (
//                             <motion.div
//                                 key={i}
//                                 whileHover={{
//                                     y: -8,
//                                     scale: 1.03,
//                                 }}
//                                 transition={{ duration: 0.4 }}
//                                 className={`relative shrink-0 rounded-2xl overflow-hidden
//                 w-full md:w-[calc(33.33%-10px)] lg:w-auto cursor-pointer
//                 h-[240px] md:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[340px]
//               `}
//                             >
//                                 <Image
//                                     src={img}
//                                     alt=""
//                                     fill
//                                     className=" group-hover:scale-110 transition-transform duration-700"
//                                 />

//                                 {/* Overlay */}
//                                 <div className="absolute inset-0  transition duration-500" />
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>

//                 {/* Dots */}
//                 {/* {!isLgUp && ( */}
//                 <div className="flex justify-center mt-8 gap-2">
//                     {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//                         <div
//                             key={i}
//                             className={`h-2 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-black" : "w-2 bg-gray-300"
//                                 }`}
//                         />
//                     ))}
//                 </div>
//                 {/* )} */}
//             </div>
//         </section>
//     );
// }
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

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

    useEffect(() => {
        const checkScreen = () => {
            setIsMdUp(window.innerWidth >= 768);
            setIsLgUp(window.innerWidth >= 1024);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // responsive cards
    const visibleCount = isLgUp ? 4 : isMdUp ? 2 : 1;
    const maxIndex = Math.max(0, images.length - visibleCount);

    useEffect(() => {
        setIndex((prev) => Math.max(0, Math.min(prev, maxIndex)));
    }, [maxIndex]);

    // infinite loop
    const next = () => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // autoplay all devices
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 3500);

        return () => clearInterval(timer);
    }, [index]);

    return (
        <section className="w-full px-[23px] md:px-[24px] lg:px-8 xl:px-10 overflow-hidden">
            <div className="max-w-[1800px] mx-auto">
                {/* Heading */}
                <div className="text-center w-full ">
                    <h1 className="text-[23px] md:text-[30px] leading-[1.2] lg:text-[28px] xl:text-[32px] 2xl:text-[42px] font-medium text-[#000000] ">
                        Where Your Imagination Comes{" "}
                        <br />
                        Alive Through{" "}
                        <span className="inline-flex justify-center items-center gap-2 align-middle">
                            <Image
                                src="/images/projects/center-img.png"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-[100px] md:w-[140px] lg:w-[120px] xl:w-[130px] 2xl:w-[160px] h-auto object-contain"
                            />
                            {" "}
                            Expert
                        </span>
                        <br />
                        Stone Installation
                    </h1>

                    <div className="max-w-[400px] xl:max-w-[460px] 2xl:max-w-[620px]  mx-auto">
                        <p className="text-gray-500 text-xs  md:text-sm  xl:text-sm 2xl:text-[15px] mt-2">
                            Transform your space with Stonepedia’s professionally crafted stone projects. Our team ensures accurate measurements, flawless cutting, and perfect installation. Experience a seamless journey from selection to finishing built around your vision.
                        </p>
                    </div>
                </div>
                {/* Top Buttons */}
                <div className="mt-10 flex items-center justify-between">
                    <button className="border border-black px-6 py-2 rounded-full text-base lg:text-lg xl:text-[20px] hover:bg-black hover:text-white transition duration-300">
                        Our Projects
                    </button>

                    <div className="flex gap-2">
                        <button
                            onClick={prev}
                            className="w-10 h-10 md:w-12 md:h-12 cursor-pinter rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white active:scale-95 transition"
                        >
                            <FiChevronLeft />
                        </button>

                        <button
                            onClick={next}
                            className="w-10 h-10 md:w-12 md:h-12 cursor-pinter rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white active:scale-95 transition"
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="mt-10 overflow-hidden">
                    <motion.div
                        animate={{
                            x: `-${index * (100 / visibleCount)}%`,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex gap-4"
                    >
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                transition={{ duration: 0.4 }}
                                className="relative shrink-0 rounded-2x cursor-pointer
                w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]
                h-[240px] md:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[340px] group"
                            >
                                <Image
                                    src={img}
                                    alt=""
                                    fill
                                    className="group-hover:scale-100 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 transition duration-500" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-black" : "w-2 bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}