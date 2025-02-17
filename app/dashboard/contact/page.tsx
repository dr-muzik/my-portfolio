"use client";
/* eslint-disable react/no-unescaped-entities */

import ContactForm from "@/component/ContactForm";
import MotionSection from "@/component/MotionSection";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

export default function Contact() {
  return (
    <MotionSection id="contact">
      <h1 className="border-l-8 border-red-800 ps-2 text-4xl md:text-5xl font-bold mb-11 lg:mb-20 opacity-30 text-[#fe805b] dark:text-white dark:opacity-30">
        CONTACT
      </h1>
      <div className="lg:flex md:gap-7 relative z-40 ">
        <div className="p-1 w-full max-w-[310px] mb-10  md:mb-7 z-20 leading-[70px] border-2 border-transparent bg-custom-gradient bg-clip-padding dark:bg-none rounded-lg relative h-max">
          <div className="bg-white dark:bg-transparent z-30 dark:text-white rounded-lg p-7  flex flex-col gap-3 text-gray-900 mb-3">
            <div className="absolute -top-[20px]">
              <h2 className="text-2xl font-medium z-50  bg-white dark:bg-transparent w-max px-5">
                Reach Out
              </h2>
            </div>
            <p className="flex gap-3 items-center text-base ">
              <EmailIcon sx={{ fontSize: 25, color: "#c36bd0" }} />{" "}
              dev_drmuzik@outlook.com
            </p>
            <p className="flex gap-3 items-center text-base">
              <CallIcon sx={{ fontSize: 25, color: "#c36bd0" }} /> +234 90 653
              835 89
            </p>
            {/* <p>
						<CallIcon sx={{ fontSize: 25 }} /> +234 81 243 854 83
					</p> */}
            <p className="flex gap-3 items-center text-base">
              <XIcon sx={{ fontSize: 25, color: "#c36bd0" }} />{" "}
              <a
                href="https://x.com/Wiz_muzik"
                target="_blank"
                style={{ color: "blue" }}
              >
                Twitter
              </a>
            </p>
            <p className="flex gap-3 items-center text-base">
              {" "}
              <LinkedInIcon sx={{ fontSize: 25, color: "#c36bd0" }} />
              <a
                style={{ color: "blue" }}
                href="https://www.linkedin.com/in/wisdom-peters-4b0b33239"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </MotionSection>
  );
}
