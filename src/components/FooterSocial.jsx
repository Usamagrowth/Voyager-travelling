import { FaInstagram } from "react-icons/fa6"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import FooterCarousel from "./FooterCarousel";

const FooterSocial = () => {
  return (
    <section data-aos="fade-right" data-aos-duration="2000" className="w-full mt-20 py-20 text-center bg-[#F7F7F7] lg:px-8 px-3">
        <div className="items-start lg:items-center gap-6 ">
            <div className='flex justify-center'>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem] w-[65%]">
                    Follow Instagram
                </h2>
            </div>
        </div>

        <div className="mx-auto mt-10 justify-center">
            <Swiper
                spaceBetween={30}
                slidesPerView={6}
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
            slidesPerView: 4,
            spaceBetween: 15,
          },

          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
                >
                <SwiperSlide>
                    <FooterCarousel footerCaurouselBg="https://turmet-react.vercel.app/assets/img/instagram/01.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <FooterCarousel footerCaurouselBg="https://turmet-react.vercel.app/assets/img/instagram/02.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <FooterCarousel footerCaurouselBg="https://turmet-react.vercel.app/assets/img/instagram/03.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <FooterCarousel footerCaurouselBg="https://turmet-react.vercel.app/assets/img/instagram/04.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <FooterCarousel footerCaurouselBg="https://turmet-react.vercel.app/assets/img/instagram/05.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <FooterCarousel footerCaurouselBg="https://turmet-react.vercel.app/assets/img/instagram/06.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <FooterCarousel footerCaurouselBg="https://turmet-react.vercel.app/assets/img/instagram/04.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <FooterCarousel footerCaurouselBg="https://turmet-react.vercel.app/assets/img/instagram/03.jpg"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default FooterSocial