import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

export const Searchbar = () => {
  return (
    <div className="relative flex h-12 max-w-3xl flex-1">
      <div className="absolute flex h-full items-center justify-center">
        <button className="ml-1 rounded-full p-2 hover:bg-gray-200">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </div>
      <input type="text" className="flex-1 rounded-md bg-gray-100 px-12" />
      <div className="absolute right-0 flex h-full items-center justify-center">
        <button className="mr-1 rounded-full p-2 hover:bg-gray-200">
          <XMarkIcon className="h-6 w-6 fill-inherit" />
        </button>
      </div>
    </div>
  );
};
