import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import AuthContext from "../../context/AuthContext";
const MyCollege = () => {
  const [college, setCollege] = useState(null);
  const [rating, setRating] = useState(0);
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const id = localStorage.getItem("collegeId");
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
  const onSubmit = async (data) => {
    const review = {
      rating,
      review: data.review,
      reviewer: user?.displayName,
      collegeName: college?.name,
    };

    const userReview = await fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    const reviewData = await userReview.json();
    console.log(reviewData);
  };
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
          <div className="mt-6">
            <p>Give a review</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                name="message"
                className="bg-gray-100 w-[50%] mt-2 outline-0 ring-1 pl-2 text-gray-600"
                id=""
                cols="20"
                rows="5"
                placeholder=" Messege..."
                {...register("review", { required: true })}
              ></textarea>
              <div>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={rating}
                  onChange={setRating}
                  isRequired
                />
                <input
                  type="submit"
                  value="Submit"
                  className="text-white bg-blue-700 px-2 py-1 rounded mt-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
