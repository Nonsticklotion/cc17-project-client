import { useNavigate } from "react-router-dom";

export default function CardWithLink({ title, link }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="w-60 border-2 border-custom-lightest rounded-xl p-5 hover:bg-custom-bitlightest cursor-pointer"
      >
        <div className="mb-2 pt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </div>
      </div>
    </>
  );
}
