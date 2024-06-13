import axios from "axios";

const adminApi = {};

adminApi.createProduct = (formData) => axios.post("/admin/product", formData);
adminApi.getProduct = () => axios.get("/admin/product");
adminApi.deleteProductById = (productId) =>
  axios.delete(`/admin/product/${productId}`);
adminApi.updateProductDetails = (formData) => axios.patch("/admin/product", formData);
export default adminApi;
