import InputBar from "../components/InputBar";
import Button from "../components/Button";
import { useState } from "react";
import validateLogin from "../features/validators/validate-login";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import useAuth from "../hooks/useAuth";

const initialInputLogin = {
  email: "",
  password: "",
};

const initialInputLoginError = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [inputLogin, setInputLogin] = useState(initialInputLogin);
  const [inputError, setInputError] = useState(initialInputLoginError);
  const handleChangeInput = (e) => {
    setInputLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };

  const { login } = useAuth();
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(inputLogin);
      console.log(inputLogin);
      if (error) {
        return setInputError(error);
      }
      setInputError(initialInputLoginError);

      await login(inputLogin);
      setInputLogin(false)
      toast.success("Login success");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          err.message.status === 400
            ? "invalid email or mobile or password"
            : "internak server error";
        return toast.error(message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="w-full flex flex-col justify-center items-center gap-7 rounded-lg  border-2 border-custom-lightest p-5">
        {/* <div className="pl-5 text-3xl font-bold">Login</div> */}
        <InputBar
          placeholder="Email"
          name="email"
          value={inputLogin.email}
          error={inputError.email}
          onChange={handleChangeInput}
        />
        <InputBar
          placeholder="Password"
          name="password"
          value={inputLogin.password}
          error={inputError.password}
          type="password"
          onChange={handleChangeInput}
        />
        <Button bg="green" color="white">
          Login
        </Button>
      </div>
    </form>
  );
}


