// app/components/ContactMotionSection.tsx
"use client";

import { useTheme } from "@/context/ThemeToggle";
import { motion, useInView } from "framer-motion";

interface ContactMotionSectionProps {
  children: React.ReactNode;
  id?: string;
  ref: React.RefObject<HTMLElement>;
}

export default function MotionSection({
  children,
  id,
  ref,
}: ContactMotionSectionProps) {
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      className="px-3 sm:px-7 lg:py-20 mb-36 md:mb-0 pt-[90px] md:pt-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
