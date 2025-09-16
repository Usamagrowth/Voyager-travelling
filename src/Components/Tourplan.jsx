import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import faq from '../assets/faq.png'

const Tourplan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a tour with your agency?",
      answer: "You can book directly through our website or contact our support team for assistance.",
    },
    {
      question: "What payments do you accept?",
      answer: "We accept major credit/debit cards, bank transfers, and secure online payment options.",
    },
    {
      question: "Can I customize my travel itinerary?",
      answer: "Yes, we offer flexible itineraries tailored to your preferences and travel style.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made within the allowed timeframe are eligible for a refund; specific terms vary by package.",
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
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tourplan;
