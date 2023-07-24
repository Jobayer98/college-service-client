import img1 from "../../../assets/icons/school1.png";
const Why = () => {
  return (
    <section className="max-w-5xl mx-auto my-24">
      <h1 className="text-3xl font-bold text-center mb-4">
        Why College Confidential?
      </h1>
      <div className="flex justify-center gap-4">
        <div className="p-4 flex flex-col items-center gap-3">
          <img src={img1} alt="icon" />
          <h3 className="text-2xl font-bold">12 millioin</h3>
          <p className="text-center">
            Forum posts across thousands of topics related to college planning
            and selection, chances for admission, campus life and more.
          </p>
          <button className="bg-black text-white px-4 py-1 rounded-lg">
            Get Answer to Your Questions
          </button>
        </div>
        <div className="p-4 flex flex-col items-center gap-3">
          <img src={img1} alt="icon" />
          <h3 className="text-2xl font-bold">8+</h3>
          <p className="text-center">
            In-depth college and university profiles that provide admission
            stats, plus valuable info on student life, academics, cost and more.
          </p>
          <button className="bg-black text-white px-4 py-1 rounded-lg">
            Explore College
          </button>
        </div>
        <div className="p-4 flex flex-col items-center gap-3">
          <img src={img1} alt="icon" />
          <h3 className="text-2xl font-bold">1+</h3>
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
