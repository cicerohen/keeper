import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Body } from "./components/Body";
import { useState, useRef, useEffect, useCallback } from "react";

export const App = () => {
  const [open, setOpen] = useState(false);

  const toggleRef = useRef<boolean>(false);
  const drawerRef = useRef<HTMLElement | null>(null);

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
