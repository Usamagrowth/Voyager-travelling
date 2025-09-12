import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

const Button = () => {
  return (
    <div>
      <section  className='flex justify-center sm:justify-center lg:justify-center mb-4'> 
 <div className='flex gap-2 sm:gap-3 items-center text-sm sm:text-base '>
   <button className='w-10 h-9 sm:w-[50px] sm:h-[40px] text-[#1CA8CB] border flex items-center rounded-lg justify-center'>
  <FaArrowLeft />
</button>

    <button className='w-10 h-9 sm:w-[50px] sm:h-[40px] border text-[#1CA8CB] rounded-lg'>01</button>
    <button className='w-10 h-9 sm:w-[50px] sm:h-[40px] border text-[#1CA8CB] rounded-lg'>02</button>
    <button className='w-10 h-9 sm:w-[50px] sm:h-[40px] border text-[#1CA8CB] rounded-lg'>03</button>
   <button className='w-10 h-9 sm:w-[50px] sm:h-[40px] border text-[#1CA8CB] rounded-lg flex items-center justify-center'>
  <FaArrowRight />
</button>

</div>
</section>
    </div>
  )
}

export default Button
