import CollegeCard from "./CollegeCard/CollegeCard";

const Home = () => {
  // const collegeDetails = {
  //   collegeName: "Sample College",
  //   admissionDates: "August 2023 - September 2023",
  //   events: ["Event 1", "Event 2", "Event 3"],
  //   researchHistory:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit lacinia mauris, ac feugiat magna porttitor ac.",
  //   sports:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit lacinia mauris, ac feugiat magna porttitor ac.",
  // };
  return (
    <div className="container mx-auto py-20">
      <section>
        <h1 className="text-5xl font-bold text-center mb-4">Colleges</h1>
        <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CollegeCard collegeID={1} />
          <CollegeCard collegeID={2} />
          <CollegeCard collegeID={3} />
        </div>
      </section>
    </div>
  );
};

export default Home;
