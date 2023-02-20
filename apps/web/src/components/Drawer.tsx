import LightBulbIcon from "@heroicons/react/24/outline/LightBulbIcon";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import BookmarkIcon from "@heroicons/react/24/outline/BookmarkIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PencilIcon from "@heroicons/react/24/outline/PencilIcon";
import ArchiveBoxIcon from "@heroicons/react/24/outline/ArchiveBoxIcon";

import { MenuItem } from "./MenuItem";

import { classNames } from "../utils/classNames";

type Props = {
  open: boolean;
};

export const Drawer = ({ open }: Props) => {
  return (
    <aside
      className={classNames(
        "fixed top-16 left-0 z-0 h-screen pt-2 pb-2 transition-all",
        open && "w-72"
      )}
    >
      <ul>
        <MenuItem expanded={open} title="Notes" active={false} />
        <MenuItem expanded={open} title="Reminders" active />
        <MenuItem expanded={open} title="A example of tag" active={false} />
        <MenuItem expanded={open} title="Edit" active={false} />
        <MenuItem expanded={open} title="Archive" active={false} />
        <MenuItem expanded={open} title="Trash" active={false} />
      </ul>
    </aside>
  );
};
