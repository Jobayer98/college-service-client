import CollegeCard from "../../../components/CollegeCard/CollegeCard";
import useFetch from "../../../useFetch";

const Colleges = () => {
  let [colleges] = useFetch("http://localhost:3000/colleges");
  colleges.length = 3;
  return (
    <section className="max-w-6xl mx-auto my-16">
      <h1 className="text-3xl font-bold text-center mb-4">Colleges</h1>
      <div className="grid justify-center items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {colleges?.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </section>
  );
};

export default Colleges;
