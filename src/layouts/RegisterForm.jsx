import InputBar from "../components/InputBar";
import Button from "../components/Button";
import { useState } from "react";
import validateRegister from "../features/validators/validatate-register";
import authApi from "../api/auth";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const initialInput = {
  email: "",
  password: "",
  confirmPassword: "",
};

const initialInputError = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      console.log(input);
      setInputError({
        ...initialInput,
      });
      await authApi.register(input);
      onSuccess();
      toast.success("register successfully.please login to continue.");
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        if (err.response?.data?.message) {
          setInputError((prev) => ({
            ...prev,
            email: "Email already in use",
          }));
        }
      } else {
        // Handle other types of errors (optional)
        toast.error("An unexpected error occurred. Please try again.");
        console.error(err);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className=" w-full flex flex-col justify-center items-center gap-7 rounded-lg  border-2 border-custom-lightest p-5">
          <InputBar
            placeholder="Email"
            name="email"
            value={input.email}
            error={inputError.email}
            onChange={handleChangeInput}
          />
          <InputBar
            placeholder="Password"
            name="password"
            value={input.password}
            error={inputError.password}
            type="password"
            onChange={handleChangeInput}
          />
          <InputBar
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            error={inputError.confirmPassword}
            type="password"
            onChange={handleChangeInput}
          />
          <Button bg="green" color="white">
            Register
          </Button>
        </div>
      </form>
    </>
  );
}
