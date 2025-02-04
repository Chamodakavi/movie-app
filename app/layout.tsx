"use client";

import { Inter } from "next/font/google";
import Provider from "./provider";
import Header from "../components/Header";
import SideDrawer from "../components/SideDrawer";
import React, { createContext, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface ContextProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DrawerContextProps {
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}


export const Context = createContext<ContextProps | undefined>(undefined);
export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState(0);


  return (
    <html className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <Context.Provider value={{ active, setActive }}>
            <DrawerContext.Provider value={{ activeItem, setActiveItem }}>
              <Header />
              <SideDrawer />
            </DrawerContext.Provider>
          </Context.Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}