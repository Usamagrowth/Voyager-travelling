import { FaStar } from 'react-icons/fa6'
import { TfiQuoteLeft } from 'react-icons/tfi'

const TestimonyCard = ({ratingValue, testimonialText, testimonialName, testimonialPosition, reviewNo}) => {
  return (
    <div className='bg-white px-12 py-14 rounded-2xl lg:w-[90%] w-[100%]'>
        <div className='flex lg:flex-row justify-between items-center lg:items-center gap-6'>
            <TfiQuoteLeft className='text-[#1CA8CB] text-[4rem]'/>
            <div className='flex gap-2'>
                <span className='flex'>
                    <FaStar className='text-[#F16522] text-[1.5rem]'/>
                    <FaStar className='text-[#F16522] text-[1.5rem]'/>
                    <FaStar className='text-[#F16522] text-[1.5rem]'/>
                    <FaStar className='text-[#F16522] text-[1.5rem]'/>
                    <FaStar className='text-[#F16522] text-[1.5rem]'/>
                </span>
                <span>{ratingValue}</span>
            </div>
        </div>
        <p className='text-base text-[#687179] mt-8'>{testimonialText}</p>
        <div className='flex lg:flex-row justify-between items-center lg:items-center gap-6 mt-8'>
            <div className='grid space-y-2'>
                <span className='text-[1rem] text-[#1d3638] font-bold'>
                    {testimonialName}
                </span>
                <span className='text-[1rem] text-[#687179] font-normal'>
                    {testimonialPosition}
                </span>
            </div>
            <div className='flex gap-2'>
                <span className='text-[1.1rem] text-[#687179] font-medium'>
                    {reviewNo}
                </span>
                <span className='text-[1.1rem] text-[#687179] font-medium'>Reviews</span>
            </div>
        </div>
    </div>
  )
}

export default TestimonyCard