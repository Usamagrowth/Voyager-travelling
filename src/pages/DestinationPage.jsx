import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Places from "../Components/Places";
import GlobalHeader from "../Components/GlobalHeader";
import OurStorySection from "../Components/OurStorySection";
import FeaturedTourSection from "../Components/FeaturedTourSection";
import FooterSection from "../Components/FooterSection";

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
            className="bg-blue-500 text-white px-4 py-2 rounded-full shrink-0"
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
    </section>
  );
};

export default DestinationPage;