export default function SearchBar() {
  return (
    <form className="max-w-md mx-auto">
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-12 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-custom-medium h-5 w-5"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full py-4  px-3 ps-20  text-sm focus:outline-custom-medium text-custom-medium border border-custom-medium rounded-lg  focus:ring-custom-medium focus:border-custom-medium dark:bg-white dark:border-custom-medium dark:placeholder-custom-medium dark:text-custom-medium dark:focus:ring-custom-medium dark:focus:outline-custom-medium dark:focus:border-custom-medium"
            placeholder="Search"
            required
          />
        </div>
      </div>
    </form>
  );
}
