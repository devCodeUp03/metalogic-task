import {images} from "../../../images";
import Marquee from "react-fast-marquee";


const Slider = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={40}
        direction="left"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-20 h-20 mx-4 transition-transform duration-300 transform hover:scale-110"
          >
            <img
              src={img}
              alt={`slider-${index}`}
              className="w-full h-full object-cover rounded-md bg-transparent"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};



export default Slider;
