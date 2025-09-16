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
                    <FeaturedTourCard locationBg="https://turmet-react.vercel.app/assets/img/destination/01.jpg" location="BROOKLYN NY" featureTourTitle="Brooklyn Beach Resort Tour" featuredTourPrice="$59.00"/>
                </SwiperSlide>

                <SwiperSlide>
                   <FeaturedTourCard locationBg="https://turmet-react.vercel.app/assets/img/destination/02.jpg" location="CLEVELAND OH" featureTourTitle="Cleveland Beach Resort Tour" featuredTourPrice="$59.00"/>
                </SwiperSlide>

                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://turmet-react.vercel.app/assets/img/destination/03.jpg" location="SACRAMENTO CA" featureTourTitle="California Beach Resort Tour" featuredTourPrice="$59.00"/>
                </SwiperSlide>

                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://turmet-react.vercel.app/assets/img/destination/04.jpg" location="LONDON UK" featureTourTitle="London Chumphon Town Tour" featuredTourPrice="$59.00"/>
                </SwiperSlide>

                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://turmet-react.vercel.app/assets/img/destination/06.jpg" location="PERTH AU" featureTourTitle="Perth Beach Resort Tour" featuredTourPrice="$59.00"/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://turmet-react.vercel.app/assets/img/destination/07.jpg" location="AMSTERDAM ND" featureTourTitle="Amsterdam Beach Resort Tour" featuredTourPrice="$59.00"/>
                </SwiperSlide>

                <SwiperSlide>
                    <FeaturedTourCard locationBg="https://turmet-react.vercel.app/assets/img/destination/04.jpg" location="TORONTO CA" featureTourTitle="Toronto Beach Resort Tour" featuredTourPrice="$59.00"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default FeaturedTourSection