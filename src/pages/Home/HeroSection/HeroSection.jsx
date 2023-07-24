import img from "../../../assets/banner.webp";
import { BsArrowRightShort } from "react-icons/bs";
const HeroSection = () => {
  return (
    <div
      className="bg-[#f1eff0] h-[324px] md:h-[591px] lg:h-[712px] flex flex-col justify-center bg-cover bg-center  pl-12 lg:pl-32 my-16"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <h2 className="text-3xl md:text-4xl w-[324px] lg:w-full font-bold text-gray-900 bg-gray-50 md:bg-transparent">
          The Real Deal On Applying To College
        </h2>
        <p className="w-[40%] text-sm md:text-base mt-4">
          Access information on 800+ colleges and universities, planning tools,
          and a vibrant online community to guide you to the college experience
          of your dreams.
        </p>
      </div>
      <button
        className={
          "w-fit flex items-center gap-1 mt-8 px-3 py-2 rounded-lg font-medium bg-blue-800 text-white"
        }
      >
        Get Started{" "}
        <BsArrowRightShort className="text-white text-lg font ml-1" />
      </button>
    </div>
  );
};

export default HeroSection;
