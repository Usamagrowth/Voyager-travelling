const HeroBanner = () => {
  return (
    <section class="lg:mx-3 ">
      <section class="relative h-[100vh] w-full overflow-hidden inset-0 min-w-full min-h-full object-cover rounded-3xl bg-[url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg)]">
        {/* Background Video */}
        {/* <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          class="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 rounded-3xl z-[-1]"
        >
          <source src="https://videocdn.cdnpk.net/videos/debb744e-1ab9-5b01-a8d3-f3817cb8ebb9/horizontal/previews/clear/small.mp4?token=exp=1755966723~hmac=572eda58c45a41e91d25098a7dd5bf32956772e7507487678fca992ca1926603" type="video/mp4"></source>
        </video> */}

        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 pt-24 md:pt-20">
          <div data-aos="zoom-in" data-aos-duration="1000" className="text-center text-white max-w-2xl">
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