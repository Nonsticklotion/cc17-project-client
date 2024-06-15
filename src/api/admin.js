import axios from "axios";

const adminApi = {};

adminApi.createProduct = (formData) => axios.post("/admin/product", formData);
adminApi.getProduct = () => axios.get("/admin/product");
adminApi.getCategory = () => axios.get("/admin/category");

adminApi.deleteProductById = (productId) =>
  axios.delete(`/admin/product/${productId}`);

adminApi.updateProductDetails = (formData) =>
  axios.patch("/admin/product", formData);

adminApi.getProductFromCategory = (category) =>
  axios.get(`/user/product/${category}`);

adminApi.getOrders = () => axios.get("/admin/order");

adminApi.updatePaymentStatus = (orderId, status) =>
  axios.patch("/admin/order/payment", { orderId, status });

adminApi.updateShipmentStatus = (orderId) =>
  axios.patch("/admin/order/shipment", { orderId });

export default adminApi;
