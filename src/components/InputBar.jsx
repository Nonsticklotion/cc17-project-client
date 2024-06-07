function InputBar(props) {
  const { placeholder, type = "text", error, value, onChange, name } = props;
  return (
    <div className="w-full bg-green-400 text-center">
      <input
        type={type}
        className={` py-4 w-9/12 px-3 ps-4 text-sm  focus:outline-custom-medium text-custom-medium border  rounded-lg  focus:ring-custom-medium focus:border-custom-medium ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-custom-medium focus:border-custom-medium focus:ring-custom-medium"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error ? <small className="text-red-500">{error}</small> : null}
    </div>
  );
}

export default InputBar;