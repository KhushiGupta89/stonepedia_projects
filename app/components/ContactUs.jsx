"use client";

import { useState } from "react";

export default function ContactUs() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        try {
            setIsSubmitting(true);
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json().catch(() => null);

            if (!res.ok || !data?.ok) {
                alert("Failed to submit. Please try again.");
                return;
            }

            alert("Submitted successfully");
            setForm({
                fullName: "",
                email: "",
                message: "",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-[24px] lg:px-8 xl:px-14">
            <div
                className="rounded-[35px] overflow-hidden bg-cover bg-center relative min-h-[720px] md:min-h-[400px] lg:min-h-[380px] xl:min-h-[530px] 2xl:min-h-[630px]"
                style={{ backgroundImage: "url('/images/contactUs.png')" }}
            >
                <div className="absolute inset-0 bg-black/55 z-0"></div>

                <div className="relative z-10 h-full flex flex-col lg:flex-row justify-between items-center xl:items-start gap-8 md:gap-10 px-4 sm:px-6 md:px-6 lg:px-[35px] xl:px-[40px] 2xl:px-[70px] py-2 lg:py-8 xl:py-10">
                    {/* Left */}
                    <div className="w-full xl:w-[55%] text-white md:flex md:flex-col md:items-center lg:text-start lg:items-start md:text-center">
                        <div className="mt-6 sm:mt-8 xl:mt-10 md:flex md:justify-center">
                            <button className="text-[#FFFFFF] border border-[#FFFFFF] px-6 py-2 rounded-full text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px]">
                                Get in touch
                            </button>
                        </div>

                        <h1 className="text-[25px] mt-4 md:text-[30px] lg:text-[34px] xl:text-[36px] 2xl:text-[44px] font-semibold leading-tight mb-4 md:mb-2 md:mb-[35px]">
                            Have Questions? We’re Here <br />to Help
                        </h1>

                        <p className="text-[13px] md:text-[16px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] text-white/90 md:max-w-[500px] lg:max-w-[480px] xl:max-w-[530px]">
                            Schedule your consultation to explore exquisite possibilities tailored to your space. Reach out
                            through our contact form or connect with us directly by clicking the call button below. Let our
                            expert team transform your vision into timeless reality
                        </p>
                    </div>

                    {/* Right */}
                    <div className="w-full mt-4 md:mt-6 xl:mt-[20px] md:mx-auto sm:max-w-[520px] lg:max-w-[380px] xl:max-w-[430px] 2xl:max-w-[520px] rounded-[24px] p-[1px] bg-[#FFFFFF] via-gray-100 to-gray-300 shadow-lg">
                        <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-4 sm:p-6">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                                
                                {/* Full Name */}
                                <div className="flex flex-col gap-0.5">
                                    <label className="text-xs md:text-sm 2xl:text-sm text-[#1E1E1E] font-medium">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full md:text-sm 2xl:text-sm border border-gray-200 rounded-lg px-4 py-2 text-xs bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition duration-200"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-0.5">
                                    <label className="text-xs md:text-sm 2xl:text-sm text-[#1E1E1E] font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full md:text-sm border border-gray-200 rounded-lg px-4 py-2 text-xs 2xl:text-sm bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition duration-200"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-0.5">
                                    <label className="text-xs md:text-sm 2xl:text-sm text-[#1E1E1E] font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        rows="3"
                                        placeholder="Write your message..."
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full md:text-sm border border-gray-200 rounded-lg px-4 py-2 text-xs 2xl:text-sm bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition duration-200"
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-4 py-1.5 md:py-2 cursor-pointer rounded-lg text-xs md:text-sm lg:text-sm xl:text-[16px] font-medium bg-black text-white hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    Let’s Connect
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
