"use client";

import { createContext, useState } from "react";

interface ContextProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DrawerContextProps {
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}

// Create the contexts
export const Context = createContext<ContextProps | undefined>(undefined);
export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <Context.Provider value={{ active, setActive }}>
      <DrawerContext.Provider value={{ activeItem, setActiveItem }}>
        {children}
      </DrawerContext.Provider>
    </Context.Provider>
  );
}
