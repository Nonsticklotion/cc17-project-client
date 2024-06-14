import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import userApi from "../api/user";
import { toast } from "react-toastify";

export default function UserAddReview({ productId, onReviewAdded }) {
  const RatingValue = {
    ONE: "ONE",
    TWO: "TWO",
    THREE: "THREE",
    FOUR: "FOUR",
    FIVE: "FIVE",
  };
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const { authUser } = useAuth();

  const handleReviewSubmit = async () => {
    if (review && rating) {
      try {
        const formData = { productId, ratingId: rating, comment: review };
        const response = await userApi.createReview(formData);
        if (response) {
          toast.success("Review Success");
        }
        onReviewAdded(response.data.data);
        setReview("");
        setRating(0);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          "There was an error submitting the review!";
        toast.error(errorMessage);
      }
    }
  };
  return (
    <>
      <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="text-4xl font-bold mb-6 text-center">Add Review</div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a rating</option>
            <option value={RatingValue.ONE}>1</option>
            <option value={RatingValue.TWO}>2</option>
            <option value={RatingValue.THREE}>3</option>
            <option value={RatingValue.FOUR}>4</option>
            <option value={RatingValue.FIVE}>5</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Comment
          </label>
          <textarea
            id="comment"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        {authUser ? (
          <Button
            bg="blue"
            color="white"
            onClick={handleReviewSubmit}
            className="w-full py-2 rounded-lg"
          >
            Submit Review
          </Button>
        ) : (
          <Button bg="gray" color="white" className="w-full py-2 rounded-lg">
            Please Login
          </Button>
        )}
      </div>
    </>
  );
}
