import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const College = () => {
  const [college, setCollege] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/colleges/${id}`)
      .then((res) => {
        res.json().then((data) => {
          setCollege(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="container mx-auto py-8 mt-16">
      <div className="max-w-xl mx-auto overflow-hidden">
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
          <div>
            <h3 className="text-lg font-semibold mb-1">Admission Process</h3>
            <p className="text-gray-600 mb-2">{college?.admissionProcess}</p>
          </div>

          {/* Events */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Events</h3>
            {college?.events?.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </div>

          {/* Research History */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Research Work</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              hendrerit lacinia mauris, ac feugiat magna porttitor ac. Ut
              volutpat, nisi nec ullamcorper faucibus, nisi lectus iaculis
              purus, ac interdum justo ex quis mauris.
            </p>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-lg font-semibold mb-1">Sports</h3>
            {college?.sportsCategories.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;
