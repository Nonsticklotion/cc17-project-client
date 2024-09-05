import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import adminApi from "../api/admin";
import { toast } from "react-toastify";
import Slide from "../components/Slide";

const mockData = [
  {
    imgSrc:
      "https://lh5.googleusercontent.com/d/1FziDYPgkrSjdYLgTZy7Z_oN9PJX8iAWc",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
    link: {
      linkSrc: "/hospital/1",
      button: "line: โรงพยาบาล 1",
    },
  },
  {
    imgSrc:
      "https://lh5.googleusercontent.com/d/18BT_zH7deLikFY2O-lj8fB1P1y982tre",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
    link: {
      linkSrc: "/hospital/2",
      button: "line: โรงพยาบาล 2",
    },
  },
  {
    imgSrc:
      "https://lh5.googleusercontent.com/d/1-_VfWeaPLJm33Bs-zg4I2ZYPnH8fF7F1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
    link: {
      linkSrc: "/hospital/3",
      button: "line: โรงพยาบาล 3",
    },
  },
  {
    imgSrc:
      "https://lh5.googleusercontent.com/d/1Wg7K4Su8wdVeB8vCXUgOm3_-8DsO9zzw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 4",
    link: {
      linkSrc: "/hospital/4",
      button: "line: โรงพยาบาล 4",
    },
  },
  {
    imgSrc:
      "https://lh5.googleusercontent.com/d/1DenZx63654QN88_j6Tj5QuMkdpdQlo5H",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 5",
    link: {
      linkSrc: "/hospital/5",
      button: "line: โรงพยาบาล 5",
    },
  },
];

export default function HomePage() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await adminApi.getProduct();
        setProduct(response.data.data);
        console.log(response);
      } catch (err) {
        toast.error("Can't fetch data");
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen flex flex-col pt-5">
      {/* <section className=" h-96 flex justify-between items-center bg-gray-100 p-8 mb-5 rounded-lg shadow-md ">
        <div className="w-1/2 pl-5">
          <h2 className="text-4xl font-bold mb-4">Ipsum Dolor Si</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a, eu.
          </p>
          <Link
            to="#"
            className="bg-pink-500 text-white px-4 py-2 rounded-full"
          >
            Read More
          </Link>
        </div>

        <div className="w-1/2 pl-12 flex justify-center items-center">
          <img
            src="https://picsum.photos/200/300?grayscale"
            alt="Book Cover"
            className="w-60 mx-auto"
          />
        </div>
      </section> */}
      <section className="h-96 flex justify-between items-center bg-pink-100 p-8 mb-5 rounded-lg shadow-md ">
        <Slide slides={product} width="full" fit="object-contain" />
      </section>

      <section className="h-96 flex justify-between items-center bg-pink-100 p-8 mb-5 rounded-lg shadow-md ">
        <div className="w-2/5 justify-center items-center">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="New Release Book"
            className="w-60 mx-auto"
          />
        </div>
        <div className="w-3/5 pl-8">
          <h2 className="text-3xl font-bold mb-4">New Release Book</h2>
          <h3 className="text-2xl mb-2">Simple Way Of Piece Life</h3>
          <p className="text-xl text-gray-800 mb-2">Armor Ramsey</p>
          <p className="text-xl text-red-500 mb-4">$40.00</p>
          <Link
            to="#"
            className="bg-pink-500 text-white px-4 py-2 rounded-full"
          >
            Go to Book
          </Link>
        </div>
      </section>
    </div>
  );
}
