import { useState, useEffect } from "react";
import adminApi from "../api/admin";

export default function useAdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await adminApi.getOrders();
      setOrders(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updatePaymentStatus = async (orderId, status) => {
    try {
      await adminApi.updatePaymentStatus(orderId, status);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, payment: { ...order.payment, status } } : order
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const updateShipmentStatus = async (orderId) => {
    try {
      await adminApi.updateShipmentStatus(orderId);
      fetchOrders(); // Refresh orders after update
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders, loading, error, updatePaymentStatus, updateShipmentStatus };
}
