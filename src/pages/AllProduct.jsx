import React from "react";
import { useState } from "react";
import adminApi from "../api/admin";
import Button from "../components/Button";
import Card from "../components/Card";
import ContainerWithWidth from "../components/ContainerWithAutoWidth";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

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
    <div className="pt-5">
      <ContainerWithWidth>
        <div className="flex flex-row justify-end items-center gap-4">
          <div>
            <form
              action=""
              className="px-1 py-1  flex flex-row  justify-center items-center  gap-4 "
              onSubmit={handleSearchBycategory}
            >
              <div className="shrink-0 w-40">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectCategory}
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
      </ContainerWithWidth>
      <ContainerWithWidth>
        <div className="flex flex-row gap-8 flex-wrap">
          {products?.map((product) => (
            <React.Fragment key={product.id}>
              <Link to={`/product/${product.id}`}>
                <Card product={product} />
              </Link>
            </React.Fragment>
          ))}
        </div>
      </ContainerWithWidth>
    </div>
  );
}
