import { FaArrowRightLong, FaPlay } from 'react-icons/fa6'
import ButtonSecondary from './ButtonSecondary'
import ButtonPrimary from './ButtonPrimary'

const OurStorySection = () => {
  return (
    <div className='lg:px-8 px-3 mt-20'>
        <section data-aos="fade-right" data-aos-duration="2000" className="w-full text-center pb-20">
            <div className="items-start lg:items-center gap-6 "> 
                {/* Left Content */}
                <div className="">
                    <span className="text-[#1CA8CB] text-base font-medium sub-title mb-2">
                        Watch Our Story
                    </span>
                    <div className='flex justify-center'>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem] w-[65%]">
                            Unforgettable Travel Experiences Get Your Guide
                        </h2>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="flex flex-col lg:flex-row gap-5 mt-5">
                        <ButtonSecondary buttonText="Contact Us"/>

                        <ButtonPrimary buttonText="Book Now"/>
                    </div>
                </div>
            </div>
        </section>

        <div className='flex justify-center'>
            <div className='h-[500px] w-[90%] overflow-hidden bg-fixed bg-cover rounded-3xl bg-center bg-[url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg)] bg-black/40 bg-blend-overlay flex justify-center items-center'>    
                <div className='bg-[#1CA8CB] h-24 w-24 rounded-full flex justify-center items-center text-white'>
                    <FaPlay />
                </div>     
            </div>
        </div>
    </div>
  )
}

export default OurStorySection