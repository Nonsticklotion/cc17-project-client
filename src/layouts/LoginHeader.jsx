import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function LoginHeader() {
  const { logout, authUser } = useAuth();

  return (
    <div
      className={`flex justify-between items-center ${
        authUser.isAdmin ? "bg-custom-medium " : "bg-custom-lightest"
      } shadow px-32 py-3`}
    >
      <div className="pl-5 text-xl font-bold text-black w-40">
        Book for everyone
      </div>
      <div className="pr-5 flex justify-end gap-5">
        {authUser.isAdmin ? <Link to="/admin">Edit page</Link> : ""}
        <Link>All product</Link>
        <Link>{authUser.email}</Link>
        <div onClick={() => logout()} className="hover:cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
}
