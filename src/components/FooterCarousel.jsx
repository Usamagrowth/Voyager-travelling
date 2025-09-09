import { FaInstagram } from 'react-icons/fa6'

const FooterCarousel = ({footerCaurouselBg}) => {
  return (
    <div
        className="relative h-[259px] lg:h-[150px] w-full overflow-hidden rounded-3xl bg-cover bg-center 
        bg-[url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')] 
        group" style={{backgroundImage: `url(${footerCaurouselBg})`}}>
        {/* Overlay with fade-down & fade-up effect */}
        <div
            className="absolute inset-0 bg-[#1CA8CB]/20 opacity-0 translate-y-[-100%] 
            group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-700 ease-in-out"
        ></div>

        {/* Instagram Icon */}
        <div className="absolute inset-0 flex justify-center items-center">
            <div
            className="bg-[#1CA8CB] h-20 w-20 rounded-full flex justify-center items-center text-white 
            opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 
            transition-all duration-500 ease-in-out"
            >
            <FaInstagram className="text-[2rem]" />
            </div>
        </div>
    </div>
  )
}

export default FooterCarousel