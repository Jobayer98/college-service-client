import Card from "../../../components/UI/Card";

const Colleges = () => {
  const collegeDetails = [
    {
      id: "1",
      collegeName: "University of Fictionalville",
      admissionProcess:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet quam tincidunt, in cursus turpis euismod.",
      researchWorks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur eget odio nec luctus.",
      sportsCategories: ["Football", "Basketball", "Volleyball", "Swimming"],
      events: ["Annual Sports Meet", "Cultural Fest", "Science Exhibition"],
    },
    {
      id: "2",
      collegeName: "Central College of Arts",
      admissionProcess:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet quam tincidunt, in cursus turpis euismod.",
      researchWorks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur eget odio nec luctus.",
      sportsCategories: ["Tennis", "Cricket", "Table Tennis", "Badminton"],
      events: ["Art Fest", "Literary Symposium", "Music Concert"],
    },
    {
      id: "3",
      collegeName: "Science Institute of Technology",
      admissionProcess:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet quam tincidunt, in cursus turpis euismod.",
      researchWorks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur eget odio nec luctus.",
      sportsCategories: ["Athletics", "Archery", "Chess", "Gymnastics"],
      events: ["Tech Expo", "Robotics Competition", "Innovation Summit"],
    },
  ];
  return (
    <section className="max-w-6xl mx-auto my-24">
      <h1 className="text-3xl font-bold text-center mb-4">Colleges</h1>
      <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collegeDetails.map((college) => (
          <Card key={college.id} college={college} />
        ))}
      </div>
    </section>
  );
};

export default Colleges;
