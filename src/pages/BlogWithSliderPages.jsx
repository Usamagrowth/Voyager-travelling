import Blogwithslidercard from "../components/Blogwithslidercard";
import Blogslideranddetail2rowcard from "../components/Blogslideranddetail2rowcard";
import GlobalHeader from "../Components/GlobalHeader";
import FooterSection from "../Components/FooterSection";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
const BlogWithSliderPages = () => {
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
      <GlobalHeader headerTitle="Blog Classic" headerLink="Blog Classic"/>
    
    <section className="flex  p-5 gap-[45px] lg:items-start justify-center">
   <div className="flex flex-col gap-5 items-center justify-center">
 <Blogwithslidercard
    blogsliderimages="https://turmet-react.vercel.app/assets/img/news/post-1.jpg"
   blogsliderheader="The Magic of Sunrise at Poon Hill"
   blogslidertext="There’s nothing quite like watching the first rays of sunlight hit the Himalayan peaks. Standing at Poon Hill, surrounded by crisp mountain air and golden hues, you’ll feel a sense of peace that words can’t capture. It’s a reminder of how beautiful the world truly is."
 />
  <Blogwithslidercard
    blogsliderimages="https://turmet-react.vercel.app/assets/img/news/post-2.jpg"
   blogsliderheader="Why Travel is the Best Investment"
   blogslidertext="Unlike material things, travel gives memories that last a lifetime. Every journey brings new cultures, new friendships, and fresh perspectives. The money spent on experiences will always return in the form of joy, growth, and unforgettable stories."
 />
   <Blogwithslidercard
    blogsliderimages="https://turmet-react.vercel.app/assets/img/news/post-3.jpg"
   blogsliderheader="Tips for Stress-Free Travel"
   blogslidertext="Pack light, plan ahead, and always leave room for spontaneity. Some of the best travel moments happen when you go off the beaten path. Remember: it’s not just about the destination, but also the journey."
 />

 </div>
   <Blogslideranddetail2rowcard />
   </section>
   <FooterSection></FooterSection>
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

export default BlogWithSliderPages;