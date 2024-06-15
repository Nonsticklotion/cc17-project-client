import { useState, useEffect } from "react";
import userApi from "../api/user"; // แก้ไข path ตามโครงสร้างโปรเจกต์ของคุณ

export default function useOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await userApi.getMyOrders();
      setOrders(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await userApi.deleteOrder(orderId);
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (err) {
      setError(err.message);
    }
  };

  const updatePaymentPic = async (orderId, paymentPic) => {
    try {
      const formData = new FormData();
      formData.append("paymentId", orderId);
      formData.append("paymentPic", paymentPic);
      await userApi.updatePaymentPic(formData);
      fetchOrders(); // Fetch orders again to reflect the updated payment picture
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders, loading, error, deleteOrder, updatePaymentPic };
}
