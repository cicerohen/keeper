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
      <div className="h-[900px]">Content</div>
    </main>
  );
};
