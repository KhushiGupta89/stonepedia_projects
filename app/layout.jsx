import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Stonepedia",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});


export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${outfit.variable} font-poppins`}
    >
      <body className="antialiased ">
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
