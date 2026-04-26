"use client";

import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks = [
  {
    href: "https://www.facebook.com/stonepedia/",
    icon: BiLogoFacebookSquare,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/stonepediaofficial/",
    icon: IoLogoInstagram,
    label: "Instagram",
  },
  {
    href: "https://x.com/stonepediaofficial",
    icon: FaXTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.linkedin.com/company/stonepedia/posts/?feedView=all",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];

const companyLinks = [
  "About Us",
  "Contact Us",
  "Career Tips",
  "Career",
];

const locations = [
  "Delhi NCR",
  "Jhajjar",
  "Rohtak",
  "Sonipat",
  "Chandigarh",
  "Panchkula",
  "Mohali",
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 md:pt-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-[23px] md:px-[60px] lg:px-24 xl:px-40">

        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10 lg:gap-12">

          {/* LEFT */}
          <div className="flex flex-col w-full md:w-[20%] lg:w-[25%] xl:w-[25%] xl:w-[30%] pt-6 lg:pt-12">
            <div className=" w-[130px] lg:w-[140px] xl:w-[170px] 2xl:w-[205px]">
              <Image
                src="/logo.png"
                alt="Stonepedia Logo"
                width={190}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex mt-6 md:mt-40 items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                const styles =
                  item.label === "Facebook"
                    ? "bg-[#1877F2] rounded-full"
                    : item.label === "Instagram"
                      ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full"
                      : item.label === "Twitter"
                        ? "bg-black rounded-full"
                        : "bg-[#0A66C2] rounded-full";

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    aria-label={item.label}
                    className={`w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center text-white text-lg transition-all duration-300 hover:scale-105 ${styles}`}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* COMPANY + LOCATION */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-20 w-full md:w-[35%] lg:w-[35%] xl:w-[35%] 2xl:w-[30%] pt-6">
            {/* COMPANY */}
            <div>
              <h3 className="text-sm  xl:text-[16px] 2xl:text-[17px] font-bold text-[#141414] mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((item) => (
                  <li
                    key={item}
                    className="text-sm xl:text-[16px] 2xl:text-[17px] text-[#202020B2] hover:text-black transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* LOCATION */}
            <div>
              <h3 className="text-sm xl:text-[16px] 2xl:text-[17px]  font-bold text-[#141414] mb-4">
                Location
              </h3>
              <ul className="space-y-2">
                {locations.map((item) => (
                  <li
                    key={item}
                    className="text-sm xl:text-[16px] 2xl:text-[17px]  text-[#202020B2]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NOTIFICATIONS */}
          <div className="bg-[#FBFBFB] rounded-[26px] p-4 sm:p-6 md:p-7 w-full md:w-[45%] lg:w-[45%] xl:w-[45%]">
            <h2 className="text-base md:text-sm lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-bold text-[#141414] mb-2">
              Notifications
            </h2>

            <p className="text-sm md:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[#141414] mb-4">
              Stay updated with our Notifications
            </p>

            <input
              type="email"
              placeholder="Email Address*"
              className="w-full h-[48px] md:h-[54px] bg-[#F2F2F2] rounded-xl px-4 text-sm outline-none border border-transparent focus:border-black transition"
            />

            <button className="w-full h-[48px] md:h-[54px] mt-3 md:mt-4 bg-black text-white rounded-xl text-sm md:text-[15px] xl:text-[16px] 2xl:text-[17px] font-semibold hover:opacity-90 transition cursor-pointer">
              Contact US →
            </button>

            <p className="text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#141414] mt-5">
              By subscribing you agree with our privacy policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className=" mt-10 mb-5 flex flex-col items-center text-center md:hidden">
          <p className="text-sm text-[#3C3C3C] mb-3">
            &copy; 2024 Stonepedia Projects. All Rights Reserved.
          </p>
          <div className="flex text-[#000000] text-xs flex-wrap gap-3">
            <span className="cursor-pointer hover:text-black transition">
              Copyright & Terms | Privacy Policy
            </span>
          </div>
        </div>

        {/* DESKTOP BOTTOM */}
        <div className="hidden md:flex mt-10 mb-5 relative flex-row items-center justify-between text-sm text-gray-500 text-left">
          <p className="absolute left-20 lg:left-45 text-sm xl:text-[16px] 2xl:text-[17px] text-[#3C3C3C]">
            &copy; 2024 Stonepedia Projects. All Rights Reserved.
          </p>

          <div className="flex text-[#000000] text-xs xl:text-sm  flex-wrap gap-3 absolute right-[10px] lg:right-[90px] xl:right-[120px]">
            <span className="cursor-pointer hover:text-black transition">
              Copyright & Terms | Privacy Policy
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

//center
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { BiLogoFacebookSquare } from "react-icons/bi";
// import { IoLogoInstagram } from "react-icons/io";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export const socialLinks = [
//   {
//     href: "https://www.facebook.com/stonepedia/",
//     icon: BiLogoFacebookSquare,
//     label: "Facebook",
//   },
//   {
//     href: "https://www.instagram.com/stonepediaofficial/",
//     icon: IoLogoInstagram,
//     label: "Instagram",
//   },
//   {
//     href: "https://x.com/stonepediaofficial",
//     icon: FaXTwitter,
//     label: "Twitter",
//   },
//   {
//     href: "https://www.linkedin.com/company/stonepedia/posts/?feedView=all",
//     icon: FaLinkedin,
//     label: "LinkedIn",
//   },
// ];

// const companyLinks = [
//   "About Us",
//   "Contact Us",
//   "Career Tips",
//   "Career",
// ];

// const locations = [
//   "Delhi NCR",
//   "Jhajjar",
//   "Rohtak",
//   "Sonipat",
//   "Chandigarh",
//   "Panchkula",
//   "Mohali",
// ];

// const Footer = () => {
//   return (
//     <footer className="w-full pt-10 md:pt-14 bg-white">
//       <div className="max-w-[1800px] mx-auto px-[23px] md:px-[60px] lg:px-24 xl:px-40">

//         {/* FLEX CONTAINER */}
//         <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10 lg:gap-12">

//           {/* LEFT */}
//           <div className="flex flex-col w-full md:w-[20%] lg:w-[25%] xl:w-[25%] xl:w-[30%] pt-6 lg:pt-12">
//             <div className="w-[130px] lg:w-[140px] xl:w-[170px] 2xl:w-[205px] mx-auto md:mx-0">
//               <Image
//                 src="/logo.png"
//                 alt="Stonepedia Logo"
//                 width={190}
//                 height={60}
//                 className="w-full h-auto object-contain"
//               />
//             </div>

//             {/* SOCIAL ICONS */}
//             <div className="flex mt-6 md:mt-40 items-center justify-center md:justify-start gap-3">
//               {socialLinks.map((item) => {
//                 const Icon = item.icon;

//                 const styles =
//                   item.label === "Facebook"
//                     ? "bg-[#1877F2] rounded-full"
//                     : item.label === "Instagram"
//                       ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full"
//                       : item.label === "Twitter"
//                         ? "bg-black rounded-full"
//                         : "bg-[#0A66C2] rounded-full";

//                 return (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     target="_blank"
//                     aria-label={item.label}
//                     className={`w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center text-white text-lg transition-all duration-300 hover:scale-105 ${styles}`}
//                   >
//                     <Icon />
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* COMPANY + LOCATION */}
//           <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-20 w-full md:w-[35%] lg:w-[35%] xl:w-[35%] 2xl:w-[30%] pt-6 md:pt-6">
//             {/* COMPANY */}
//             <div className="text-center md:text-left">
//               <h3 className="text-sm  xl:text-[16px] 2xl:text-[17px] font-bold text-[#141414] mb-4">
//                 Company
//               </h3>
//               <ul className="space-y-2">
//                 {companyLinks.map((item) => (
//                   <li
//                     key={item}
//                     className="text-sm xl:text-[16px] 2xl:text-[17px] text-[#202020B2] hover:text-black transition cursor-pointer"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* LOCATION */}
//             <div className="text-center md:text-left">
//               <h3 className="text-sm xl:text-[16px] 2xl:text-[17px]  font-bold text-[#141414] mb-4">
//                 Location
//               </h3>
//               <ul className="space-y-2">
//                 {locations.map((item) => (
//                   <li
//                     key={item}
//                     className="text-sm xl:text-[16px] 2xl:text-[17px]  text-[#202020B2]"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* NOTIFICATIONS */}
//           <div className="bg-[#FBFBFB] rounded-[26px] p-4 sm:p-6 md:p-7 w-full md:w-[45%] lg:w-[45%] xl:w-[45%]">
//             <h2 className="text-base md:text-sm lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-bold text-[#141414] mb-2">
//               Notifications
//             </h2>

//             <p className="text-sm md:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[#141414] mb-4">
//               Stay updated with our Notifications
//             </p>

//             <input
//               type="email"
//               placeholder="Email Address*"
//               className="w-full h-[48px] md:h-[54px] bg-[#ececec] rounded-xl px-4 text-sm outline-none border border-transparent focus:border-black transition"
//             />

//             <button className="w-full h-[48px] md:h-[54px] mt-3 md:mt-4 bg-black text-white rounded-xl text-sm md:text-[15px] xl:text-[16px] 2xl:text-[17px] font-semibold hover:opacity-90 transition cursor-pointer">
//               Contact US →
//             </button>

//             <p className="text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#141414] mt-5">
//               By subscribing you agree with our privacy policy and provide
//               consent to receive updates from our company.
//             </p>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className=" bg-white mt-10 mb-5 flex flex-col items-center text-center md:hidden">
//           <p className="text-sm text-[#3C3C3C] mb-3">
//             &copy; 2024 Stonepedia Projects. All Rights Reserved.
//           </p>
//           <div className="flex text-[#000000] text-xs flex-wrap gap-3">
//             <span className="cursor-pointer hover:text-black transition">
//               Copyright & Terms | Privacy Policy
//             </span>
//           </div>
//         </div>

//         {/* DESKTOP BOTTOM */}
//         <div className="hidden md:flex bg-white mt-10 mb-5 relative flex-row items-center justify-between text-sm text-gray-500 text-left">
//           <p className="absolute left-20 lg:left-45 text-sm xl:text-[16px] 2xl:text-[17px] text-[#3C3C3C]">
//             &copy; 2024 Stonepedia Projects. All Rights Reserved.
//           </p>

//           <div className=" flex text-[#000000] text-xs xl:text-sm  flex-wrap gap-3 absolute right-[10px] lg:right-[90px] xl:right-[120px]">
//             <span className="cursor-pointer hover:text-black transition">
//               Copyright & Terms | Privacy Policy
//             </span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;