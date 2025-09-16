import { MdOutlineVerified } from 'react-icons/md'
import Accommodation from '../Components/Accommodation'
import Tourplan from "../Components/Tourplan"
import Tourmapping from '../Components/Tourmapping'
import Reviews from '../Components/Reviews'
import ClientReview from '../Components/ClientReview'
import AddReviews from '../Components/AddReviews'
import olawale from '../assets/Bookingimage/olawale.png'
import GlobalHeader from '../Components/GlobalHeader'
import FooterSection from '../Components/FooterSection'
import { FaArrowUp } from 'react-icons/fa6'
import { useEffect, useState } from 'react'


const TourDetailsPage = () => {
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
  <section className="m-0 p-0">
    <GlobalHeader headerTitle="Tour Details" headerLink="Tour Details"/>
    <div className='lg:px-8 px-3 mb-20 mt-20'>
  <div className="lg:flex lg:gap-5 grid justify-between">
    {/* Left column: image + any content that follows */}
    <div className="w-[100%]">
      {/* Image block */}
      <div 
        className="sm:h-[350px] md:h-[400px] lg:h-[450px] h-[450px] relative rounded-xl bg-cover bg-center mt-[1rem] bg-[url(https://turmet-react.vercel.app/assets/img/destails/tour-details.jpg)]"
      >
        <div className="absolute bottom-4 left-4">
          <div className='flex items-center justify-between gap-3'>
            <div className='w-[100px] md:w-[200px] lg:w-[200px] h-[70px] md:h-[100px] lg:h-[100px] bg-cover rounded-lg bg-[url(https://turmet-react.vercel.app/assets/img/destails/tour-details-2.jpg)]'>
            </div>
            <div className='w-[100px] md:w-[200px] lg:w-[200px] h-[70px] md:h-[100px] lg:h-[100px] bg-cover rounded-lg bg-[url(https://turmet-react.vercel.app/assets/img/destails/tour-details-3.jpg)]'>
            </div>
            <div className='w-[100px] md:w-[200px] lg:w-[200px] h-[70px] md:h-[100px] lg:h-[100px] bg-cover rounded-lg bg-[url(https://turmet-react.vercel.app/assets/img/destails/tour-details-4.jpg)]'>
            </div>
          </div>
        </div>
      </div>

      {/* Anything written here will be under the image only */}
      <div className="mt-6">
        <h2 className="text-3xl sm:text-2xl font-bold">Ghorepani Poon Hill Trek</h2>
        <p className='mt-2 leading-6'>Discover the breathtaking beauty of the Annapurna region with the Ghorepani Poon Hill Trek, one of Nepal’s most popular short treks. This 4–5 day journey takes you through charming mountain villages, lush rhododendron forests, and terraced farmlands, leading to the famous Poon Hill viewpoint (3,210m). </p>
    
          <p className='mt-4 leading-6'> From the summit, you’ll witness a spectacular sunrise over the Annapurna and Dhaulagiri ranges, painting the snow-capped peaks in shades of gold and pink. Perfect for beginners and experienced trekkers alike, this trek offers a mix of natural beauty, cultural encounters, and panoramic Himalayan views—all within a short timeframe.</p>

            <div className='mt-4'>
  <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>
    Experience the Difference
  </h1>

  <div className='flex flex-col md:flex-row gap-6 md:gap-10 mt-4'>
    {/* First Column */}
    <ul className='space-y-3 text-sm sm:text-base md:text-lg'>
      <li className='flex gap items-center'>
        <MdOutlineVerified className='text-[#1CA8CB] text-sm sm:text-base md:text-lg' />
        Trusted, Local Travel Experts
      </li>
      <li className='flex gap-2 items-center'>
        <MdOutlineVerified className='text-[#1CA8CB] text-sm sm:text-base md:text-lg' />
        Flexible, Hassle-Free Bookings
      </li>
      <li className='flex gap-2 items-center'>
        <MdOutlineVerified className='text-[#1CA8CB] text-sm sm:text-base md:text-lg' />
        Real-Time Itinerary Updates
      </li>
    </ul>

    {/* Second Column */}
    <ul className='space-y-3 text-sm sm:text-base md:text-lg'>
      <li className='flex gap-2 items-center'>
        <MdOutlineVerified className='text-[#1CA8CB] text-sm sm:text-base md:text-lg' />
        Flexible Cancellation Policies
      </li>
      <li className='flex gap-2 items-center'>
        <MdOutlineVerified className='text-[#1CA8CB] text-sm sm:text-base md:text-lg' />
        Customized Travel Experiences
      </li>
      <li className='flex gap-2 items-center'>
        <MdOutlineVerified className='text-[#1CA8CB] text-sm sm:text-base md:text-lg' />
        Exclusive Travel Deals
      </li>
    </ul>
  </div>
</div>
         

        <Accommodation/>
        <Tourplan/>
        <Tourmapping/>
        <Reviews/>
        <ClientReview></ClientReview>
        <AddReviews/>
      </div>
    </div>

   <div className="">
  {/* Left column */}
  <div className="w-[100%]">
    {/* ... left content here ... */}
  </div>

  {/* Right column (form + image) */}
  <div className="w-full max-w-md mt-4 mx-auto flex flex-col items-center">
    
    {/* Form box */}
    <div className="border w-full rounded-lg p-6 bg-white">
      <h2 className="text-xl sm:text-2xl font-bold font-Manrope mb-6">
        Contact for booking
      </h2> 
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name"
          className="w-full border bg-blue-100 rounded-lg p-3 focus:outline-none"
        />
        <input 
          type="email" 
          placeholder="Your Email"
          className="w-full border bg-blue-100 rounded-lg p-3 focus:outline-none"
        />
        <textarea 
          placeholder="Type Comment Here"
          className="w-full h-40 border bg-blue-100 rounded-lg p-3 resize-none focus:outline-none"
        />
      </div>
      <div className="flex justify-center"> 
        <button className="w-full sm:w-[300px] h-[55px] text-white rounded-lg mt-6 bg-[#1CA8CB]">
          Send Now
        </button>
      </div>
    </div>

    {/* ✅ Image sits BELOW the form, not inside */}
    <div className="mt-6 w-full relative">
     
      <img 
        src={olawale} 
        alt="Booking illustration" 
        className="rounded-lg  h-70 w-full blur-[1px] object-cover"
        
      />
      <div className='absolute text-white text-2xl font-semibold top-[10rem] left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center w-[90%]'>
        <h1>Book Now And Enjoy <br/> Amazing Savings </h1>
      
      </div>
       
    </div>
  </div>
  </div>

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

export default TourDetailsPage
