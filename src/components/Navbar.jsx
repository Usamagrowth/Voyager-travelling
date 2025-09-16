import NavButton from "./utilities/NavButton"
import DestinationNav from "./Navbar/DestinationNav";
import TourNav from "./Navbar/TourNav";
import PagesNav from "./Navbar/PagesNav";
import BlogNav from "./Navbar/BlogNav";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import MobileMenu from "./Navbar/MobileMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import BookingButton from "./utilities/BookingButton";
import brandLogo from "../assets/imgs/logo.svg"

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

    
  return (
    <div>
    <nav className="bg-transparent">
      <div className="flex items-center font-medium justify-around">
        <Link to="/">
        <div className="z-[2000] p-5 lg:w-auto w-full flex justify-between">
          <img src={brandLogo} alt="" className="cursor-pointer w-[150px]" />
        </div>
        </Link>

        <ul className="lg:flex hidden items-center gap-8 text-white cursor-pointer">
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          <Link to="/aboutPage">
            <li>
              About Us
            </li>
          </Link>
          <DestinationNav/>
          <TourNav/>
          <PagesNav/>
          <BlogNav/>
          <Link to="/contactPage">
            <li>
              Contact Us
            </li>
          </Link>
          
        </ul>

        <div className="lg:block hidden">
          <Link to="/bookingPage">
          <BookingButton buttonText="Book Now"/>
          </Link>
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