const CollegeImageGallery = () => {
  // Function to generate a random image URL

  // Generate a list of random college graduate group pictures
  const collegeImages = [
    {
      id: 1,
      url: "https://static8.depositphotos.com/1278120/896/i/450/depositphotos_8963157-Graduation-group.jpg",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/id/482362583/photo/multi-ethnic-friends-excitedly-hold-diplomas-after-college-graduation.jpg?s=612x612&w=0&k=20&c=0u-Jm_50Rtdwl5n8vMZ-ROfxEg-BCSmg3ZKJJ_w5CWY=",
    },
    {
      id: 3,
      url: "https://media.istockphoto.com/id/483228379/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=tfxSle4u-YBfEQGEcm3JoGdyPsv5M8RnkNjmowQyogQ=",
    },
    {
      id: 4,
      url: "https://cdn.create.vista.com/api/media/medium/258235102/stock-photo-happy-group-students-graduation-gowns?token=",
    },
    {
      id: 5,
      url: "https://t4.ftcdn.net/jpg/03/38/75/21/360_F_338752127_KeLWD80r6a6tNugFmVrvcma5zN5jdQBn.jpg",
    },
    {
      id: 6,
      url: "https://www.brookings.edu/wp-content/uploads/2023/04/shutterstock_658847998.jpg",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Graduate Image Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4">
        {collegeImages.map((image) => (
          <div key={image.id} className="border">
            <img
              src={image.url}
              alt="image"
              className="w-full h-40 object-cover hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeImageGallery;
