import React from 'react'

const ActivitiesPageCard = ({activitiesCardBg, activitiesCardTrip, activitiesCardTitle }) => {
  return (
    <div>
        <div className="rounded-xl w-[350px] h-96 py-7 px-4 bg-cover bg-center" style={{backgroundImage: `url(${activitiesCardBg})`}}>                                                    
            <div  className='bg-[#0dcaf0] text-white w-fit px-2 rounded-xl '>({activitiesCardTrip}) </div>
        </div>
        <div className="mb-7 mt-4">
            <a href="#" rel="noopener noreferrer">
            <h4 className=" cursor-pointer hover:text-[#0dcaf0] text-[20px] font-bold">{activitiesCardTitle}</h4> 
            </a>
        </div>
    </div>
  )
}

export default ActivitiesPageCard