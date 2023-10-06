"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SOL_ENERGIA({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#FFFFFF");
  // useEffect(() => {
  //   setColor(theme === "dark" ? "#799FE6" : "#FFFFFF");
  // }, [theme]);
  return (
    <svg
      id="uuid-753ad3bc-55cd-4b56-a913-eeb4d1a0b7b7"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110.58 110.58"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-cbd1349a-5c77-497e-949e-5a11774133a3{stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}.uuid-cbd1349a-5c77-497e-949e-5a11774133a3,.uuid-29a1850b-9b84-4ec0-b6bf-ce769437602a{fill:none;}.uuid-29a1850b-9b84-4ec0-b6bf-ce769437602a{stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-cbd1349a-5c77-497e-949e-5a11774133a3"
        d="m63.76,47.41v-22.37c0-1.67-2.18-2.3-3.08-.89l-24.03,37.84c-.71,1.11.09,2.56,1.41,2.56h10.77c.92,0,1.67.75,1.67,1.67v21.07c0,1.66,2.15,2.3,3.06.92l23.98-36.54c.73-1.11-.07-2.58-1.39-2.58h-10.71c-.92,0-1.67-.75-1.67-1.67Z"
      />
      <circle
        className="uuid-cbd1349a-5c77-497e-949e-5a11774133a3"
        cx="57.1"
        cy="56.16"
        r="49.69"
        transform="translate(-22.99 56.82) rotate(-45)"
      />
      <path
        className="uuid-cbd1349a-5c77-497e-949e-5a11774133a3"
        d="m52.28,24.99c-15.13,2.32-26.72,15.39-26.72,31.17,0,12.69,7.5,23.62,18.3,28.62"
      />
      <path
        className="uuid-cbd1349a-5c77-497e-949e-5a11774133a3"
        d="m62.08,87.29c15.05-2.39,26.55-15.42,26.55-31.14,0-12.67-7.47-23.58-18.24-28.6"
      />
      <rect
        className="uuid-29a1850b-9b84-4ec0-b6bf-ce769437602a"
        x="-.5"
        y="-1.03"
        width="110"
        height="112"
      />
    </svg>
  );
}
