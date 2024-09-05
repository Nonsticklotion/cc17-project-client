import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import adminApi from "../api/admin";
import { toast } from "react-toastify";
import Slide from "../components/Slide";

export default function HomePage() {
  const [product, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState({});
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await adminApi.getHomeProduct();
        const products = response.data.data;
        // Check if we have at least 4 products
        if (products.length > 0) {
          setNewProduct(products[0]); // Set the most recent product
          setProduct(products.slice(1, 4)); // Set the next 3 products
        } else {
          // Handle cases where there are fewer than 4 products
          setNewProduct(null);
          setProduct(products);
        }
        console.log(products);

        console.log("new product", newProduct);
        console.log("product-1", products[0]);
      } catch (err) {
        toast.error("Can't fetch data");
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen flex flex-col pt-5">
      <section className="h-96 flex justify-between items-center bg-pink-100 p-8 mb-5 rounded-lg shadow-md ">
        <Slide slides={product} width="full" fit="object-contain" />
      </section>

      <section className="h-96 flex justify-between items-center bg-pink-100 p-8 mb-5 rounded-lg shadow-md ">
        <div className="w-2/5 justify-center items-center">
          <img
            src={newProduct?.bookPic}
            alt={newProduct?.bookName}
            className="w-60 mx-auto"
            loading="lazy"
          />
        </div>
        <div className="w-3/5 pl-8">
          <h2 className="text-3xl font-bold mb-4">New Release Book</h2>
          <h3 className="text-2xl mb-2">{newProduct?.bookName}</h3>
          <p className="text-xl text-gray-800 mb-2">{newProduct?.author}</p>
          <p className="text-xl text-red-500 mb-4">฿{newProduct?.price}</p>
          <Link
            to={`/product/${newProduct?.id}`}
            className="bg-pink-500 text-white px-4 py-2 rounded-full"
          >
            Go to Book
          </Link>
        </div>
      </section>
    </div>
  );
}
