import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
const Tourplan = () => {
  return (
    <section className='mt-8'>
      <div className='space-y-4 sm:space-y-6'>

        <h1 className='text-xl sm:text-1xl md:text-2xl font-semibold'>Tour Plan</h1>
        <div className='bg-gray-200 min-h-[60px] px-3 sm:px-4 py-3 text-black rounded-lg flex items-center justify-between'>
            <h3 className='font-semibold text-sm sm:text-base md:text-lg'>How Do I Book A Tour With Your Agency</h3>
            <MdKeyboardDoubleArrowRight className='text-xl sm:text-2xl flex-shrink-0' />
        </div>
       <div className='bg-gray-200 min-h-[60px] px-3 sm:px-4 py-3 text-black rounded-lg flex items-center justify-between'>
        <h3 className='font-semibold text-sm sm:text-base md:text-lg'>What Payment Method Method Do You Accept</h3>
        <MdKeyboardDoubleArrowRight className='text-xl sm:text-2xl flex-shrink-0' />
        </div>
        <div className='bg-gray-200 min-h-[60px] px-3 sm:px-4 py-3 text-black rounded-lg flex items-center justify-between'>
            <h3 className='font-semibold text-sm sm:text-base md:text-lg'>Can I Customize My Travel Itinerary</h3>
            <MdKeyboardDoubleArrowRight className='text-xl sm:text-2xl flex-shrink-0' />
        </div>
        <div className='bg-gray-200 min-h-[60px] px-3 sm:px-4 py-3 text-black rounded-lg flex items-center justify-between'>
            <h3 className='font-semibold text-sm sm:text-base md:text-lg'>What is Your Cancellation Policy</h3>
            <MdKeyboardDoubleArrowRight className='text-xl sm:text-2xl flex-shrink-0' />
        </div>
      </div>
    </section>
  )
}

export default Tourplan
