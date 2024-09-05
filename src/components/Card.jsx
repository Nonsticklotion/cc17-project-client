export default function Card({ product }) {
  return (
    <div className="card card-compact bg-base-100 h-96 p-4 w-64 shadow-xl overflow-hidden">
    <figure>
      <img
       src={product?.bookPic}
       alt=""
       className="h-56 w-56 object-cover" />
    </figure>
    <div className="card-body">
      <h2 className="card-title overflow-hidden">{product?.bookName}</h2>
      <div className="card-actions justify-end">
        <button className="btn btn-neutral">{product?.price || "Empty"} Baht</button>
      </div>
    </div>
  </div>
  );
}
