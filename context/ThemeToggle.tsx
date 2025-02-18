"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
// import DashboardLayout from '../dashboardLayout/page';
// import Dashboard from '../dashboard/dashboardLayout/page';

import DashboardLayout from "../app/dashboard/layout";

import { IConnect } from "@/app/Interface/interface";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useMemo } from "react";

interface ThemeContextProps {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
  scrollToSection: (ref: React.RefObject<HTMLElement>, arg: string) => void;
  aboutRef: MutableRefObject<HTMLElement | null>;
  skillsRef: MutableRefObject<HTMLElement | null>;
  contactRef: MutableRefObject<HTMLElement | null>;
  projectsRef: MutableRefObject<HTMLElement | null>;
  homeRef: MutableRefObject<HTMLElement | null>;
  welcomeRef: MutableRefObject<HTMLElement | null>;
  isSidebarOpen: boolean;
  active: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
  pathName: string;
  mobileActive: string;
  toggleSidebar: (arg: string) => void;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
  input: IConnect;
  setInput: React.Dispatch<React.SetStateAction<IConnect>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // export const ThemeProvider = () => {
  const [themeMode, setTheme] = useState<"light" | "dark">("light");

  // Load theme from local storage or use default light theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    console.log("first");
    const newTheme = themeMode === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const path = usePathname();
  const pathName = path.split("/")[2];

  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<HTMLElement | null>(null);
  const welcomeRef = useRef<HTMLElement | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const [active, setIsActive] = useState<string>("");
  const [mobileActive, setMobileActive] = useState<string>("home");
  const [value, setValue] = React.useState(0);
  const [active, setIsActive] = useState<string>(
    pathName === undefined ? "" : pathName
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("newValue: ", newValue);
    setValue(newValue);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>, arg: string) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMobileActive(arg);
      setSidebarOpen(false);
    }
  };

  const themeMui = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  const toggleSidebar = (arg: string) => {
    console.log(arg);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arg === "open" ? setSidebarOpen(true) : setSidebarOpen(false);
  };

  const [input, setInput] = useState<IConnect>({
    fullName: "",
    email: "",
    message: "",
  });

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleTheme,
        homeRef,
        aboutRef,
        skillsRef,
        contactRef,
        projectsRef,
        welcomeRef,
        scrollToSection,
        isSidebarOpen,
        active,
        setIsActive,
        pathName,
        toggleSidebar,
        handleChange,
        value,
        input,
        setInput,
        mobileActive,
      }}
    >
      <MuiThemeProvider theme={themeMui}>
        <DashboardLayout>{children}</DashboardLayout>
        {/* <DashboardLayout /> */}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
