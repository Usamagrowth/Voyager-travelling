
<<<<<<< HEAD
import Accommodation from "../Component/Accommodation"
import RightCards from "../Component/Rightside"
import Tourdata from "../Component/Tourdata"
import TourDetails from "../Component/TourDetails"
import Button from "../Component/Utilities/Button"
=======
import Rightside from "./Rightside"
import Tour from "./Tour"
import Tourdata from "./Tourdata"
>>>>>>> 05e06f6191dac280f78f050f41ea5c8f9d34b313



const Home = () => {
  return (
<<<<<<< HEAD
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
=======
    <section>
   <Tourdata />
   <Rightside />

import HeroBanner from "../components/HeroBanner"

const Home = () => {
  return (
    <div>

    </div>

>>>>>>> 05e06f6191dac280f78f050f41ea5c8f9d34b313
  )
}

export default Home