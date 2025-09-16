import { FaArrowRight, FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const FeaturedTourCard = ({locationBg, location, featureTourTitle, featuredTourPrice}) => {
  return (
    <div className='pb-20'>
        <div className='h-[250px] w-full bg-cover rounded-2xl bg-center' style={{backgroundImage: `url(${locationBg})`}}>    
            <div className=' rounded-xl flex gap-4'>
                <div className='bg-white flex items-center gap-2 px-3 py-1 rounded-3xl mt-10 ml-10'>
                <FaLocationDot className='text-[#1CA8CB]' />
                <span>{location}</span>
                </div>
            </div>     
        </div>

        <div className='mt-6 space-y-3'>
            <Link to="/tourPage">
            <h3 className="text-[1.2rem] font-[700]"><a href="" className='hover:text-[#1CA8CB]'>{featureTourTitle}</a></h3>
            </Link>
            <div className='flex justify-between items-start lg:items-center'>
                <p className="text-black font-bold text-[1.12rem]"><a href="" className='hover:text-[#1CA8CB]'>{featuredTourPrice}</a><span className='font-normal text-[#687179] text-[.8rem]'>/Per Day</span></p>
                <Link to="/bookingPage">
                <div className='border border-solid border-black-5 p-3 rounded-md'>
                    <FaArrowRight />
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FeaturedTourCard