"use client";
import Tab from "@/component/Tab";
import { useTheme } from "@/context/ThemeToggle";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export interface Icons {
  icons: string;
  name: string;
}

export default function Skills() {
  const { skillsRef, value } = useTheme();

  const isInView1 = useInView(skillsRef, { once: true });
  return (
    <motion.section
      id="skills"
      className="min-h-screen md:h-auto  px-2 lg:py-20 z-30 relative mb-0 md:mb-0 pt-[90px] md:pt-0"
      ref={skillsRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="border-l-8 border-red-800 ps-2 text-4xl md:text-5xl font-bold mb-9 opacity-30 text-[#fe805b] dark:text-white dark:opacity-30">
        TECH STACK
      </h1>
      <Tab />
      <br />

      <div className=" flex flex-wrap gap-4  sm:gap-6 justify-center ">
        {value == 0
          ? frontendStack.map((tech, i) => (
              <div
                key={i}
                className="text-xs bg-white rounded-lg shadow-2xl p-4 flex w-[80px] md:w-[120px] sm:w-[150px] justify-center items-center flex-col gap-3 md:gap-3 text-gray-600"
              >
                <Image
                  className="w-[40px] h-[40px] md:h-[70px] md:w-[70px]"
                  src={tech.icons}
                  alt={tech.name}
                  width={50}
                  height={50}
                />
                <p>{tech.name}</p>
              </div>
            ))
          : backendStack.map((tech, i) => (
              <div
                key={i}
                className="text-xs bg-white rounded-lg shadow-2xl p-4 flex w-[80px] md:w-[120px] sm:w-[150px] justify-center items-center flex-col gap-3 md:gap-3 text-gray-600"
              >
                <Image
                  className="w-[40px] h-[40px] md:h-[70px] md:w-[70px]"
                  src={tech.icons}
                  alt={tech.name}
                  width={50}
                  height={50}
                />
                <p>{tech.name}</p>
              </div>
            ))}
      </div>
    </motion.section>
  );
}

const frontendStack: Icons[] = [
  {
    icons: "/images/js.png",
    name: "Javascript",
  },
  {
    icons: "/images/ts.png",
    name: "Typescript",
  },
  {
    icons: "/images/react.png",
    name: "Reactjs",
  },
  {
    icons: "/images/nextjs.svg",
    name: "Nextjs",
  },
  {
    icons: "/images/vue.png",
    name: "Vuejs",
  },
  {
    icons: "/images/nuxt.png",
    name: "Nuxtjs",
  },
  {
    icons: "/images/sass.png",
    name: "SASS",
  },
  {
    icons: "/images/icon-git.png",
    name: "Git",
  },
  {
    icons: "/images/socket.png",
    name: "Socket.io",
  },
  {
    icons: "/images/tailwind.png",
    name: "Tailwind",
  },
];

const backendStack: Icons[] = [
  {
    icons: "/images/nextjs.svg",
    name: "Nextjs",
  },
  {
    icons: "/images/nodejs.png",
    name: "Node",
  },
  {
    icons: "/images/js.png",
    name: "Javascript",
  },
  {
    icons: "/images/express.png",
    name: "Expressjs",
  },
  {
    icons: "/images/ts.png",
    name: "Typescript",
  },
  {
    icons: "/images/icon-git.png",
    name: "Git",
  },
  {
    icons: "/images/nest.png",
    name: "Nestjs",
  },
  {
    icons: "/images/mongodb.png",
    name: "MongoDb",
  },
  {
    icons: "/images/socket.png",
    name: "Socket.io",
  },
  {
    icons: "/images/nuxt.png",
    name: "Nuxtjs",
  },
  {
    icons: "/images/mysql.png",
    name: "Mysql",
  },
  {
    icons: "/images/prisma.png",
    name: "Prisma",
  },
];
