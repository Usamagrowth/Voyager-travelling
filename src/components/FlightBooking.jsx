import { useState } from "react";

const FlightBooking = () => {
  const [activeTab, setActiveTab] = useState("Tour");

  return (
  <section data-aos="fade-down" data-aos-duration="700" className="my-10">
      <section className="w-full mx-auto p-6 bg-white rounded-2xl shadow-sm mt-[20px] border border-solid border-black-5">
        {/* Tabs */}
        <div className="lg:flex md:flex sm:space-y-4 sm:grid justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Find The Best Place</h2>
          <div className="flex space-x-2">
            {["Hotels", "Tour", "Flight"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md border font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Forms */}
        <div className="mt-4">
          {activeTab === "Tour" && (
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Tour Name"
                className="w-full px-4 py-3 rounded-lg bg-[#efefef] text-[#0a1f24]"
              />
              <select className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]">
                <option>Price</option>
                <option>$100 - $500</option>
                <option>$500 - $1000</option>
              </select>
              <select className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]">
                <option>All City</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
              <input type="date" className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]" />
              <button
                type="submit"
                className="w-full bg-teal-900 text-white font-semibold rounded-lg px-4 py-3"
              >
                Search
              </button>
            </form>
          )}

          {activeTab === "Hotels" && (
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Hotel Name"
                className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]"
              />
              <select className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]">
                <option>Price Range</option>
                <option>$50 - $200</option>
                <option>$200 - $500</option>
              </select>
              <select className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]">
                <option>City</option>
                <option>Lagos</option>
                <option>Abuja</option>
              </select>
              <input type="date" className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]" />
              <button
                type="submit"
                className="w-full bg-teal-900 text-white font-semibold rounded-lg px-4 py-3"
              >
                Search
              </button>
            </form>
          )}

          {activeTab === "Flight" && (
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="From"
                className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]"
              />
              <input
                type="text"
                placeholder="To"
                className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]"
              />
              <input type="date" className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]" />
              <input
                type="number"
                placeholder="Passengers"
                className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#8b8b8b]"
              />
              <button
                type="submit"
                className="w-full bg-teal-900 text-white font-semibold rounded-lg px-4 py-3"
              >
                Search
              </button>
            </form>
          )}
        </div>
      </section>
  </section>
    
  );
}

export default FlightBooking