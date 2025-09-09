import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <section>
        <div
          className="relative mt-24 max-w-7xl mx-auto flex flex-col md:flex-row 
          bg-cover bg-center rounded-lg shadow-2xl overflow-hidden"
          data-aos="fade-up"
        >
          {/* Parallax Background */}
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1680225571287-c165e7ed7ed5?q=80&w=870&auto=format&fit=crop')] bg-cover bg-center scale-105"
            data-aos="zoom-out"
            data-aos-delay="50"
          ></div>

          {/* Black Overlay */}
          <div
            className="absolute inset-0 bg-black/50 z-0"
            data-aos="fade"
            data-aos-delay="100"
          ></div>

          {/* Left Column - Text */}
          <div className="relative z-10 basis-[60%] p-6 md:p-12 text-white flex flex-col justify-center space-y-8">
            {/* Static text */}
            <p className="text-teal-400 text-lg font-bold mb-2">
              Are You Ready?
            </p>

            {/* Headline line by line */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              <span data-aos="fade-up" data-aos-delay="200" className="block">
                World Leading
              </span>
              <span data-aos="fade-up" data-aos-delay="300" className="block">
                Online Tour Booking
              </span>
              <span data-aos="fade-up" data-aos-delay="400" className="block">
                Platform
              </span>
            </h1>

            <p
              className="text-sm md:text-base text-gray-200"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            {/* Features */}
            <section className="space-y-8">
              <div
                className="flex items-center gap-10"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-teal-100">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M9 6h6M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                      <rect x="3" y="6" width="18" height="14" rx="2" />
                      <path d="M12 10v6M7 10v6M17 10v6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Most Adventure Tour Ever
                  </h3>
                </div>
                <p className="mt-1 text-white">
                  There are many variations of passages of available,
                </p>
              </div>

              <div
                className="flex items-center gap-10"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-teal-100">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M9 6h6M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                      <rect x="3" y="6" width="18" height="14" rx="2" />
                      <path d="M12 10v6M7 10v6M17 10v6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Real Tour Starts from Here
                  </h3>
                </div>
                <p className="mt-1 text-white">
                  There are many variations of passages of available,
                </p>
              </div>

              {/* Button */}
              <button
                className="relative bg-teal-500 overflow-hidden px-6 py-3 rounded-full font-bold group"
                data-aos="flip-up"
                data-aos-delay="650"
              >
                <span className="relative z-10">Contact US &#x2192;</span>
                <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </button>
            </section>
          </div>

          {/* Right Column - Image */}
          <div
            className="relative z-10 basis-[40%] h-full flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <img
              src="https://turmet-react.vercel.app/assets/img/man-image.png"
              alt="Travel"
              className="h-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travelsection;
