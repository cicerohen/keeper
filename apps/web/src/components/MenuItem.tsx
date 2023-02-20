import LightBulbIcon from "@heroicons/react/24/outline/LightBulbIcon";
import { classNames } from "../utils/classNames";

type Props = {
  expanded: boolean;
  active: boolean;
  title: React.ReactNode;
};

export const MenuItem = ({ title, expanded, active }: Props) => {
  return (
    <li className="relative">
      <button
        className={classNames(
          "h-12 transition-all",
          active && "bg-yellow-200",
          !active && "hover:bg-gray-100",
          expanded && "ml-0 w-72 rounded-r-3xl",
          !expanded && " ml-4 w-12 rounded-full"
        )}
      >
        <span>
          <span
            className={classNames(
              "absolute top-0 left-4 flex h-12  w-12 items-center justify-center transition-all"
            )}
          >
            <LightBulbIcon className="h-6 w-6" />
          </span>
          <span
            className={classNames(
              "absolute top-0 left-0 flex h-12 items-center pl-20 text-left transition-opacity",
              expanded && "opacity-1 w-72",
              !expanded && "w-0 overflow-hidden opacity-0"
            )}
          >
            {title}
          </span>
        </span>
      </button>
    </li>
  );
};
