import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginHeader() {
  const { logout, authUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div
      className={`flex justify-between items-center ${
        authUser.isAdmin ? "bg-custom-medium " : "bg-custom-lightest"
      } shadow px-32 py-3`}
    >
      <Link to="/">
        <div className="pl-5 text-xl font-bold text-black w-40">
          Book for everyone
        </div>
      </Link>
      <div className="pr-5 flex justify-end gap-5">
        {authUser.isAdmin ? <Link to="/admin">Edit page</Link> : ""}
        <Link to="/allproduct">All product</Link>
        <Link to="/profile">{authUser.email}</Link>
        <div onClick={() => handleLogout()} className="hover:cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
}
