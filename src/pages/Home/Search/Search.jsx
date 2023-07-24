import img from "../../../assets/search.png";
import SCard from "./SCard";

const Search = () => {
  return (
    <section className="my-16 max-w-6xl mx-auto hidden md:block">
      <div
        className="min-h-[300px] bg-cover bg object-cover bg-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col justify-center items-center pt-16">
          <h1 className="text-4xl font-bold text-center mb-4">
            Find the right college for you
          </h1>
          <input
            className="p-4 rounded-full outline-none w-[50%] border "
            type="search"
            placeholder="Search by college name"
          />
        </div>
      </div>
      <SCard />
    </section>
  );
};

export default Search;
