import { Link } from "react-router-dom";
const CollegeCard = ({ collegeID }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* College Image */}
        <img
          src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="College"
          className="w-full h-48 object-cover"
        />

        <div className="px-4 py-4">
          {/* College Name */}
          <h2 className="text-xl font-bold mb-2">College Name</h2>

          {/* Admission Dates */}
          <p className="text-gray-600 mb-2">
            Admission Dates: August 2023 - September 2023
          </p>

          {/* Events */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Events</h3>
            <ul className="list-disc pl-6">
              <li>Event 1</li>
              <li>Event 2</li>
              <li>Event 3</li>
              {/* Add more events here */}
            </ul>
          </div>

          {/* Research History */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Research History</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              hendrerit lacinia mauris, ac feugiat magna porttitor ac. Ut
              volutpat, nisi nec ullamcorper faucibus, nisi lectus iaculis
              purus, ac interdum justo ex quis mauris.
            </p>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Sports</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              hendrerit lacinia mauris, ac feugiat magna porttitor ac. Ut
              volutpat, nisi nec ullamcorper faucibus, nisi lectus iaculis
              purus, ac interdum justo ex quis mauris.
            </p>
          </div>
        </div>
        <div className="px-4 py-4">
          <Link to={`college/${collegeID}`}>See Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
