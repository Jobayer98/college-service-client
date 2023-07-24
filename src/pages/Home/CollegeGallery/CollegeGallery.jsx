const CollegeImageGallery = () => {
  // Function to generate a random image URL

  // Generate a list of random college graduate group pictures
  const collegeImages = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    caption: `College Graduates Group ${index + 1}`,
  }));

  return (
    <section className="max-w-5xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">
        College Graduate Image Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4">
        {collegeImages.map((image) => (
          <div
            key={image.id}
            className="border hover:shadow-xl transition-all duration-500 ease-in-out"
          >
            <img
              src={image.imageUrl}
              alt={image.caption}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-800 font-bold mb-2">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeImageGallery;
