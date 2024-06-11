import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GuestHeader from "./GuestHeader";

export default function MainContainer() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <GuestHeader />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
