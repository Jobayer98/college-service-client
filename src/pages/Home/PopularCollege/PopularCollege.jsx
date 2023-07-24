const PopularCollege = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="my-24 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Colleges in Popular City
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {array.map((item) => (
          <div
            key={item}
            className="border bg-gray-50 hover:shadow-xl rounded-lg"
          >
            <img
              src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              className="w-full h-40 object-cover rounded-tl-lg rounded-tr-lg"
            />
            <div className="p-4">
              <p className="text-gray-800 font-bold mb-2">
                {"Colleges in Dhaka"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCollege;
