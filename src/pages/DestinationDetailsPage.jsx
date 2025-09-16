import DestinationInfo from "../Components/DescriptionInfo";
import MapCard from "../Components/MapCard";
import ReviewCard from "../Components/ReviewCard";
import ReplyForm from "../Components/ReplyForm";
import GlobalHeader from "../Components/GlobalHeader";
import FooterSection from "../Components/FooterSection";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

const DestinationDetailsPage = () => {
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
    <section>
      <GlobalHeader headerTitle="Destination Details" headerLink="Destination Details"/>

      <div className="mt-8 mx-auto p-6 bg-white shadow-md rounded-lg grid gap-8 lg:grid-cols-2 lg:gap-8">
        <DestinationInfo
          ImageUrl="https://i.postimg.cc/wj13qLjh/life-s-captured-sparks-wdmubbjp1z-Q-unsplash.jpg"
          DescTitle="New york"
          DescName="About New York"
          Description1="New York City, often simply called New York, is the most populous city in the United States. With an estimated 2023 population of 8,468,000 distributed over about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States."
          Description2="Located on the northeastern coast of the United States, New York City is a global hub for commerce, culture, and entertainment. It is known for its iconic landmarks such as Times Square, Central Park, and the Statue of Liberty."
          Description3="The city is composed of five boroughs: Brooklyn, Queens, Manhattan, The Bronx, and Staten Island. Each borough has its own unique character and attractions."
          Description4="New York City is also famous for its diverse neighborhoods, world-class museums, and vibrant arts scene. It is a melting pot of cultures, with residents from all over the world contributing to its rich tapestry of life."
        />
        <DestinationInfo
          ImageUrl="https://i.postimg.cc/dVCTYp62/italy.jpg"
          DescTitle="Italy"
          DescName="About Italy"
          Description1="Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins."
          Description2="Italy is known for its rich history, art, architecture, and cuisine. It is home to some of the world's most famous cities such as Rome, Venice, Florence, and Milan."
          Description3="The country is famous for its contributions to art, music, and literature, with figures like Leonardo da Vinci, Michelangelo, and Dante Alighieri hailing from Italy."
          Description4="Italy is also renowned for its culinary traditions, including pasta, pizza, and gelato. Each region has its own unique dishes and flavors, making Italian cuisine one of the most beloved in the world."
        />
      </div>
      <div>
        <MapCard />
      </div>
      <div className="px-4 mt-8 max-w-7xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ReviewCard
          UserImage="https://randomuser.me/api/portraits/men/32.jpg"
          UserName="John Dane"
          UserDate="24 Jun, 2025"
          Time="10:30am"
        />
        <ReviewCard
          UserImage="https://randomuser.me/api/portraits/women/9.jpg"
          UserName="Jane Fane"
          UserDate="28 Jun, 2025"
          Time="11:30am"
        />
        <ReviewCard
          UserImage="https://randomuser.me/api/portraits/women/60.jpg"
          UserName="Sophie Kim"
          UserDate="30 Jul, 2025"
          Time="11:30am"
        />
      </div>

      <div className="mt-8 mb-8">
        <ReplyForm />
      </div>

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
    </section>
  );
};

export default DestinationDetailsPage;