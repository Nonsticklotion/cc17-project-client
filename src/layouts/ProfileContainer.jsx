import { useState } from "react";
import ContainerWithWidth from "../components/ContainerWithAutoWidth";
import Modal from "../components/Modal";
import useAuth from "../hooks/useAuth";
import EditAddress from "./EditAddress";
import { useEffect } from "react";
import MyOrders from "./MyOrders";

export default function ProfileContainer() {
  const [openEdit, setOpenEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { authUser } = useAuth();


  useEffect(() => {
    if (authUser) {
      setUserInfo({
        email: authUser.email,
        firstName: authUser.firstName,
        lastName: authUser.lastName,
        phone: authUser.phone,
        address: authUser.address,
      });
    }
    
  }, [authUser]);

  const handleEditInfo = (newInfo) => {
    setUserInfo(newInfo);
    setOpenEdit(false);
  };
  return (
    <>
      <div className="pt-5">
        <ContainerWithWidth>
          <div className="flex flex-row justify-between">
            <div>
              <div className="font-bold text-3xl">
                {userInfo?.email} Address
              </div>
              <div className="pt-5 pb-2 font-bold">
                Firstname :{" "}
                {userInfo?.firstName ? userInfo?.firstName : "empty"}
              </div>
              <div className="pb-2 font-bold">
                Lastname : {userInfo?.lastName ? userInfo?.lastName : "empty"}
              </div>
              <div className="pb-2 font-bold">
                Phone : {userInfo?.phone ? userInfo?.phone : "empty"}
              </div>
              <div className="pb-2 font-bold">
                Address : {userInfo?.address ? userInfo?.address : "empty"}
              </div>
            </div>
            <div
              className="h-10 w-10 hover:cursor-pointer"
              onClick={() => setOpenEdit(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-blue-600"
              >
                <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
            </div>
          </div>
        </ContainerWithWidth>
      </div>
      <div className="pt-5">
        <ContainerWithWidth>
          <MyOrders />
        </ContainerWithWidth>
      </div>
      <Modal
        title="Edit Address"
        open={openEdit}
        setOpen={setOpenEdit}
        onClose={() => setOpenEdit(false)}
      >
        <EditAddress onEdit={handleEditInfo} />
      </Modal>
    </>
  );
}
