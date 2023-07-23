import Card from "../../components/UI/Card";

const Colleges = () => {
  const collegeDetails = {
    collegeName: "Sample College",
    admissionDates: "August 2023 - September 2023",
    events: ["Event 1", "Event 2", "Event 3"],
    researchHistory:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit lacinia mauris, ac feugiat magna porttitor ac.",
    sports:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit lacinia mauris, ac feugiat magna porttitor ac.",
  };
  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            collegeName={collegeDetails.collegeName}
            admissionDates={collegeDetails.admissionDates}
            events={collegeDetails.events}
            researchHistory={collegeDetails.researchHistory}
            sports={collegeDetails.sports}
          />
          <Card
            collegeName={collegeDetails.collegeName}
            admissionDates={collegeDetails.admissionDates}
            events={collegeDetails.events}
            researchHistory={collegeDetails.researchHistory}
            sports={collegeDetails.sports}
          />
          <Card
            collegeName={collegeDetails.collegeName}
            admissionDates={collegeDetails.admissionDates}
            events={collegeDetails.events}
            researchHistory={collegeDetails.researchHistory}
            sports={collegeDetails.sports}
          />
        </div>
      </div>
    </div>
  );
};

export default Colleges;
