import california from "../../../assets/city/california-min.webp";
import texas from "../../../assets/city/texas-min.webp";
import florida from "../../../assets/city/florida-min.webp";
import newyork from "../../../assets/city/new-york-min.webp";
import illinois from "../../../assets/city/illinois-min.webp";
import pennsylvania from "../../../assets/city/pennsylvania-min.webp";
import ohio from "../../../assets/city/ohio-min.webp";
import alaska from "../../../assets/city/alaska-min.webp";
const PopularCollege = () => {
  const colleges = [
    {
      id: 1,
      name: "California",
      url: california,
    },
    {
      id: 2,
      name: "Texas",
      url: texas,
    },
    {
      id: 3,
      name: "Florida",
      url: florida,
    },
    {
      id: 4,
      name: "New York",
      url: newyork,
    },
    {
      id: 5,
      name: "Illinois",
      url: illinois,
    },
    {
      id: 6,
      name: "Pennsylvania",
      url: pennsylvania,
    },
    {
      id: 7,
      name: "Ohio",
      url: ohio,
    },
    {
      id: 8,
      name: "Alaska",
      url: alaska,
    },
  ];
  return (
    <div className="bg-gray-100 p-1">
      <section className="my-24 max-w-5xl mx-auto">
        <h1 className="text-3xl text-center md:text-left font-bold mb-8">
          Colleges in Popular City
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="border bg-white hover:shadow-xl rounded-lg w-[70%] mx-auto md:w-full"
            >
              <img
                src={college.url}
                alt={college.name}
                className="w-full h-28 object-cover rounded-tl-lg rounded-tr-lg"
              />
              <div className="p-4">
                <p className="text-gray-800 font-bold mb-2">
                  Colleges in {college.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularCollege;
