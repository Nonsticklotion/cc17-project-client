import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-custom-lightest shadow px-32 py-3">
      <div className="pl-5 text-xl font-bold text-black w-40">
        Book for everyone
      </div>
      <div className="pr-5 flex justify-end gap-5">
        <Link>All product</Link>
        <Link>Login</Link>
        <Link>Register</Link>
      </div>
    </div>
  );
}
