import React from "react";
import { FaInstagram } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    name: "Beach",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Mountains",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "City",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Desert",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Forest",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Island",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
  },
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
     
      <div className="text-center mb-9">
        <h1 className="text-4xl font-bold text-gray-800">
          Follow <span className="text-teal-500">Instagram</span>
        </h1>
      </div>

      
      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto scrollbar-hide">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="relative w-40 h-32 md:w-auto md:h-48 rounded-xl overflow-hidden shadow-md flex-shrink-0 group"
          >
            <img
              src={destination.img}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-teal-500/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <FaInstagram className="text-white text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
