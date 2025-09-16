import { FaArrowRight } from "react-icons/fa6"

const OurDestinationCard = ({destinationImage, destinationTitle, destinationNo}) => {
  return (
    <article className="flex items-end justify-center bg-black/30 bg-blend-overlay bg-cover bg-center h-[400px] w-[100%] rounded-2xl" style={{backgroundImage: `url(${destinationImage})`}}>
      <div className="mb-10 space-y-4 z-10 flex gap-7">
        <div>
          <h3 className="text-white text-[1.5rem] font-[700]">{destinationTitle}</h3>
        </div>
      </div>
    </article>
  )
}

export default OurDestinationCard