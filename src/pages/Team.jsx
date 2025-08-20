import React from "react";
import { FiShare2 } from "react-icons/fi";
import { FaXTwitter,FaInstagram,FaLinkedinIn,FaFacebookF } from "react-icons/fa6";
const teamMembers = [
  {
    name: "Esther Howard",
    role: "Tourist Guide",
    image: "https://turmet-react.vercel.app/assets/img/team/01.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Tourist Guide",
    image: "https://turmet-react.vercel.app/assets/img/team/02.jpg",
  },
  {
    name: "Theresa Web",
    role: "Tourist Guide",
    image: "https://turmet-react.vercel.app/assets/img/team/03.jpg",
  },
  {
    name: "Floyd Miles",
    role: "Tourist Guide",
    image: "https://turmet-react.vercel.app/assets/img/team/04.jpg",
  },
  {
    name: "Courtney Henry",
    role: "Tourist Guide",
    image: "https://turmet-react.vercel.app/assets/img/team/05.jpg",
  },
  {
    name: "Cody Fisher",
    role: "Tourist Guide",
    image: "https://turmet-react.vercel.app/assets/img/team/06.jpg",
  },
  {
    name: "Guy Hawkins",
    role: "Tourist Guide",
    image: "https://turmet-react.vercel.app/assets/img/team/07.jpg",
  },
  {
    name: "Jane Cooper",
    role: "Tourist Guide",
    image: "https://turmet-react.vercel.app/assets/img/team/08.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-10 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16 max-w-7xl mx-auto ">
         {teamMembers.map((member, index) => (
        <article
          key={index}
          style={{ backgroundImage: `url(${member.image})` }}
          className={`relative  bg-cover h-[300px] w-full   rounded-2xl shadow-lg `}
        >
          {/* White info box */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-xl px-6 py-6 w-[85%] shadow-md">
            <h3 className="text-[1.25rem] font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>

            {/* Share button */}
          </div>

          <div className="relative group">
  {/* Share button */}
  <button className="absolute bottom-14 right-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-blue-600 transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 
           9.566-5.314m-9.566 7.5 
           9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 
           2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 
           3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      />
    </svg>
  </button>

  {/* Hover menu (hidden until hover) */}
  <div
    className="absolute right-4 bottom-28 flex flex-col gap-2 
               opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
               transition-all duration-300 origin-bottom"
  >
    <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-teal-500/70"><FaXTwitter size={16} /></a>
    <a href="#" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-2 rounded-full hover:bg-teal-500/70"><FaInstagram size={16} /></a>
    <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-teal-500/70"><FaLinkedinIn size={16} /></a>
    <a href="#" className="bg-blue-500 text-white p-2 rounded-full hover:bg-teal-500/70"><FaFacebookF size={16} /></a>
  </div>
</div>




        
            
        </article>
      ))}
      </div>
     
    </section>
  );
};

export default Team;