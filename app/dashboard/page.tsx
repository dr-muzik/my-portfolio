"use client";
import MotionSection from "@/component/MotionSection";
import { useTheme } from "@/context/ThemeToggle";

export default function Welcome() {
  const { welcomeRef } = useTheme();
  return (
    <MotionSection id="home" ref={welcomeRef}>
      <div className="w-max border-2 bg-custom-gradient opacity-90 drop-shadow-2xl text-center p-8 rounded-2xl text-5xl">
        Welcome to my <br />{" "}
        <span className="font-bold text-8xl">PORTFOLIO</span>
      </div>
    </MotionSection>
  );
}
