import { FaAngleDown } from "react-icons/fa6"
import NavButton from "./utilities/NavButton"
import DestinationDropdown from "./utilities/DestinationDropdown"


const Navbar = () => {
  return (
    <nav>
        <div className=" flex justify-between items-center">
            <img src="https://turmet-react.vercel.app/assets/img/logo/white-logo.svg" alt="" />
            <div className="nav-menu flex items-center">
                <ul className="flex items-center gap-8">
                    <li className="text-white text-[1rem] font-semibold cursor-pointer">
                        <a href="">Home</a>
                    </li>
                    <li className="text-white text-[1rem] font-semibold cursor-pointer">
                        <a href="">About Us</a>
                    </li>
                    <DestinationDropdown/>
                    <li className="flex text-white items-center gap-2 text-[1rem] font-semibold cursor-pointer">
                        <a href="">Tour</a>
                        <FaAngleDown />
                    </li>
                    <li className="flex text-white items-center gap-2 text-[1rem] font-semibold cursor-pointer">
                        <a href="">Pages</a>
                        <FaAngleDown />
                    </li>
                    <li className="flex text-white items-center gap-2 text-[1rem] font-semibold cursor-pointer">
                        <a href="">Blog</a>
                        <FaAngleDown />
                    </li>
                    <li className="text-white text-[1rem] font-semibold cursor-pointer">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
            <NavButton buttonText="Request A Quote"/>
        </div>
    </nav>
  )
}

export default Navbar