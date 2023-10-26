"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SOL_MONITOREO({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#FFFFFF");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#FFFFFF");
  }, [theme]);

  return (
    <>
      <svg
        version="1.1"
        id="uuid-7ab98036-8755-4059-8d10-32e8455ab844"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 110.6 110.6"
        style={{ enableBackground: "new 0 0 110.6 110.6" }}
        width={width}
        height={height}
      >
        <path
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          d="M43.4,8.7c-18.1-0.9-33.4,13-34.4,31c-0.9,18.1,13,33.4,31,34.4c18.1,0.9,33.4-13,34.4-31
	C75.4,25,61.5,9.6,43.4,8.7z M67.2,42.7c-0.7,14.1-12.7,24.9-26.8,24.2c-14.1-0.7-24.9-12.7-24.2-26.8S29,15.2,43.1,15.9
	C57.1,16.6,68,28.6,67.2,42.7z"
        />
        <polyline
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          points="68.1,62 75.7,70.5 69.1,76.4 61.5,67.9 "
        />
        <rect
          x="76.7"
          y="69.7"
          transform="matrix(0.7421 -0.6703 0.6703 0.7421 -35.3842 76.9397)"
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          width="11.2"
          height="29.6"
        />
        <line
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          x1="26.5"
          y1="50"
          x2="26.5"
          y2="45.7"
        />
        <line
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          x1="39.6"
          y1="50"
          x2="39.6"
          y2="42.2"
        />
        <line
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          x1="33.1"
          y1="50"
          x2="33.1"
          y2="42.2"
        />
        <line
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          x1="46.2"
          y1="50"
          x2="46.2"
          y2="34"
        />
        <line
          style={{
            fill: "none",
            stroke: color,
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          x1="52.7"
          y1="50"
          x2="52.7"
          y2="28"
        />
      </svg>
    </>
  );
}
