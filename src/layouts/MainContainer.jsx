import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GuestHeader from "./GuestHeader";
import useAuth from "../hooks/useAuth";
import LoginHeader from "./LoginHeader";

export default function MainContainer() {
  const { authUser } = useAuth();
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-200">
        {authUser ? <LoginHeader /> : <GuestHeader />}
        <div className="min-h-screen flex flex-col px-28">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
