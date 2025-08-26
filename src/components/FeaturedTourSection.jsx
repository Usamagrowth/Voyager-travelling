import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import FeaturedTourCard from "./FeaturedTourCard";

const FeaturedTourSection = () => {
  useEffect(() => {
          AOS.init();
        }, []);
  return (
    <section data-aos="fade-right" data-aos-duration="2000" className="w-full lg:px-8 px-3 mt-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"> 
            {/* Left Content */}
            <div className="flex-1">
                <span className="text-[#1CA8CB] text-base font-medium sub-title mb-2">
                    Featured Tour
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem]">
                    Unforgettable Travel Discoveries
                </h2>
                <p class="text-gray-500 mb-10 leading-relaxed ">
                    There are many variations of passages of available, but the majority have suffered alteration in some <br class="hidden md:block" /> form, by injected humour words which don’t look even slightly believable
                </p>
            </div>
        </div>

        <div className="mx-auto flex justify-center">
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
                    <FeaturedTourCard locationBg="https://plus.unsplash.com/premium_photo-1718146019714-a7a0ab9e8e8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" location="Thailand" featureTourTitle="Bathing and Kayaking at Nonrival Beach" featuredTourPrice="$49.00"/>
                </SwiperSlide>

                <SwiperSlide>
                   <FeaturedTourCard locationBg="https://plus.unsplash.com/premium_photo-1661764174171-c29f85bd8a37?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" location="Thailand" featureTourTitle="5 Best Tips for an Amazing Molina Trip" featuredTourPrice="$49.00"/>
                </SwiperSlide>

                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" location="Thailand" featureTourTitle="Discover Beautiful Moliva: Natures Paradise" featuredTourPrice="$49.00"/>
                </SwiperSlide>

                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" location="Thailand" featureTourTitle="Best Time Ever to Explore Molinas Nature" featuredTourPrice="$49.00"/>
                </SwiperSlide>

                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://images.unsplash.com/photo-1606820854416-439b3305ff39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" location="Thailand" featureTourTitle="Bathing and Kayaking at Nonrival Beach" featuredTourPrice="$49.00"/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://plus.unsplash.com/premium_photo-1718146019167-110481171ad2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" location="Thailand" featureTourTitle="Bathing and Kayaking at Nonrival Beach" featuredTourPrice="$49.00"/>
                </SwiperSlide>

                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" location="Thailand" featureTourTitle="Bathing and Kayaking at Nonrival Beach" featuredTourPrice="$49.00"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default FeaturedTourSection