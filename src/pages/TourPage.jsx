import TourCard from "../Components/TourCard"
import RightCards from "../Components/TourCategoryCard"
import GlobalHeader from "../Components/GlobalHeader"
import FooterSection from "../Components/FooterSection"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"
const TourPage = () => {
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
       <GlobalHeader headerTitle="Tour" headerLink="Tour"/>
       <section className="lg:px-8 px-3 mb-20 mt-20">
       <div className="flex gap-5">
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5  py-2 w-full'>
              <article>
                     <TourCard 
                     location="BROOKLYN NY"
                     cardpics="https://turmet-react.vercel.app/assets/img/destination/01.jpg" 
                     people="50+" 
                     duration="10 Days"
                     resorts="Brooklyn Beach Resort Tour"
                     button="Book Now"
                     price="$59.00"
                     days="/Per Day"
                     rating="4.7"
                     />
              </article>
              <article>
                     <TourCard 
                            location="CLEVELAND OH"
                            cardpics="https://turmet-react.vercel.app/assets/img/destination/02.jpg" 
                            people="50+" 
                            duration="10 Days"
                            resorts="Cleveland Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article>
                     <TourCard 
                            location="SACRAMENTO CA"
                            cardpics="https://turmet-react.vercel.app/assets/img/destination/03.jpg"
                            people="50+" 
                            duration="10 Days"
                            resorts="California Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article >
                     <TourCard 
                            location="LONDON UK"
                            cardpics="https://turmet-react.vercel.app/assets/img/destination/04.jpg" 
                            people="50+" 
                            duration="10 Days"
                            resorts="London Chumphon Town Tour "
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article >
                     <TourCard 
                            location="NORWOOD MA"
                            cardpics="https://turmet-react.vercel.app/assets/img/destination/05.jpg" 
                            people="50+" 
                            duration="10 Days"
                            resorts="Places to Visit in Norwood"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article >
                     <TourCard 
                            location="PERTH AU"
                            cardpics="https://turmet-react.vercel.app/assets/img/destination/06.jpg" 
                            people="50+" 
                            duration="10 Days"
                            resorts="Perth Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article>
                     <TourCard 
                            location="AMSTERDAM ND"
                            cardpics="https://turmet-react.vercel.app/assets/img/destination/07.jpg" 
                            people="50+" 
                            duration="10 Days"
                            resorts="Amsterdam Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article >
                     <TourCard 
                            location="PARIS FR"
                            cardpics="https://turmet-react.vercel.app/assets/img/destination/08.jpg" 
                            people="50+" 
                            duration="10 Days"
                            resorts="Beach Resort Tour In Paris"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
              <article>
                     <TourCard 
                            location="TORONTO CA"
                            cardpics="https://turmet-react.vercel.app/assets/img/destination/04.jpg" 
                            people="50+" 
                            duration="10 Days"
                            resorts="Toronto Beach Resort Tour"
                            button="Book Now"
                            price="$59.00"
                            days="/ Per Day"
                            rating="4.7"
                     />
              </article>
       </div>
       <RightCards/>
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
 export default TourPage
