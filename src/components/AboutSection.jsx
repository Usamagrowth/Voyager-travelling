import AOS from "aos";
import "aos/dist/aos.css";
import AboutImage1 from "../assets/imgs/about-img-1.jpg"
import AboutImage2 from "../assets/imgs/about-img-2.jpg"
import AboutImage3 from "../assets/imgs/about-img-3.jpg"
import AboutImage4 from "../assets/imgs/plane-shape.png"
import { FaArrowRightLong } from "react-icons/fa6"
import { useEffect } from "react"
import AboutSectionFeature from "./AboutSectionFeature";

const AboutSection = () => {

    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className="relative lg:mb-[100px] py-20">
        <section className="about-us px-6 lg:px-8">
            <div className="container">
                <div className="about-us_wrapper w-fit lg:flex lg:gap-5 grid justify-between">
                    <div  className="about-us_image relative w-full h-[100%]">
                        <div className="lg:w-[329px] lg:h-[510px] lg:absolute w-[100%] h-[500px]">
                            <img src={AboutImage3} alt="" className="about-image3 w-full h-full object-cover border-[10px] border-solid border-white rounded-[20px] lg:left-[20px] top-0 lg:ml-10" />
                        </div>
                        <div className="absolute left-0 top-0 lg:top-[250px] animate-[floaty_3s_ease-in-out_infinite]">
                            <style>{`
                                @keyframes floaty {
                                0%, 100% { transform: translateY(0); }
                                50% { transform: translateY(-20px); }
                                }
                            `}</style>
                            <img className="about-image1 w-[196px] border-[10px] border-solid border-white rounded-[20px] z-50" src={AboutImage1} alt="" />
                        </div>

                        <div className="mt-14 absolute lg:left-0 lg:top-[470px] right-0 bottom-0 flex items-center gap-3 pl-2 md:mt-16 z-[1000] animate-[floatx_3s_ease-in-out_infinite]">
                            <style>{`
                                @keyframes floatx {
                                0%, 100% { transform: translateX(0); }
                                50% { transform: translateX(-20px); }
                                }
                            `}</style>
                            <div className="flex -space-x-3">
                                <div className="h-12 w-12 cursor-pointer group">
                                    <img src="https://i.pravatar.cc/80?img=11" alt="Traveler 1"
                                className="rounded-full ring-2 ring-white shadow" />
                                    <div className="image opacity-0 absolute bottom-[25px] h-13 w-13 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                        <img src="https://i.pravatar.cc/80?img=11" alt="Traveler 1"
                                        className="rounded-full ring-2 ring-white shadow" />
                                    </div>
                                </div>

                                <div className="h-12 w-12 cursor-pointer group">
                                    <img src="https://i.pravatar.cc/80?img=22" alt="Traveler 1"
                                className="rounded-full ring-2 ring-white shadow" />
                                    <div className="image opacity-0 absolute bottom-[25px] h-13 w-13 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                        <img src="https://i.pravatar.cc/80?img=22" alt="Traveler 1"
                                        className="rounded-full ring-2 ring-white shadow" />
                                    </div>
                                </div>

                                <div className="h-12 w-12 cursor-pointer group">
                                    <img src="https://i.pravatar.cc/80?img=33" alt="Traveler 1"
                                className="rounded-full ring-2 ring-white shadow" />
                                    <div className="image opacity-0 absolute bottom-[25px] h-13 w-13 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                        <img src="https://i.pravatar.cc/80?img=33" alt="Traveler 1"
                                        className="rounded-full ring-2 ring-white shadow" />
                                    </div>
                                </div>

                                <div className="h-12 w-12 cursor-pointer group">
                                    <img src="https://i.pravatar.cc/80?img=44" alt="Traveler 1"
                                className="rounded-full ring-2 ring-white shadow" />
                                    <div className="image opacity-0 absolute bottom-[25px] h-13 w-13 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                        <img src="https://i.pravatar.cc/80?img=44" alt="Traveler 1"
                                        className="rounded-full ring-2 ring-white shadow" />
                                    </div>
                                </div>
                            </div>

                            <button
                            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white shadow-md transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">
                            +
                            </button>
                        </div>

                        <div className="about-image-2">
                            <div className="lg:w-[300px] lg:h-[433px] lg:absolute absolute md:w-[299px] md:h-[299px] w-[200px] h-[200px]">
                                <img src={AboutImage2} alt="" className="about-image3 absolute w-full h-full object-cover lg:top-[120px] border-[10px] border-solid border-white rounded-[20px] z-[20] max-[1280px]:left-[200px] min-[1280px]:left-[300px] max-[1024px]:left-0 max-[1025px]:bottom-[300px] max-[767.9px]:bottom-[200px]" />
                            </div>
                            
                            <div className="plane-icon">
                                <img className="about-image4 w-[] lg:grid hidden lg:absolute -z-10 right-[100px]" src={AboutImage4} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Right: Text Content  */}
                    <div className="about-us_content w-full">
                        <div className="about-content-items">
                            <div>
                                <div className="mb-4">
                                    <span className="text-[#1CA8CB] text-base font-medium sub-title">Get About Us</span>
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem]">
                                        We're Strived Only For The Best In The World
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mt-5">
                                        There are many variations of passages available, but the majority have suffered
                                        alteration in some form, by injected humour words which don’t look even slightly
                                        believable injected humour words.
                                    </p>
                                </div>

                                {/* Feature List  */}
                                <div className="space-y-6">
                                    <AboutSectionFeature featureTitle="Easy Booking System" featureText="Our hotel also prides itself on offering exceptional services."/>

                                    <AboutSectionFeature featureTitle="Easy Booking System" featureText="Our hotel also prides itself on offering exceptional services."/>
                                </div>

                                {/* Button  */}
                                <div>

                                    <button className='bg-[#113D48] text-white w-[] px-4 py-5 rounded-full flex items-center gap-3 mt-5'> Discover More <FaArrowRightLong /></button>
                                </div>
                    </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSection