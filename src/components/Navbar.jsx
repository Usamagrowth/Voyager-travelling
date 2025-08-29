import NavButton from "./utilities/NavButton"
import DestinationNav from "./Navbar/DestinationNav";
import TourNav from "./Navbar/TourNav";
import PagesNav from "./Navbar/PagesNav";
import BlogNav from "./Navbar/BlogNav";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import MobileMenu from "./Navbar/MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

    
  return (
    <div>
    <nav className="bg-transparent">
      <div className="flex items-center font-medium justify-around">
        <div className="z-[2000] p-5 lg:w-auto w-full flex justify-between">
          <img src="https://turmet-react.vercel.app/assets/img/logo/white-logo.svg" alt="" className="md:cursor-pointer h-9" />
        </div>

        <ul className="lg:flex hidden items-center gap-8 text-white cursor-pointer">
          <li>
            Home
          </li>
          <li>
            About Us
          </li>
          <DestinationNav/>
          <TourNav/>
          <PagesNav/>
          <BlogNav/>
          <li>
            Contact Us
          </li>
        </ul>

        <div className="lg:block hidden">
          <NavButton buttonText="Request A Quote"/>
        </div>

        <div className="bg-white lg:hidden p-3 rounded-xl text-black flex text-[1.5rem] z-[2000]" onClick={toggleMobileMenu}>
          <>
          {showMobileMenu ? <IoCloseSharp /> : <TiThMenu />}
          </>
        </div>
      </div>
    </nav>


    {showMobileMenu && <MobileMenu/>}
    </div>
  )
}

export default Navbar