
const Accommodation = () => {
    const Lists =[
        {
         details:'Accommodation',
         hotels:'5 Star Hotels',
         icon: "https://turmet-react.vercel.app/assets/img/icon/27.svg" ,   

        },

        {
         details:'Accommodation',
         hotels:'5 Star Hotels',
         icon: "https://turmet-react.vercel.app/assets/img/icon/28.svg" ,   

        },

        {
         details:'Accommodation',
         hotels:'5 Star Hotels',
         icon: "https://turmet-react.vercel.app/assets/img/icon/29.svg" ,   

        },
        {
         details:'Accommodation',
         hotels:'5 Star Hotels',
         icon: "https://turmet-react.vercel.app/assets/img/icon/30.svg" ,   

        },
        {
         details:'Accommodation',
         hotels:'5 Star Hotels',
         icon: "https://turmet-react.vercel.app/assets/img/icon/31.svg" ,   

        },

        {
         details:'Accommodation',
         hotels:'5 Star Hotels',
         icon: "https://turmet-react.vercel.app/assets/img/icon/32.svg" ,   

        },
        
        {
         details:'Accommodation',
         hotels:'5 Star Hotels',
         icon: "https://turmet-react.vercel.app/assets/img/icon/33.svg" ,   

        },

         {
         details:'Accommodation',
         hotels:'5 Star Hotels',
         icon: "https://turmet-react.vercel.app/assets/img/icon/34.svg" ,   

        },
        
    ] 

  return (
    <section className="bg-gray-200 rounded-lg mt-4 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-3 sm:px-6">
    {Lists.map((u, index) => (
      <div
        key={index}
        className="flex items-center gap-3"
      >
        {/* Icon box */}
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
          border border-[#1CA8CB] rounded-md
          hover:bg-[#1CA8CB] transition group"
        >
          <img 
          src={u.icon}
           alt={u.details}
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition 
            group-hover:invert group-hover:brightness-0" />
        </div>

        {/* Texts */}
        <div className='min-w-0'>
          <h3 className="text-xs sm:text-sm text-gray-500 truncate">{u.details}</h3>
          <h2 className="font-semibold text-sm sm:text-base truncate">{u.hotels}</h2>
        </div>
      </div>
    ))}
  </div>
</section>

  )
}

export default Accommodation
