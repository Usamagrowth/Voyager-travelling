import { FaCheckCircle } from "react-icons/fa";
import Travelsection from "../Components/Travelsection";
import Statspage from "../Components/Statspage";
import Meettourguide from "../Components/Meettourguide";
import GlobalHeader from "../Components/GlobalHeader";
import AboutSection from "../Components/AboutSection";
import FooterSocial from "../Components/FooterSocial";
import TestinomySection from "../Components/TestinomySection";
import FooterSection from "../Components/FooterSection";

const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      <GlobalHeader headerTitle="About Us" headerLink="About Us"/>
      <AboutSection></AboutSection>
      <Travelsection/>
      <Statspage/>
      <Meettourguide/>
      <TestinomySection/>
      <FooterSocial/>
      <FooterSection/>
    </div>
  );
};

export default AboutPage;
