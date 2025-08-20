import { MdOutlineLocalOffer } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import img3 from "../assets/img3.jpg"
import img2 from "../assets/img2.jpg"
import img1 from "../assets/img1.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

const Blogdetailcard = () => {
  return (
<div className="flex flex-col gap-5">
    <div className="flex lg:w-[650px] lg:h-[400px]  items-start space-x-5 space-y-5 ">
      <img className="rounded-xl w-[100%] h-[100%]" src={img3} alt="blog images" />
      <p className="flex absolute bg-blue-500 rounded-xl w-[65px] h-[65px] items-center justify-center font-semibold text-2xl text-white">26<br/>Nov</p>
    </div>
  <div className="flex flex-row gap-5">
    <span className="flex flex-row gap-1 items-center"><RiAdminLine /> <p>By Admin</p></span>
    <span className="flex flex-row gap-1 items-center"><MdOutlineLocalOffer /> <p>5 Comment</p></span>
    <span>Tour</span>
  </div> 
   <tr className="border border-blue-100 lg:w-[600px] flex" />
<div className="flex flex-col space-y-[70px]">
   <div className="flex flex-col gap-5">
    <h3 className="flex font-semibold text-2xl">Get Best Advertiser in Your Side Pocket</h3>
    <p className="text-gray-400 flex gap-5 lg:w-[600px]">Consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore aliqua. Ut enim ad minim veniam,
        made of owl the quis nostrud exercitation ullamco laboris nisi ex ea dolor commodo consequat. 
        Duis aute irure and dolor in reprehenderit.
       <br />
       The is ipsum dolor sit amet consectetur adipiscing elit. 
       Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. 
       In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat
    </p>
  <div className="flex flex-col flex-wrap lg:flex-row gap-4 ">
    <img className="flex lg:w-[300px] transform  duration-500 hover:translate-x-3.5 rounded-[20px]" src={img2} alt="tour" />
    <img className="flex lg:w-[300px] h-[210px] rounded-[20px] hover:scale-75 duration-500" src={img1} alt="tour" />
   </div>
   <p className="flex">The is ipsum dolor sit amet consectetur adipiscing elit.
      <br /> 
     Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. 
     <br />
     In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt
     <br /> augue ac ante rutrum sed the is sodales augue consequat
    </p>
    <div className="flex w-fit bg-blue-50 font-medium text-l p-4 rounded-[20px]">
     <h5 className="flex ">Pellentesque sollicitudin congue dolor non aliquam. <br />
           Morbi volutpat, nisi vel ultricies 
          urnacondimentum, sapien neque lobortis tortor, <br /> quis efficitur mi ipsum eu metus.
          Praesent eleifend orci sit amet est vehicula.
     </h5>
    </div>
    <h6 className="flex">Consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore of magna aliqua. <br />
        Ut enim ad minim veniam, made of owl the quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip
        ex ea dolor commodo consequat. <br /> Duis aute irure and dolor in reprehenderit.
    </h6>
     <tr className="border border-blue-100 lg:w-[650px]" />
     <span className="flex lg:flex-row flex-col gap-[50px] ">
    <div className="flex gap-[50px]">
      <a className="border border-blue-100 p-2 rounded[20px]" href="#">Travel</a>
      <a className="border border-blue-100 p-2 rounded[20px]" href="#">Service</a>
      <a className="border border-blue-100 p-2 rounded[20px]" href="#">Agengy</a>
    </div>
    <div className="flex gap-3 items-center">
      <h5>Share:</h5>
       <a href="#"><FaLinkedin /></a>
       <a href="#"><FaFacebook /></a>
       <a href="#"><FaInstagram /></a>
       <a href="#"><FaTwitter /></a>
    </div>
    </span>
    <tr className="border border-blue-100 lg:w-[650px]" />
    </div>
   <div className="flex  flex-col gap-7" >
     <h5 className="text-2xl font-semibold">03 Comments</h5>
     <span className="flex flex-col gap-5">
     <div className="flex flex-row gap-5">
      <div className="lg:w-[100px] w-[180px] h-[100px]">
     <img className="w-[100%] h-[100%] rounded-full" src={img3} alt="tour" />
     </div>
     <div className="flex flex-col">
    <span className="flex space-x-8 lg:gap-[300px]">
      <h5 className="text-2xl fw-semibold">Leslie Alexander</h5>
      <a href="" className="bg-blue-500 text-white rounded-[50px] w-fit h-fit px-4 py-1">Reply</a>
    </span>
     <p>February 10, 2024 at 2:37 pm <br />
        Neque porro est qui dolorem ipsum quia quaed inventor veritatis et <br /> 
        var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
     </p>
     </div>
     </div>
      <tr className="border border-blue-100 flex" />
      <div className="flex gap-5">
     <img className="rounded-full w-[100px] h-[100px]" src={img2} alt="tour" />
     <div className="flex flex-col">
     <span className="flex items-center space-x-8 lg:gap-[300px]">
      <h5 className="text-2xl fw-semibold">Stephen Leslie</h5>
     <a href="" className="bg-blue-500 text-white rounded-[50px] w-fit h-fit px-4 py-1">Reply</a>
     </span>
     <p className="flex">February 10, 2024 at 2:37 pm <br />
        Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi <br /> architecto
        var sed efficitur turpis gilla sed sit amet finibus eros.
     </p>
     </div>
     </div>
      <tr className="border border-blue-100 flex" />
    <div className="flex flex-row gap-5">
     <img className="w-[100px] h-[100px] rounded-[100px]" src={img1} alt="tour" />
     <div className="flex flex-col">
      <span className="flex space-x-8 lg:gap-[300px]">
        <h5 className="text-2xl fw-semibold">John Alexander</h5>
       <a href="" className="bg-blue-500 text-white rounded-[50px] w-fit h-fit px-4 py-1">Reply</a>
     </span>
     <p>February 10, 2024 at 2:37 pm <br />
        Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto <br />
        var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy
     </p>
     </div>
    </div>
      <tr className="border border-blue-100 flex" />
     </span>
    </div>
    
    <div>
    <form action="#" className="flex w-fit flex-col gap-5">
    <h5 className="text-2xl font-semibold">Leave A Comments</h5>
    <span className="flex gap-5">
    <div className="flex h-[50px] border border-blue-500 p-2 rounded-[20px]">
    <input type="text" placeholder="Your Name" className="outline-none w-[100%]" required />
    </div>
     <div className="flex h-[50px] border border-blue-500 p-2 rounded-[20px]">
    <input type="text" placeholder="Your Email" className="outline-none w-[100%]" required />
    </div>
    </span>
     <div className="flex h-[100px] border border-blue-500 p-2 rounded-[20px]">
     <textarea name="message" id="" placeholder="Messages" className="w-[100%]" />
     </div>
     <button type="submit" className="w-fit flex gap-3 items-center bg-blue-500 text-white p-3 rounded-[30px] font-semibold">post comment <GrLinkNext /></button>
    </form>
    </div>
 </div>
</div>
  )
}

export default Blogdetailcard;