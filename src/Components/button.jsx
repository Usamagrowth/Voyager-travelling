import React from "react";

const AnimatedButton = ({ text = "Contact Us →", delay = 650, onClick }) => {
  return (
    <button
      className="relative bg-teal-500 overflow-hidden px-6 py-3 rounded-full font-bold group"
      data-aos="flip-up"
      data-aos-delay={delay}
      onClick={onClick}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
    </button>
  );
};

export default AnimatedButton;
