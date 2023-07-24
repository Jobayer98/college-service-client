import { useEffect, useState } from "react";
import CollegeCard from "../../components/CollegeCard/CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/colleges")
      .then((res) => {
        res.json().then((data) => {
          setColleges(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="max-w-6xl mx-auto my-24">
      <h1 className="text-3xl font-bold text-center mb-4">Colleges</h1>
      <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </section>
  );
};

export default Colleges;
