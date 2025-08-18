
import React from 'react'

function Activities() {
  return (
    <div>
        <section>
            <div >
                <div className='bg-slate-600 h-96'>
                    <div className='space-y-9 py-40 px-[40%]'>
                        <h2 className='text-white text-6xl text'>Activities</h2>
                        <ul className='px-4 m-8 text-1xl text-white flex space-x-2 border w-[160px] rounded-full p-2'>
                          <li>
                            Home
                          </li>
                          <li>

                          </li>
                          <li>
                            Activities
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className='my-20'>
            <div className='lg:flex justify-center gap-7 '>
                                   
                    <div>
                        <div className=" bg-[url('./assets/cal.jpg')] rounded-xl w-80 h-72 py-7 px-4">                                                    
                            <div className='bg-[#0dcaf0] text-white w-fit px-2 rounded-xl '>(5 Trips)</div>
                        </div>
                        <div className="mb-7 mt-4">
                            <h4>California</h4>
                        </div>
                    </div>
                    <div>
                        <div className=" bg-[url('./assets/cal.jpg')] rounded-xl w-80 h-72 py-7 px-4">                                                    
                            <div className='bg-[#0dcaf0] text-white w-fit px-2 rounded-xl '>(5 Trips)</div>
                        </div>
                        <div className="mb-7 mt-4">
                            <h4>California</h4>
                        </div>
                    </div>
                     <div>
                        <div className=" bg-[url('./assets/cal.jpg')] rounded-xl w-80 h-72 py-7 px-4">                                                    
                            <div className='bg-[#0dcaf0] text-white w-fit px-2 rounded-xl '>(5 Trips)</div>
                        </div>
                        <div className="mb-7 mt-4">
                            <h4>California</h4>
                        </div>
                    </div>                   
                
            </div>
        <div className='lg:flex  justify-center gap-7'>
                                   
                    <div>
                        <div className=" bg-[url('./assets/cal.jpg')] rounded-xl w-80 h-72">                                                    
                            <div>(5 Trips)</div>
                        </div>
                        <div>
                            <h4>California</h4>
                        </div>
                    </div>
                    <div> 
                        <div className=" bg-[url('./assets/cal.jpg')] rounded-xl w-80 h-72">                                                    
                            <div>(5 Trips)</div>
                        </div>
                        <div>
                            <h4>California</h4>
                        </div>
                    </div>
                     <div>
                        <div className=" bg-[url('./assets/cal.jpg')] rounded-xl w-80 h-72">                                                    
                            <div>(5 Trips)</div>
                        </div>
                        <div>
                            <h4>California</h4>
                        </div>
                    </div>                    
                
            </div>
            
        </section>
    </div>
  )
}

export default Activities