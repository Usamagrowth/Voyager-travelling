import React from 'react'

const Counter = () => {
  return (
    <section className="counter my-[150px] lg:p-[20px] px-[50px] m-auto bg-[#1CA8CB]">
            <div className="container">
                <div className="counter-wrapper px-[100px] py-[50px] max-[767px]:px-0">
                    <div className="counter-items min-[768px]:grid min-[768px]:grid-cols-4 max-[767px]:grid max-[767px]:grid-cols-3 max-[438px]:grid-cols-2 min-[768px]: gap-10  justify-between max-[1024px]:w-[100%]">
                        <div className="counter-content">
                            <h2 className='text-[52px] max-[767px]:text-[40px] max-[438px]:text-[35px] font-[700] text-white'><span className="count">26</span>+</h2>
                            <p className='text-white lg:text-[18px] text-[14px] -mt-2'>Years of Experiences</p>
                        </div>
                        <div className="counter-content">
                            <h2 className='text-[52px] max-[767px]:text-[40px] max-[438px]:text-[35px] font-[700] text-white'><span className="count">3.6</span>+</h2>
                            <p className='text-white lg:text-[18px] text-[14px] -mt-2'>Yearly Customers</p>
                        </div>
                        <div className="counter-content">
                            <h2 className='text-[52px] max-[767px]:text-[40px] max-[438px]:text-[35px] font-[700] text-white'><span className="count">46</span>+</h2>
                            <p className='text-white lg:text-[18px] text-[14px] -mt-2'>Visitors daily</p>
                        </div>
                        <div className="counter-content">
                            <h2 className='text-[52px] max-[767px]:text-[40px] max-[438px]:text-[35px] font-[700] text-white'><span className="count">56</span>+</h2>
                            <p className='text-white lg:text-[18px] text-[14px] -mt-2'>Awards & honors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Counter