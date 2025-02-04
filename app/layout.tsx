"use client";

import { Inter } from "next/font/google";
import { ContextProvider } from "./context"; 
import Provider from "./provider";
import Header from "../components/Header";
import SideDrawer from "../components/SideDrawer";

const inter = Inter({ subsets: ["latin"], display: "swap" });



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Provider>
          <ContextProvider> 
            <Header />
            <SideDrawer />
            <main>{children}</main>
          </ContextProvider>
        </Provider>
      </body>
    </html>
  );
}
