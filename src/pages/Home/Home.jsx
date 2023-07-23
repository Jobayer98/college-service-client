import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard/CollegeCard";
import CollegeImageGallery from "./CollegeGallery/CollegeGallery";

const Home = () => {
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
  });
  return (
    <div className="container mx-auto py-20">
      <section>
        <h1 className="text-5xl font-bold text-center mb-4">Colleges</h1>
        <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>
      <section>
        <CollegeImageGallery />
      </section>
    </div>
  );
};

export default Home;
