import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function GuestHeader() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center bg-custom-lightest shadow px-32 py-3">
      <Link to="/">
        <div className="pl-5 text-xl font-bold text-black w-40">
          Book for everyone
        </div>
      </Link>
        <div className="pr-5 flex justify-end gap-5">
        <Link to="/allproduct">All product</Link>
          <div
            className="hover:cursor-pointer"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() => setOpenRegister(true)}
          >
            Register
          </div>
        </div>
      </div>
      <Modal
        title="Login"
        open={openLogin}
        setOpen={setOpenLogin}
        onClose={() => setOpenLogin(false)}
      >
        <LoginForm onSuccess={() => setOpenLogin(false)} />
      </Modal>
      <Modal
        title="Register"
        open={openRegister}
        setOpen={setOpenRegister}
        onClose={() => setOpenRegister(false)}
      >
        <RegisterForm onSuccess={() => setOpenRegister(false)} />
      </Modal>
    </>
  );
}
