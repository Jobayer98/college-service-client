import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "@smastrom/react-rating/style.css";
const CollegeReviews = () => {
  // Sample data for college reviews
  const collegeReviews = [
    {
      id: 1,
      collegeName: "University of Fictionalville",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet quam tincidunt, in cursus turpis euismod.",
      reviewer: "John Doe",
      rating: 4.5,
    },
    {
      id: 2,
      collegeName: "Central College of Arts",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet quam tincidunt, in cursus turpis euismod.",
      reviewer: "Jane Smith",
      rating: 5,
    },
    {
      id: 3,
      collegeName: "Science Institute of Technology",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet quam tincidunt, in cursus turpis euismod.",
      reviewer: "Michael Johnson",
      rating: 4,
    },
    {
      id: 4,
      collegeName: "Central College of Arts",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet quam tincidunt, in cursus turpis euismod.",
      reviewer: "Jane Smith",
      rating: 5,
    },
    {
      id: 5,
      collegeName: "Science Institute of Technology",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet quam tincidunt, in cursus turpis euismod.",
      reviewer: "Michael Johnson",
      rating: 4,
    },
    // Add more reviews here...
  ];

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">College Reviews</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {collegeReviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="myswiper bg-white rounded-lg shadow-md p-4 mb-10"
          >
            <h3 className="text-lg font-bold mb-2">{review.collegeName}</h3>
            <p className="text-gray-600 mb-2">{review.review}</p>
            <p className="text-gray-800 font-bold">{review.reviewer}</p>
            <div className="flex items-center mt-2">
              <span>
                <Rating style={{ maxWidth: 130 }} value={3} readOnly />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollegeReviews;

<Swiper
  slidesPerView={3}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper"
></Swiper>;
