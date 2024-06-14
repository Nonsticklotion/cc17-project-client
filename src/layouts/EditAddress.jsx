import { useState } from "react";
import ContainerWithWidth from "../components/ContainerWithAutoWidth";
import Button from "../components/Button"; // Assumed Button component for form submission
import InputBar from "../components/InputBar"; // Assumed InputBar component for input fields
import useAuth from "../hooks/useAuth";
import userApi from "../api/user";
import { toast } from "react-toastify";

export default function EditAddress({ onClose }) {
  const { authUser } = useAuth();
  const [formData, setFormData] = useState({
    firstName: authUser?.firstName || "",
    lastName: authUser?.lastName || "",
    phone: authUser?.phone || "",
    address: authUser?.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userApi.updateAddress(formData); // Assuming updateUser is a function that updates user details
      onClose(); // Close the modal after successful update
      toast.success("update success")
    } catch (error) {
      console.error("Failed to update address:", error);
    }
  };

  return (
    <ContainerWithWidth>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label>First Name</label>
          <InputBar
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <InputBar
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <InputBar
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address</label>
          <InputBar
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" bg="blue" color="white">
          Save Changes
        </Button>
      </form>
    </ContainerWithWidth>
  );
}
