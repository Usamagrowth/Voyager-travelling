
import Accommodation from "../Component/Accommodation"
import RightCards from "../Component/Rightside"
import Tourdata from "../Component/Tourdata"
import TourDetails from "../Component/TourDetails"
import Button from "../Component/Utilities/Button"



const Home = () => {
  return (
    <section className="w-full px-2">
      <div className="flex  flex-col md:flex-row gap-6 w-full">
        <div className=" min-w-0">
          <Tourdata />
        </div>
        <div>
          <RightCards />
        </div>
      </div>

      <div>
        <Button/>
      </div>
      {/* <TourDetails/> */}
    </section>
  )
}

export default Home