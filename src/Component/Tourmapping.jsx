import React from 'react'
import { MdOutlineVerified } from 'react-icons/md'

const Tourmapping = () => {
  return (
    <section className='mt-6'>
      <div>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>View In Map</h1>
      </div>
   <div className='mt-3 w-full'> 
    <div className='relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg'>
 <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.406655601404!2d3.9128883747620358!3d7.420166792590282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039939aaf18b98d%3A0x7d0e36d83cbc669e!2sAppClick%20ICT%20Academy!5e0!3m2!1sen!2sng!4v1756289970889!5m2!1sen!2sng"
  className='absolute top-0 left-0 w-full h-full'
  width="720"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map"
></iframe>
    </div>

   </div>

    
    </section>
  )
}

export default Tourmapping
