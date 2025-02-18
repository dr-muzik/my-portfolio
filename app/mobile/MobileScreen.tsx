// import Link from 'next/link';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Image from "next/image";
import { useTheme } from "../../context/ThemeToggle";
import About from "../dashboard/about/page";
import Contact from "../dashboard/contact/page";
import DashboardHome from "../dashboard/home/page";
import Projects from "../dashboard/projects/page";
import Skills from "../dashboard/stack/page";
// import { IState } from '../Interface/interface';
// import { useRef } from 'react';

const MobileScreen: React.FC = () => {
  const {
    themeMode,
    toggleTheme,
    scrollToSection,
    homeRef,
    aboutRef,
    contactRef,
    projectsRef,
    skillsRef,
    mobileActive,
    isSidebarOpen,
    toggleSidebar,
  } = useTheme();

  return (
    <div className=" md:hidden bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-700 ease-in-out">
      <Image
        src="/images/img-bg.png"
        alt="background"
        width={500}
        height={400}
        className="fixed opacity-10 bottom-[80px] md:bottom-[120px] z-10 -right-[100px]"
      />
      <div
        className={`${
          isSidebarOpen === true
            ? "bg-transparent"
            : "bg-white dark:bg-transparent"
        }  shadow-lg p-3 fixed top-4 left-[5%] z-[100] w-[90%] rounded-xl flex justify-between items-center`}
      >
        <Image
          src="/images/LOGO.png"
          alt="background"
          width={50}
          height={300}
          className="rounded-3xl"
        />
        {/* <ThemeToggle /> */}

        {themeMode === "light" ? (
          <div onClick={toggleTheme}>
            <LightModeIcon
              sx={{ fontSize: 25, color: "#000", cursor: "pointer" }}
            />
          </div>
        ) : (
          <div onClick={toggleTheme}>
            <DarkModeIcon
              sx={{ fontSize: 25, color: "#c36bd0", cursor: "pointer" }}
            />
          </div>
        )}

        {isSidebarOpen === true ? (
          <button
            className="  text-white"
            onClick={() => toggleSidebar("close")}
          >
            X
          </button>
        ) : (
          <button className="text-2xl " onClick={() => toggleSidebar("open")}>
            ☰
          </button>
        )}
      </div>
      <nav
        className={`transform transition-transform text-white bg-black w-full z-50 fixed top-0 left-0 h-screen opacity-90 duration-700 ease-in-out flex-col gap-10 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <ul className="flex flex-col gap-14 w-full items-center p-20 pt-32">
          <li
            className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
              mobileActive === "home" ? "bg-custom-gradient" : ""
            }`}
            onClick={() => scrollToSection(homeRef, "home")}
            style={{ cursor: "pointer" }}
          >
            <span
              className={`${
                mobileActive === "home" ? "font-bold text-base" : ""
              }`}
            >
              HOME
            </span>
          </li>
          <li
            className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
              mobileActive === "about" ? "bg-custom-gradient" : ""
            }`}
            onClick={() => scrollToSection(aboutRef, "about")}
            style={{ cursor: "pointer" }}
          >
            <span
              className={`${
                mobileActive === "about" ? "font-bold text-base" : ""
              }`}
            >
              ABOUT
            </span>
          </li>
          <li
            className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
              mobileActive === "skills" ? "bg-custom-gradient" : ""
            }`}
            onClick={() => scrollToSection(skillsRef, "skills")}
            style={{ cursor: "pointer" }}
          >
            <span
              className={`${
                mobileActive === "skills" ? "font-bold text-base" : ""
              }`}
            >
              SKILLS
            </span>
          </li>
          <li
            className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
              mobileActive === "projects" ? "bg-custom-gradient" : ""
            }`}
            onClick={() => scrollToSection(projectsRef, "projects")}
            style={{ cursor: "pointer" }}
          >
            <span
              className={`${
                mobileActive === "projects" ? "font-bold text-base" : ""
              }`}
            >
              PROJECTS
            </span>
          </li>
          <li
            className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
              mobileActive === "contact" ? "bg-custom-gradient" : ""
            }`}
            onClick={() => scrollToSection(contactRef, "contact")}
            style={{ cursor: "pointer" }}
          >
            <span
              className={`${
                mobileActive === "contact" ? "font-bold text-base" : ""
              }`}
            >
              CONTACT
            </span>
          </li>
        </ul>
      </nav>
      <DashboardHome />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-base bg-black text-white  mt-8 p-5 py-8 text-center md[w-]:none">
        Copyright @ 2024 <br />
        techGenius <br /> All rights reserved
      </footer>
    </div>
  );
};

export default MobileScreen;
