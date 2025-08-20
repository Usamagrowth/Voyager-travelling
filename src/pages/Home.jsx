
import AboutUs from "./About"

import Rightside from "./Rightside"
import Tour from "./Tour"
import Tourdata from "./Tourdata"

import HeroBanner from "../components/HeroBanner"



const Home = () => {
  return (
    <section>
      
   <Tourdata />
   <Rightside />
     <AboutUs/>
     <HeroBanner/>
    </section>




  )
}

export default Home