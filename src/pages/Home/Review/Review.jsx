import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../../hooks/useFetch";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "@smastrom/react-rating/style.css";
const CollegeReviews = () => {
  const { colleges: reviews } = useFetch("http://localhost:3001/reviews");

  return (
    <div className="max-w-4xl mx-auto my-20">
      <h2 className="text-2xl font-bold mb-8 text-center">College Reviews</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper hidden lg:block"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review._id}
            className="myswiper bg-white rounded-lg shadow-md p-4 mb-16"
          >
            <h3 className="text-lg font-bold mb-2">{review.collegeName}</h3>
            <p className="text-gray-600 mb-2">{review.review}</p>
            <p className="text-gray-800 font-bold">{review.reviewer}</p>
            <div className="flex items-center mt-2">
              <span>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={review?.rating}
                  readOnly
                />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-lg block lg:hidden"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review._id}
            className="myswiper bg-white rounded-lg shadow-md p-4 mb-16"
          >
            <h3 className="text-lg font-bold mb-2">{review.collegeName}</h3>
            <p className="text-gray-600 mb-2">{review.review}</p>
            <p className="text-gray-800 font-bold">{review.reviewer}</p>
            <div className="flex items-center mt-2">
              <span>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={review?.rating}
                  readOnly
                />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollegeReviews;
