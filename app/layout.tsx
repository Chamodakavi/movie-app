"use client";

import { Inter } from "next/font/google";
import { ContextProvider, Context } from "./context";
import Provider from "./provider";
import Header from "../components/Header";
import SideDrawer from "../components/SideDrawer";
import React, { useContext } from "react";
import Categories from "../components/Categories";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Provider>
          <ContextProvider>
            <LayoutWithSidebar>{children}</LayoutWithSidebar>
          </ContextProvider>
        </Provider>
      </body>
    </html>
  );
}

function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const context = useContext(Context);
  const active = context?.active ?? false;

  const displayValue = active ? "block" : "none";

  return (
   <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
  <Header />

  <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
    {/* Sidebar */}
    <Box
      display={{ base: displayValue, md: "block" }}
      style={{
        minWidth: active ? "200px" : "80px", 
        maxWidth: active ? "250px" : "100px", 
        width: active ? "17%" : "6%", 
        transition: "width 0.5s ease",
        flexShrink: 0, 
        
      }}
    >
      <SideDrawer />
    </Box>

    {/* Main Content */}
    <main
      style={{
        flex: 1, 
        padding: "1.4rem",
        minWidth: "0", 
      }}
    >
      <Categories />
      {children}
    </main>
  </div>
</div>

  );
}
