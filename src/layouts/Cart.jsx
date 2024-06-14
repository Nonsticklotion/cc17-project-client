
import { useCart } from '../hooks/useCart'; // อัปเดต path ตามโครงสร้างโปรเจกต์ของคุณ

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-4xl mb-4 font-bold">Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl">{item.bookName}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
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
          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
