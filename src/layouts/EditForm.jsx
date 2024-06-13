
import { useState, useEffect } from "react";
import ContainerWithAutoWidth from "../components/ContainerWithAutoWidth";
import InputBar from "../components/InputBar";
import Button from "../components/Button";
import adminApi from "../api/admin";
import { toast } from "react-toastify";

const EditForm = ({ product, onClose, onProductUpdate }) => {
  const [formData, setFormData] = useState({
    id: "",
    bookPic: "",
    bookName: "",
    author: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id,
        bookPic: product.bookPic,
        bookName: product.bookName,
        author: product.author,
        price: product.price,
        stock: product.stock,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { id, stock, price } = formData;
      const data = { id, stock: +stock, price: +price };

      await adminApi.updateProductDetails(data);
      toast.success("Product updated successfully");
      onProductUpdate(id, data);
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.error || err.message);
    }
  };

  return (
    <ContainerWithAutoWidth>
      <div className="flex gap-8">
        <div>
          <img src={formData.bookPic} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="w-96">
          <div className="mb-5">
            <label>Book Name : {formData.bookName}</label>
          </div>
          <div className="mb-5">
            <label>Author : {formData.author}</label>
          </div>
          <div className="mb-5">
            <label>Price :</label>
            <InputBar
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label>Stock :</label>
            <InputBar
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </ContainerWithAutoWidth>
  );
};

export default EditForm;
