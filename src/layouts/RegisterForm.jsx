import InputBar from "../components/InputBar";
import Button from "../components/Button";
import { useState } from "react";

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

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-2/5 flex flex-col justify-center items-center bg-red-400 gap-7">
      <div className="pl-5 text-3xl font-bold">Register</div>
      <InputBar
        placeholder="email"
        name="email"
        value={input.email}
        error={inputError.email}
        onChange={handleChangeInput}
      />
      <InputBar
        placeholder="password"
        name="password"
        value={input.password}
        error={inputError.password}
        type="password"
        onChange={handleChangeInput}
      />
      <InputBar
        placeholder="confirm password"
        name="confirmPassword"
        value={input.confirmPassword}
        error={inputError.confirmPassword}
        type="password"
        onChange={handleChangeInput}
      />
      <Button />
    </div>
  );
}
