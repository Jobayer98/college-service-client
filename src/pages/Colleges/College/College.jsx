import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const College = () => {
  const { id } = useParams();
  const [college] = useFetch(`http://localhost:3000/colleges/${id}`);
  return (
    <div className="container mx-auto py-8 mt-16">
      <div className="max-w-4xl mx-auto overflow-hidden">
        {/* College Image */}
        <img
          src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="College"
          className="w-full h-96 object-cover"
        />

        <div className="px-4 py-4">
          {/* College Name */}
          <h2 className="text-3xl font-bold mb-2">{college?.name}</h2>

          {/* Admission Dates */}
          <p className="text-gray-600 mb-2">
            Admission Dates: August 2023 - September 2023
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-1">Admission Process</h3>
            <p className="text-gray-600 mb-2">{college?.admissionProcess}</p>
          </div>

          {/* Events */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Events</h3>
            {college?.events?.map((event, index) => (
              <div key={index}>
                <p className="text-gray-600 font-bold mb-2">
                  {event.eventName}
                </p>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-2">{event.description}</p>
              </div>
            ))}
          </div>

          {/* Research History */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Research Work</h3>
            {college?.researchWorks?.map((research, index) => (
              <div key={index}>
                <p className="text-gray-600 font-bold mb-2">{research.title}</p>
                <p className="text-gray-600 mb-2">{research.author}</p>
                <p className="text-gray-600 mb-2">{research.publicationDate}</p>
                <p className="text-gray-600 mb-2">{research.abstract}</p>
              </div>
            ))}
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Sports</h3>
            {college?.sportsCategories?.map((sport, index) => (
              <div key={index}>
                <p className="text-gray-600 font-bold mb-2">{sport.category}</p>
                <p className="text-gray-600 mb-2">{sport.teamCount}</p>
                <p className="text-gray-600 mb-2">{sport.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;
