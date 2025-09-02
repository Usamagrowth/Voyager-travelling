import { FaArrowRight, FaRegComment } from 'react-icons/fa6'
import { MdDateRange } from 'react-icons/md'

const NewArticleCard = ({articleBg, articleTitle}) => {
  return (
    <div className='bg-white shadow-xl w-full h-full rounded-xl p-5'>
            <div className='w-full h-[250px] bg-cover rounded-xl bg-center bg-[url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg)]' style={{backgroundImage: `url(${articleBg})`}}>    
            </div>
    
            <div className='mt-4 space-y-3'>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-1 items-center'>
                        <FaRegComment className='text-[#1CA8CB]'/>
                        <span className='text-[1rem] text-[#535353] font-normal'>0 Comment</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <MdDateRange className='text-[#1CA8CB]'/>
                        <span className='text-[1rem] text-[#535353] font-normal'>September 6, 2024</span>
                    </div>
                </div>
                <h3 className="text-[1.2rem] font-[700]"><a href="" className='hover:text-[#1CA8CB]'>{articleTitle}</a></h3>

                <div className='flex justify-between items-start lg:items-center'>
                    <span className='flex gap-2 items-center hover:text-[#1CA8CB] text-[#535353] font-semibold text-[1rem]'>
                        <a href="" className=''>Read More</a>
                        <FaArrowRight />
                    </span>
                </div>
            </div>
    </div>
  )
}

export default NewArticleCard