import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import OurDestinationCard from "./OurDestinationCard";
import ButtonSecondary from "./ButtonSecondary";

const OurDestinationSection = () => {
    useEffect(() => {
          AOS.init();
        }, []);
  return (
    <section data-aos="fade-right" data-aos-duration="2000" className="w-full lg:px-8 px-3 mt-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"> 
            {/* Left Content */}
            <div className="flex-1">
                <span className="text-[#1CA8CB] text-base font-medium sub-title mb-2">
                    Our Destination
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem]">
                    Our Top Location For <br /> You Property
                </h2>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
                <ButtonSecondary buttonText="Learn More"/>
            </div>
        </div>

        <div className="mt-10 mx-auto flex justify-center">
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                modules={[Autoplay]}
                speed={3000} // smooth transition (2.5s)
                autoplay={{
                    delay: 1000, // 3s
                    disableOnInteraction: false, // keeps autoplay after manual interaction
                }}
                loop={true} // enables infinite loop
                breakpoints={{
          // mobile
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // desktops
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
                >
                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://images.unsplash.com/photo-1566891647538-0c59d6376997?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" destinationTitle="Los Angelis" destinationNo="Hotel 1"/>
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://images.unsplash.com/photo-1707836995891-7fc740cee8a9?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" destinationTitle="Los Angelis" destinationNo="Hotel 1"/>
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://images.unsplash.com/photo-1624517607344-edd8277b1ba3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" destinationTitle="Los Angelis" destinationNo="Hotel 1"/>
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://images.unsplash.com/photo-1713131184627-34d7cb5c7a80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" destinationTitle="Los Angelis" destinationNo="Hotel 1"/>
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://images.unsplash.com/photo-1717354838520-f15c34112a98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" destinationTitle="Los Angelis" destinationNo="Hotel 1"/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://images.unsplash.com/photo-1726950906833-1bc8d05713a2?q=80&w=1079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" destinationTitle="Los Angelis" destinationNo="Hotel 1"/>
                </SwiperSlide>

                <SwiperSlide>
                    <OurDestinationCard destinationImage="https://images.unsplash.com/photo-1641893548669-0962a2ea5b03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" destinationTitle="Los Angelis" destinationNo="Hotel 1"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default OurDestinationSection