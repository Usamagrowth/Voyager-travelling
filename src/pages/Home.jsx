

import Accommodation from "../Component/Accommodation"
import RightCards from "../Component/Rightside"
import Tourdata from "../Component/Tourdata"
import TourDetails from "../Component/TourDetails"
import Button from "../Component/Utilities/Button"



const Home = () => {
  return (
    <section className="w-full px-2">
      {/* <div className="flex  flex-col md:flex-row gap-6 w-full">
        <div className="flex min-w-0">
          <Tourdata />
        </div>
        <div>
          <RightCards />
        </div>
      </div>

      <div>
        <Button/>
      </div> */}
      <TourDetails/>
    </section>
  )
}

import AboutPage from "./About";
import Rightside from "./Rightside";
import Tour from "./Tour";
import Tourdata from "./Tourdata";

const Home = () => {
  return (
    <div>
      <AboutPage />
      {/* Add other components as needed */}
      {/* <Rightside /> */}
      {/* <Tour /> */}
      {/* <Tourdata /> */}
    </div>
  );
};

export default Home;


