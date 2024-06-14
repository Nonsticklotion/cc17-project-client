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
  const [review, setReview] = useState("ONE");
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
        toast.error("There was an error submitting the review!", error);
      }
    }
  };
  return (
    <>
      <div className="w-ful">
        <div className=" text-4xl">Add Review</div>
        <div>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          >
            <option value={RatingValue.ONE}>1</option>
            <option value={RatingValue.TWO}>2</option>
            <option value={RatingValue.THREE}>3</option>
            <option value={RatingValue.FOUR}>4</option>
            <option value={RatingValue.FIVE}>5</option>
          </select>
        </div>
        <div>comment</div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {authUser ? (
          <Button bg="blue" color="white" onClick={handleReviewSubmit}>
            Submit Review
          </Button>
        ) : (
          <Button bg="gray" color="white">
            Please Login
          </Button>
        )}
      </div>
    </>
  );
}
