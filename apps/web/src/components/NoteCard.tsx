import PaperClipIcon from "@heroicons/react/24/solid/PaperClipIcon";

import { NoteCardActionButtons } from "./NoteCardActionButtons";

export const NoteCard = () => {
  return (
    <div className="min-w-[300px] basis-1/3 rounded-md border border-gray-200 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div>Title</div>
        <PaperClipIcon className="h-5 w-6" />
      </div>
      <div contentEditable placeholder="Craete a note"></div>
      <NoteCardActionButtons />
    </div>
  );
};
