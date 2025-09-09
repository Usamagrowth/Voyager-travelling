import image4 from '../assets/TourDetailsImages/image4.png' 
import image3 from '../assets/TourDetailsImages/image3.png'
import image from '../assets/TourDetailsImages/image.png'
import image2 from '../assets/TourDetailsImages/image2.png'
import { MdOutlineVerified } from 'react-icons/md'
import Accommodation from '../Component/Accommodation'
import Tourplan from '../Component/Tourplan'
import Tourmapping from '../Component/Tourmapping'
import Reviews from '../Component/Reviews'
import ClientReview from '../Component/ClientReview'
import AddReviews from '../Component/AddReviews'
import olawale from '../assets/Bookingimage/olawale.png'
import GlobalHeader from '../Components/GlobalHeader'


const TourDetailsPage = () => {
  return (
  <section className="m-0 p-0">
    <GlobalHeader headerTitle="Tour Details" headerLink="Tour Details"/>
  <div className="flex gap-1 items-start ml-10">
    {/* Left column: image + any content that follows */}
    <div className="w-[60%]">
      {/* Image block */}
      <div 
        className="bg-green-400 sm:h-[350px] md:h-[400px] lg:h-[450px] h-[450px] relative rounded-xl bg-cover bg-center mt-[1rem]"
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className="
      flex  absolute flex-row
      bottom-2 sm:bottom-4 
      left-2 sm:left-4 md:left-8 
      justify-center 
      gap-2"> 
         <img className="w-12 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-lg" src={image3} />
    <img className="w-12 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-lg" src={image} />
    <img className="w-12 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-lg" src={image2} />

        </div>
      </div>

      {/* Anything written here will be under the image only */}
      <div className="mt-6">
        <h2 className="text-3xl sm:text-2xl font-bold">Ghorepani Poon Hill Trek</h2>
        <p className='text-base sm:text-sm mt-2 leading-relaxed'>Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et dolore <br/>
         of magna aliqua. ut enim ad minim veniam made of owl the quis nostrud exercitation <br/>
          ullamco laboris nisi ut aliquip ex ea dolor commodo consequat duis aute irure and <br/>
           dolor in reprehenderit.Nullam semper quam mauris nec mollis felis aliquam eu ut non <br/>
            gravida mi quam mauris nec mollis felis aliquam phasellus.</p>
    
          <p className='mt-4'> Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua.<br/>
           ut enim ad minim veniam made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br/>
            ea dolor commodo consequat duis aute irure and dolor in reprehenderit.Nullam semper quam mauris.</p>

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

   <div className="flex gap-5 items-start ml-10">
  {/* Left column */}
  <div className="w-[60%]">
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
  
</section>

   
  )
}

export default TourDetailsPage
