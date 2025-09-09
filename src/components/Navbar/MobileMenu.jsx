import DestinationMobileNav from './MobileNav/DestinationMobileNav';
import TourMobileNav from './MobileNav/TourMobileNav';
import PagesMobileNav from './MobileNav/PagesMobileNav';
import BlogMobileNav from './MobileNav/BlogMobileNav';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const MobileMenu = () => {
    useEffect(() => {
            AOS.init();
          }, []);

  return (
    <section className='fixed lg:hidden block inset-0 w-full z-50 text-[14px]' data-aos="fade-left" data-aos-duration="500">
    <div className="grid font-medium bg-black pt-32 pb-10 px-5">
        <ul className="grid p-5 text-white cursor-pointer space-y-10">
          <li>
            Home
          </li>
          <li>
            About Us
          </li>
          <DestinationMobileNav/>
          <TourMobileNav/>
          <PagesMobileNav/>
          <BlogMobileNav/>
          <li>
            Contact Us
          </li>
        </ul>

    </div>
    </section>
  )
}

export default MobileMenu