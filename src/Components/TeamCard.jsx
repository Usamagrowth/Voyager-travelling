import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const TeamCard = ({teamCardBg, teamName, teamTitle}) => {
  return (
    <div className='rounded-xl h-full group relative'>
        <div className='w-full h-[400px] bg-cover rounded-xl bg-center relative' style={{backgroundImage: `url(${teamCardBg})`}}>    
        </div>

        <div className='py-14'>
            <div className='absolute top-[300px] w-full z-50'>
                <div className="relative group w-[90%] z-50">
                    <div className="item-container relative overflow-hidden space-y-3 bg-[#fafafa] shadow-xl py-7 rounded-tr-xl rounded-br-xl rounded-bl-xl">

                        {/* sliding background effect under content */}
                        <span className="absolute inset-0 bg-[#1CA8CB] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

                        {/* content */}
                        <div className="relative flex items-center justify-center z-10">
                        <div className="text-center">
                            <h3 className="text-[1.4rem] text-[#0A1F24] transition-colors duration-500 delay-200 group-hover:text-white font-[700]">
                            <a href="">{teamName}</a>
                            </h3>
                            <p className="text-[1rem] text-[#687179] transition-colors duration-500 delay-200 group-hover:text-white">
                            {teamTitle}
                            </p>

                            <div className="flex justify-center gap-4 items-center mt-6">
                            <span className="flex items-center justify-center rounded-full bg-white h-10 w-10 text-[#1CA8CB] text-[1rem]">
                                <FaFacebook />
                            </span>
                            <span className="flex items-center justify-center rounded-full bg-white h-10 w-10 text-[#1CA8CB] text-[1rem]">
                                <FaXTwitter />
                            </span>
                            <span className="flex items-center justify-center rounded-full bg-white h-10 w-10 text-[#1CA8CB] text-[1rem]">
                                <FaLinkedin />
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard