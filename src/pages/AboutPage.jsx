import Travelsection from "../Components/Travelsection";
import Statspage from "../Components/Statspage";
import Meettourguide from "../Components/Meettourguide";
import GlobalHeader from "../Components/GlobalHeader";
import AboutSection from "../Components/AboutSection";
import FooterSocial from "../Components/FooterSocial";
import TestinomySection from "../Components/TestinomySection";
import FooterSection from "../Components/FooterSection";
import "./Home.css"
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const AboutPage = () => {

  const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / windowHeight) * 100;
        setScrollPercentage(scrolled);
        setIsVisible(scrollTop > 200); // show only after scrolling down
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    <div className="w-full bg-white">
      <GlobalHeader headerTitle="About Us" headerLink="About Us"/>
      <AboutSection></AboutSection>
      <Travelsection/>
      <Statspage/>
      <Meettourguide/>
      <TestinomySection/>
      <FooterSocial/>
      <FooterSection/>

      <>
        {isVisible && (
          <div
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 cursor-pointer flex items-center justify-center 
            w-14 h-14 rounded-full bg-[#1CA8CB] shadow-xl border z-[2000]"
          >
            {/* Circular Progress */}
            <svg className="absolute w-16 h-16 -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="#e5e7eb" // light gray bg circle
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="#113D48" // Tailwind blue
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${
                  2 * Math.PI * 28 - (scrollPercentage / 100) * 2 * Math.PI * 28
                }`}
                className="transition-all duration-200"
              />
            </svg>
  
            {/* Icon */}
            <FaArrowUp className="w-5 h-5 text-white relative z-[2000]"/>
          </div>
        )}
        </>
    </div>
  );
};

export default AboutPage;
