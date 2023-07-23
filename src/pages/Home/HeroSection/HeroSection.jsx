import img from "../../../assets/Image.png";
import { BsArrowRightShort } from "react-icons/bs";
const HeroSection = () => {
  return (
    <div
      className="bg-[#f1eff0] h-[520px] flex flex-col justify-center bg-center bg-cover pl-20 mt-16"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <p className="font-[Yellowtail] text-[#68A47F] text-2xl">
          100% Natural Food
        </p>
        <h2 className="text-7xl font-extrabold text-gray-700">
          Choose the best <br />
          healthier way <br /> of life
        </h2>
      </div>
      <button
        className={
          "w-fit flex items-center gap-2 mt-8 px-3 py-1 rounded font-medium bg-[#EFD372] text-[#274c5b]"
        }
      >
        Explore Now{" "}
        <BsArrowRightShort className="bg-[#274c5b] text-white rounded-full ml-1" />
      </button>
    </div>
  );
};

export default HeroSection;
