import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const SearchBar = ({ ...props }) => {
  return (
    <div className="relative">
      <input
        {...props}
        type="text"
        className="pr-8 text-sm bg-white border-gray-300 rounded-sm h-9 w-60 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
        placeholder="Search"
      />
      <MagnifyingGlassIcon
        className="absolute right-4 top-[0.7rem] ml-2 -mr-2 h-4 w-4 text-gray-400"
        aria-hidden="true"
      />
    </div>
  )
}

export default SearchBar
