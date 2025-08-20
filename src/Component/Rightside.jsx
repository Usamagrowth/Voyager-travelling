import DestinationCard from "./DestinationCard"

function RightCards() {
  return (
    <div>
      <div className='w-[30%] border-[2px] items-center px-2'>
        <article className='border-[1px]  border-black-600 rounded-[12px] w-[400px] h-[450px] px-8 overflow-hidden'>
            <h1 className='text-2xl text-black-800  px-4 py-6 '>Destination Category</h1>
     
             <div className=" flex flex-col  divide-y-2 px-4 ">
    <DestinationCard 
    className="py-4"
    LocationTitle="Europe"
    LocationId="04"
    />
    <DestinationCard
     className="py-4"
    LocationTitle="Europe"
    LocationId="04"
    />
    <DestinationCard
     className="py-4"
    LocationTitle="Europe"
    LocationId="04"
    />
    <DestinationCard
    className="py-4"
    LocationTitle="Europe"
    LocationId="04"
    />
    <DestinationCard
    className="py-4"
    LocationTitle="Europe"
    LocationId="04"
    />
    <DestinationCard
     className="py-4"
    LocationTitle="Europe"
    LocationId="04"
    />
  </div>

</article>
  
     </div>
    </div>
  )
}

export default RightCards
