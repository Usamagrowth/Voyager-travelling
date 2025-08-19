import AboutUs from "../components/AboutUs"
import Counter from "../components/Counter"
import HeroBanner from "../components/HeroBanner"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutUs></AboutUs>
      <Counter></Counter>
    </div>
  )
}

export default Home