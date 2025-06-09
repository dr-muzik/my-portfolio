import { ReactNode } from "react";

export interface IConnect {
  fullName: string;
  email: string;
  message: string;
}
export interface Icons {
  icons: string;
  name: string;
}

export interface Iproject {
  src: string;
  siteName: string;
  about: string;
  server?: string;
  client: string;
  site: string;
  projectName: string;
  projectType?: string;
}

export const projects: Iproject[] = [
  // {
  //   src: "/images/sef.png",
  //   siteName: "Sefmar",
  //   about:
  //     "is an online Market that gives business owners the opportunity to create and have an online shop for their businesses, which can be accessible by anyone within and outside their region. Currently, the server is down",
  //   server: "Nodejs, Expressjs and MYSQL, Nodemailer (for email services)",
  //   client: "React Vitejs, typescript, scss, bootstrap",
  //   site: "https://www.sefmar.com",
  //   projectName: "Sefmar Limted",
  //   projectType: "Personal",
  // },
  {
    src: "/images/zarafat.png",
    siteName: "ZarafatFarm Fresh",
    about:
      "is a company's portfolio website - an Agricultural-based company, everything about the company from its background history to the services/products rendered",
    server: "Nodemailer (for email services), in same Nuxtjs",
    client: "Nuxtjs, typescript, tailwindcss ",
    site: "https://www.zarafatFarm.com",
    projectName: "Zarafat Farm",
    projectType: "For a Client",
  },
  {
    src: "/images/payGo-login.png",
    siteName: "GreenFundus",
    about:
      "is a prototypical online agricultural store platform that allows users to make purchases some agricultural products.",
    client: "React Vitejs, typescript, tailwindcss, muicss",
    site: "https://green-fundus.vercel.app/",
    projectName: "GreenFundus",
    projectType: "Personal",
  },
  {
    src: "/images/ikons.png",
    siteName: "I-Konnect",
    about:
      "is a learning management system that allows students to learn and teachers to teach. Instructors can create and upload courses, while students can pay and then enroll in courses and learn.",
    server:
      "nodejs, cloudinary, paystack apis, mongoDB, Nodemailer (for email services)",
    client: "React, typescript, tailwindcss,",
    site: "https://i-konnect-one.vercel.app/",
    projectName: "Learning Management System",
    projectType: "Colaborated - worked on the Backend",
  },
  {
    src: "/images/ibeno.png",
    siteName: "Ibeno",
    about:
      "is fullstack web application developed using Nuxtjs for community development platform that allows users to create and join communities, create and attend events, and also donate to the community.",
    server:
      "Nuxtjs, cloudinary, mongoDB using prisma, sendGrid(for email services)",
    client: "Nuxtjs with its pinia state management, tailwindcss, typescript,",
    site: "https://ibeno.vercel.app/",
    projectName: "Ibeno Community Development",
    projectType: "Colaborated - worked both on the Backend and frontend",
  },
];

export interface IState {
  isSidebarOpen: boolean;
  active: string;
  toggleSidebar: (arg: string) => void;
  activeLink: (arg: string) => void;
  children?: ReactNode;
}
