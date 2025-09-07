import React from "react";
import { FiShare2 } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const guides = [
  {
    id: 1,
    name: "Isaac Brown",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/02.jpg",
  },
  {
    id: 2,
    name: "Isreal Sophia",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/01.jpg",
  },
  {
    id: 3,
    name: "Theresa Web",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/03.jpg",
  },
  {
    id: 4,
    name: "Floyd Miles",
    role: "Tourist Guide",
    img: "https://turmet-react.vercel.app/assets/img/team/04.jpg",
  },
];

const Guides = () => {
  return (
    <section className="bg-[beige] py-10 px-6 pl-12">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="rounded-2xl shadow-lg overflow-visible relative"
          >
            
            <div className="h-64 rounded-t-2xl overflow-hidden">
              <img
                src={guide.img}
                alt={guide.name}
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 
                            bg-white rounded-2xl shadow-md p-4 flex items-center justify-between w-[85%]">
              <div>
                <h3 className="font-bold text-lg text-gray-900">{guide.name}</h3>
                <p className="text-gray-500 text-sm">{guide.role}</p>
              </div>

            
              <div className="relative group">
                <button className="bg-cyan-500 p-3 rounded-full text-white hover:bg-cyan-600 transition">
                  <FiShare2 size={18} />
                </button>

              
<div className="absolute right-0 bottom-full mb-2 flex flex-col gap-2 
                opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                transition-all duration-500 origin-bottom-right">
  <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-teal-500/70"><FaXTwitter size={16} /></a>
  <a href="#" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-2 rounded-full hover:bg-teal-500/70"><FaInstagram size={16} /></a>
  <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-teal-500/70"><FaLinkedinIn size={16} /></a>
  <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-teal-500/70"><FaFacebookF size={16} /></a>
</div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Guides;
