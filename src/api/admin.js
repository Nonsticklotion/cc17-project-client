import axios from "axios";

const adminApi = {};

adminApi.createProduct = (formData) => axios.post("/admin/product", formData);
adminApi.getProduct = () => axios.get("/admin/product");
adminApi.getCategory = () => axios.get("/admin/category");

adminApi.deleteProductById = (productId) =>
  axios.delete(`/admin/product/${productId}`);

adminApi.updateProductDetails = (formData) =>
  axios.patch("/admin/product", formData);
export default adminApi;
