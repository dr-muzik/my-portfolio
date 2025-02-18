// app/dashboard/layout.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";

import { useTheme } from "@/context/ThemeToggle";
import DesktopScreen from "../desktop/DesktopScreen";
import MobileScreen from "../mobile/MobileScreen";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { active, setIsActive, pathName } = useTheme();
  // const path = usePathname();
  // const pathName = path.split("/")[2];

  // const [active, setIsActive] = useState<string>(
  //   pathName === undefined ? "" : pathName
  // );

  useEffect(() => {
    setIsActive(pathName);
  }, [pathName]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (arg: string) => {
    console.log(arg);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arg === "open" ? setSidebarOpen(true) : setSidebarOpen(false);
  };

  const activeLink = (arg: string) => {
    setIsActive(arg);
    setSidebarOpen(false);
    console.log(arg);
  };
  return (
    <>
      <DesktopScreen
        isSidebarOpen={isSidebarOpen}
        active={active}
        toggleSidebar={toggleSidebar}
        activeLink={activeLink}
      >
        {children}
      </DesktopScreen>

      <MobileScreen />
    </>
  );
}
