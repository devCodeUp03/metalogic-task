import faq from "../../../faq"; // Adjust path
import FaqCart from "./FaqCart";

const Faqs = () => {
 

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="text-center font-bold text-[32px]"><span className="text-green-600">FAQs</span> (Frequently Asked Questions)</div>
      {faq.map((item, index) => (
     <FaqCart key={index} index={item.index} title={item.title} description={item.description} readMoreLink={item.description}/>
      ))}
    </div>
  );
};

export default Faqs;
