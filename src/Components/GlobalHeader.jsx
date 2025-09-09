import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const GlobalHeader = ({headerTitle, headerLink}) => {
  return (

  <section>
      <section class="relative min-h-[90vh] w-full overflow-hidden inset-0 min-w-full bg-cover bg-center bg-[url(https://turmet-react.vercel.app/assets/img/breadcrumb/breadcrumb.jpg)] mb-20">

      <div className="relative z-[2000] px-6 pt-6 md:pt-6">
        <Navbar/>
      </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 pt-16">
          <div className="text-white">
            <h2 className="text-[3.7rem] font-[800] mb-5">{headerTitle}</h2>
            <div className='flex justify-center'>
              <div className="flex items-center justify-center space-x-2 border rounded-full bg-white/20 backdrop-blur w-fit px-5 h-[50px]">
                <Link to="/">
                <span className="cursor-pointer">Home</span>
                </Link>
                <FaAnglesRight />
                <span>{headerLink}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  </section>
  )
}

export default GlobalHeader