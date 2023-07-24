import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard/CollegeCard";
import CollegeImageGallery from "./CollegeGallery/CollegeGallery";
import RecommendedResearchPapers from "./ResearchPaper/ResearchPaper";
import CollegeReviews from "./Review/Review";
import HeroSection from "./HeroSection/HeroSection";
import Search from "./Search/Search";
import PopularCollege from "./PopularCollege/PopularCollege";
import CollegePlan from "./CollegePlan/CollegePlan";

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
  }, []);
  return (
    <div>
      <HeroSection />
      <PopularCollege />
      <Search />
      <section className="max-w-5xl mx-auto my-24">
        <h1 className="text-3xl font-bold text-center mb-4">Colleges</h1>
        <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>
      <CollegePlan />
      <CollegeImageGallery />
      <RecommendedResearchPapers />
      <CollegeReviews />
    </div>
  );
};

export default Home;
