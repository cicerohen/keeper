import { MenuItem } from "./MenuItem";

import { classNames } from "../utils/classNames";
import { useRef, useEffect, useState } from "react";

type Props = {
  open: boolean;
};

export const Drawer = ({ open }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const rootRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<boolean>(false);

  useEffect(() => {
    toggleRef.current = open;
  }, [open]);

  useEffect(() => {
    const onMouseEnter = () => {
      if (!toggleRef.current) {
        setExpanded(true);
      }
    };
    const onMouseLeave = () => {
      if (!toggleRef.current) {
        setExpanded(false);
      }
    };

    rootRef.current?.addEventListener("mouseenter", onMouseEnter);
    rootRef.current?.addEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <aside
      ref={rootRef}
      className={classNames(
        "fixed top-16 left-0 z-10 h-screen bg-white pb-16 transition-all",
        open && "w-64 overflow-y-auto",
        expanded && "w-64 overflow-y-auto shadow-lg"
      )}
    >
      <ul className="pt-2 pb-2">
        <MenuItem
          expanded={open || expanded}
          icon="LightBulbIcon"
          title="Notes"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BellIcon"
          title="Reminders"
          active
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />
        <MenuItem
          expanded={open || expanded}
          icon="BookmarkIcon"
          title="A tag"
          active={false}
        />

        <MenuItem
          expanded={open || expanded}
          icon="PencilIcon"
          title="Edit"
          active={false}
        />

        <MenuItem
          expanded={open || expanded}
          icon="ArchiveBoxIcon"
          title="Archive"
          active={false}
        />

        <MenuItem
          expanded={open || expanded}
          icon="TrashIcon"
          title="Trash"
          active={false}
        />
      </ul>
    </aside>
  );
};
