import LightBulbIcon from "@heroicons/react/24/outline/LightBulbIcon";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import BookmarkIcon from "@heroicons/react/24/outline/BookmarkIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import ArchiveBoxIcon from "@heroicons/react/24/outline/ArchiveBoxIcon";

export const Drawer = () => {
  return (
    <aside className="top-16 fixed left-0 w-72 p-4 h-screen overflow-y-auto z-0">
      <ul>
        <li>
          <button className="p-3 rounded-full flex">
            <LightBulbIcon className="w-6 h-6" />
            <span className="ml-4">Notes</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BellIcon className="w-6 h-6" />
            <span className="ml-4">Alerts</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <BookmarkIcon className="w-6 h-6" />
            <span className="ml-4">Tag</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <PencilIcon className="w-6 h-6" />
            <span className="ml-4">Edit tags</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <ArchiveBoxIcon className="w-6 h-6" />
            <span className="ml-4">Archive</span>
          </button>
        </li>
        <li>
          <button className="p-3 rounded-full flex">
            <TrashIcon className="w-6 h-6" />
            <span className="ml-4">Trash</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};
