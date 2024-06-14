import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import userApi from "../api/user";

export default function ProductDescription() {
  const [product, setProduct] = useState({});
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
      console.log(product);
    }
  }, [productId]);
  return <div>{productId}</div>;
}
