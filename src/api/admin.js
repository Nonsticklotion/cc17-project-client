import axios from "axios";

const adminApi = {};

adminApi.createProduct = (formData) => axios.post("/admin/product", formData);
adminApi.getProduct = () => axios.get("/admin/product")

export default adminApi;
