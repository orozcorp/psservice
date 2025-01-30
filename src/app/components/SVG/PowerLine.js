"use client";

import { memo } from "react";
import { useTheme } from "next-themes";

const PowerLine = memo(() => {
  const { theme } = useTheme();
  const strokeColor = theme === "dark" ? "#fff" : "#3f3f3f";

  return (
    <svg
      viewBox="0 0 1932 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto animate-pulse z-40"
    >
      <path
        d="M16.251 68.3H38.584l7.445-13.575L56.1 79.252l12.7-62.62L81.5 96.768 97.7 54.291l10.072 25.4L115.217 68.3H1766.37"
        strokeWidth={3}
        strokeLinecap="round"
        strokeMiterlimit={10}
        stroke={strokeColor}
        transform="translate(-1.329 -1.36)"
      />
    </svg>
  );
});

PowerLine.displayName = "PowerLine";

export default PowerLine;
