import { FaArrowUp } from "react-icons/fa6";
import ActivitiesPageCard from "../Components/ActivitiesPageCard";
import GlobalHeader from "../Components/GlobalHeader";
import { useEffect, useState } from "react";
import FooterSection from "../Components/FooterSection";

function ActivitiesPage () {
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
    <div>
      <GlobalHeader headerTitle="Activities" headerLink="Activities"/>
        <section className='my-20'>
            <div className="flex justify-center">
                <div className='lg:px-8 px-3 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/01.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="California"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/02.jpg" activitiesCardTrip="2 Trips" activitiesCardTitle="Thailand"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/03.jpg" activitiesCardTrip="3 Trips" activitiesCardTitle="India"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/04.jpg" activitiesCardTrip="6 Trips" activitiesCardTitle="Sugarland"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/05.jpg" activitiesCardTrip="7 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/06.jpg" activitiesCardTrip="8 Trips" activitiesCardTitle="Sugarland"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/07.jpg" activitiesCardTrip="6 Trips" activitiesCardTitle="India"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/08.jpg" activitiesCardTrip="3 Trips" activitiesCardTitle="Califonia"/>
                        <ActivitiesPageCard activitiesCardBg="https://turmet-react.vercel.app/assets/img/activities/09.jpg" activitiesCardTrip="5 Trips" activitiesCardTitle="Thailand"/>                 
                </div>
            </div>
        </section>
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
  )
}

export default ActivitiesPage