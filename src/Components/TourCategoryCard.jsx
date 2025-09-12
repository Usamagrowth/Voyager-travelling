import DestinationCard from "./utilities/DestinationCard"

function TourCategoryCard() {
  return (
    <div className="py-4">
      <div className='grid gap-6 
                  sm:grid-cols-1 
                  md:grid-cols-1 
                  lg:grid-row-1 
                  '>
        <article className="border border-gray-300 rounded-[12px] w-full max-w-sm px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 px-2 py-4">
        Destination Category
      </h1>

      <div className="flex flex-col divide-y divide-gray-200">
        {["Canada", "Europe", "France", "Indonesia", "Nepal", "Maldives", "Dubai"].map(
          (place, idx) => (
            <div key={idx} className="flex justify-center py-4">
              <DestinationCard
                className="w-full text-center"
                LocationTitle={place}
                LocationId="04"
              />
            </div>
          )
        )}
      </div>
    </article>

    {/* Activities */}
    <article className="border border-gray-300 rounded-[12px] w-full max-w-sm px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 px-2 py-4">
        Activities
      </h1>

      <div className="flex flex-col divide-y divide-gray-200">
        {["Europe", "Canada", "France", "Indonesia", "Nepal", "Luxemburg", "Russia"].map(
          (activity, idx) => (
            <div key={idx} className="flex justify-center py-4">
              <DestinationCard
                className="w-full text-center"
                LocationTitle={activity}
                LocationId="04"
              />
            </div>
          )
        )}
      </div>
    </article>

    {/* Tour Type */}
    <article className="border border-gray-300 rounded-[12px] w-full max-w-sm px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 px-2 py-4">
        Tour Type
      </h1>

      <div className="flex flex-col divide-y divide-gray-200">
        {["Ivory Coast", "Netherland", "USA"].map((tour, idx) => (
          <div key={idx} className="flex justify-center py-4">
            <DestinationCard
              className="w-full text-center"
              LocationTitle={tour}
              LocationId="04"
            />
          </div>
        ))}
      </div>
    </article>
     </div>
    </div>
  )
}

export default TourCategoryCard
