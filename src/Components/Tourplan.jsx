import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import faq from '../assets/faq.png'

const Tourplan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How Do I Book A Tour With Your Agency",
      answer: "You can book a tour directly through our website or by contacting our customer service team.",
      image: faq,
    },
    {
      question: "What Payment Method Do You Accept",
      answer: "We accept credit/debit cards, PayPal, and bank transfers for your convenience.",
      image: faq,
    },
    {
      question: "Can I Customize My Travel Itinerary",
      answer: "Yes! Our tours are fully customizable to suit your preferences.",
      image: faq,
    },
    {
      question: "What is Your Cancellation Policy",
      answer: "Cancellations are free up to 7 days before the trip. Later cancellations may incur a small fee.",
      image: faq,
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-8">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">Tour Plan</h1>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question */}
            <div
              onClick={() => toggleFaq(index)}
              className="bg-gray-200 min-h-[60px] px-3 sm:px-4 py-3 text-black rounded-lg flex items-center justify-between cursor-pointer"
            >
              <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                {faq.question}
              </h3>
              <MdKeyboardDoubleArrowRight
                className={`transition-transform ${openIndex === index ? "rotate-90" : ""}`}
              />
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 py-3 bg-white flex flex-col sm:flex-row gap-4">
                <p>{faq.answer}</p>
                <img
                  src={faq.image}
                  alt={faq.question}
                  className="w-full sm:w-48 rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tourplan;
