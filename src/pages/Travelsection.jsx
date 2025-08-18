import React from 'react'

const Travelsection = () => {
  return (
    <div>
      <section>
        {/* Section for Are you Ready */}
<div className="relative mt-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center 
  bg-[url('https://images.unsplash.com/photo-1680225571287-c165e7ed7ed5?q=80&w=870&auto=format&fit=crop')] 
  bg-cover bg-center h-[400px] rounded-lg shadow-lg overflow-hidden">

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Left Column - Text */}
  <div className="relative z-10 flex-1 p-6 md:p-12 text-white flex flex-col justify-center">
    <p className="text-teal-400 text-lg font-bold mb-2">Are you Ready To Travel?</p>
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      World Leading Online Tour Booking Platform
    </h1>
    <p className="text-sm md:text-base text-gray-200">
      There are many variations of passages of Lorem Ipsum available, 
      but the majority have suffered alteration in some form, by injected humour, 
      or randomised words which don't look even slightly believable.
    </p>
  </div>

  {/* Right Column - Image */}
  <div className="relative z-10 flex-1 h-full">
    <img 
      src="https://turmet-react.vercel.app/assets/img/man-image.png"
      alt="Travel" 
      className="object-cover"
    />
  </div>
</div>

     
      </section>
    </div>
  )
}

export default Travelsection
