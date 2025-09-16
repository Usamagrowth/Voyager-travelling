import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Places from "../Components/Places";
import GlobalHeader from "../Components/GlobalHeader";
import OurStorySection from "../Components/OurStorySection";
import FeaturedTourSection from "../Components/FeaturedTourSection";
import FooterSection from "../Components/FooterSection";
import { FaArrowUp } from "react-icons/fa6";

// import Card from "../components/Card";

const DestinationPage = () => {
  const allowedCountries = [
    "United States",
    "Italy",
    "France",
    "Japan",
    "United Kingdom",
    "Australia",
    "Canada",
    "Spain",
    "Germany",
    "Brazil",
    "Greece",
    "Mexico",
    "Thailand",
    "India",
    "South Africa",
    "United Arab Emirates",
    "Singapore",
    "Netherlands",
    "Switzerland",
    "Turkey",
  ];

  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / windowHeight) * 100;
        setScrollPercentage(scrolled);
        setIsVisible(scrollTop > 200); // show only after scrolling down
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions (case-insensitive)
    if (value.trim() !== "") {
      const filtered = allowedCountries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
    setError("");
  };

  const handleSelect = (country) => {
    setQuery(country);
    setSuggestions([]);
    setError("");
  };

  const handleSearch = () => {
    const match = allowedCountries.find(
      (country) => country.toLowerCase() === query.trim().toLowerCase()
    );

    if (match) {
      setError("");
      alert(`✅ Country found: ${match}`);
    } else {
      setError("❌ This country is not available!");
    }
  };

  return (
    <section>
      <GlobalHeader headerTitle="Destination" headerLink="Destination"/>

      <div className="max-w-md  lg:w-full sm: w-[80%] mx-auto mt-10 relative">
        <div className="flex items-center bg-[#eaf6f9] rounded-full p-2">
          <input
            className="bg-transparent flex-1 outline-none px-4 py-2"
            type="text"
            placeholder="Search for a destination"
            value={query}
            onChange={handleChange}
          />

          <button
            onClick={handleSearch}
            className="bg-[#1CA8CB] text-white px-4 py-2 rounded-full shrink-0"
          >
            <FiSearch size={18} />
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-lg shadow-lg z-10">
            {suggestions.map((country, index) => (
              <li
                key={index}
                onClick={() => handleSelect(country)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {country}
              </li>
            ))}
          </ul>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div>
        <Places />
      </div>
      <OurStorySection/>
      <FeaturedTourSection/>
      <FooterSection/>

      <>
            {isVisible && (
              <div
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 cursor-pointer flex items-center justify-center 
                w-14 h-14 rounded-full bg-[#1CA8CB] shadow-xl border z-[2000]"
              >
                {/* Circular Progress */}
                <svg className="absolute w-16 h-16 -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#e5e7eb" // light gray bg circle
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#113D48" // Tailwind blue
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 28 - (scrollPercentage / 100) * 2 * Math.PI * 28
                    }`}
                    className="transition-all duration-200"
                  />
                </svg>
      
                {/* Icon */}
                <FaArrowUp className="w-5 h-5 text-white relative z-[2000]"/>
              </div>
            )}
            </>
    </section>
  );
};

export default DestinationPage;