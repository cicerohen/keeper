import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300 h-16 z-10 fixed top-0 w-screen px-4 flex items-center">
      <button className="p-3 rounded-full">
        <Bars3Icon className="w-6 h-6" />
      </button>
      <h1>Keeper</h1>
    </header>
  );
};
