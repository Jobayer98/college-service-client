import img from "../../../assets/planning.webp";
import p1 from "../../../assets/partner/buisness_insider.png";
import p2 from "../../../assets/partner/cbs_news.png";
import p3 from "../../../assets/partner/chicago_tribune.png";
import p4 from "../../../assets/partner/cnn.png";
import p5 from "../../../assets/partner/forbes.png";
import p6 from "../../../assets/partner/huffposr.png";
import p7 from "../../../assets/partner/new_your_post.png";
import p8 from "../../../assets/partner/newsweek.png";
import p9 from "../../../assets/partner/teen_vogue.png";
import p10 from "../../../assets/partner/the_chronicle.png";
import { BsCheckCircle } from "react-icons/bs";
const CollegePlan = () => {
  return (
    <section className="my-16 max-w-6xl mx-auto hidden md:block">
      <h1 className="text-3xl font-bold text-center mb-4">
        We Have Been Featured In
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        <img src={p1} alt="p1" />
        <img src={p2} alt="p2" />
        <img src={p3} alt="p3" />
        <img src={p4} alt="p4" />
        <img src={p5} alt="p5" />
        <img src={p6} alt="p6" />
        <img src={p7} alt="p7" />
        <img src={p8} alt="p8" />
        <img src={p9} alt="p9" />
        <img src={p10} alt="p11" />
      </div>
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
