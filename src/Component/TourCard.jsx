import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { CiLocationOn } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { CiClock2 } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import {FaArrowRight } from 'react-icons/fa'
import {FaArrowLeft } from 'react-icons/fa'




export default function TourCard({ location,cardpics,people,days,resorts,button,duration, price, rating }) {
    return(
        
       <section>
  <article className="border rounded-lg shadow-md bg-white relative overflow-hidden">
    
    {/* Heart Icon */}
    <div className="bg-black text-white rounded-lg absolute flex justify-center p-2 right-3 top-3">
      <CiHeart className="text-xl sm:text-2xl" />
    </div>

    {/* Image */}
    <img
      className="w-full h-48 sm:h-60 md:  object-cover rounded-t-lg"
      src={cardpics}
      alt="cards"
    />

    {/* Location + Rating */}
    <div className="flex justify-between items-center px-4 py-3">
      <div className="flex gap-1 items-center text-gray-700 text-xs sm:text-sm">
        <CiLocationOn />
        <h3>{location}</h3>
      </div>
      <div className="flex bg-[#1CA8CB] text-white gap-2 px-3 py-1 rounded-full text-xs sm:text-sm">
        <FaStar className="text-[#58d2f0d4]" />
        <h3>{rating}</h3>
      </div>
    </div>

    {/* Resort Name */}
    <h3 className="text-center text-base sm:text-sm font-semibold text-black px-2">
      {resorts}
    </h3>

    {/* Duration + People */}
    <div className="flex justify-between px-4 py-3 text-xs sm:text-sm">
      <div className="flex gap-2 items-center text-gray-700">
        <CiClock2 className="text-[#1CA8CB]" />
        <h3>{duration}</h3>
      </div>
      <div className="flex gap-2 items-center text-gray-700">
        <CiUser className="text-[#1CA8CB]" />
        <h3>{people}</h3>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-dashed border-[#33bee1b3]"></div>

    {/* Price + Button */}
    <div className="flex justify-between items-center px-4 py-3">
      <div className="text-xs flex gap-2 items-center sm:text-base text-gray-800">
        <p>{price}</p>
        <h3 className="text-sm sm:text-xs">{days}</h3>
      </div>
      <div className="flex items-center gap-2">
        <button className="relative bg-[#1ca8cb70] text-[#1CA8CB] px-2 py-2 rounded-full text-xs sm:text-sm w-32">
          <FaArrowRight  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#29c9f1eb] text-xs sm:text-base" />
          {button}
          
        </button>
        
      </div>
    </div>

  </article>
</section>


  )
}


