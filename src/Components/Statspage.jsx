import React from 'react'
import { FaUsers, FaGlobe, FaPlaneDeparture, FaHotel } from 'react-icons/fa'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Statspage = () => {
  const stats = [
    { id: 1, icon: <FaUsers size={40} />, number: 100000, suffix: "+", label: "Our Explorers" },
    { id: 2, icon: <FaGlobe size={40} />, number: 5000, suffix: "+", label: "Destinations" },
    { id: 3, icon: <FaPlaneDeparture size={40} />, number: 10000, suffix: "+", label: "More Trips" },
    { id: 4, icon: <FaHotel size={40} />, number: 2000, suffix: "+", label: "Luxury Hotels" }
  ];

  // detect when section is visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
   <section ref={ref} className="bg-teal-500 overflow-hidden">
  <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-4 sm:px-6 md:px-8 py-8">
    {stats.map((eachitem) => (
      <div 
        key={eachitem.id} 
        className="transition-transform duration-700 ease-in-out hover:scale-105"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-teal-900 rounded-full border-2 border-white mx-auto shadow-md text-white">
          {eachitem.icon}
        </div>
        <h3 className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
          {inView ? (
            <CountUp end={eachitem.number} duration={3} separator="," />
          ) : (
            "0"
          )}
          {eachitem.suffix}
        </h3>
        <p className="text-white/80 font-semibold mt-2">{eachitem.label}</p>
      </div>
    ))}
  </div>
</section>

  )
}

export default Statspage
