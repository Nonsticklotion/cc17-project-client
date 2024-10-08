import { useState } from "react";
import ContainerWithAutoWidth from "../components/ContainerWithAutoWidth";
import { useEffect } from "react";
import Modal from "../components/Modal";
import EditForm from "../layouts/EditForm";
import ConfirmDelete from "../components/ConfirmDelete";
import AddProductForm from "../layouts/AddProductForm";
import adminApi from "../api/admin";
import Button from "../components/Button";

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [openTrash, setOpenTrash] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await adminApi.getProduct();
        setProducts(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the product data!", error);
      }
    };
    const fetchCategory = async () => {
      try {
        const res = await adminApi.getCategory();
        setCategories(res.data.result);
      } catch (error) {
        console.error("There was an error fetching the category data!", error);
      }
    };

    fetchProducts();
    fetchCategory();
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const handleDeleteConfirmClick = (product) => {
    setSelectedProduct(product);
    setOpenTrash(true);
  };
  const handleAddClick = () => {
    setOpenAdd(true);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setOpenAdd(false);
  };
  const handleProductUpdate = (productId, updatedData) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, ...updatedData } : product
      )
    );
  };
  const handleProductDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const onChangeSelect = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
  };
  const handleSearchBycategory = async (e) => {
    try {
      e.preventDefault();
      if (selectCategory) {
        console.log(selectCategory);
        const response = await adminApi.getProductFromCategory(selectCategory);
        console.log(response);
        setProducts(response.data.data);
      } else {
        const response = await adminApi.getProduct();
        setProducts(response.data.data);
      }
    } catch (error) {
      console.error("There was an error fetching the product data!", error);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <ContainerWithAutoWidth>
          <div className="flex flex-row justify-between items-center gap-4">
            <div className="shrink-0 w-20">
              <div
                className="px-1 py-1 w-20 h-auto hover:cursor-pointer "
                onClick={() => handleAddClick()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-green-500 hover:fill-green-600"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <form
                action=""
                className="px-1 py-1  flex flex-row  justify-center items-center  gap-4 "
                onSubmit={handleSearchBycategory}
              >
                <div className="shrink-0 w-40">
                  <select
                    id="countries"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={onChangeSelect}
                  >
                    <option selected value="">
                      Choose category
                    </option>
                    {categories.map((categ) => (
                      <option value={categ.category} key={categ.id}>
                        {categ.category}
                      </option>
                    ))}
                  </select>
                </div>
                <Button bg="green" color="white">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </ContainerWithAutoWidth>

        <ContainerWithAutoWidth>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Image</th>
                  <th scope="col" className="px-6 py-3">
                    Book name
                  </th>
                  <th scope="col" className="px-6 py-3 w-2">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-2 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="px-2 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <tr
                    key={product?.id}
                    className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 ">
                      <img
                        src={product?.bookPic}
                        alt={product?.bookName}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white overflow-hidden">
                      {product?.bookName}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white overflow-hidden">
                      {product?.author}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      ${product?.price}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product?.stock}
                    </td>
                    <td className="px-2 py-4 text-center">
                      <a
                        className="font-medium text-blue-600  hover:cursor-pointer"
                        onClick={() => handleEditClick(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="fill-blue-600 w-7 h-7"
                        >
                          <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                        </svg>
                      </a>
                    </td>
                    <td className="px-2 py-4 text-center">
                      <a
                        className="font-medium text-red-600  hover:cursor-pointer"
                        onClick={() => handleDeleteConfirmClick(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="fill-red-600 w-7 h-7"
                        >
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContainerWithAutoWidth>
      </div>

      <Modal
        title="Edit Product"
        open={open}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
      >
        <EditForm
          product={selectedProduct}
          onProductUpdate={handleProductUpdate}
          onClose={() => setOpen(false)}
        />
      </Modal>
      <Modal
        title="Confirm Delete ?"
        open={openTrash}
        setOpen={setOpenTrash}
        onClose={() => setOpenTrash(false)}
      >
        <ConfirmDelete
          product={selectedProduct}
          onProductDelete={handleProductDelete}
          onClose={() => setOpenTrash(false)}
        />
      </Modal>
      <Modal
        title="Add Product"
        open={openAdd}
        setOpen={setOpenAdd}
        onClose={() => setOpenAdd(false)}
        width={"52"}
      >
        <AddProductForm onAdd={handleAddProduct} />
      </Modal>
    </>
  );
}
