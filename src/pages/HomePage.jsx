import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col pt-5">
      <section className=" h-96 flex justify-between items-center bg-gray-100 p-8 mb-5 rounded-lg shadow-md ">
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
