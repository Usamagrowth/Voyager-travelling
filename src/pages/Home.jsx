
import AboutSection from "../Components/AboutSection"
import Counter from "../components/Counter"
import CtaSection from "../Components/CtaSection"
import FeaturedTourSection from "../Components/FeaturedTourSection"
import FlightBooking from "../Components/FlightBooking"
import FooterSocial from "../Components/FooterSocial"
import HeroBanner from "../components/HeroBanner"
import NewsArticleSection from "../Components/NewsArticleSection"
import OurDestinationSection from "../Components/OurDestinationSection"
import OurStorySection from "../Components/OurStorySection"
import TeamMemberSection from "../Components/TeamMemberSection"
import TestinomySection from "../Components/TestinomySection"
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
      <CtaSection></CtaSection>
      <TestinomySection></TestinomySection>
      <NewsArticleSection></NewsArticleSection>
      <FooterSocial></FooterSocial>
      <TeamMemberSection></TeamMemberSection>
    </div>
  )
}

export default Home

