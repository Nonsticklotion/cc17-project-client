export default function InputBar() {
  return (
    <div>
      <input
        type="search"
        id="default-search"
        className="block w-3/4 py-4  px-3 ps-4 text-sm focus:outline-custom-medium text-custom-medium border border-custom-medium rounded-lg  focus:ring-custom-medium focus:border-custom-medium dark:bg-white dark:border-custom-medium dark:placeholder-custom-medium dark:text-custom-medium dark:focus:ring-custom-medium dark:focus:outline-custom-medium dark:focus:border-custom-medium"
        placeholder="Input"
        required
      />
    </div>
  );
}
