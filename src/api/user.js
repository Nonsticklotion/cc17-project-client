import axios from "axios";

const userApi = {};

userApi.getProductFromId = (productId) =>
  axios.get(`/admin/product/${productId}`);

userApi.updateAddress = (formData) => axios.patch(`/user/address`, formData);

userApi.createReview = (formData) => axios.post(`/user/review`, formData);

userApi.getReviewFromProductId = (productId) =>
  axios.get(`/user/review/${productId}`);

userApi.deleteReviewWithProductId = (productId) =>
  axios.delete(`/user/review/${productId}`);

userApi.createOrder = (orderData) => axios.post("/user/order", orderData);

userApi.getMyOrders = () => axios.get("/user/order");

userApi.deleteOrder = (orderId) => axios.delete(`/user/order/${orderId}`);

userApi.updatePaymentPic = (formData) =>
  axios.patch("/user/order/paymentpic", formData);

export default userApi;
