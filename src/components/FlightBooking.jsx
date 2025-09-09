import { useState, useMemo } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Card from "./utilities/bookingUi/Card/Card";
import CardContent from "./utilities/bookingUi/Card/CardContent";
import Button from "./utilities/bookingUi/Button/Button";
import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// Seat component with hover tooltips
function Seat({ id, position, status, toggleSeat, isSelected }) {
  return (
    <mesh
      position={position}
      onClick={() => toggleSeat(id, status)}
      scale={isSelected ? 1.2 : 1}
    >
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color={
          status === "occupied"
            ? "red"
            : isSelected
            ? "#1CA8CB"
            : "lightgray"
        }
      />
      <Html distanceFactor={10} position={[0, 1, 0]}>
        <span
          style={{
            fontSize: "10px",
            background: "white",
            padding: "2px 4px",
            borderRadius: "3px",
            border: "1px solid #ccc",
          }}
        >
          {id}
        </span>
      </Html>
    </mesh>
  );
}

// Cabin3D component
function Cabin3D({ maxSeats, selectedSeats, setSelectedSeats }) {
  const seatMap = useMemo(() => {
    const seats = [];
    const rows = 12;
    const cols = 6; // A–F
    const letters = ["A", "B", "C", "D", "E", "F"];

    for (let r = 1; r <= rows; r++) {
      for (let c = 0; c < cols; c++) {
        seats.push({
          id: `${r}${letters[c]}`,
          position: [c < 3 ? -1.5 + c : c - 2, 0, -r * 1.2],
          status: Math.random() > 0.8 ? "occupied" : "available",
        });
      }
    }
    return seats;
  }, []);

  // Toggle seat selection
  const toggleSeat = (id, status) => {
    if (status === "occupied") return;

    if (selectedSeats.includes(id)) {
      // unselect
      setSelectedSeats(selectedSeats.filter((s) => s !== id));
    } else {
      if (selectedSeats.length < maxSeats) {
        setSelectedSeats([...selectedSeats, id]);
      } else {
        alert(`You can only select ${maxSeats} seat(s).`);
      }
    }
  };

  return (
    <div className="h-[400px] w-full flex justify-center">
      <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls />

        {/* Aisle */}
        <mesh position={[0.5, -0.5, -7]}>
          <boxGeometry args={[1, 0.1, 15]} />
          <meshStandardMaterial color="lightyellow" />
        </mesh>

        {/* Render seats */}
        {seatMap.map((seat) => (
          <Seat
            key={seat.id}
            {...seat}
            toggleSeat={toggleSeat}
            isSelected={selectedSeats.includes(seat.id)}
          />
        ))}
      </Canvas>
    </div>
  );
}

const FlightBooking = () => {
const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState("oneway"); // <-- fix: declare tripType
const [from, setFrom] = useState("");
const [to, setTo] = useState("");
const [departDate, setDepartDate] = useState("");
const [returnDate, setReturnDate] = useState("");
const [passengers, setPassengers] = useState(1);
const [flights, setFlights] = useState([]);
const [selectedFlight, setSelectedFlight] = useState(null);
const [selectedSeats, setSelectedSeats] = useState([]);
const [luggage, setLuggage] = useState(0);
const [activeTab, setActiveTab] = useState("Hotels");
const [city, setCity] = useState("");
const [hotel, setHotel] = useState("");
const [room, setRoom] = useState("");
const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");

  const steps = [
    { id: 1, label: "Search Flights" },
    { id: 2, label: "Select Flight" },
    { id: 3, label: "Choose Seat" },
    { id: 4, label: "Booking Summary" },
  ];

  const Stepper = () => (
    <div className="flex justify-between items-center mb-6">
      {steps.map((s) => (
        <div key={s.id} className="flex-1 flex flex-col items-center">
          <div
            className={`rounded-full h-10 w-10 flex items-center justify-center mb-2 text-white ${
              s.id < step ? "bg-green-500" : s.id === step ? "bg-[#1CA8CB]" : "bg-gray-300"
            }`}
          >
            {s.id < step ? <FiCheckCircle className="h-5 w-5"/> : s.id}
          </div>
          <span className="text-xs text-gray-600 text-center">{s.label}</span>
        </div>
      ))}
    </div>
  );


  // Hotels database
  const hotelsData = {
    Lagos: [
      {
        name: "Eko Hotel",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/529112661.jpg?k=b215f591d479257cae0211113066782f99e420032b9c6beb89e36bba0d37674a&o=&hp=1",
        rooms: { Standard: 50000, Deluxe: 75000, Suite: 120000 },
      },
      {
        name: "Radisson Blu Lagos",
        image: "https://foto.hrsstatic.com/fotos/0/2/800/458/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2Fdms%2F876818%2FAMADEUS%2F41264e95cd524a62b06657b53303abae.jpeg/6689212785cf5b4c77f72618bd2cc3f9/512%2C340/6/Radisson_Blu_Hotel_Lagos_Ikeja_Nigeria-Lagos-Room-14-876818.jpg",
        rooms: { Standard: 60000, Deluxe: 90000, Suite: 150000 },
      },
      {
        name: "Protea Hotel",
        image: "https://gauteng.hotelguide.co.za/images/protea-hotel-midrand-twin-room-590x390.jpg",
        rooms: { Standard: 45000, Deluxe: 70000, Suite: 110000 },
      },
    ],
    Abuja: [
      {
        name: "Transcorp Hilton",
        image: "https://www.hilton.com/im/en/ABUHITW/10564089/abuhi-0145.jpg?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=0&rw=1200&rh=675",
        rooms: { Standard: 55000, Deluxe: 80000, Suite: 130000 },
      },
      {
        name: "Sheraton Abuja",
        image: "https://cdn2.hotelhunter.com/111/11087/Sheraton_Abuja_Hotel-Abuja-Nigeria09_large.webp",
        rooms: { Standard: 50000, Deluxe: 70000, Suite: 110000 },
      },
      {
        name: "Nicon Luxury",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ce/54/96/ambassadorial-suite.jpg?w=900&h=500&s=1",
        rooms: { Standard: 40000, Deluxe: 65000, Suite: 100000 },
      },
    ],
    "Port Harcourt": [
      {
        name: "Le Meridien Ogeyi Place",
        image: "https://images.trvl-media.com/lodging/1000000/910000/907600/907582/3a32c895.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        rooms: { Standard: 45000, Deluxe: 65000, Suite: 95000 },
      },
      {
        name: "Novotel Port Harcourt",
        image: "https://static21.com-hotel.com/uploads/hotel/58493/photo/novotel-port-harcourt_16358463703.jpeg",
        rooms: { Standard: 40000, Deluxe: 60000, Suite: 90000 },
      },
      {
        name: "Golden Tulip",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/521709982.jpg?k=50ce307e00789576a36e6382b2592483b48860f2a29a8451cfd77613d5c86a1b&o=&hp=1",
        rooms: { Standard: 48000, Deluxe: 72000, Suite: 100000 },
      },
    ],
    London: [
      {
        name: "The Ritz London",
        image: "https://www.theritzlondon.com/content/uploads/2025/01/New-Deluxe-Suite-Lounge-2022.jpg",
        rooms: { Standard: 200000, Deluxe: 300000, Suite: 500000 },
      },
      {
        name: "Hilton London Kensington",
        image: "https://cdn.daybreakhotels.com/images/hotels/5166711/02_Hilton_London_Kensington_73212612_4K.0xae6c664dd136e6c140945c52d3a14dc7.L.jpg?quality=85&width=1280",
        rooms: { Standard: 150000, Deluxe: 250000, Suite: 400000 },
      },
      {
        name: "Premier Inn London",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e5/a9/1e/premier-inn-bedroom.jpg?w=900&h=500&s=1",
        rooms: { Standard: 120000, Deluxe: 180000, Suite: 250000 },
      },
    ],
    "New York": [
      {
        name: "The Plaza Hotel",
        image: "https://imageio.forbes.com/specials-images/imageserve/609ddf66d4689bfaf4aa84f2/beautiful-hotel-bedroom-at-The-Plaza/960x0.jpg?format=jpg&width=960",
        rooms: { Standard: 250000, Deluxe: 400000, Suite: 600000 },
      },
      {
        name: "Marriott Marquis Times Square",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643463927.jpg?k=592364ce66d95713d52bb8410549ec46a02e36299baae53145973bfc3c309169&o=&hp=1",
        rooms: { Standard: 200000, Deluxe: 350000, Suite: 550000 },
      },
      {
        name: "Holiday Inn NYC",
        image: "https://digital.ihg.com/is/image/ihg/holiday-inn-new-york-city-8924788040-4x3",
        rooms: { Standard: 180000, Deluxe: 250000, Suite: 400000 },
      },
    ],
  };

  // Today for disabling past dates
  const today = new Date().toISOString().split("T")[0];

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };
  const nights = calculateNights();

  // Find selected room price
  const roomPrice =
    city && hotel && room
      ? hotelsData[city].find((h) => h.name === hotel).rooms[room]
      : 0;

  const totalPrice = nights * roomPrice;

  const selectedHotel =
    city && hotel ? hotelsData[city].find((h) => h.name === hotel) : null;


  const baseFares = {
  "Lagos-Abuja": 50000,
  "Lagos-Port Harcourt": 45000,
  "Abuja-Port Harcourt": 40000,
  "Lagos-London": 250000,
  "Abuja-London": 240000,
  "Lagos-New York": 300000,
};

// Normalize route (so Lagos-Abuja === Abuja-Lagos)
const normalizeRoute = (from, to) => {
  return [from, to].sort().join("-");
};

const calculatePrice = (from, to, passengers, tripType, luggage) => {
  const routeKey = normalizeRoute(from, to);
  let basePrice = baseFares[routeKey] || 60000; // default if route not found

  // Multiply for return trip
  if (tripType === "return") basePrice *= 2;

  // Multiply by passengers
  basePrice *= passengers;

  // Add luggage (₦5000 per kg)
  const luggageCost = luggage * 5000;

  return basePrice + luggageCost;
};

  const generateFlights = () => {
  const airlines = ["Air Peace", "Arik Air", "British Airways", "Emirates"];

  const results = airlines.map((airline, index) => {
    const baseFinalPrice = calculatePrice(from, to, passengers, tripType, luggage);

    // Apply small variation by airline
    const multipliers = {
      "Air Peace": 1.0, // baseline
      "Arik Air": 1.05, // 5% higher
      "British Airways": 1.15, // 15% higher
      "Emirates": 1.2, // 20% higher
    };

    const multiplier = multipliers[airline] || 1;
    const finalPrice = Math.round(baseFinalPrice * multiplier);

    return {
      id: index + 1,
      airline,
      departure: departDate,
      returnDate: tripType === "return" ? returnDate : null,
      price: finalPrice,
    };
  });

  setFlights(results);
};

  return (
  <section data-aos="fade-down" data-aos-duration="1500" className="lg:mx-5 mx-3">
      <section className="w-full mx-auto p-6 bg-white rounded-2xl shadow-sm mt-[20px] border border-solid border-black-5">
        {/* Tabs */}
        <div className="lg:flex md:flex sm:space-y-4 sm:grid justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Find The Best Place</h2>
          <div className="flex space-x-2">
            {["Hotels", "Flight"].map((tab) => (
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

        <datalist id="airports">
        <option value="Lagos - Murtala Muhammed Intl (LOS)" />
        <option value="Abuja - Nnamdi Azikiwe Intl (ABV)" />
        <option value="Port Harcourt Intl (PHC)" />
        <option value="London - Heathrow (LHR)" />
        <option value="New York - JFK (JFK)" />
        </datalist>

        {/* Forms */}
        <div className="mt-4">

          {activeTab === "Hotels" && (
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
      {/* City */}
      <select
        className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#333]"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setHotel("");
          setRoom("");
        }}
      >
        <option value="">Select City</option>
        {Object.keys(hotelsData).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Hotel */}
      <select
        className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#333]"
        value={hotel}
        onChange={(e) => {
          setHotel(e.target.value);
          setRoom("");
        }}
        disabled={!city}
      >
        <option value="">Select Hotel</option>
        {city &&
          hotelsData[city].map((h) => (
            <option key={h.name} value={h.name}>
              {h.name}
            </option>
          ))}
      </select>

      {/* Room */}
      <select
        className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#333]"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        disabled={!hotel}
      >
        <option value="">Select Room</option>
        {city &&
          hotel &&
          Object.entries(
            hotelsData[city].find((h) => h.name === hotel).rooms
          ).map(([roomType, price]) => (
            <option key={roomType} value={roomType}>
              {roomType} – ₦{price.toLocaleString()}/night
            </option>
          ))}
      </select>

      {/* Check-in */}
      <input
        type="date"
        className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#333]"
        min={today}
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />

      {/* Check-out */}
      <input
        type="date"
        className="w-full px-4 py-3 border rounded-lg bg-[#efefef] text-[#333]"
        min={checkIn || today}
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />

      {/* Hotel Preview */}
      {selectedHotel && (
        <div className="col-span-1 md:col-span-5 mt-4">
          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src={selectedHotel.image}
              alt={selectedHotel.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{selectedHotel.name}</h3>
              <p className="text-sm text-gray-500">City: {city}</p>
            </div>
          </div>
        </div>
      )}

      {/* Show Total */}
      {room && nights > 0 && (
        <div className="col-span-1 md:col-span-5 mt-4 p-4 border rounded-lg bg-gray-50">
          <p className="font-medium">
            {hotel} – {room} ({nights} night{nights > 1 ? "s" : ""})
          </p>
          <p className="text-[#1CA8CB] font-bold">
            Total Price: ₦{totalPrice.toLocaleString()}
          </p>
        </div>
      )}

      {/* Submit */}
      <div className="col-span-1 md:col-span-5">
        <button
          type="submit"
          className="w-full bg-[#1CA8CB] text-white font-semibold rounded-lg px-4 py-3"
          disabled={!room || nights <= 0}
        >
          Book Now
        </button>
      </div>
    </form>
          )}

          {activeTab === "Flight" && (
            <Card className="mx-auto w-full">
              <CardContent className="p-4 sm:p-6 space-y-4">
                <Stepper />
                {step === 1 && (
                    <div className="space-y-4">
                      {/* From / To */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          list="airports"
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          placeholder="From"
                          className="w-full border rounded-lg p-2"
                        />

                        <input
                          type="text"
                          list="airports"
                          value={to}
                          onChange={(e) => setTo(e.target.value)}
                          placeholder="To"
                          className="w-full border rounded-lg p-2"
                        />
                      </div>

                      {/* Trip Type toggle */}
                      <div className="flex items-center gap-4">
                        <label
                          className={`px-3 py-2 rounded cursor-pointer ${
                            tripType === "oneway"
                              ? "bg-[#1CA8CB] text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name="tripType"
                            value="oneway"
                            checked={tripType === "oneway"}
                            onChange={() => setTripType("oneway")}
                            className="sr-only"
                          />
                          One-way
                        </label>

                        <label
                          className={`px-3 py-2 rounded cursor-pointer ${
                            tripType === "return"
                              ? "bg-[#1CA8CB] text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name="tripType"
                            value="return"
                            checked={tripType === "return"}
                            onChange={() => setTripType("return")}
                            className="sr-only"
                          />
                          Return
                        </label>
                      </div>

                      {/* Dates + Passengers */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="date"
                          value={departDate}
                          onChange={(e) => setDepartDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]} // ✅ disable past dates
                          className="w-full border rounded-lg p-2"
                          aria-label="Departure date"
                        />

                        {tripType === "return" ? (
                          <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]} // ✅ disable past dates
                            className="w-full border rounded-lg p-2"
                            aria-label="Return date"
                          />
                        ) : (
                          <input
                            type="number"
                            min={1}
                            value={passengers}
                            onChange={(e) => setPassengers(Number(e.target.value))}
                            placeholder="Passengers"
                            className="w-full border rounded-lg p-2"
                          />
                        )}
                      </div>

                      {/* show passengers input for return trips */}
                      {tripType === "return" && (
                        <div>
                          <input
                            type="number"
                            min={1}
                            value={passengers}
                            onChange={(e) => setPassengers(Number(e.target.value))}
                            placeholder="Passengers"
                            className="w-full border rounded-lg p-2 mt-2"
                          />
                        </div>
                      )}

                      {/* Extra luggage */}
                      <div>
                        <input
                          type="number"
                          min={0}
                          value={luggage}
                          onChange={(e) => setLuggage(Number(e.target.value))}
                          placeholder="Extra luggage (kg)"
                          className="w-full border rounded-lg p-2 mt-2"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Each kg of luggage costs <span className="font-semibold">₦5000</span>.
                        </p>
                      </div>
                    </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Available Flights</h3>

                    {flights.length === 0 ? (
                      <p className="text-gray-500">
                        No flights found. Please go back and search again.
                      </p>
                    ) : (
                      <div className="space-y-3">
                        {flights.map((flight) => (
                          <div
                            key={flight.id}
                            onClick={() => setSelectedFlight(flight)} // ✅ just select flight
                            className={`border p-4 rounded-lg cursor-pointer hover:bg-blue-50 ${
                              selectedFlight?.id === flight.id
                                ? "border-[#1CA8CB] bg-blue-50"
                                : "border-gray-300"
                            }`}
                          >
                            <p className="font-medium">{flight.airline}</p>
                            <p className="text-sm text-gray-600">
                              {from} → {to}
                            </p>
                            <p className="text-sm text-gray-600">
                              Departure: {flight.departure}
                              {tripType === "return" &&
                                ` • Return: ${flight.returnDate}`}
                            </p>
                            <p className="font-bold text-[#1CA8CB]">
                              ₦{flight.price.toLocaleString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Choose your seat(s)</p>
                    <div className="overflow-x-auto">
                      <Cabin3D
                        maxSeats={passengers} // from Step 1
                        selectedSeats={selectedSeats}
                        setSelectedSeats={setSelectedSeats}
                      />
                    </div>
                    {selectedSeats.length > 0 && (
                      <p className="mt-2 text-[#1CA8CB]">
                        Selected Seat(s): {selectedSeats.join(", ")}
                      </p>
                    )}
                  </div>
                )}
                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Review Your Booking</h3>

                    <div className="border rounded-lg p-4 space-y-2 bg-gray-50">
                      {/* Step 1: Trip details */}
                      <p><span className="font-medium">From:</span> {from}</p>
                      <p><span className="font-medium">To:</span> {to}</p>
                      <p><span className="font-medium">Trip Type:</span> {tripType === "oneway" ? "One-way" : "Return"}</p>
                      <p><span className="font-medium">Departure:</span> {departDate}</p>
                      {tripType === "return" && (
                        <p><span className="font-medium">Return:</span> {returnDate}</p>
                      )}
                      <p><span className="font-medium">Passengers:</span> {passengers}</p>
                      <p><span className="font-medium">Extra Luggage:</span> {luggage} kg</p>

                      {/* Step 2: Flight */}
                      {selectedFlight && (
                        <div className="mt-2">
                          <p className="font-medium">Flight Selected:</p>
                          <p>{selectedFlight.airline}</p>
                          <p className="text-sm text-gray-600">
                            Departure: {selectedFlight.departure}
                            {tripType === "return" && ` • Return: ${selectedFlight.returnDate}`}
                          </p>
                          <p className="font-bold text-[#1CA8CB]">
                            Total Price: ₦{selectedFlight.price.toLocaleString()}
                          </p>
                        </div>
                      )}

                      {/* Step 3: Seats */}
                      {selectedSeats?.length > 0 && (
                        <p><span className="font-medium">Selected Seats:</span> {selectedSeats.join(", ")}</p>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3">
                  {/* Back Button */}
                  <Button
                    disabled={step === 1}
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </Button>

                  {/* Next / Proceed Button */}
                  {step < 4 ? (
                    <Button
                      onClick={() => {
                        if (step === 1) {
                          generateFlights(); // generate flights before moving to step 2
                        }
                        setStep(step + 1);
                      }}
                      disabled={
                        (step === 1 && (!from || !to || !departDate || passengers < 1)) || // ensure step 1 fields filled
                        (step === 2 && !selectedFlight) || // ensure a flight selected
                        (step === 3 && selectedSeats.length !== passengers) // ensure seats equal passengers
                      }
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        window.location.href = "/register";
                      }}
                    >
                      Proceed
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
  </section>
  );
}

export default FlightBooking