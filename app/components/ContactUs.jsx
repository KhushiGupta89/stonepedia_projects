"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

export default function ContactUs() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const saveExcel = () => {
        const data = [
            {
                Full_Name: form.fullName,
                Email: form.email,
                Message: form.message,
                Date: new Date().toLocaleString(),
            },
        ];

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

        XLSX.writeFile(workbook, "contact-data.xlsx");

        alert("Data Saved In Excel File");

        setForm({
            fullName: "",
            email: "",
            message: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveExcel();
    };

    return (
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-[24px] lg:px-8 xl:px-14">
            <div
                className="rounded-[35px] overflow-hidden bg-cover bg-center relative min-h-[720px] md:min-h-[400px] lg:min-h-[380px] xl:min-h-[530px] 2xl:min-h-[630px]"
                style={{ backgroundImage: "url('/images/contactUs.png')" }}
            >
                <div className="absolute inset-0 bg-black/55 z-0"></div>

                <div className="relative z-10 h-full flex flex-col lg:flex-row justify-between items-center xl:items-start gap-8 md:gap-10 px-4 sm:px-6 md:px-6 lg:px-[35px] xl:px-[40px] 2xl:px-[70px] py-8 lg:py-8 xl:py-10">
                    {/* Left */}
                    <div className="w-full xl:w-[55%] text-white md:flex md:flex-col md:items-center lg:text-start lg:items-start md:text-center">
                        <div className="mt-6 sm:mt-8 xl:mt-10 md:flex md:justify-center">
                            <button className="text-[#FFFFFF] border border-[#FFFFFF] px-6 py-2 rounded-full  text-base md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px]  ">
                                Get in touch
                            </button>
                        </div>

                        <h1 className="text-[25px] mt-4  md:text-[30px] lg:text-[30px] xl:text-[36px] 2xl:text-[44px] font-semibold leading-tight mb-4 md:mb-2 md:mb-[40px]">
                            Have Questions? We're Here <br />to Help
                        </h1>

                        <p className="text-[13px] md:text-[16px] lg:text-sm xl:text-[15px] 2xl:text-[18px] text-white/90 md:max-w-[500px] lg:max-w-[500px] xl:max-w-[580px]">
                            Schedule your consultation to explore exquisite possibilities tailored to your space. Reach out
                            through our contact form or connect with us directly by clicking the call button below. Let our
                            expert team transform your vision into timeless reality
                        </p>
                    </div>

                    {/* Right */}
                    <div className="w-full mt-6 sm:mt-8 md:mt-6 xl:mt-[20px] md:mx-auto sm:max-w-[520px] lg:max-w-[380px] xl:max-w-[430px] 2xl:max-w-[520px] rounded-[24px] p-[1px] bg-[#FFFFFF] via-gray-100 to-gray-300 shadow-lg">
                        <div className="bg-white/80 backdrop-blur-md rounded-[24px] p-4 sm:p-6">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-3">
                                {/* Full Name */}
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
                                    className="w-full md:text-sm 2xl:text-sm border border-gray-200 rounded-lg px-4 py-2 md:py-3 text-xs bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition duration-200"
                                />

                                {/* Email */}
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
                                    className="w-full md:text-sm border border-gray-200 rounded-lg px-4 py-2 md:py-3 text-xs 2xl:text-sm bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition duration-200"
                                />

                                {/* Message */}
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
                                    className="w-full md:text-sm border border-gray-200 rounded-lg px-4 py-2 md:py-3 text-xs 2xl:text-sm bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition duration-200"
                                ></textarea>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="mt-4 py-1.5 md:py-3 cursor-pointer rounded-lg text-xs md:text-sm lg:text-sm xl:text-[16px] font-medium bg-black text-white hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition duration-200"
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