// Team.jsx
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
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11 p-20">
      {teamMembers.map((member, index) => (
        <article
          key={index}
          
  style={{ backgroundImage: `url(${member.image})` }}
          className={`relative  bg-cover h-[330px] w-full max-w-[400px] mx-auto rounded-2xl shadow-lg `}
        >
          {/* White info box */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-xl px-6 py-8 w-[90%] shadow-md">
            <h3 className="text-[1.25rem] font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>

            {/* Share button */}
            <button className="absolute -top-4 right-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-blue-600 transition">
             <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" 
              className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>

            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Team;
