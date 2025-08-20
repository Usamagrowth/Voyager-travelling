import { RiAdminLine } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";
import { MdOutlineLocalOffer } from "react-icons/md";
const Blogcards = ({blogimages, blogdetails }) => {
  return (
    <div className="p-4">
      <div className="flex w-[350px] h-[300px]">
        <img className="rounded-xl relative w-[100%] h-[100%]" src={blogimages} alt="blog images" />
      </div>
     <span className="flex absolute items-center w-[350px] justify-center">
      <div className="flex flex-col border border-blue-500 absolute bg-white p-3 gap-3 rounded-xl">
      <div className="flex flex-row gap-7">
       <p className="flex bg-blue-500 rounded-xl w-[65px] h-[65px] items-center justify-center font-semibold text-2xl text-white">26<br/>Nov</p>
        <span className="flex flex-row gap-1 items-center"><RiAdminLine /> <p>Admin</p></span>
        <span className="flex flex-row gap-1 items-center"><MdOutlineLocalOffer /> <p>Travel</p></span>
      </div>
      <h3 className="w-[300px] font-semibold text-2xl cursor-pointer hover:text-blue-500">{blogdetails}</h3>
      <button className="flex flex-row items-center gap-3 font-semibold 2xl cursor-pointer hover:text-blue-500">Read More <GrLinkNext /></button>
      </div>
      </span>
    </div>
  )
}

export default Blogcards;