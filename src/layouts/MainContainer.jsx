import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GuestHeader from "./GuestHeader";
import useAuth from "../hooks/useAuth";
import LoginHeader from "./LoginHeader";

export default function MainContainer() {
  const { authUser } = useAuth();
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {authUser ? <LoginHeader /> : <GuestHeader />}

        <Outlet />
        <Footer />
      </div>
    </>
  );
}
