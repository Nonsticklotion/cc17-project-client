export default function Button({ children, onClick }) {
  return (
    <button
      className=" bg-custom-bitlightest w-24 px-16 py-3 flex justify-center items-center rounded-lg text-white text-sm hover:bg-custom-lightest cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
