import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useState } from 'react'
import { destinationLinks } from '../DropdownLinks';

const DestinationMobileNav = () => {
    const [showMobileDropdown, setShowDropdown] = useState(false);

    const displayMobileMenu = () => {
    setShowDropdown(!showMobileDropdown);
  }


  return (
    <div className='relative' onClick={displayMobileMenu}>
        <div className="flex justify-between items-center">
            <li>Destination</li>
            <span className='flex items-center'>{showMobileDropdown ? <FaMinus /> : <FaPlus />}</span>
        </div>

        {showMobileDropdown && <article className="p-4 space-y-4">
            {destinationLinks.map((link, value) => (
            <div key={value} className="w-full hover:text-[#1CA8CB]">
                {link.name}
            </div>))}
        </article>}
    </div>
  );
};

export default DestinationMobileNav;
