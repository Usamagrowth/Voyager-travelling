import { CiSearch } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import img2 from "../assets/img3.jpg"
import img1 from "../assets/img4.jpg"
import img3 from "../assets/img2.jpg"
const Blogslideranddetail2rowcard = () => {
  return (
     <div className="flex flex-col space-y-4">
          <span className="border border-blue-100 p-5 rounded-[20px] w-[350px] flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">Search</h3>
            <form action="#" className="flex relative flex-row justify-end items-end border h-[60px] w-[300px] border-blue-100 rounded-[20px] ">
              <input className="outline-none flex w-[100%] h-[100%]" type="text" placeholder="Search Here" />
              <CiSearch className="flex absolute bg-blue-500 w-[50px] h-[60px] p-2 text-white " />
              <button type="submit"></button>
            </form>
          </span>
          <span className="border border-blue-100 p-5 rounded-[20px] w-[350px] flex flex-col gap-5">
            <h3 className="font-semibold text-2xl">Service</h3>
          <ul className="divide-y-2 flex flex-col gap-8">
            <li className="flex justify-between"><a href="#">Travel</a><span>04</span></li>
            <li className="flex justify-between"><a href="#">System</a><span>03</span></li>
            <li className="flex justify-between"><a href="#">Agency</a><span>02</span></li>
            <li className="flex justify-between"><a href="#">Restaurant</a><span>05</span></li>
            <li className="flex justify-between"><a href="#">Rant A Car</a><span>06</span></li>
            <li className="flex justify-between"><a href="#">Blueprint Builders</a><span>(03)</span></li>
            </ul>
          </span>
          <span className="border border-blue-100 p-5 rounded-[20px] w-[350px] flex flex-col gap-5">
            <h3 className="font-semibold text-2xl">Recent Post</h3>
          <div className="flex flex-row items-center gap-3">
            <div className="flex w-[130px] h-[90px]">
            <img className="rounded-[20px] w-[100%] h-[100%]" src={img1} alt="tour date" />
            </div>
           <div className="flex flex-col">
           <span className="flex gap-2 text-blue-500 items-center"><FaRegCalendarCheck className="text-orange-500"/><p>14 Feb, 2024</p></span>
            <a className="font-semibold text-xl" href="#">Get Best Advertised Your Side Pocket.</a>
            </div>
          </div>
           <div className="flex flex-row items-center gap-3">
            <div className="flex w-[130px] h-[90px]">
            <img className="rounded-[20px] w-[100%] h-[100%]" src={img2} alt="tour date" />
            </div>
           <div className="flex flex-col">
           <span className="flex gap-2 text-blue-500 items-center"><FaRegCalendarCheck  className="text-orange-500"/><p>17 Sept, 2023</p></span>
            <a className="font-semibold text-xl" href="#">Supervisor Disapproved of Latest Work.</a>
            </div>
          </div>
            <div className="flex flex-row items-center gap-3">
            <div className="flex w-[130px] h-[90px]">
            <img className="rounded-[20px] w-[100%] h-[100%]" src={img3} alt="tour date" />
            </div>
           <div className="flex flex-col">
           <span className="flex gap-2 text-blue-500 items-center"><FaRegCalendarCheck className="text-orange-500"/><p>20   March, 2025</p></span>
            <a className="font-semibold text-xl" href="#">Sakura dreams and samurai tales.</a>
            </div>
          </div>
          </span>
          <span className="border border-blue-100 p-5 rounded-[20px] w-[350px] flex flex-col gap-5">
            <h3 className="font-semibold text-2xl">Tags</h3>
            <div className="flex gap-5 flex-wrap">
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">Agency</a>
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">Traveling</a>
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">Design</a>
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">Travel</a>
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">Change</a>
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">Video</a>
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">World</a>
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">Startup</a>
            <a className="border border-blue-100 p-2 rounded[20px]" href="#">Services</a>
            </div>
          </span>
          </div>
  )
}

export default Blogslideranddetail2rowcard