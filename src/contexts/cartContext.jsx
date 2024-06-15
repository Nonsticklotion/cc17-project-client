import { createContext, useState, useEffect } from "react";
import userApi from "../api/user";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isProductInCart = prevItems.some((item) => item.id === product.id);
      if (!isProductInCart) {
        return [...prevItems, { ...product, amount: 1 }];
      }
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );
    const amount = cartItems.length;
    console.log(total);
    console.log(amount);
    setTotalPrice(total);
    setTotalAmount(amount);
    console.log("Cart Items updated: ", cartItems);
  }, [cartItems]);

  // ฟังก์ชันสำหรับการสร้างคำสั่งซื้อ
  const checkout = async (navigate) => {
    const orderItemsData = cartItems.map((item) => ({
      productId: item.id,
      amount: item.amount,
      price: item.price,
    }));
    const orderData = {
      totalPrice,
      orderItemsData,
    };

    try {
      const response = await userApi.createOrder(orderData);
      console.log("Order created:", response.data);
      clearCart(); // ล้างตะกร้าหลังจากสั่งซื้อเสร็จสิ้น
      toast.success("finish order");
      navigate("/");
    } catch (error) {
      toast.error("Error creating order:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        totalAmount,
        addToCart,
        removeFromCart,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
