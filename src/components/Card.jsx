import { BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ image, title, price }) => {
  return (
    <div className="bg-white border rounded-3xl shadow-sm overflow-hidden flex flex-col mt-5 ">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover rounded-t-3xl transform transition-transform duration-500 ease-in-out hover:scale-110"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-[18px] text-gray-800 flex gap-4 items-center">
          <span className="text-[#1CA8CB]"><CiLocationOn /></span>
          <span className="font-medium">{title}</span>
          </h2>

        <div className="flex items-center mt-1">
          <span className="text-orange-500 text-lg">★★★★★</span>
          <span className="ml-2 text-gray-500 text-[14px]">(4.8 Rating)</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-[15px]">from</span>
          <div>
            <span className="text-[22px] font-semibold mt-2 text-gray-800">
              ₦{price}
            </span>
            <span className="text-gray-500 text-[15px]">/ per person</span>
          </div>
          
        </div>
        

        <div className="flex items-center text-gray-500 text-sm mt-3">
          <BsClock className="w-4 h-4 mr-1" /> 10 Days
        </div>

        <Link to="/bookingPage">
        <button className="mt-4 w-full border border-gray-300 rounded-full py-2 text-[16px] font-medium text-[#113D48] transition-all duration-300 ease-in-out hover:text-white hover:bg-[#1CA8CB]">
          Book Now →
        </button>
        </Link>
        
        
      </div>
    </div>
  );
};

export default Card;
