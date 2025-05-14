import Slider from "./Slider"

const TechStack = () => {
  return (
    <div>
        <div className="container pt-10 pb-10">
            <div className="flex flex-col items-center gap-10">

            <h1 className="text-different uppercase font-bold text-[24px]">Tech Stack</h1>
            <p className="text-[32px] text-head font-bold text-center">Technology we behold</p>
            <p className="text-center text-[20px] text-para">Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs.</p>
            <Slider />
            </div>
        </div>
    </div>
  )
}

export default TechStack