import { useState } from "react";
import useAdminOrders from "../hooks/useAdminOrders";
import ContainerWithWidth from "../components/ContainerWithAutoWidth";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

const PaymentStatus = {
  SUCCESS: "SUCCESS",
  PENDING: "PENDING",
  REJECT: "REJECT",
};

export default function AdminOrder() {
  const { orders, loading, error, updatePaymentStatus, updateShipmentStatus } =
    useAdminOrders();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <ContainerWithWidth>
      <h1 className="text-3xl font-bold mb-6">Admin Orders</h1>
      {loading && <Spinner />}
      {error && <p className="text-red-500">{error}</p>}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Pic
              </th>
              <th scope="col" className="px-6 py-3">
                Shipment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.user.email}</td>
                <td className="px-6 py-4">{order.user.firstName}</td>
                <td className="px-6 py-4">{order.user.lastName}</td>
                <td className="px-6 py-4">{order.user.address}</td>
                <td className="px-6 py-4">${order.totalPrice}</td>
                <td className="px-6 py-4">{order.payment.status}</td>
                <td className="px-6 py-4">
                  <img
                    src={order.payment.paymentPic}
                    alt="Payment"
                    className="w-16 h-16 object-cover cursor-pointer"
                    onClick={() => handleImageClick(order.payment.paymentPic)}
                  />
                </td>
                <td className="px-6 py-4">{order.shipment.status}</td>
                <td className="px-6 py-4 flex gap-2">
                  <Button
                    bg="blue"
                    color="white"
                    onClick={() =>
                      updatePaymentStatus(order.id, PaymentStatus.SUCCESS)
                    }
                  >
                    Set Success
                  </Button>
                  <Button
                    bg="red"
                    color="white"
                    onClick={() =>
                      updatePaymentStatus(order.id, PaymentStatus.REJECT)
                    }
                  >
                    Set Reject
                  </Button>
                  <Button
                    bg="green"
                    color="white"
                    onClick={() => updateShipmentStatus(order.id)}
                  >
                    Mark as Sent
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal title="Payment Image" open={!!selectedImage} onClose={closeModal}>
        <img
          src={selectedImage}
          alt="Payment"
          className="w-full h-full object-cover"
        />
      </Modal>
    </ContainerWithWidth>
  );
}
