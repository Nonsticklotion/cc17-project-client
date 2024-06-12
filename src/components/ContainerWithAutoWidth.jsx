export default function ContainerWithWidth({ children, width }) {
  return (
    <div
      className="w-full border-2 border-white hover:border-custom-lightest rounded-xl p-5 "
      style={{ width: `${width}rem` }}
    >
      {children}
    </div>
  );
}
