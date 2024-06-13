import ContainerWithAutoWidth from "../components/ContainerWithAutoWidth";
import Button from "./Button";
import adminApi from "../api/admin";
import { toast } from "react-toastify";

export default function ConfirmDelete({ product, onClose, onProductDelete }) {
  const handleDeleteProduct = async () => {
    try {
      console.log(product.id);
      await adminApi.deleteProductById(product.id);
      onProductDelete(product.id);
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Error deleting product");
    } finally {
      onClose();
    }
  };

  return (
    <ContainerWithAutoWidth>
      <div>
        <div className="flex gap-4 justify-around">
          <Button bg="green" color="white" onClick={handleDeleteProduct}>
            Confirm
          </Button>
          <Button bg="red" color="white" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </ContainerWithAutoWidth>
  );
}
