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
  const { authUser } = useAuth();
  const { addToCart } = useCart();
  const { productId } = useParams();
  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const response = await userApi.getProductFromId(productId);
          setProduct(response.data.data);
        } catch (error) {
          console.error("There was an error fetching the product data!", error);
        }
      };

      fetchProduct();
    }
  }, [productId]);
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
                    {product.bookName}
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Author:
                    <span className="text-gray-500">{product.author}</span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Description:{" "}
                    <span className="text-gray-500">{product.description}</span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Category:{" "}
                    <span className="text-gray-500">{product.categoryId}</span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Price:{" "}
                    <span className="text-gray-500">${product.price}</span>
                  </div>
                  <div className="text-2xl mb-5 text-gray-800 font-bold">
                    Stock:{" "}
                    <span className="text-gray-500">{product.stock}</span>
                  </div>
                  {authUser ? (
                    <Button
                      bg="green"
                      color="white"
                      onClick={() => addToCart(product)}
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
            // onReviewAdded={handleReviewAdded}
          />
        </ContainerWithWidth>
      </div>
      <div className="pt-5">
        <ContainerWithWidth>All Review</ContainerWithWidth>
      </div>
    </>
  );
}
