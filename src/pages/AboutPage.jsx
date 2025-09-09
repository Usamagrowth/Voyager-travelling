import { FaCheckCircle } from "react-icons/fa";
import Travelsection from "../assets/Components/Travelsection";
import Statspage from "../assets/Components/Statspage";
import Meettourguide from "../assets/Components/Meettourguide";
import Testimonial from "../assets/Components/Testimonial";
import Instagram from "../assets/Components/instagram";
import GlobalHeader from "../Components/GlobalHeader";

const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      <GlobalHeader headerTitle="About Us" headerLink="About Us"/>
     <section className="pl-12">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Images - Side-by-Side Style */}
        <div className="flex-1 relative h-[400px] flex items-center justify-center gap-4">
          {/* First (bigger) image */}
          <div className="relative w-64 h-80 animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1646705161300-1a61c371a57b?q=80&w=880&auto=format&fit=crop"
              alt="Travel 1"
              className="w-full h-full object-cover rounded-lg shadow-xl z-10"
            />
          </div>

          {/* Second (smaller) image */}
          <div className="relative w-48 h-64 animate-float-medium">
            <img
              src="https://images.unsplash.com/photo-1614717668397-5252f17ee5b5?q=80&w=987&auto=format&fit=crop"
              alt="Travel 2"
              className="w-full h-full object-cover rounded-lg shadow-lg z-10"
            />
          </div>

          {/* Third image outside at the bottom */}
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Travel 3"
            className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 w-32 h-32 object-cover rounded-lg shadow-lg animate-float-fast"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <p className="text-teal-500 font-medium mb-2">Get About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            We're Strived Only For <br /> The Best In The World
          </h1>
          <p className="text-gray-600 mb-6">
            There are many variations of passages available, but the majority
            have suffered alteration in some form by injected humour or
            randomised words which don't look even slightly believable.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-teal-500 text-xl" />
              <span className="text-gray-700 font-medium">
                Easy Booking System: Our hotel also prides itself on offering exceptional services.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-teal-500 text-xl" />
              <span className="text-gray-700 font-medium">
                World-Class Services
              </span>
            </div>
          </div>

          <button className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 transition">
            Discover More &#x2192;
          </button>
        </div>
      </div>
     </section>
    <Travelsection/>
    <Statspage/>
    <Meettourguide/>
    <Testimonial/>
    <Instagram/>
    </div>
  );
};

export default AboutPage;
