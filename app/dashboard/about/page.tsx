/* eslint-disable react/no-unescaped-entities */
"use client";
import { useTheme } from "@/context/ThemeToggle";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const { aboutRef } = useTheme();

  const isInView1 = useInView(aboutRef, { once: true });

  return (
    <motion.section
      id="about"
      ref={aboutRef}
      className="px-7 lg:py-20 relative z-40 mb-10 md:mb-0 pt-[90px] md:pt-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex justify-between">
        <h1 className="border-l-8 border-red-800 ps-2 text-4xl md:text-5xl mb-8  md:mb-4 font-bold opacity-30 text-[#fe805b] dark:text-white dark:opacity-30 ">
          ABOUT ME
        </h1>
        <div className=" cursor-pointer">
          <a
            href="/Wisdom_Peters_resume.pdf"
            className="flex flex-col justify-end items-center"
            download
          >
            <Image
              src="/images/download.png"
              alt="download-button"
              width={30}
              height={30}
            />
            <button type="button" className="text-black text-xs">
              Download My Resume
            </button>
          </a>
        </div>
      </div>
      <div className="lg:flex lg:gap-[68px] mb-[30px]">
        <p className="nunito text-3xl lg:text-4xl font-extrabold  lg:w-[485px] md:text-right leading-[50px] lg:leading-[60px] mb-4 md:mb-9">
          <span className="block">Hello!</span> I'm Wisdom Peters, a passionate
          <span className="text-[#fe805b] ps-2">
            Full Stack Web Application developer
          </span>
          . I create engaging and intuitive web experiences
        </p>
        <p className="italic roboto-condense-500 leading-6 md:leading-10 mb-2  md:mb-9 lg:w-[340px] dark:bg-gray-950 dark:text-white bg-white h-max rounded-xl text-gray-700 lg:relative lg:top-[100px] text-sm md:text-left drop-shadow-2xl dark:shadow-slate-100 text-justify p-5">
          ...with my basic foundation in full-stack development, I can handle
          both the client-side and server-side tasks, ensuring seamless
          integration and optimized performance. Whether you're looking to
          create modern web apps or in need of backend services, I'm here to
          help deliver reliable and scalable solutions.
        </p>
      </div>

      <div className="mb-8 leading-8 p-4">
        <h1 className="text-4xl mb-5 font-medium">Education</h1>
        <p className="text-2xl mb-1">
          <b>University of Nigeria, Nsukka</b>
        </p>
        <p>B.Sc. in Computer Science</p>
        <p>October 2019 - September 2023</p>
      </div>
    </motion.section>
  );
}
