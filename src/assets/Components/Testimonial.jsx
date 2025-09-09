import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,     
    });
  }, []);

  return (
    <section className="bg-[beige] py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* left side with big image */}
        <div className="flex-1" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1620226665852-c0bc82e154d0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Traveler"
            className="w-[350px] h-[400px] mx-auto rounded-lg object-cover"
          />
        </div>

       {/* right side with white container */}
        <div className="flex-1" data-aos="fade-up">
          <p className="text-teal-600 italic mb-2">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Travelers Love Our Locals
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 w-[400px] h-[300px]">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Wade Warren"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">Wade Warren</h3>
                <p className="text-gray-500 text-sm">President of Sales</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed relative">
              There are many variations of passages of the Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which do not look even
              slightly believable.
              <span className="absolute -top-10 right-4 text-teal-600 text-5xl font-bold">
                ”
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
