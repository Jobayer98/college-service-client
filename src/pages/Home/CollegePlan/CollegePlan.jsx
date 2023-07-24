import img from "../../../assets/planning.webp";
import { BsCheckCircle } from "react-icons/bs";
const CollegePlan = () => {
  return (
    <section className="my-16">
      <h1 className="text-3xl font-bold text-center mb-4">
        We Have Been Featured In:
      </h1>
      <div></div>
      <div
        className="h-[420px] bg-cover bg-center flex flex-col justify-center pl-[21%] lg:pl-[30%]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div>
          <h1 className="text-white text-3xl font-bold mb-6">
            Free College Planning & Guidance <br /> for Students & Families
          </h1>
          <ul className="flex flex-col font-medium gap-4">
            <li className="flex items-center text-white gap-4">
              <BsCheckCircle className="text-xl text-yellow-500" /> College
              Planning Tools
            </li>
            <li className="flex items-center text-white gap-4">
              <BsCheckCircle className="text-xl text-yellow-500" /> Access to
              Thousands of Articles
            </li>
            <li className="flex items-center text-white gap-4">
              <BsCheckCircle className="text-xl text-yellow-500" />
              Research over 800+ colleges
            </li>
            <li className="flex items-center text-white gap-4">
              <BsCheckCircle className="text-xl text-yellow-500" />
              Community Discussions
            </li>
          </ul>
        </div>
        <div>
          <button className="rounded-md font-medium px-16 py-2 bg-white mt-12 ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollegePlan;
