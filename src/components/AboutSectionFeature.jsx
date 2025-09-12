import { GiCheckMark } from "react-icons/gi"

const AboutSectionFeature = ({sectionIcon, featureTitle, featureText}) => {
  return (
    <div className="flex items-start gap-4">
        <div className="about-icon">
            <span className="bg-[#1CA8CB] w-20 h-20 rounded-full">
              <img src={sectionIcon} alt="" />
            </span>
        </div>
        <div className="lg:flex gap-2">
            <h4 className="font-[700] text-lg">{featureTitle}</h4>
            <p className="text-gray-600 text-sm md:text-base">
                {featureText}
            </p>
        </div>
    </div>
  )
}

export default AboutSectionFeature