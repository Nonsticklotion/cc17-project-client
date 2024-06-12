import { useState, useEffect } from "react";
import ContainerWithAutoWidth from "../components/ContainerWithAutoWidth";
import InputBar from "../components/InputBar";
import Button from "../components/Button";

const EditForm = ({ product }) => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูล formData ไปยัง API เพื่ออัปเดตข้อมูลผลิตภัณฑ์
    console.log("Form submitted:", formData);
  };

  return (
    <ContainerWithAutoWidth>
      <div className="flex gap-8">
        <div>
          <img src={formData.bookPic} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="w-96">
          <div className="mb-5">
            <label>Book Name :</label>
            <InputBar
              type="text"
              name="bookName"
              value={formData.bookName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label>Author :</label>
            <InputBar
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
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
