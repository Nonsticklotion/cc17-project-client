import ContainerWithWidth from "../components/ContainerWithAutoWidth";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, totalPrice, removeFromCart, clearCart, checkout } =
    useCart();

  console.log(cartItems);

  const navigate = useNavigate();
  return (
    <div className="pt-4">
      <ContainerWithWidth>
        {/* <div className="container mx-auto py-10 px-5">
          <h1 className="text-4xl mb-4 font-bold">Cart</h1>
          {cartItems?.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <div>
              <ul>
                {cartItems?.map((item) => (
                  <li
                    key={item.id}
                    className="mb-4 flex justify-between items-center"
                  >
                    <div>
                      <h2 className="text-2xl">{item.bookName}</h2>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-gray-600">Amount: {item.amount}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-2xl font-bold">
                  Total Amount: {totalAmount}
                </p>
                <p className="text-2xl font-bold">
                  Total Price: ${totalPrice.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => clearCart()}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Clear Cart
              </button>
              <button
                onClick={() => checkout(navigate)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Checkout
              </button>
            </div>
          )}
        </div> */}
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
              Shopping Cart
            </h2>
            {cartItems?.length === 0 ? (
              <p className="text-center text-gray-500">No items in the cart.</p>
            ) : (
              <div>
                {cartItems?.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
                  >
                    <div className="col-span-12 lg:col-span-2 img box">
                      <img
                        src={item.bookPic}
                        alt={item.bookName}
                        className="max-lg:w-full lg:w-[180px] rounded-lg"
                      />
                    </div>
                    <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                      <div className="flex items-center justify-between w-full mb-4">
                        <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                          {item.bookName}
                        </h5>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                        >
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                              cx="17"
                              cy="17"
                              r="17"
                            />
                            <path
                              className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                              d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                              stroke="#EF4444"
                            />
                          </svg>
                        </button>
                      </div>
                      <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                        Price: ${item.price} | Amount: {item.amount}
                      </p>
                      <div className="flex justify-between items-center">
                        <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                          ${item.price}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
                  <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
                    Subtotal
                  </h5>
                  <div className="flex items-center justify-between gap-5">
                    <button
                      className="rounded-full py-2.5 px-3 bg-red-700 text-red-100 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-red-500 hover:text-white-300 "
                      onClick={() => clearCart()}
                    >
                      Clear cart
                    </button>
                    <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">
                      ${totalPrice.toFixed(2)}
                    </h6>
                  </div>
                </div>
                <div className="max-lg:max-w-lg max-lg:mx-auto">
                  <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
                    Shipping taxes, and discounts calculated at checkout
                  </p>
                  <button
                    onClick={() => checkout(navigate)}
                    className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 mt-4"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </ContainerWithWidth>
    </div>
  );
}
