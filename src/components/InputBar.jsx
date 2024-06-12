// function InputBar(props) {
//   const { placeholder, type = "text", error, value, onChange, name } = props;
//   return (
//     <div className="w-full  text-center mt-5">
//       <input
//         type={type}
//         className={` py-4 w-9/12 px-3 ps-4 text-sm  focus:outline-custom-lightest text-custom-lightest border  rounded-lg  focus:ring-custom-lightest focus:border-custom-lightest ${
//           error
//             ? "border-red-500 focus:ring-red-300"
//             : "border-custom-lightest focus:border-custom-lightest focus:ring-custom-lightest"
//         }`}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         name={name}
//       />
//       {error ? <small className="text-red-500">{error}</small> : null}
//     </div>
//   );
// }

// export default InputBar;

function InputBar(props) {
  const { placeholder, type = "text", error, value, onChange, name } = props;

  return (
    <div className="flex flex-col justify-between w-full text-center">
      <div >
        <input
          type={type}
          className={`w-full py-4  px-3 ps-4 text-sm  focus:outline-none text-custom-lightest border rounded-xl ${
            error
              ? "border-red-500 focus:ring-red-300"
              : "border-custom-lightest focus:border-custom-lightest focus:ring-custom-lightest"
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
      <div className="flex flex-row w-full justify-start items-center">
        <div>{error && <small className="text-red-500">{error}</small>}</div>
      </div>
    </div>
  );
}

export default InputBar;
