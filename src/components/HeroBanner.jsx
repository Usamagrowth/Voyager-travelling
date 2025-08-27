import Navbar from "./Navbar"


const HeroBanner = () => {
  return (
    <section class="lg:mx-5">
      <section class="relative h-[100vh] w-full overflow-hidden inset-0 min-w-full min-h-full bg-cover bg-center rounded-3xl bg-[url(https://turmet-react.vercel.app/assets/img/hero/hero2.jpg)]">

      <div className="relative z-10 px-6 pt-6 md:pt-6">
        <Navbar/>
      </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>
        

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-6 pt-24 md:pt-20">
          <div data-aos="zoom-in" data-aos-duration="1000" className="lg:pl-10 text-white max-w-2xl">
            <p className="italic text-lg mb-2">Get unforgettable pleasure with us</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Discover Your Next<br />Handpicked Journey
            </h1>
            <p className="text-sm md:text-base text-gray-200">
              There are many variations of passages of available, but the majority have suffered alteration in some form,
              by injected humour words which don’t look even slightly believable.
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default HeroBanner