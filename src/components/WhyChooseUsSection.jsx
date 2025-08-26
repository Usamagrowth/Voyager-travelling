import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUsSection = () => {

    useEffect(() => {
          AOS.init();
        }, []);
  return (
    <section className="bg-[#F7F7F7] mt-20 lg:px-8 px-3">
        <div data-aos="zoom-in" data-aos-duration="2000" className="relative lg:mb-[100px] py-20">
                <section className="why-choose-us">
                    <div className="container">
                        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                            {/* Left Content  */}
                            <div class="flex-1">
                                {/* Top Text  */}
                                <p class="text-[#1CA8CB] text-base sub-title font-medium mb-2">Why Choose Us</p>
                                <h2 class="text-4xl font-bold leading-tight mb-6">
                                Get The Best Travel<br class="hidden md:block" /> Experience
                                </h2>
                                <p class="text-gray-500 mb-10 leading-relaxed">
                                There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour words which don’t look even slightly believable
                                </p>

                                {/* Steps  */}
                                <div class="relative step">

                                {/* Step 1  */}
                                <WhyChooseUsCard stepId="01" stepTitle="Find ans enjoy a Trip that fits Your Lifestyle with your Friends" stepText="Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies."/>

                                {/* Step 2  */}
                                <WhyChooseUsCard stepId="02" stepTitle="Travel With More Confidence" stepText="Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies."/>

                                    {/* Step 3  */}
                                <WhyChooseUsCard stepId="03" stepTitle="See What you really Get form us" stepText="Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies."/>
                                </div>
                            </div>

                            {/* Right Image  */}
                            <div class="flex-1 relative flex justify-center items-center">
                                
                                {/* Main Image  */}
                                <img src="https://images.unsplash.com/photo-1626348405114-813e7784fe56?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Travelers" class="relative z-10 w-full object-contain rounded-lg" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    </section>
  )
}

export default WhyChooseUsSection