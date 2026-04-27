import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedWorks from "./components/FeaturedWorks";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
export default function Home() {
  return (
    <div className="bg-white text-black">

      <div id="hero" className="scroll-mt-20 pb-10 lg:pb-16" >
        <Hero />
      </div>

      <div id="projects" className="scroll-mt-20 pb-10 lg:pb-16" >
        <Projects />
      </div>

      <div id="work" className="scroll-mt-20 pb-10 lg:pb-16" >
        <Work />
      </div>

      <div id="services" className="scroll-mt-20 pb-10 lg:pb-16" >
        <Services />
      </div>

      <div id="why-choose-us" className="scroll-mt-20 pb-10 lg:pb-16" >
        <WhyChooseUs />
      </div>

      <div id="featured-work" className="scroll-mt-20 pb-10 lg:pb-16" >
        <FeaturedWorks />
      </div>

      <div id="about-us" className="scroll-mt-20 pb-10 lg:pb-16" >
        <AboutUs />
      </div>
       <div id="contact-us" className="scroll-mt-20 pb-10 lg:pb-16" >
        <ContactUs />
      </div>

      <div id="reviews" className="scroll-mt-20 pb-10 lg:pb-16" >
        <Reviews />
      </div>

    </div>
  );
}