
import { MdOutlineAddLocationAlt, MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="flex flex-col gap-5">
<div className="flex flex-col lg:flex-row p-5 justify-center gap-5">
  <span className=" hover:bg-blue-500 p-3 bg-gray-400 rounded-[20px]">
  <div className="flex flex-col gap-3 lg:w-[360px] h-[250px]  hover:text-white p-2 items-center border border-black rounded-[20px]">
   <MdOutlineAddLocationAlt className="w-[70px] h-[70px]" />
   <h6 className="font-semibold text-2xl">Our Address</h6>
   <p>2542 King Ln. Ojo Ibadan</p>
  </div>
  </span>
  <span className=" bg-blue-500 p-3 rounded-[20px]">
 <div className="flex flex-col gap-3 lg:w-[360px]  h-[250px] text-white  p-2 items-center border border-black rounded-[20px]">
   <MdOutlineMarkEmailRead className="w-[70px] h-[70px]"  />
   <h6 className="font-semibold text-2xl">Info@usama.com</h6>
   <p>Email us anytime for enquire</p>
  </div>
  </span>
  <span className=" hover:bg-blue-500 p-3 bg-gray-400 rounded-[20px]">
   <div className="flex flex-col gap-5 lg:w-[360px] h-[250px] hover:text-white p-2 items-center border border-black rounded-[20px]">
  <FiPhoneCall className="w-[70px] h-[70px]" />
   <h6 className="font-semibold text-2xl">Hot:+234-906-654-1057</h6>
   <p>Call us for kind support</p>
  </div>
  </span>
</div>
<span className="flex flex-col lg:flex-row">
 <div className="bg-blue-500 w-full p-3"> 
     <form action="#" className="flex flex-col gap-5">
        <h5 className="text-2xl text-white font-semibold">Send Message Anytime</h5>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex lg:w-[316px]  h-[50px] border border-white p-2 rounded-[20px]">
        <input type="text" placeholder="Your Name" className="outline-none w-[100%] h-[100%]  bg-blue-500 placeholder-white" />
        </div>
        <div className="flex lg:w-[316px] h-[50px] border border-white p-2 rounded-[20px]">
        <input type="email" placeholder="Your Email" className="outline-none w-[100%] h-[100%]  bg-blue-500 placeholder-white" />
        </div>
        </div>
         <div className="flex h-[50px] border border-white p-2 rounded-[20px]">
        <input type="text" placeholder="Subject" className="outline-none w-[100%] h-[100%] bg-blue-500 placeholder-white" />
        </div>
         <div className="flex h-[100px] border border-white p-2 rounded-[20px]">
         <textarea name="message" id="" placeholder="Messages" className="bg-blue-500 outline-none placeholder-white w-[100%] h-[100%]"/>
         </div>
         <button type="submit" className="border border-white p-2 w-fit rounded-[30px] text-white font-semibold hover:bg-black">Submit Message</button>
        </form>
</div>
<div className="flex w-full">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m3!1d31546425.717572592!2d-20!3d10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1690453532445!5m2!1sen!2sng"
  width="100%"
  height="450"
  style={{ border: 0 }} 
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
</div>
</span>
</section>

import React from 'react'
import GlobalHeader from '../Components/GlobalHeader'
import ContactDetails from '../Components/ContactDetails'
import ContactFormAndMap from '../Components/ContactFormAndMap'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <section>
      <GlobalHeader title={"Contact"}/>
    <ContactDetails />
    <ContactFormAndMap/>
    <Footer/>
    </section>

  )
}

export default Contact