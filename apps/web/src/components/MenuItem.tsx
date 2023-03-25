import LightBulbIcon from "@heroicons/react/24/outline/LightBulbIcon";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import BookmarkIcon from "@heroicons/react/24/outline/BookmarkIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import ArchiveBoxIcon from "@heroicons/react/24/outline/ArchiveBoxIcon";

import { classNames } from "../utils/classNames";

const icons = {
  LightBulbIcon,
  BellIcon,
  BookmarkIcon,
  TrashIcon,
  PencilIcon,
  ArchiveBoxIcon,
};

type Icon = keyof typeof icons;

type Props = {
  expanded: boolean;
  active: boolean;
  title: React.ReactNode;
  icon: Icon;
};

export const MenuItem = ({ title, expanded, active, icon }: Props) => {
  const Icon = icons[icon];

  return (
    <li className="relative">
      <button
        className={classNames(
          "h-12 transition-all",
          active ? "bg-yellow-200" : "hover:bg-gray-100",
          expanded ? "ml-0 w-60 rounded-r-3xl" : "ml-4 w-12 rounded-full"
        )}
      >
        <span>
          <span
            className={classNames(
              "absolute top-0 left-4 flex h-12 w-12 items-center justify-center transition-all"
            )}
          >
            {<Icon className="h-6 w-6" />}
          </span>
          <span
            className={classNames(
              "absolute top-0 left-0 flex h-12 items-center pl-20 text-left transition-opacity",
              expanded ? "opacity-1 w-60" : "w-0 overflow-hidden opacity-0"
            )}
          >
            {title}
          </span>
        </span>
      </button>
    </li>
  );
};
