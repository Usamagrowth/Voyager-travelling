import AboutImage1 from "../assets/imgs/about-img-1.jpg"
import AboutImage2 from "../assets/imgs/about-img-2.jpg"
import AboutImage3 from "../assets/imgs/about-img-3.jpg"
import AboutImage4 from "../assets/imgs/plane-shape.png"
import AboutImage5 from "../assets/imgs/group.png"
import CheckIcon from "../assets/imgs/check.png"
import { FaArrowRightLong } from "react-icons/fa6"

const AboutUs = () => {
  return (
    <section className="about-us my-16 lg:p-[20px] px-[50px] m-auto">
        <div className="container">
            <div className="about-us_wrapper flex max-[992px]:grid justify-between">
                <div className="about-us_image relative w-[100%] h-[100%]">
                    <div className="lg:w-[329px] lg:h-[510px] lg:absolute w-[100%] h-[500px]">
                        <img src={AboutImage3} alt="" className="about-image3 w-full h-full object-cover border-[10px] border-solid border-white rounded-[20px] lg:left-[20px] top-0 lg:ml-10" />
                    </div>
                    <div className="float-img-y absolute left-0 top-0 lg:top-[250px]">
                        <img className="about-image1 w-[196px] border-[10px] border-solid border-white rounded-[20px] z-50" src={AboutImage1} alt="" />
                    </div>
                    <div className="float-img-x lg:absolute z-[1000]">
                        <img className="about-image5 absolute w-[100px] md:w-[200px] right-0 bottom-0 max-[767.9px]:top-0 z-[1000]" src={AboutImage5} alt="" />
                    </div>
                    <div className="about-image-2">
                        {/* <div className="lg:w-[299px] w-[200px] h-[50px]">
                            <img className="about-image2 w-full h-full lg:absolute absolute object-cover top-[60px] lg:right-[50px] lg:top-[120px] border-[10px] border-solid border-white rounded-[20px] z-[20]" src={AboutImage2} alt="" />
                        </div> */}
                        <div className="lg:w-[300px] lg:h-[433px] lg:absolute absolute md:w-[299px] md:h-[299px] w-[200px] h-[200px]">
                            <img src={AboutImage2} alt="" className="about-image3 absolute w-full h-full object-cover lg:top-[120px] border-[10px] border-solid border-white rounded-[20px] z-[20] max-[1280px]:left-[200px] min-[1280px]:left-[300px] max-[1024px]:left-0 max-[1025px]:bottom-[300px] max-[767.9px]:bottom-[200px]" />
                        </div>
                        
                        <div className="plane-icon">
                            <img className="about-image4 w-[] lg:grid hidden lg:absolute -z-10 right-[100px]" src={AboutImage4} alt="" />
                        </div>
                    </div>

                </div>
                <div className="about-us_content lg:w-[90%] w-[100%]">
                    <div className="about-content-items mr-10">
                        <div className="section-title">
                            <span className="sub-title text-[#1ca8cb] text-[18px] italic">
                                Get About Us
                            </span>
                            <h2 className="text-[#0a1f24] lg:text-[44px] md:text-[36px] text-[24px] font-[700] lg:leading-[3.5rem] leading-[2rem]">
                                We're Strived Only For The Best In The World
                            </h2>
                        </div>
                        <p className="mt-5 text-[#687179] lg:text-[16px] text-[14px] lg:leading-[28px] leading-[25px]">
                            There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour words which don't look even slightly believable injected humour words which.
                        </p>
                        <div className="aboutus-items mt-5 flex max-[766px]:grid items-center gap-6 w-full">
                            <div className="about-icon-content flex w-[50%] items-center gap-4 mr-20">
                                <div className="about-icon">
                                    <img src={CheckIcon} alt="" />
                                </div>

                                <div className="about-icon-content w-full">
                                    <h5 className="text-[#0a1f24] text-[18px] max-[766px]:w-full font-[600] leading-[22px]">Easy Booking System</h5>
                                </div>
                            </div>

                            <hr className="h-[45px] max-[1198px]:hidden border-[1.5px] border-[#1ca8cb]"/>

                            <div className="aboutus-items-text max-[766px]:-mt-2">
                                <p className="text-[#687179] leading-[28px] lg:text-[16px] text-[14px]">
                                    Our hotel also prides itself on offering exceptional services.
                                </p>
                            </div>
                        </div>
                        
                        <div className="aboutus-items mt-5 flex max-[766px]:grid items-center gap-6 w-full">
                            <div className="about-icon-content flex w-[50%] items-center gap-4 mr-20">
                                <div className="about-icon">
                                    <img src={CheckIcon} alt="" />
                                </div>

                                <div className="about-icon-content w-full">
                                    <h5 className="text-[#0a1f24] text-[18px] max-[766px]:w-full font-[600] leading-[22px]">Easy Booking System</h5>
                                </div>
                            </div>

                            <hr className="h-[45px] max-[1198px]:hidden border-[1.5px] border-[#1ca8cb]"/>

                            <div className="aboutus-items-text max-[766px]:-mt-2">
                                <p className="text-[#687179] leading-[28px] lg:text-[16px] text-[14px]">
                                    Our hotel also prides itself on offering exceptional services.
                                </p>
                            </div>
                        </div>

                        <button className='bg-[#113D48] text-white w-[] px-4 py-5 rounded-full flex items-center gap-3 mt-5'> Discover More <FaArrowRightLong /></button>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs