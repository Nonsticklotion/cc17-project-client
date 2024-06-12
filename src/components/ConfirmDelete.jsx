import React from "react";
import ContainerWithAutoWidth from "../components/ContainerWithAutoWidth";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

export default function ConfirmDelete({ product }) {
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
      <div>
        <div className="flex gap-4 justify-around">
          <Button bg="green" color="white">
            Confirm
          </Button>
          <Button bg="red" color="white">
            Cancel
          </Button>
        </div>
      </div>
    </ContainerWithAutoWidth>
  );
}
