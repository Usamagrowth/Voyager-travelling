import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import TeamCard from './TeamCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const TeamMemberSection = () => {
  return (
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
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/01.jpg" teamName="Esther howard" teamTitle="Tourist Guide"/>
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
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/05.jpg" teamName="Floyd Miles" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/06.jpg" teamName="Floyd Miles" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/07.jpg" teamName="Floyd Miles" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/08.jpg" teamName="Floyd Miles" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/09.jpg" teamName="Floyd Miles" teamTitle="Tourist Guide"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard teamCardBg="https://turmet-react.vercel.app/assets/img/team/10.jpg" teamName="Floyd Miles" teamTitle="Tourist Guide"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default TeamMemberSection