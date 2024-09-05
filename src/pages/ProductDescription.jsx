import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import userApi from "../api/user";
import ContainerWithWidth from "../components/ContainerWithAutoWidth";

import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import UserAddReview from "../layouts/UserAddReview";

export default function ProductDescription() {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const { authUser } = useAuth();
  const { addToCart } = useCart();
  const { productId } = useParams();

  const ratingMap = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  };

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce(
      (sum, review) => sum + ratingMap[review.ratingId],
      0
    );
    return (totalRating / reviews.length).toFixed(1);
  };

  const averageRating = calculateAverageRating(reviews);

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const response = await userApi.getProductFromId(productId);
          setProduct(response.data.data);
          console.log(product);
          
          const reviewsResponse = await userApi.getReviewFromProductId(
            productId
          );
          setReviews(reviewsResponse.data.data);
        } catch (error) {
          console.error("There was an error fetching the product data!", error);
        }
      };

      fetchProduct();
    }
  }, [productId]);

  const handleReviewAdded = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  const handleDeleteReview = async (productId) => {
    try {
      await userApi.deleteReviewWithProductId(productId);
      console.log(reviews);
      setReviews(reviews.filter((review) => review.userId !== authUser.id));
    } catch (error) {
      console.error("There was an error deleting the review!", error);
    }
  };

  return (
    <>
      <div className="pt-5">
        <ContainerWithWidth>
          <div>
            <div className="flex flex-row">
              <div className="w-2/5 flex justify-center items-center  p-5">
                <img src={product?.bookPic} alt="" className=" w-1/2 p-5 " />
              </div>
              <div className="w-3/5">
                <div className="p-5 bg-white ">
                  <div className="text-4xl mb-5 font-bold">
                    {product?.bookName}
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Author:
                    <span className="text-gray-500"> {product?.author}</span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Rating :
                    <span className="text-red-500"> {averageRating}</span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Description:{" "}
                    <span className="text-gray-500">
                      {" "}
                      {product?.description}
                    </span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Category:{" "}
                    <span className="text-gray-500">
                      {" "}
                      {product?.category?.category}
                    </span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Price:{" "}
                    <span className="text-gray-500"> ${product.price}</span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Stock:{" "}
                    <span className="text-gray-500"> {product.stock}</span>
                  </div>
                  {authUser ? (
                    <Button
                      bg="green"
                      color="white"
                      onClick={() => addToCart({ ...product, amount: 1 })}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <Button bg="gray" color="white">
                      Please Login
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ContainerWithWidth>
      </div>
      <div className="pt-5">
        <ContainerWithWidth>
          <UserAddReview
            productId={productId}
            onReviewAdded={handleReviewAdded}
          />
        </ContainerWithWidth>
      </div>
      <div className="pt-5 pb-5">
        <ContainerWithWidth>
          <div className="text-4xl font-bold mb-6 text-center">Reviews</div>
          <div className="space-y-4">
            {reviews?.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-gray-600">
                  <span className="font-medium">By User ID : </span>{" "}
                  {review?.user?.email || authUser.email}
                </div>
                <div className="text-gray-600 mb-1">
                  <span className="font-medium">Rating : </span>{" "}
                  {ratingMap[review.ratingId]}
                </div>
                <div className="text-gray-600 ">
                  <span className="font-medium">
                    {" "}
                    Comment : {review.comment}
                  </span>
                </div>
                {authUser && authUser.id === review.userId && (
                  <Button
                    bg="red"
                    color="white"
                    onClick={() => handleDeleteReview(productId)}
                  >
                    Delete
                  </Button>
                )}
              </div>
            ))}
          </div>
        </ContainerWithWidth>
      </div>
    </>
  );
}
