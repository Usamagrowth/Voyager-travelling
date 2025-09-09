import { RiAdminLine } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";
import { MdOutlineLocalOffer } from "react-icons/md";
const Blogwithslidercard = ({blogsliderimages, blogsliderheader, blogslidertext}) => {
  return (
   <div className="flex p-5 border rounded-[20px] w-fit border-blue-100 flex-col gap-3">
      <div className="flex items-start space-x-5 space-y-5 relative w-fit  h-[400px]">
        <img className="rounded-xl w-[100%] h-[100%]" src={blogsliderimages} alt="blog images" />
        <p className="flex absolute bg-blue-500 rounded-xl w-[65px] h-[65px] items-center justify-center font-semibold text-2xl text-white">26<br/>Nov</p>
       </div>
      <div className="flex flex-col gap-3">
    <div className="flex flex-row gap-3">
       <span className="flex flex-row gap-1 items-center"><RiAdminLine /> <p>By Admin</p></span>
       <span className="flex flex-row gap-1 items-center"><MdOutlineLocalOffer /> <p>0 Comment</p></span>
     </div> 
     <h3 className=" font-semibold text-2xl cursor-pointer hover:text-blue-500">{blogsliderheader}</h3>
     <p className="lg:w-[650px]">{blogslidertext}</p>
      <a href="#" className="flex flex-row items-center gap-3 font-semibold rounded-3xl w-fit h-fit px-6 py-4 bg-blue-500 2xl cursor-pointer hover:bg-right transition-all duration-500 ease-out bg-[length:200%_100%]  bg-left bg-gradient-to-l from-black to-blue-500 text-white">Read More <GrLinkNext /></a>
     </div>
    </div>
  )
}

export default Blogwithslidercard;