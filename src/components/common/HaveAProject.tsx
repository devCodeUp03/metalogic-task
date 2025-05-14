import { GoArrowRight } from "react-icons/go";
const HaveAProject = () => {
  return (
    <div className="container mb-10 mt-10 max-w-[1000px]">
      <div className="bg-green-200 border-0 rounded-xl p-10 text-right text-[18px]">
        <h1 className="mb-3 text-[28px] font-bold">Have a Project in Mind?</h1>
        <p className="mb-3">Let's Connect and Ignite Success!</p>
        <button className="border px-3 py-2 bg-head rounded-md text-white cursor-pointer">
          <span>Get Your Quote</span> <GoArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default HaveAProject;
