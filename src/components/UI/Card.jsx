import { useState } from "react";

const Card = ({
  collegeName,
  admissionDates,
  events,
  researchHistory,
  sports,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleSeeMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      <figure>
        <img
          src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="College"
          className="w-full h-56 object-cover"
        />
      </figure>
      <div className="px-4 py-4">
        {/* College Name */}
        <h2 className="text-xl font-bold mb-2">{collegeName}</h2>

        {/* Admission Dates */}
        <p className="text-gray-600 mb-2">Admission Dates: {admissionDates}</p>

        {/* Events */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Events</h3>
          <ul className="list-disc pl-6">
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>

        {/* See More Button */}
        <div className="text-right">
          <button
            onClick={handleSeeMore}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            See More
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div
              onClick={handleCloseModal}
              className="absolute inset-0 bg-gray-800 opacity-60"
            ></div>

            <div className="bg-white rounded-lg p-8 z-20 max-w-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  alt="College"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <h2 className="text-xl font-bold mb-4">College Details</h2>
              <p className="text-gray-600 mb-2">
                Admission Dates: {admissionDates}
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Events</h3>
                <ul className="list-disc pl-6">
                  {events.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>
              {/* Research History */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Research History</h3>
                <p className="text-gray-600">{researchHistory}</p>
              </div>
              {/* Sports */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Sports</h3>
                <p className="text-gray-600">{sports}</p>
              </div>
              <div className="text-right">
                <button
                  onClick={handleCloseModal}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
