import React from 'react'
import { FaStar } from 'react-icons/fa'

const Reviews = () => {
  return (
    <section className='mt-10'>
      <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Customer Review</h1>

      <div className='bg-black flex flex-col md:flex-row items-center md:items-start justify-between gap-8 rounded-lg mt-3 p-6'>
        <div className='bg-gray-700 w-full sm:w-[250px] h-[200px] rounded-lg flex flex-col items-center justify-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>4.9</h1>
          <div className='flex items-center justify-center mt-2'>
            <FaStar className='text-orange-500' />
            <FaStar className='text-orange-500' />
            <FaStar className='text-orange-500'/>
            <FaStar className='text-orange-500'/>
            <FaStar className='text-orange-500'/>
          </div>
          <p className='text-white mt-3 text-sm sm:text-base' >856+ Reviews</p>
        </div>

  
  {/* Row 1 */}
  <div className="flex flex-col gap-4 w-full">
      {[
        { label: "Services", percent: "60%" },
        { label: "Safety", percent: "70%" },
        { label: "Guides", percent: "80%" },
        { label: "Foods", percent: "75%" },
        { label: "Hotels", percent: "90%" },
        { label: "Places", percent: "50%" },
      ].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 sm:gap-6">
          {/* Stars */}
          <div className="flex gap-1 sm:gap-2 flex-shrink-0">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </div>

          {/* Progress bar */}
          <div className="flex-1 h-1 bg-gray-500">
            <div
              className="h-1 bg-orange-500"
              style={{ width: item.percent }}
            ></div>
          </div>

          {/* Label */}
          <span className="text-white text-xs sm:text-sm md:text-base flex-shrink-0">
            {item.label}
          </span>
        </div>
      ))}
    </div>
</div> 
         
    </section>
  )
}

export default Reviews
