import React, { useEffect, useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { LuMailPlus } from 'react-icons/lu'
import { MdAddCall } from 'react-icons/md'
import ContactFormAndMap from '../Components/ContactFormAndMap'
import GlobalHeader from '../Components/GlobalHeader'
import FooterSection from '../Components/FooterSection'
import { FaArrowUp } from 'react-icons/fa6'

const ContactPage = () => {
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
      <GlobalHeader headerTitle="Contact US" headerLink="Contact Us"/>
  <section className="bg-white mt-20 px-3">
  <div className='flex justify-center items-center'>
  <div className="bg-white flex flex-col justify-center items-center md:flex-row lg:flex-row gap-5 w-full max-w-6xl">

    <div className="bg-[#f7f7f7] flex flex-col justify-center items-center w-full max-w-sm h-[300px] rounded-lg shadow-md text-center hover:bg-[#1ca8cb] p-5">
      <div className="border border-gray-500 rounded-lg p-6 sm:p-8 md:p-12">
        <IoLocationSharp className="text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Our Address</h1>
        <p className="text-lg">
          16A Soun Ajagungbade Ave, New Bodija Estate Ibadan
        </p>
      </div>
    </div>

    <div className="bg-[#1ca8cb] justify-center flex flex-col text-white items-center w-full max-w-sm h-[300px] rounded-lg shadow-md text-center p-5">
      <div className="border border-white rounded-lg p-6 md:p-12">
        <LuMailPlus className="text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">info@maycohort.com</h1>
        <p className="text-lg">
          Email us anytime for inquiries on your travel Plans.
        </p>
      </div>
    </div>

    <div className="bg-[#f7f7f7] flex flex-col justify-center items-center w-full max-w-sm h-[300px] rounded-lg shadow-md text-center hover:bg-[#1ca8cb] p-5">
      <div className="border border-gray-500 rounded-lg p-6 sm:p-8 md:p-12">
        <MdAddCall className="text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Hot:081-6379-1552</h1>
        <p className="text-lg">
          Call us any kind suppor,we will wait for it.
        </p>
      </div>
    </div>

  </div>
  </div>

  <ContactFormAndMap></ContactFormAndMap>
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

export default ContactPage