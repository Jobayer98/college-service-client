import img1 from "../../../assets/icons/school1.png";
import img2 from "../../../assets/icons/school2.png";
import img3 from "../../../assets/icons/note.png";
const Why = () => {
  return (
    <section className="max-w-5xl mx-auto my-24">
      <h1 className="text-3xl font-bold text-center mb-4">
        Why College Connect?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
        <div className="p-4 flex flex-col items-center gap-3">
          <img className="h-40" src={img1} alt="icon" />
          <h3 className="text-2xl font-bold">12 millioin</h3>
          <p className="text-center">
            Forum posts across thousands of topics related to college planning
            and selection, chances for admission, campus life and more.
          </p>
          <button className="bg-black text-white px-4 py-1 rounded-lg">
            Get Answer to Your Questions
          </button>
        </div>
        <div className="p-4 flex flex-col items-center justify-center gap-3">
          <img className="h-40" src={img2} alt="icon" />
          <h3 className="text-2xl font-bold">800+</h3>
          <p className="text-center">
            In-depth college and university profiles that provide admission
            stats, plus valuable info on student life, academics, cost and more.
          </p>
          <button className="bg-black text-white px-4 py-1 rounded-lg">
            Explore College
          </button>
        </div>
        <div className="p-4 flex flex-col items-center gap-3">
          <img className="h-40" src={img3} alt="icon" />
          <h3 className="text-2xl font-bold">1200+</h3>
          <p className="text-center">
            Articles full of tried-and-true admissions tips, insider advice on
            searching for schools, and college essay and test prep support.
          </p>
          <button className="bg-black text-white px-4 py-1 rounded-lg">
            Read Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Why;
