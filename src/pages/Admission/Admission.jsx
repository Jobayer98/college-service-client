import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const { colleges } = useFetch("http://localhost:3000/colleges");
  const navigate = useNavigate();

  const handleApply = (id) => {
    localStorage.setItem("collegeId", id);
    navigate("/apply");
  };

  return (
    <section className="max-w-7xl mx-auto my-20">
      {colleges?.map((college) => (
        <div
          key={college.id}
          className="bg-white rounded-lg shadow-lg p-5 my-2"
        >
          <h1 className="text-3xl font-bold mb-5">{college.name}</h1>
          <p className="text-lg mb-3">
            Last Date of Admission: {college.admissionLastDate}
          </p>
          <p className="text-gray-600">{college.description}</p>
          <button
            onClick={() => handleApply(college.id)}
            className="text-blue-500 hover:underline"
          >
            Apply for Admission
          </button>
        </div>
      ))}
    </section>
  );
};

export default Admission;
