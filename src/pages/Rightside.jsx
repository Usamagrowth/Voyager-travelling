import DestinationCard from "./DestinationCard"

function RightCards({Destinatin}) {
  return (
    <div>
      <div className='w-[30%] space-y-10 border-[2px] items-center px-2'>
        <article className='border-[1px] border-black-600 rounded-[12px] w-[400px] h-[450px] px-8 overflow-hidden'>
            <h1 className='text-2xl text-black-800 ml-4 mb-6'>{Destinatin}</h1>
            

             <div className="flex flex-col px-4 py-2">
    <DestinationCard 
    LocationTitle="Europe"
    LocationId="04"
    />
    <DestinationCard/>
    <DestinationCard/>

   
    <hr className="border-t  border-black-600 mt-4" />
  </div>

</article>
  
     </div>
    </div>
  )
}

export default RightCards
