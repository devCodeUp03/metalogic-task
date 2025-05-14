import { useState } from "react";
import { FiTarget } from "react-icons/fi";
import type { Faq } from "../../../faq"

useState;

const FaqCart = ({title, description, readMoreLink, index}: Faq) => {
  const [openIndex, setOpenIndex] = useState<number | null | undefined>(null);

  const toggleReadMore = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-2">
        <FiTarget className="text-amber-600 text-xl text-[42px]" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">
        {description}
        {openIndex === index && (
          <span className="block mt-2 text-gray-700">{readMoreLink}</span>
        )}
      </p>
      <button
        onClick={() => toggleReadMore(index)}
        className="mt-3 text-blue-600 text-sm font-bold cursor-pointer"
      >
        {openIndex === index ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default FaqCart;
