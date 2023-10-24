"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PowerLine = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#3f3f3f");

  useEffect(() => {
    setColor(theme === "dark" ? "#fff" : "#3f3f3f");
  }, [theme]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="10vh"
      viewBox="0 0 1932 112"
    >
      {/* Main horizontal line */}
      <path
        d="M16.251,68.3H1766.37"
        transform="translate(-1.329 -1.36)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      {/* Animated spikes */}
      <motion.path
        d="M38.584,68.3l7.445-13.575L56.1,79.252l12.7-62.62L81.5,96.768,97.7,54.291l10.072,25.4L115.217,68.3"
        transform="translate(-1.329 -1.36)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "85%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
};

export default PowerLine;
