const WhyChooseUsCard = ({stepId, stepTitle, stepText}) => {
  return (
    <div class="relative mb-10 z-10">
        <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
                <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#E1EFF3] text-[#1ca8cb] text-[1.5rem] font-bold">
                    {stepId}
                </div>
            </div>
            <div>
                <h4 class="font-bold mb-1 text-[#0a1f24] leading-[2rem] text-[1.3rem]">{stepTitle}</h4>
                <p class="text-sm text-[#687179] leading-7 font-normal">
                    {stepText}
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUsCard