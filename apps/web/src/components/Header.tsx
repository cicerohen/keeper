import { Searchbar } from "./Searchbar";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";

type Props = {
  onToggleDrawer: () => void;
};

export const Header = ({ onToggleDrawer }: Props) => {
  return (
    <header className="fixed top-0 z-10 flex h-16 w-screen items-center border-b border-gray-300 bg-white px-4">
      <div className="flex flex-1 items-center space-x-4">
        <button
          onClick={onToggleDrawer}
          className="rounded-full p-3 hover:bg-gray-100"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <h1 className="font-semibold">Keeper</h1>
        <Searchbar />
      </div>
      <div>
        <button className="rounded-full p-3 hover:bg-gray-200">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
        <button className="rounded-full p-3 hover:bg-gray-100">
          <ArrowPathIcon className="h-6 w-6" />
        </button>
        <button className="rounded-full p-3 hover:bg-gray-100">
          <Cog6ToothIcon className="h-6 w-6" />
        </button>
        <button className="rounded-full p-3 hover:bg-gray-100">
          <UserCircleIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};
