import AboutSection from "../Components/AboutSection"
import Counter from "../components/Counter"
import FeaturedTourSection from "../Components/FeaturedTourSection"
import FlightBooking from "../Components/FlightBooking"
import HeroBanner from "../components/HeroBanner"
import OurDestinationSection from "../Components/OurDestinationSection"
import OurStorySection from "../Components/OurStorySection"
import WhyChooseUsSection from "../Components/WhyChooseUsSection"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <FlightBooking></FlightBooking>
      <AboutSection></AboutSection>
      <Counter></Counter>
      <OurDestinationSection></OurDestinationSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      <OurStorySection></OurStorySection>
      <FeaturedTourSection></FeaturedTourSection>
    </div>
  )
}

export default Home