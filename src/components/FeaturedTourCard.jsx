import { FaArrowRight, FaLocationDot } from 'react-icons/fa6'

const FeaturedTourCard = ({locationBg, location, featureTourTitle, featuredTourPrice}) => {
  return (
    <div className='pb-20'>
        <div className='h-[250px] w-full bg-cover rounded-2xl bg-center bg-[url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg)]' style={{backgroundImage: `url(${locationBg})`}}>    
            <div className=' rounded-xl flex gap-4'>
                <div className='bg-white flex items-center gap-2 px-3 py-1 rounded-3xl mt-10 ml-10'>
                <FaLocationDot className='text-[#1CA8CB]' />
                <span>{location}</span>
                </div>
            </div>     
        </div>

        <div className='mt-6 space-y-4'>
            <h3 className="text-[1.2rem] font-[700]">{featureTourTitle}</h3>
            <div className='flex justify-between items-start lg:items-center'>
                <p className="text-black font-bold text-[1.12rem]">{featuredTourPrice} <span className='font-normal text-[#687179] text-[.8rem]'>/Per Day</span></p>
                <div className='border border-solid border-black-5 p-3 rounded-md'>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedTourCard