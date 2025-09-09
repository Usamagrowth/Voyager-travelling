import { article } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react';
import { BsStarFill } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import GlobalHeader from '../Components/GlobalHeader';




const ActivitiesDetailsPage = () => {

     const [showMobileNav, SetShowmobilenav] = useState(false);

    const togleMobileNav= () => {
        SetShowmobilenav(!showMobileNav);
    }

  return (
    <div>
      <GlobalHeader headerTitle="Activities Details" headerLink="Activities Details"/>
    
    <section className='pt-20 pb-20'>
        <div className='container pl-72 '>
          <div className=' flex justify-between '>
            <div className=''>
              <h3 className='text-3xl '>The Montcalm At Brewery Japan City</h3>
              <ul className='flex gap-5 items-center py-4'>
                <li>(16 Reviews)</li>
                <li className='flex text-red-400'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> </li>
                <li>California</li>
              </ul>
            </div >
            <ul className=''>
                <li className='flex border-[1px] border-[#1CA8CB] justify-center py-3 w-28 h-14 rounded-xl '> <a href='#'> Share</a> <BsShare className='text-[#1CA8CB] my-1 mx-1' /></li>
            </ul>
          </div>
          <hr className='mb-7 mt-7'></hr>
          <div className='container '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 '>
               <div className='flex items-center gap-6' >  
                   <div >                    
                   <p>okpo</p>                    
                    </div>
                    <div className='border-r-2 '>
                    <h6 className='mr-20 text-lg'>Location</h6>
                    <span className='text-sm text-gray-400'>California</span>                    
                  </div>
               </div>   
                <div  className='flex items-center gap-6'> 
                    <div >                    
                     <p>okpo</p>                    
                    </div>
                     <div className='border-r-2 '>
                       <h6 className='mr-10 text-lg'>Activities Type</h6>
                       <span className='text-sm text-gray-400'>Adventure</span>                    
                     </div>
                </div>
                     <div  className='flex items-center gap-6' >  
                        <div className='ml-5'>                    
                        <p>okpo</p>                    
                        </div>
                        <div className='border-r-2'>
                        <h6 className='mr-16 file:text-lg'>Activate Day</h6>
                        <span className='text-xs text-gray-400'>Fev 6 - 6</span>                    
                        </div>
                     </div>

                       <div  className='flex items-center gap-6' > 
                         <div className='ml-8'>                     
                         <p>okpo</p>                    
                         </div>
                         <div >
                         <h6 className=' text-lg'>Traveler</h6>
                          <span className='text-xs text-gray-400'>1</span>                    
                         </div>
                       </div>
                <div className='flex justify-end'>
                  <div>
                  <button className='border-2 h-12 w-32 rounded-full'>Explore flight</button>
                  </div>
                </div>                
            </div>
            <hr className='mt-7' />
          </div>
          <div className='flex mt-16 gap-10'>
              <div className=''>
              <div className='w-[830px]'>
                <h3 className='text-4xl'>Overview</h3>
                <div className=' mt-4'>
                    <p className=''>Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. ut enim ad
                    minim veniam made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo 
                    consequat duis aute irure and dolor in reprehenderit.Nullam semper quam mauris nec mollis felis aliquam eu ut non 
                     gravida mi phasellus.</p>
                    <div className='text-3xl mt-4'>Top Highlights</div>
                     <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 gap-6 justify-normal mb-10'>
                        <div className='' >                        
                           
                               <div className='flex gap-2 items-center'>
                                  <span><BsCheckCircle className='text-cyan-300' /></span><p> Duis ultricies sapien a volutpat varius. Maecenas</p>
                                </div>
                             <div className='flex gap-2 items-center'>
                                <BsCheckCircle className='text-cyan-300'  /> <p>Blandit enim. Pellentesque ultrices, justo non</p>
                             </div>
                             <div className='flex gap-2 items-center'>
                                <BsCheckCircle  className='text-cyan-300' /> <p> Nunc in quam in quam placerat rhoncus quis</p>
                             </div>
                             <div className='flex gap-2 items-center'>
                               <BsCheckCircle className='text-cyan-300'  /><p> Laoreet sagittis posuere, dolor nibh imperdiet</p> 
                             </div>
                             <div className='flex gap-2 items-center'>
                                <BsCheckCircle className='text-cyan-300'  /><p> Condimentum lacinia nisl vitae vehicula.</p>
                             </div>                         
             
                        </div>
                        <div>
                           <div className='flex gap-2 items-center'>
                              <BsCheckCircle className='text-cyan-300' /> <p> Duis ultricies sapien a volutpat varius. Maecenas</p>
                           </div>
                           <div className='flex gap-2 items-center'>
                            <BsCheckCircle className='text-cyan-300' /> <p> Blandit enim. Pellentesque ultrices, justo non</p>
                           </div>
                           <div className='flex gap-2 items-center'>
                              <BsCheckCircle className='text-cyan-300'  /> <p>Nunc in quam in quam placerat rhoncus quis</p>
                           </div>                           
                           <div className='flex gap-2 items-center'>
                             <BsCheckCircle className='text-cyan-300' /> <p>Laoreet sagittis posuere, dolor nibh imperdiet</p>
                           </div>
                           <div className='flex gap-2 items-center'>
                             <BsCheckCircle className='text-cyan-300' /> <p>Condimentum lacinia nisl vitae vehicula.</p>
                           </div>                                       
                       </div>
                    </div>
                 </div>

                 </div>
                  <div className='bg-stone-100 grid grid-cols-1 w-[900px] sm:grid-cols-2 lg:grid-cols-4 space-y-6 rounded-xl space-x-4 p-6 '>
                    <div className='flex items-center gap-5 pt-6 pl-6'>

                        <div >
                          <p>kkpp</p>
                       </div>
                       <div >
                         <h3>Accommodation</h3>
                         <span>5 Stare Hotel</span>
                      </div>
                    </div>
                   
                   <div className='flex items-center gap-5'>
                        <div>
                          <p>kkpp</p>
                       </div>
                       <div >
                         <h3>Admission Free</h3>
                         <span>No</span>
                      </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                          <p>kkpp</p>
                       </div>
                       <div >
                         <h3>Arrival City</h3>
                         <span>London</span>
                      </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                          <p>kkpp</p>
                       </div>
                       <div >
                         <h3>Language</h3>
                         <span>English</span>
                      </div>
                    </div>  
                    <div className='flex items-center gap-5'>
                        <div>
                          <p>kkpp</p>
                       </div>
                       <div >
                         <h3>Hotel Transfer</h3>
                         <span>Available</span>
                      </div>
                    </div>        
                    <div className='flex items-center gap-5'>
                        <div>
                          <p>kkpp</p>
                       </div>
                       <div >
                         <h3>Next Tour</h3>
                         <span>Available</span>
                      </div>
                    </div>  
                    <div className='flex items-center gap-5'>
                        <div>
                          <p>kkpp</p>
                       </div>
                       <div >
                         <h3>01 Guide</h3>
                         <span>Guided</span>
                      </div>
                    </div>  
                    <div className='flex items-center gap-5'>
                        <div>
                          <p>kkpp</p>
                       </div>
                       <div >
                         <h3>Maximum Age</h3>
                         <span>60</span>
                      </div>
                    </div>                          
                  </div>
                                          
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 '>
                    <div className="bg-[url('./assets/activitDetailBallonsiting.jpg')] h-[340px] w-96 mt-9 rounded-xl  ">
                     
                    </div>
                    <div>
                        <h2 className='mt-16 mb-5 text-2xl'>
                            Included And Excluded
                        </h2>
                         
                         <div  className='gap-y-4 flex flex-col'>
                           <div className='flex items-center gap-2'>
                            <BsCheckCircle className='text-cyan-300'  /> <p>Duis ultricies sapien a volutpat varius. Maecenas</p>
                           </div>
                           <div className='flex items-center gap-2'>
                            <BsCheckCircle className='text-cyan-300'  /> <p>Blandit enim. Pellentesque ultrices, justo non</p>
                           </div>
                           <div className='flex items-center gap-2'>
                            <BsCheckCircle className='text-cyan-300'  /> <p>Nunc in quam in quam placerat rhoncus quis</p>
                           </div>
                           <div className='flex items-center gap-2'>
                            <BsCheckCircle className='text-cyan-300'  /> <p>Duis ultricies sapien a volutpat varius. Maecenas</p>
                           </div>
                           <div className='flex items-center gap-2'>
                            <BsCheckCircle className='text-cyan-300'  /> <p>Blandit enim. Pellentesque ultrices, justo non</p>
                           </div>
                           <div className='flex items-center gap-2'>
                            <BsCheckCircle className='text-cyan-300'  /> <p>Nunc in quam in quam placerat rhoncus quis</p>
                           </div>

                         </div>                    
                    </div>
                </div>               
                    <div className='flex flex-col gap-5 w-[900px]'>
                             <div className='mt-10 mb-4'>
                                <h3 className='text-3xl'>Tour Plan</h3>                                
                             </div>
                             <div className='border rounded-xl shadow-md p-5 space-y-5'>
                                 <div className='flex  justify-between'>
                                  <p className='text-lg font-semibold'> How Do I Book A Tour With Your Agency?</p> <BsChevronDoubleRight onClick={togleMobileNav}  className="text-black"/>
                                 </div>
                                 { showMobileNav && (
                                  <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
                                     <div > 
                                      <span className='text-[#6c757d]'>Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante </span>
                                     </div>
                                     <div className="bg-[url('./asset/thai-rw3.jpg')] w-96">
                                       
                                     </div>

                                  </div>)}
                             </div>

                              <div className='border rounded-xl shadow-md p-5 space-y-5'>
                                 <div className='flex  justify-between'>
                                  <p className='text-lg font-semibold'> What Payment Methods Do You Accept?</p> <BsChevronDoubleRight onClick={togleMobileNav}  className="text-black"/>
                                 </div>
                                  { showMobileNav && (
                                  <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
                                     <div > 
                                      <span className='text-[#6c757d]'>Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante </span>
                                     </div>
                                     <div className="bg-[url('./asset/thai-rw3.jpg')] w-96">
                                       
                                    </div>

                                  </div>)}
                             </div>

                              <div className='border rounded-xl shadow-md p-5 space-y-5'>
                                 <div className='flex  justify-between'>
                                  <p className='text-lg font-semibold'> Can I Customize My Travel Itinerary?</p> <BsChevronDoubleRight onClick={togleMobileNav}  className="text-black"/>
                                 </div>
                                   { showMobileNav && ( 
                                    
                                  <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
                                    
                                     <div > 
                                      <span className='text-[#6c757d]'>Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante </span>
                                     </div>
                                     <div className="bg-[url('./asset/thai-rw3.jpg')] w-96">
                                       
                                    </div>

                                  </div>)}
                             </div>

                              <div className='border rounded-xl shadow-md p-5 space-y-5'>
                                 <div className='flex  justify-between'>
                                  <p className='text-lg font-semibold'> What Is Your Cancellaton Policy?</p> <BsChevronDoubleRight onClick={togleMobileNav}  className="text-black"/>
                                 </div>
                                 { showMobileNav && (
                                  <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
                                     <div > 
                                      <span className='text-[#6c757d]'>Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante </span>
                                     </div>
                                     <div className="bg-[url('./asset/thai-rw3.jpg')] w-96">
                                       
                                    </div>

                                  </div>)}
                             </div>
                    </div>
                    <div className='mt-6'>                                                                               
                      <h2 className='text-3xl'>View In Map</h2>
                    </div>
                    <div className='mt-4 rounded-xl bg-zinc-200 h-[500px] w-[900px]'>
                        <div>

                        </div>
                    </div>
                <div className='mt-6'>
                    <p>Client Review</p>
                </div>
                <div className='w-[900px]'>
                <div className='mb-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-center  '> 
                   <div className='image'>

                   </div>
                    <div className='space-y-3 w-[600px]'>
                       <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                      </div>              
                       <h3 className='font-semibold text-2xl'> Shikhon Islam</h3>
                       <p> Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                    </div>
                     <div className='flex justify-end'>
                       <p>Reply</p>
                     </div>
               </div>
               <div className='ml-36 mb-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-center'> 
                   <div className='image'>

                   </div>
                    <div className='space-y-3 w-[500px]'>
                       <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                      </div>              
                       <h3 className='font-semibold text-2xl'> Shikhon Islam</h3>
                       <p> Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                    </div>
                     <div className='flex justify-end'>
                       <p>Reply</p>
                     </div>
               </div>
               <div className='mb-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 justify-center'> 
                   <div className='image'>

                   </div>
                    <div className='space-y-3 w-[600px]'>
                       <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                      </div>              
                       <h3 className='font-semibold text-2xl'> Shikhon Islam</h3>
                       <p> Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                    </div>
                     <div className='flex justify-end'>
                       <p>Reply</p>
                     </div>
               </div>
               </div>
               <div className='bg-slate-200  p-8 w-[900px]'>
                  <div>
                    <h3>Add Your Review</h3>
                  </div>
                    <div className='grid  lg:grid-cols-3 gap-y-5 mt-6'> 
                      <div className='flex items-center gap-2'>
                        <h2>Services</h2>
                        <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                        </div>
                      </div>
                       <div className='flex items-center gap-2'>
                        <h2>Services</h2>
                        <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                        </div>
                      </div>
                       <div className='flex items-center gap-2'>
                        <h2>Services</h2>
                        <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                        </div>
                      </div>
                       <div className='flex items-center gap-2'>
                        <h2>Services</h2>
                        <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                        </div>
                      </div>
                       <div className='flex items-center gap-2'>
                        <h2>Services</h2>
                        <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                        </div>
                      </div>
                       <div className='flex items-center gap-2'>
                        <h2>Services</h2>
                        <div className='flex text-[#ffb700]'> 
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <input className='w-[400px] h-12 p-6 rounded-xl' type="text" placeholder='Your Name' />
                        </div>
                         <div>
                            <input className='w-96 h-12 p-6 rounded-xl' type="text" placeholder='Your Phone' />
                        </div>
                    </div>
                      <div className='mt-6 mb-6'>
                            <input className='w-[820px] h-12 p-6 rounded-xl' type="text" placeholder='Your Name' />
                     </div>
                     <div >
                        <textarea className='w-[820px] rounded-xl p-6' name="comment" id="" placeholder='Your Comments...'> </textarea>
                     </div>
               </div>
               
               
            </div>
                <div className=' border-2 rounded-xl w-[400px] h-[400px] p-6'>
                     <div className='mb-5'>
                     <h3>Contact For Booking</h3>
                     </div>
                       <div className='space-y-4'>
                         <div>
                            <input className=' bg-gray-200 h-12 p-6 rounded-xl' type="text" placeholder='Your Name' />
                         </div>
                         <div>
                            <input className=' bg-gray-200 h-12 p-6 rounded-xl' type="text"/>
                         </div>
                         <div >
                            <textarea className='w-[250px] bg-gray-200 rounded-xl p-6' name="call" id="" placeholder='Type Comments...'> </textarea>
                         </div>
                     </div>
                     <div className='mt-4'>
                        <button className='border-2 h-12 w-64 rounded-xl'>Send Now</button>
                     </div>
                </div>

        </div>
     </div>  
       
    </section>
    </div>
  )
}

export default ActivitiesDetailsPage