import { useState } from "react";
import ContainerWithWidth from "../components/ContainerWithAutoWidth";
import InputBar from "../components/InputBar";
import Button from "../components/Button";
import { toast } from "react-toastify";
import adminApi from "../api/admin";
import Spinner from "../components/Spinner";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    price: "",
    category: "",
    stock: "",
    productPic: "",
  });
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    console.log(e.target);
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
    setFormData({
      ...formData,
      productPic: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("bookName", formData.bookName);
      data.append("author", formData.author);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("stock", formData.stock);
      if (formData.productPic) {
        data.append("productPic", formData.productPic);
      }

      setLoading(true);
      await adminApi.createProduct(data); // ส่ง FormData ไปยัง API
      toast.success("Product created successfully");
    } catch (err) {
      toast.error(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <ContainerWithWidth width={"50"}>
        <div className="flex flex-row justify-center items-center gap-4">
          {file ? (
            <div className="h-80 w-80">
              <img
                src={URL.createObjectURL(file)}
                alt="bookPic"
                className="object-contain h-full w-full"
              />
            </div>
          ) : (
            ""
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label>Book Name</label>
              <InputBar
                type="text"
                name="bookName"
                value={formData?.bookName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Author</label>
              <InputBar
                type="text"
                name="author"
                value={formData?.author}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Price</label>
              <InputBar
                type="number"
                name="price"
                value={formData?.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Category</label>
              <InputBar
                type="text"
                name="category"
                value={formData?.category}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Stock</label>
              <InputBar
                type="number"
                name="stock"
                value={formData?.stock}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Product Picture : </label>
              <input type="file" name="bookPic" onChange={handleFileChange} />
            </div>
            <div className="flex justify-center items-center">
              <Button bg="green" color="white" width="auto">
                Add Product
              </Button>
            </div>
          </form>
        </div>
      </ContainerWithWidth>
    </>
  );
};

export default AddProductForm;
