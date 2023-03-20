import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBar = ({ handleClick,...props }) => {
  return (
    <div className="relative">
      <input
        {...props}
        type="text"
        className="w-full h-10 pl-3 pr-8 text-sm bg-white border border-gray-900 rounded-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
        placeholder="Enter username..."
      />
      <MagnifyingGlassIcon
        onClick={handleClick}
        className="absolute right-4 top-[0.7rem] ml-2 -mr-2 h-5 w-5 text-gray-400 cursor-pointer"
        aria-hidden="true"
        data-testid="searchIcon"
      />
    </div>
  );
};

export default SearchBar;