export default function Card({ product }) {
  return (
    <div className="border-2 p-3 rounded-xl flex flex-col max-w-96 gap-4">
      <img
        src={product?.bookPic}
        alt=""
        className="h-56 w-56 object-cover"
      />
      <div className="flex justify-between">
        <div className="font-bold">{product?.bookName || "Empty"}</div>
        <div className="font-bold">Price : ${product?.price || "Empty"}</div>
      </div>
    </div>
  );
}
