import AboutSection from "../Components/AboutSection"
import Counter from "../components/Counter"
import FlightBooking from "../Components/FlightBooking"
import HeroBanner from "../components/HeroBanner"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <FlightBooking></FlightBooking>
      <AboutSection></AboutSection>
      <Counter></Counter>
    </div>
  )
}

export default Home