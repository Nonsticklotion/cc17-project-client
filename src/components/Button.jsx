const bgMap = {
  blue: "bg-blue-500 hover:bg-blue-600",
  green: "bg-custom-lightest hover:bg-green-600",
  red: "bg-red-300 hover:bg-red-400",
  gray: "bg-gray-200 hover:bg-grey-300",
};

const colorMap = {
  white: "text-white",
  black: "text-black",
};
const widthty = {
  auto: "w-auto",
  normal: "w-24",
};
export default function Button({
  children,
  onClick,
  bg,
  color = "text-white",
  width = "w-24",
}) {
  return (
    <button
      className={`${bgMap[bg]} ${colorMap[color]} ${widthty[width]} px-16 py-3 flex justify-center items-center rounded-lg  cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
