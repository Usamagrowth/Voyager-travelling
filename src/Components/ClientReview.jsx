import { FaStar } from 'react-icons/fa'

const ClientReview = () => {
  return (
    <section className="mt-8">
  <h1 className="text-xl sm:text-2xl font-semibold">Clients Review</h1>

  {[ 
    { name: "Shikhon Islam", text: "The trek was perfectly organized, and the guides were so friendly. I’ll definitely book again!" },
    { name: "Ralph Edwards", text: "Everything from transport to accommodation was smooth. A truly stress-free vacation." },
    { name: "Sohel Islam", text: "I loved how flexible the itinerary was. They really listened to what I wanted." }
  ].map((review, idx) => (
    <ul key={idx} className="mt-6">
      <li className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        
        {/* Client Image */}
        <div className="flex-shrink-0">
          <img className="rounded-lg h-20 w-20 sm:h-24 sm:w-24 object-cover" src="https://turmet-react.vercel.app/assets/img/destails/client-1.jpg" alt="client" />
        </div>

        {/* Review Content */}
        <div className="relative w-full">
          {/* Stars */}
          <div className="flex text-sm sm:text-base">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-orange-500" />
            ))}
          </div>

          {/* Name */}
          <h4 className="font-semibold text-sm sm:text-base mt-1">{review.name}</h4>

          {/* Review Text */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
            {review.text}
          </p>

          {/* Reply Button */}
          <span className="absolute top-0 right-0 text-xs sm:text-sm text-black cursor-pointer">
            Reply
          </span>
        </div>
      </li>
    </ul>
  ))}
</section>

  )
}

export default ClientReview
