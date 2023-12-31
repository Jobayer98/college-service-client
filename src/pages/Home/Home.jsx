import CollegeImageGallery from "./CollegeGallery/CollegeGallery";
import RecommendedResearchPapers from "./ResearchPaper/ResearchPaper";
import CollegeReviews from "./Review/Review";
import HeroSection from "./HeroSection/HeroSection";
import Search from "./Search/Search";
import PopularCollege from "./PopularCollege/PopularCollege";
import CollegePlan from "./CollegePlan/CollegePlan";
import Why from "./AboutUs/Why";
import Colleges from "./Colleges/Colleges";

const Home = () => {
  return (
    <>
      <HeroSection />
      <main className="mx-8 md:mx-16 lg:mx32">
        <Why />
        <PopularCollege />
        <Search />
        <Colleges />
        <CollegePlan />
        <CollegeImageGallery />
        <RecommendedResearchPapers />
        <CollegeReviews />
      </main>
    </>
  );
};

export default Home;
