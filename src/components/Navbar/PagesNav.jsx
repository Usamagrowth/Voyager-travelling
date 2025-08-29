import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { pagesLinks } from "./DropdownLinks";
import { useEffect, useState } from "react";

const PagesNav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    
        useEffect(() => {
            AOS.init();
          }, []);

    return (
        <div className='relative'
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}>
            <div className="flex relative items-center gap-1">
                <li>Pages</li>
                {showDropdown ? <FaAngleUp/> : <FaAngleDown/>}
            </div>

            {showDropdown && (<article className="border-t-2 border-[#1CA8CB] rounded-bl-sm rounded-br-sm absolute z-50 top-6 left-0 w-[200px] h-fit bg-white shadow-lg text-[1rem] text-black p-4 space-y-4" data-aos="fade-up" data-aos-duration="700">
                {pagesLinks.map((link, value) => (
                <div key={value} className="w-full hover:text-[#1CA8CB]">
                    {link.name}
                </div>))}
            </article>)}
        </div>
    )
}

export default PagesNav