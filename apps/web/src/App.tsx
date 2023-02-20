import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Body } from "./components/Body";
import { useState } from "react";

export const App = () => {
  const [open, setOpen] = useState(false);

  const onToggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Header onToggleDrawer={onToggleDrawer} />
      <Drawer open={open} />
      <Body drawerOpen={open} />
    </div>
  );
};
