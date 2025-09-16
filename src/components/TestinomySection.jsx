import "aos/dist/aos.css";
import TestimonyCard from "./TestimonyCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const TestimonySection = () => {
    
  return (
    <section data-aos="zoom-in" data-aos-duration="2000" className="relative mt-20 py-20 bg-[#F7F7F7]">
        <section className="why-choose-us px-6">
            <div className="container">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
                    <div className="relative lg:flex justify-center items-center">
                        <img src="https://turmet-react.vercel.app/assets/img/testimonial/01.jpg" alt="Travelers" className="relative z-10 rounded-lg"/>
                    </div>

                    <div className="flex-1">
                        <p className="text-[#1CA8CB] text-base sub-title font-medium mb-2">Testimonial</p>
                        <h2 className="text-4xl font-bold leading-tight mb-6">
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
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="Voyager made planning my trip so effortless. From booking flights to discovering hidden gems, everything was seamless. I felt safe, informed, and excited every step of the way!" testimonialName="Sarah M." testimonialPosition="USA" reviewNo="01/2000"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="Traveling with kids can be stressful, but Voyager took care of all the details. The family-friendly activities and accommodations they suggested were perfect. We created memories we’ll cherish forever." testimonialName="The Martins" testimonialPosition="UK" reviewNo="02/2000"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="Our honeymoon was nothing short of magical. Voyager personalized our itinerary to match our dream destinations. The private beach dinner was the highlight of our trip!" testimonialName="Daniel & Aisha" testimonialPosition="Nigeria" reviewNo="03/2000"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="As a solo traveler, I always look for safety and unique experiences. Voyager gave me both! I met incredible people and explored places I never would have found on my own." testimonialName="Kenji T." testimonialPosition="Japan" reviewNo="05/2000"/>
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

export default TestimonySection