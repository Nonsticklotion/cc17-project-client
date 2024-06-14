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
        {authUser.isAdmin ? (
          <Link to="/admin" className="text-white">
            Edit page
          </Link>
        ) : (
          ""
        )}
        <Link to="/allproduct" className="text-white">
          All product
        </Link>
        <Link to="/profile" className="text-white">
          {authUser.email}
        </Link>
        <div
          onClick={() => handleLogout()}
          className="text-white hover:cursor-pointer"
        >
          Logout
        </div>
      </div>
    </div>
  );
}
