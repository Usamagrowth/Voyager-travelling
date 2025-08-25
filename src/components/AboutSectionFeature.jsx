import { GiCheckMark } from "react-icons/gi"

const AboutSectionFeature = ({featureTitle, featureText}) => {
  return (
    <div className="flex items-start gap-4">
        <div className="about-icon">
            <span><GiCheckMark className="text-[#1CA8CB] text-3xl"/></span>
        </div>
        <div className="lg:flex gap-2">
            <h4 className="font-medium text-lg">{featureTitle}</h4>
            <p className="text-gray-600 text-sm md:text-base">
                {featureText}
            </p>
        </div>
    </div>
  )
}

export default AboutSectionFeature