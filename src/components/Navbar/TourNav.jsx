import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { tourLinks } from "./DropdownLinks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TourNav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    
        useEffect(() => {
            AOS.init();
          }, []);

    return (
        <div className='relative'
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}>
            <div className="flex relative items-center gap-1">
                <li>Tour</li>
                {showDropdown ? <FaAngleUp/> : <FaAngleDown/>}
            </div>

            {showDropdown && <article className="border-t-2 border-[#1CA8CB] rounded-bl-sm rounded-br-sm absolute z-50 top-6 left-0 w-[200px] h-fit bg-white shadow-lg" data-aos="fade-up" data-aos-duration="700">
            <div className="w-full">
                <ul className="text-[1rem] text-black p-4">
                    <Link to="/tourPage">
                        <li className="hover:text-[#1CA8CB] mb-4">Tour</li>
                    </Link>
                    <Link to="/tourDetails">
                        <li className="hover:text-[#1CA8CB]">Tour Details</li>
                    </Link>
                </ul>
            </div>
            </article>}
        </div>
    )
}

export default TourNav