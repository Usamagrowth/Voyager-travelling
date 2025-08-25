import { useEffect, useRef, useState } from "react";

const CountUp = ({ target, duration, trigger, decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0); // reset when out of view
      return;
    }

    let start = 0;
    const increment = target / (duration / 16); // 60fps approx
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, target, duration, decimals]);

  return <>{count}</>;
};

const Counter = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
    <section data-aos="zoom-in" data-aos-duration="2000"
      ref={sectionRef}
      className="relative lg:px-20 bg-[#1CA8CB] mt-20">
      <div className="container">
        <div className="counter-wrapper py-[50px] flex justify-center">
          <div className="max-w-[100%] w-[100%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            {/* Item 1 */}
            <div className="counter-content">
              <h2 className="text-[52px] max-[767px]:text-[40px] max-[438px]:text-[35px] font-[700] text-white">
                <span className="count">
                  <CountUp target={26} duration={2000} trigger={inView} />
                </span>
                +
              </h2>
              <p className="text-white lg:text-[18px] text-[14px] -mt-2">
                Years of Experiences
              </p>
            </div>

            {/* Item 2 (decimal example) */}
            <div className="counter-content">
              <h2 className="text-[52px] max-[767px]:text-[40px] max-[438px]:text-[35px] font-[700] text-white">
                <span className="count">
                  <CountUp target={3.6} duration={2000} trigger={inView} decimals={1} />
                </span>
                +
              </h2>
              <p className="text-white lg:text-[18px] text-[14px] -mt-2">
                Yearly Customers
              </p>
            </div>

            {/* Item 3 */}
            <div className="counter-content">
              <h2 className="text-[52px] max-[767px]:text-[40px] max-[438px]:text-[35px] font-[700] text-white">
                <span className="count">
                  <CountUp target={46} duration={2000} trigger={inView} />
                </span>
                +
              </h2>
              <p className="text-white lg:text-[18px] text-[14px] -mt-2">
                Visitors daily
              </p>
            </div>

            {/* Item 4 */}
            <div className="counter-content">
              <h2 className="text-[52px] max-[767px]:text-[40px] max-[438px]:text-[35px] font-[700] text-white">
                <span className="count">
                  <CountUp target={56} duration={2000} trigger={inView} />
                </span>
                +
              </h2>
              <p className="text-white lg:text-[18px] text-[14px] -mt-2">
                Awards & honors
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Counter;
