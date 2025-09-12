import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'

const AddReviews = () => {
  return (
    <section className='bg-gray-200 rounded-lg mt-5 px-6 py-8'>
     
      <h3 className='text-xl sm:text-2xl font-semibold mb-6'>Add Your Reviews</h3>

     <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
    {["Services", "Hotels", "Places", "Safety", "Foods", "Guides"].map((item, idx) => (
      <li key={idx} className="flex items-center gap-1">
        <span className="text-sm  sm:text-base">{item}</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} 
            className="text-orange-500
             sm:text-basetext-orange-500
              text-xs sm:text-sm
               md:text-lg lg:text-xl" />
          ))}
        </div>
      </li>
    ))}
  </ul>
    <form className='space-y-5'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'> 
        <input type='text' placeholder='Your Name' className='w-full h-12 rounded-lg px-4'/>
        <input type='phone' placeholder='Your Phone' className='w-full h-12 rounded-lg px-4'/>
    </div>
    <input type='email' placeholder='Your Email' className='w-full h-12 rounded-lg px-4 '/>

    <textarea className='w-full h-32 font-thin rounded-lg px-4 py-3' >Your Comments..</textarea>
    <div className="flex justify-start">
  <button className="flex items-center justify-center gap-2 border bg-[#1CA8CB] rounded-[30px] font-semibold text-white h-12 w-48">
    Submit Reviews
    <BiRightArrowAlt className="text-xl text-white" />
  </button>
</div>

   
    </form>
    
    </section>
  )
}

export default AddReviews
