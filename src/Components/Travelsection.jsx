import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonPrimary from "./utilities/ButtonPrimary";
import AboutSectionFeature from "./AboutSectionFeature";
import ButtonSecondary from "./utilities/ButtonSecondary";

const Travelsection = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <section data-aos="zoom-in" data-aos-duration="2000" className="lg:px-8 lg:mt-20 px-3 py-20 bg-gradient-to-r from-[#E5F0F4] to-[#F7F7F7]">
              <div className="container">
                  <div className="about-us_wrapper w-fit lg:flex lg:justify-between lg:gap-5 grid justify-between">                        
                      <div className="about-us_content w-full">
                          <div className="about-content-items">
                              <div>
                                  <div className="mb-4">
                                      <span className="text-[#1CA8CB] text-base font-medium sub-title">Are you ready to travel?</span>
                                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem]">
                                          World Leading Online Tour Booking Platform
                                      </h2>
                                      <p className="text-gray-600 leading-relaxed mt-5">
                                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                      </p>
                                  </div>
      
                                      {/* Feature List  */}
                                  <div className="space-y-6">
                                      <AboutSectionFeature sectionIcon="https://turmet-react.vercel.app/assets/img/icon/08.svg" featureTitle="Most Adventure Tour Ever" featureText="There are many variations of passages of available."/>
      
                                      <AboutSectionFeature sectionIcon="https://turmet-react.vercel.app/assets/img/icon/08.svg" featureTitle="Real Tour Starts from Here" featureText="There are many variations of passages of available."/>
                                  </div>
      
                                      {/* Button  */}
                                  <div className="mt-5 px-4 py-5">
                                      
                                      <ButtonSecondary buttonText="Contact Us"/>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div  className="about-us_image relative w-full h-[100%]">
                          <div className="w-full h-full">
                              <img src="https://turmet-react.vercel.app/assets/img/man-image.png" alt="" className="about-image3 w-full h-full" />
                          </div>
                      </div>
                  </div>
              </div>
      </section>
    </div>
  );
};

export default Travelsection;
