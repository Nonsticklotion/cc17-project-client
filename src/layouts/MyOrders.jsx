// import useOrder from "../hooks/useOrder";

// import Button from "../components/Button";
// import Spinner from "../components/Spinner";
// import { useState } from "react";

// export default function MyOrders() {
//   const { orders, loading, error, deleteOrder, updatePaymentPic } = useOrder();
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpdatePaymentPic = (orderId) => {
//     if (selectedFile) {
//       updatePaymentPic(orderId, selectedFile);
//       setSelectedFile(null);
//     }
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold mb-6">My Orders</h1>
//       {loading && <Spinner />}
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="space-y-4">
//         {orders.map((order) => (
//           <div key={order.id} className="p-4 bg-white rounded shadow-md">
//             <h2 className="text-2xl font-bold mb-2">Order ID: {order.id}</h2>
//             <p className="text-gray-700 mb-2">
//               Total Price: ${order.totalPrice}
//             </p>
//             <p className="text-gray-700 mb-2">Address: {order.user.address}</p>
//             <p className="text-gray-700 mb-2">
//               Payment Picture:{" "}
//               <img
//                 src={order.payment.paymentPic}
//                 alt="Payment"
//                 className="w-16 h-16 object-cover"
//               />
//             </p>
//             <div className="flex items-center mb-2">
//               <input type="file" onChange={handleFileChange} />
//               <Button
//                 onClick={() => handleUpdatePaymentPic(order.id)}
//                 bg="blue"
//                 color="white"
//                 className="ml-4"
//               >
//                 Update Payment Picture
//               </Button>
//             </div>
//             <Button
//               onClick={() => deleteOrder(order.id)}
//               bg="red"
//               color="white"
//             >
//               Delete Order
//             </Button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import useOrder from "../hooks/useOrder";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";
import { useState } from "react";

export default function MyOrders() {
  const { orders, loading, error, deleteOrder, updatePaymentPic } = useOrder();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpdatePaymentPic = (orderId) => {
    if (selectedFile) {
      updatePaymentPic(orderId, selectedFile);
      setSelectedFile(null);
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {loading && <Spinner />}
      {error && <p className="text-red-500">{error}</p>}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-2">Order ID: {order.id}</h2>
            <p className="text-gray-700 mb-2">Total Price: ${order.totalPrice}</p>
            <p className="text-gray-700 mb-2">Address: {order.user.address}</p>
            <p className="text-gray-700 mb-2">Payment Status: {order.payment.status}</p>
            <p className="text-gray-700 mb-2">Shipment Status: {order.shipment.status}</p>
            <p className="text-gray-700 mb-2">
              Payment Picture:{" "}
              <img
                src={order.payment.paymentPic}
                alt="Payment"
                className="w-16 h-16 object-cover cursor-pointer"
                onClick={() => handleImageClick(order.payment.paymentPic)}
              />
            </p>
            <div className="flex items-center mb-2">
              <input type="file" onChange={handleFileChange} />
              <Button
                onClick={() => handleUpdatePaymentPic(order.id)}
                bg="blue"
                color="white"
                className="ml-4"
              >
                Update Payment Picture
              </Button>
            </div>
            <Button
              onClick={() => deleteOrder(order.id)}
              bg="red"
              color="white"
            >
              Delete Order
            </Button>
          </div>
        ))}
      </div>
      <Modal title="Payment Image" open={!!selectedImage} onClose={closeModal}>
        <img src={selectedImage} alt="Payment" className="w-full h-full object-cover" />
      </Modal>
    </>
  );
}
