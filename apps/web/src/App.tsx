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
    toggleRef.current = !toggleRef.current;
  };

  useEffect(() => {
    const onMouseEnter = () => {
      if (!toggleRef.current) {
        setOpen(true);
      }
    };
    const onMouseLeave = () => {
      if (!toggleRef.current) {
        setOpen(false);
      }
    };
    drawerRef.current?.addEventListener("mouseenter", onMouseEnter);
    drawerRef.current?.addEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <div>
      <Header onToggleDrawer={onToggleDrawer} />
      <Drawer ref={drawerRef} open={open} />
      <Body drawerOpen={open} />
    </div>
  );
};
