import React from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

const DestinationDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
   
  const displayDropdown = () => {
    setShowDropdown(true);
  };

  return (
    <div className='relative cursor-pointer'>
        <li className="flex text-white items-center gap-2 text-[1rem] font-semibold cursor-pointer" onClick={displayDropdown}>
            <a href="">Destination</a>
            <FaAngleDown />
             <FaAngleUp />
        </li>

        {showDropdown && <ul className='absolute top-10 left-0 w-[250px] bg-white border-t-2 border-[#1CA8CB] py-5 rounded-sm space-y-4 cursor-pointer text-[#0a1f24] font-medium divide-y-[.8px]'>
            <li className='cursor-pointer px-5'><a href="#">Destination</a></li>
            <li className='cursor-pointer px-5 pt-4'><a href="">Destination Details</a></li>
        </ul>}
    </div>
  )
}

export default DestinationDropdown