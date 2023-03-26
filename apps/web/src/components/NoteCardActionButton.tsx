import BellIcon from "@heroicons/react/24/outline/BellIcon";
import UserPlusIcon from "@heroicons/react/24/outline/UserPlusIcon";
import EyeDropperIcon from "@heroicons/react/24/outline/EyeDropperIcon";
import PhotoIcon from "@heroicons/react/24/outline/PhotoIcon";
import ArchiveBoxXMarkIcon from "@heroicons/react/24/outline/ArchiveBoxXMarkIcon";
import ArrowUturnLeftIcon from "@heroicons/react/24/outline/ArrowUturnLeftIcon";
import ArrowUturnRightIcon from "@heroicons/react/24/outline/ArrowUturnRightIcon";

const icons = {
  BellIcon,
  UserPlusIcon,
  EyeDropperIcon,
  PhotoIcon,
  ArchiveBoxXMarkIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
};

type Icon = keyof typeof icons;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: Icon;
};

export const NoteCardActionButton = ({ title, children, icon }: Props) => {
  const Icon = icon && icons[icon];
  return (
    <button title={title} className="rounded-full p-2 hover:bg-gray-100">
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
};
