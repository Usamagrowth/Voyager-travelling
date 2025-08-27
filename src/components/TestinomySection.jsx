import AOS from "aos";
import "aos/dist/aos.css";
import TestimonyCard from "./TestimonyCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const TestinomySection = () => {
    
  return (
    <section data-aos="zoom-in" data-aos-duration="2000" className="relative mt-20 py-20 bg-[#F7F7F7]">
        <section className="why-choose-us px-6">
            <div className="container">
                <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
                    <div class="relative lg:flex justify-center items-center">
                        <img src="https://turmet-react.vercel.app/assets/img/testimonial/01.jpg" alt="Travelers" class="relative z-10 rounded-lg"/>
                    </div>

                    <div class="flex-1">
                        <p class="text-[#1CA8CB] text-base sub-title font-medium mb-2">Testimonial</p>
                        <h2 class="text-4xl font-bold leading-tight mb-6">
                            What They Say About Us
                        </h2>
                        <div className="grid gap-5">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
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
                                className="w-full relative"
                                
                            >
                                <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="There are many variations ofpassages of  available, but the majority have suffered alteration in some form, by injected humour,randomised words which do not look even slightly believable. If are going to use a passage of Lorem Ipsum, you need to be sure there is not anything" testimonialName="Esther Howard" testimonialPosition="Trader, USA" reviewNo="01/2000"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="There are many variations ofpassages of  available, but the majority have suffered alteration in some form, by injected humour,randomised words which do not look even slightly believable. If are going to use a passage of Lorem Ipsum, you need to be sure there is not anything" testimonialName="Esther Howard" testimonialPosition="Trader, USA" reviewNo="01/2000"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="There are many variations ofpassages of  available, but the majority have suffered alteration in some form, by injected humour,randomised words which do not look even slightly believable. If are going to use a passage of Lorem Ipsum, you need to be sure there is not anything" testimonialName="Esther Howard" testimonialPosition="Trader, USA" reviewNo="01/2000"/>
                                </SwiperSlide>

                                {/* Navigation Buttons (Right side, lg+ only) */}
                                <div className="hidden lg:flex flex-col gap-3 absolute right-2 top-1/2 -translate-y-1/2 z-10">
                                    <button className="swiper-button-prev-custom bg-[#1CA8CB] hover:bg-[#0A1F24] text-white p-4 rounded-full transition-all duration-1000 ease-in-out">
                                    <FaChevronLeft />
                                    </button>
                                    <button className="swiper-button-next-custom bg-[#D2F1F9] hover:bg-[#0A1F24] hover:text-white p-4 rounded-full transition-all duration-1000 ease-in-out">
                                    <FaChevronRight />
                                    </button>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default TestinomySection