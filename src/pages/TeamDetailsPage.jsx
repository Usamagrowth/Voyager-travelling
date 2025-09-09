import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import TeamCard from "../Components/TeamCard";
import GlobalHeader from "../Components/GlobalHeader";


export default function TeamDetailsPage() {
  
  return (
    <div>
      <GlobalHeader headerTitle="Team Details" headerLink="Team Details"/>
    <section className="min-h-screen mt-10 py-10 px-4 md:px-20 space-y-16">
      {/* Main Profile Card */}
      <div className="flex flex-col sm:flex-row bg-white rounded-2xl border shadow-sm gap-x-3 px-4 py-3 md:px-6">
        {/* Left Image */}
        <div className="w-full sm:w-1/3 flex-shrink-0 mb-6 sm:mb-0">
          <img
            className="w-full h-64 sm:h-full object-cover rounded-xl"
            src="https://turmet-react.vercel.app/assets/img/team/04.jpg"
            alt="profile"
          />
        </div>

        {/* Right Content */}
        <div className="w-full sm:w-2/3 p-0 sm:p-5 flex flex-col  justify-between">
          {/* Name + Role */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Savannah Nguyen
            </h2>
            <span className="text-base md:text-lg text-gray-500">
              Tourist Guide
            </span>
            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget lacus a
              felis accumsan pharetra in dignissim enim. In amet odio mollis urna
              aliquet volutpat. Sed bibendum nisl vehicula imperdiet <br /> imperdiet,augue
              massa fringilla.
            </p>
          </div>

          {/* Divider line */}
          <div className="border-t my-6"></div>

          {/* Contact info */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
            <li>
              <span className="text-blue-600 font-medium">Experience:</span>{" "}
              <span className="text-gray-700">10 Years</span>
            </li>
            <li>
              <span className="text-blue-600 font-medium">Position:</span>{" "}
              <span className="text-gray-700">Guider</span>
            </li>
            <li>
              <span className="text-blue-600 font-medium">Phone:</span>{" "}
              <span className="text-gray-700">+208-555-0122</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            {/* Facebook */}
          <a href="#" className="p-2 border rounded-md hover:bg-blue-50"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-600"> <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/> </svg> </a>
            {/* Twitter */}
          
            <a href="#" className="p-2 border rounded-md hover:bg-blue-50"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-sky-500"> <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.88-2.35 8.46 8.46 0 0 1-2.7 1.03A4.22 4.22 0 0 0 16 4a4.23 4.23 0 0 0-4.22 4.23c0 .33.04.65.1.95a12 12 0 0 1-8.7-4.4 4.23 4.23 0 0 0 1.31 5.64 4.18 4.18 0 0 1-1.91-.53v.05a4.23 4.23 0 0 0 3.39 4.15c-.46.12-.94.18-1.44.18-.35 0-.7-.03-1.03-.1a4.23 4.23 0 0 0 3.95 2.94A8.48 8.48 0 0 1 2 19.54a11.94 11.94 0 0 0 6.45 1.89c7.74 0 11.97-6.41 11.97-11.96 0-.18 0-.35-.01-.53A8.3 8.3 0 0 0 22.46 6z"/> </svg> </a>
            {/* Instagram */}
            <a href="#" className="p-2 border rounded-md hover:bg-pink-50"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-pink-500"> <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.8-3.8a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z"/> </svg> </a>
            {/* LinkedIn */}
          <a href="#" className="p-2 border rounded-md hover:bg-blue-50"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-700"> <path d="M20.45 20.45h-3.6v-5.4c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.5h-3.6V9h3.5v1.6h.1c.5-1 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.5v6.4zM5.35 7.5a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.15 20.45h-3.6V9h3.6v11.45z"/> </svg> </a>
          </div>
        </div>
      </div>

      {/* Description and Skills Section */}
      <div className="bg-white-50 py-12">
        <div className="container mx-auto px-2 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-5">
              <h2 className="text-[2.3rem] md:text-3xl font-[600] text-gray-800">
                Professional Info
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, made of owl the
                quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend
                porta arcu. In hac augu ehabitasse the is platea augue thelorem turpoi
                dictumst. In lacus libero faucibus.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 flex flex-col justify-center gap-6">
              {/* Skill 1 */}
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span className='mb-3 text-[17px]'>Language Skills</span>
                  <span className="text-gray-600 mb-3 text-[17px]">86%</span>
                </div>
                <div className="w-full bg-gray-200 h-3">
                  <div className="bg-cyan-500 h-3" style={{ width: "86%" }}></div>
                </div>
              </div>
              {/* Skill 2 */}
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span className='mb-3 text-[17px]'>Tour Guide</span>
                  <span className="text-gray-600 mb-3 text-[17px]">72%</span>
                </div>
                <div className="w-full bg-gray-200 h-3">
                  <div className="bg-cyan-500 h-3" style={{ width: "72%" }}></div>
                </div>
              </div>
              {/* Skill 3 */}
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span className='mb-3 text-[17px]'>Planning</span>
                  <span className="text-gray-600 mb-3 text-[17px]">62%</span>
                </div>
                <div className="w-full bg-gray-200 h-3">
                  <div className="bg-cyan-500 h-3" style={{ width: "62%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 mt-8" />


    <div className="w-full lg:px-8 px-3 mt-20 relative">
        <div className='flex justify-between items-center'>
            <h2 className="text-4xl font-bold leading-tight mb-6">
                Related Guider
            </h2>
            {/* Navigation Buttons (Right side, lg+ only) */}
            <div className="flex gap-3">
                <button className="swiper-button-prev-custom bg-[#D2F1F9] hover:bg-[#0A1F24] hover:text-white p-4 rounded-full transition-all duration-1000 ease-in-out">
                <IoIosArrowRoundBack />
                </button>
                <button className="swiper-button-next-custom bg-[#1CA8CB] hover:bg-[#0A1F24]  text-white p-4 rounded-full transition-all duration-1000 ease-in-out">
                <IoIosArrowRoundForward />
                </button>
            </div>
        </div>
        <div className="mx-auto mt-5 justify-center">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                modules={[Autoplay, Navigation]}
                speed={3000} // smooth transition (2.5s)
                autoplay={{
                    delay: 1000, // 3s
                    disableOnInteraction: false, // keeps autoplay after manual interaction
                }}
                loop={true} // enables infinite loop
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                breakpoints={{
          // mobile
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // tablets
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          // tablets
          740: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // small laptops
          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // desktops
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}>

                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/01.jpg" teamName="Esther Howard" teamTitle="Tour Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/02.jpg" teamName="Leslie Alexander" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/03.jpg" teamName="Theresa Web" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/04.jpg" teamName="Floyd Miles" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/05.jpg" teamName="Courtney Henry" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/06.jpg" teamName="Cody Fisher" teamTitle="Tourist Guide"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

    </section>
    </div>
  )
}