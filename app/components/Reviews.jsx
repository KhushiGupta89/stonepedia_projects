"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const reviewImageByName = {
  "Nitin Singh": "/images/reviews/nitin.png",
  "vaidika 20": "/images/reviews/vaidika 20.png",
  "sumit khanagwal": "/images/reviews/sumit khanagwal.png",
  "Sudhir Maurya": "/images/reviews/Sudhir Maurya.png",
  "Abhimanyu Dhull": "/images/reviews/Abhimanyu Dhull.png",
};

const getReviewImage = (name) => {
  return reviewImageByName[name] || "/images/choose/choose1.png";
};

const reviews = [
  {
    name: "Nitin Singh",
    date: "2024-12-15",
    image: getReviewImage("Nitin Singh"),
    review:
      "Hassle free services/ Great Customer support/ After sales service awesome!",
  },
  {
    name: "vaidika 20",
    date: "2024-12-15",
    image: getReviewImage("vaidika 20"),
    review: "Exceptional Quality and Service from Stonepedia! Stonepedia exceeded my expectations with their outstanding service and exceptional variety of marbles. Their creativity and attention to detail truly set them apart. The team is incredibly reliable, professional, and honest, making the entire process smooth and stress-free.A heartfelt thank you to the Stonepedia team for their dedication and hard work. If you’re looking for a company that combines quality, creativity,",
  },
  {
    name: "sumit khanagwal",
    date: "2024-12-15",
    image: getReviewImage("sumit khanagwal"),
    review:
      "This user only left a rating.",
  },
  {
    name: "Sudhir Maurya",
    date: "2024-12-15",
    image: getReviewImage("Sudhir Maurya"),
    review:
      "The quality of stone is amazing. My house got just renovated with Stonepedia Projects. All process was so easy and nice.",
  },
  {
    name: "Abhimanyu Dhull",
    date: "2024-12-04",
    image: getReviewImage("Abhimanyu Dhull"),
    review:
      "Stonepedia's professionalism and experience is what sets it apart from other companies. My experience with them has been wonderful.",
  },
  {
    name: "Arvind Duggal",
    date: "2024-12-04",
    image: "/images/reviews/Arvind Duggal.png",
    review:
      "Very best work you done in stone marketing.",
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  const maxIndex = Math.max(reviews.length - cardsPerView, 0);

  useEffect(() => {
    const handleResize = () => {
      const newCards = getCardsPerView();
      setCardsPerView(newCards);
      setIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedReview(null);
    };

    if (selectedReview) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [selectedReview]);

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="w-full overflow-hidden">
      {selectedReview ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedReview(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div
            className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end gap-4 p-5 border-b border-gray-100">

              <button
                onClick={() => setSelectedReview(null)}
                className="shrink-0 cursor-pointer rounded-lg px-3 py-1.5 text-sm border border-gray-200 hover:bg-gray-50"
              >
                Close
              </button>
            </div>

            <div className="p-5">
              <p className="text-sm sm:text-base text-gray-700 whitespace-pre-wrap leading-relaxed">
                {selectedReview.review}
              </p>

              <div className="mt-5 text-[#FCBD06] text-lg flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-14">
        {/* TOP */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <button className="text-[#000000] border border-[#000000] px-5 py-2 rounded-full text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px] bg-white">
            What Our Client Say
          </button>

          {/* Tablet/Desktop Arrows */}
          <div className="hidden sm:flex gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`w-11 h-11 rounded-full cursor-pointer border flex items-center justify-center ${index === 0 ? "opacity-30 cursor-not-allowed" : ""
                }`}
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              disabled={index === maxIndex}
              className={`w-11 h-11 cursor-pointer rounded-full border flex items-center justify-center ${index === maxIndex ? "opacity-30 cursor-not-allowed" : ""
                }`}
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col md:grid md:grid-cols-[180px_1fr] lg:grid-cols-[290px_1fr]  xl:grid-cols-[360px_1fr] mt-4 sm:mt-6  md:mt-10  gap-8 lg:gap-0">
          {/* LEFT */}
          <div className="">
            <h2 className="font-semibold leading-snug text-[25px] md:text-[30px] lg:text-[40px] xl:text-[47px] 2xl:text-[55px]">
              <span className="text-blue-500">Voices</span> That{" "}
              <span className="hidden sm:inline">
                <br />
              </span>
              Inspire
            </h2>

            {/* <button className="cursor-pointer  mt-6 bg-black text-white px-4 py-2 rounded-full text-sm md:text-sm xl:text-base">
              Write a Review
            </button> */}
          </div>

          {/* RIGHT SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / cardsPerView)}%)`,
              }}
            >
              {reviews.map((item, i) => (
                <div
                  key={i}
                  className="min-w-full sm:min-w-[50%] lg:min-w-[33.33%] px-2 flex"
                >
                  <div className="h-full w-full bg-white border border-[#C9C9C9] rounded-[18px] p-4 flex flex-col">
                    {/* USER */}
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover w-10 h-10"
                      />

                      <div className="space-y-1">
                        <h4 className="text-sm lg:text-[13px] xl:text-sm 2xl:text-[15px] text-black font-medium">
                          {item.name}
                        </h4>
                        <p className="text-xs lg:text-[13px] xl:text-sm 2xl:text-[15px] text-[#595959]">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    {/* REVIEW */}
                    <div className="mt-4 flex flex-col flex-1">
                      <p className="text-sm  md:text-[13px] xl:text-[13px] 2xl:text-[15px] text-gray-600 line-clamp-4">
                        {item.review}
                      </p>

                      {typeof item.review === "string" && item.review.length > 140 ? (
                        <button
                          onClick={() => setSelectedReview(item)}
                          className="mt-2 cursor-pointer text-sm md:text-[13px] text-black underline underline-offset-4 hover:opacity-80 text-left"
                        >
                          Read more
                        </button>
                      ) : null}
                    </div>

                    {/* STARS */}
                    <div className="mt-auto pt-4 text-[#FCBD06] text-lg flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <FaStar key={starIndex} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Arrows */}
            <div className="flex sm:hidden justify-center gap-3 mt-5">
              <button
                onClick={prev}
                disabled={index === 0}
                className={`w-10 h-10 cursor-pointer rounded-full border flex items-center justify-center ${index === 0 ? "opacity-30 cursor-not-allowed" : ""
                  }`}
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={next}
                disabled={index === maxIndex}
                className={`w-10 h-10 cursor-pointer rounded-full border flex items-center justify-center ${index === maxIndex ? "opacity-30 cursor-not-allowed" : ""
                  }`}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}