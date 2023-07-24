import { Link } from "react-router-dom";
const CollegeCard = ({ college }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* College Image */}
      <img
        src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        alt="College"
        className="w-full h-48 object-cover"
      />

      <div className="px-4 py-4">
        {/* College Name */}
        <h2 className="text-xl font-bold mb-2">{college?.collegeName}</h2>

        {/* Admission Dates */}
        <p className="text-gray-600 mb-2">
          Admission Dates: August 2023 - September 2023
        </p>
        {/* Research History */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Research Work</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            hendrerit lacinia mauris.
          </p>
        </div>
      </div>
      <div className="px-4 py-4">
        <Link to={`${college?.id}`}>See Details</Link>
      </div>
    </div>
  );
};

export default CollegeCard;
