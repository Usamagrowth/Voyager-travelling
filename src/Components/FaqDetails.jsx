import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FaqDetails = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
   <section>
    <div className="flex flex-col justify-center items-center text-center text-black font-bold mt-8 mb-8 space-y-2"><h1 className="text-4xl">Eyin Boys Let's Do FAQ!</h1>
    <hr className="border-t-8 border-[#1ca8cb] text-center w-[300px]" /></div>
    </section>
  );
};

export default FaqDetails;
