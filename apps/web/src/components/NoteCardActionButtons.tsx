import { NoteCardActionButton } from "./NoteCardActionButton";
import { NoteCardActionButtonMore } from "./NoteCardActionButtonMore";

export const NoteCardActionButtons = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <NoteCardActionButton icon="BellIcon" />
        <NoteCardActionButton icon="UserPlusIcon" />
        <NoteCardActionButton icon="EyeDropperIcon" />
        <NoteCardActionButton icon="UserPlusIcon" />
        <NoteCardActionButton icon="PhotoIcon" />
        <NoteCardActionButton icon="ArchiveBoxXMarkIcon" />
        <NoteCardActionButtonMore />
        <NoteCardActionButton icon="ArrowUturnLeftIcon" />
        <NoteCardActionButton icon="ArrowUturnRightIcon" />
      </div>
      <button className="rounded-md px-4 py-2 text-sm hover:bg-gray-100">
        Close
      </button>
    </div>
  );
};
