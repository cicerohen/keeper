import { NoteCard } from "./NoteCard";

import { classNames } from "../utils/classNames";

type Props = {
  drawerOpen: boolean;
};

export const Body = ({ drawerOpen }: Props) => {
  return (
    <main
      className={classNames(
        "pt-16 transition-all",
        drawerOpen && "ml-80",
        !drawerOpen && "ml-16"
      )}
    >
      <div className="h-[900px] pt-8">
        <div className="flex items-center justify-center">
          <NoteCard />
        </div>
        <div className="grid grid-cols-4">
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </main>
  );
};
