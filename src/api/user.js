import axios from "axios";

const userApi = {};

userApi.getProductFromId = (productId) =>
  axios.get(`/admin/product/${productId}`);
userApi.updateAddress = (formData) => axios.patch(`/user/address`, formData);
export default userApi;
