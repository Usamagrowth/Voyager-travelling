import { useState } from "react";
import { FaBars, FaBell, FaCreditCard, FaHome, FaPlaneDeparture, FaUser } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const notifications = [
    "Your flight to London is confirmed 🎉",
    "Hotel booking at Eko Hotel is successful",
    "Payment of ₦250,000 has been processed",
    "Your flight to New York departs in 24 hours",
    "New promo: 15% off flights to Abuja 🚀",
  ];

  const bookings = {
    flights: [
      { id: 1, route: "Lagos → London", date: "2025-09-20", status: "Confirmed" },
      { id: 2, route: "Abuja → New York", date: "2025-10-15", status: "Pending" },
    ],
    hotels: [
      { id: 1, name: "Eko Hotel Lagos", checkIn: "2025-09-21", nights: 3 },
      { id: 2, name: "The Plaza New York", checkIn: "2025-10-16", nights: 5 },
    ],
  };

  const payments = [
    { id: 1, type: "Visa", number: "**** **** **** 1234", expiry: "12/27" },
    { id: 2, type: "MasterCard", number: "**** **** **** 5678", expiry: "08/26" },
  ];

  return (
    <section className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`bg-[#162534] shadow-lg p-6 transition-all duration-300 
          ${sidebarOpen ? "w-64" : "w-20"} hidden sm:block`}
      >
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between mb-8">
          <img className={`md:cursor-pointer h-9 ${!sidebarOpen && "hidden"}`} src="https://turmet-react.vercel.app/assets/img/logo/white-logo.svg" alt="" />
          <button
            className="p-2 rounded-md transition-all duration-500 text-white hover:bg-[#1CA8CB]"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <RiMenuFoldFill size={22} /> :
            <RiMenuFold2Fill size={22} />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center font-[600] transition-all duration-300 gap-2 p-2 rounded-lg ${
              activeTab === "dashboard" ? "bg-[#1CA8CB] text-white" : "text-gray-100 hover:text-[#1CA8CB]"
            }`}
          >
            <FaHome size={18} />
            {sidebarOpen && "Dashboard"}
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center font-[600] transition-all duration-300 gap-2 p-2 rounded-lg ${
              activeTab === "profile" ? "bg-[#1CA8CB] text-white" : "text-gray-100 hover:text-[#1CA8CB]"
            }`}
          >
            <FaUser size={18} />
            {sidebarOpen && "Profile"}
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className={`flex items-center font-[600] transition-all duration-300 gap-2 p-2 rounded-lg ${
              activeTab === "bookings" ? "bg-[#1CA8CB] text-white" : "text-gray-100 hover:text-[#1CA8CB]"
            }`}
          >
            <FaPlaneDeparture size={18} />
            {sidebarOpen && "Bookings"}
          </button>
          <button
            onClick={() => setActiveTab("payments")}
            className={`flex items-center font-[600] transition-all duration-300 gap-2 p-2 rounded-lg ${
              activeTab === "payments" ? "bg-[#1CA8CB] text-white" : "text-gray-100 hover:text-[#1CA8CB]"
            }`}
          >
            <FaCreditCard size={18} />
            {sidebarOpen && "Payments"}
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`flex items-center font-[600] transition-all duration-300 gap-2 p-2 rounded-lg ${
              activeTab === "notifications" ? "bg-[#1CA8CB] text-white" : "text-gray-100 hover:text-[#1CA8CB]"
            }`}
          >
            <FaBell size={18} />
            {sidebarOpen && "Notifications"}
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`flex items-center font-[600] transition-all duration-300 gap-2 p-2 rounded-lg ${
              activeTab === "support" ? "bg-[#1CA8CB] text-white" : "text-gray-100 hover:text-[#1CA8CB]"
            }`}
          >
            <BiSupport size={18} />
            {sidebarOpen && "Support"}
          </button>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className="sm:hidden fixed top-0 left-0 right-0 bg-[#162534] shadow-md flex items-center justify-between p-4 z-50">
        <img className="cursor-pointer h-9" src="https://turmet-react.vercel.app/assets/img/logo/white-logo.svg" alt="" />
        <button className="text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>

          {sidebarOpen ? <IoMdCloseCircle size={20} /> :
          <FaBars size={18} /> }
        </button>
      </div>
      {/* Mobile Sidebar */}
        {sidebarOpen && (
        <div
            className={`sm:hidden fixed top-14 left-0 w-full bg-white shadow-lg z-40 p-6 
            transform transition-transform duration-300 ease-in-out 
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <nav className="flex flex-col gap-4">
            <button
                onClick={() => {
                setActiveTab("dashboard");
                setSidebarOpen(false);
                }}
                className="text-left flex items-center gap-4"
            >
                <span><FaHome size={18} /></span>
                <span>Dashboard</span>
            </button>
            <button
                onClick={() => {
                setActiveTab("profile");
                setSidebarOpen(false);
                }}
                className="text-left flex items-center gap-4"
            >
                <span><FaUser size={18} /></span>
                <span>Profile</span>
            </button>
            <button
                onClick={() => {
                setActiveTab("bookings");
                setSidebarOpen(false);
                }}
                className="text-left flex items-center gap-4"
            >
                <span><FaPlaneDeparture size={18} /></span>
                <span>Bookings</span>
            </button>
            <button
                onClick={() => {
                setActiveTab("payments");
                setSidebarOpen(false);
                }}
                className="text-left flex items-center gap-4"
            >
                <span><FaCreditCard size={18} /></span>
                <span>Payments</span>
            </button>
            <button
                onClick={() => {
                setActiveTab("notifications");
                setSidebarOpen(false);
                }}
                className="text-left flex items-center gap-4"
            >
                <span><FaBell size={18} /></span>
                <span>Notifications</span>
            </button>
            <button
                onClick={() => {
                setActiveTab("support");
                setSidebarOpen(false);
                }}
                className="text-left flex items-center gap-4"
            >
                <span><BiSupport size={18} /></span>
                <span>Support</span>
            </button>
            </nav>
        </div>
        )}


      {/* Main Content */}
      <main className="flex-1 mt-14 sm:mt-0">
        {activeTab === "dashboard" && (
        <section>
            <div className="bg-[#1CA8CB] px-8 py-4 text-white">
                <h2 className="text-2xl mb-4 font-[700]">Dashboard</h2>
            </div>

            <section className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-semibold">Upcoming Flights</h3>
                    {bookings.flights.map((f) => (
                    <p key={f.id} className="text-sm mt-2">
                        ✈ {f.route} – {f.date}
                    </p>
                    ))}
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-semibold">Hotels</h3>
                    {bookings.hotels.map((h) => (
                    <p key={h.id} className="text-sm mt-2">
                        🏨 {h.name} – {h.checkIn}
                    </p>
                    ))}
                </div>
                </div>
            </section>
        </section>
        )}

        {activeTab === "profile" && (
        <section>
            <div className="bg-[#1CA8CB] px-8 py-4 text-white">
                <h2 className="text-2xl mb-4 font-[700]">My Profile</h2>
            </div>

            <section className="p-8">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded-lg p-3"
                    defaultValue="John Doe"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg p-3"
                    defaultValue="john@example.com"
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border rounded-lg p-3"
                    defaultValue="+234 810 000 0000"
                />
                <input
                    type="text"
                    placeholder="Address"
                    className="w-full border rounded-lg p-3"
                    defaultValue="Lagos, Nigeria"
                />
                <button className="col-span-1 md:col-span-2 bg-[#1CA8CB] text-white rounded-lg py-3 mt-4 w-full">
                    Update Profile
                </button>
                </form>
            </section>
        </section>     
        )}

        {activeTab === "bookings" && (
        <section>
            <div className="bg-[#1CA8CB] px-8 py-4 text-white">
                <h2 className="text-2xl mb-4 font-[700]">My Bookings</h2>
            </div>

            <section className="p-8">
                <div className="grid gap-6">
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-semibold mb-2">Flights</h3>
                    {bookings.flights.map((f) => (
                    <div key={f.id} className="flex justify-between border-b py-2 text-sm">
                        <span>{f.route}</span>
                        <span>{f.date}</span>
                        <span className="text-teal-700">{f.status}</span>
                    </div>
                    ))}
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-semibold mb-2">Hotels</h3>
                    {bookings.hotels.map((h) => (
                    <div key={h.id} className="flex justify-between border-b py-2 text-sm">
                        <span>{h.name}</span>
                        <span>Check-in: {h.checkIn}</span>
                        <span>{h.nights} nights</span>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </section>
        )}

        {activeTab === "payments" && (
        <section>
            <div className="bg-[#1CA8CB] px-8 py-4 text-white">
                <h2 className="text-2xl mb-4 font-[700]">Payment Methods</h2>
            </div>

            <section className="p-8">
                <div className="bg-white p-6 rounded-xl shadow space-y-4">
                {payments.map((p) => (
                <div key={p.id} className="flex justify-between items-center border-b pb-2">
                    <span>{p.type} {p.number}</span>
                    <span className="text-sm text-gray-500">Exp: {p.expiry}</span>
                </div>
                ))}
                <button className="bg-[#1CA8CB] text-white rounded-lg px-4 py-2 mt-2">Add New Card</button>
                </div>
            </section>
        </section>
        )}

        {activeTab === "notifications" && (
        <section>
            <div className="bg-[#1CA8CB] px-8 py-4 text-white">
                <h2 className="text-2xl mb-4 font-[700]">Notifications</h2>
            </div>

            <section className="p-8">
                <ul className="bg-white p-6 rounded-xl shadow space-y-3">
                {notifications.map((note, i) => (
                <li key={i} className="border-b pb-2 text-sm">{note}</li>
                ))}
                </ul>
            </section>
        </section>
        )}

        {activeTab === "support" && (
        <section>
            <div className="bg-[#1CA8CB] px-8 py-4 text-white">
                <h2 className="text-2xl mb-4 font-[700]">Support</h2>
            </div>

            <section className="p-8">
                <div className="bg-white p-6 rounded-xl shadow space-y-3">
                <p className="text-sm">📞 Phone: +234 800 123 4567</p>
                <p className="text-sm">📧 Email: support@skytravels.com</p>
                <p className="text-sm">💬 Live Chat: Available 24/7</p>
                </div>
            </section>
        </section>
        )}
      </main>
    </section>
  );
};

export default UserProfile;
