"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_Calidad({ width, height }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#324BA6" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="_ÎÓÈ_4"
      data-name="—ÎÓÈ_4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 45"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`      .cls-1 {
        fill: none;
        stroke: ${color};
        stroke-miterlimit: 10;
      }

      .cls-2 {
        stroke-width: 0px;
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m27.91,35.03c1.6,0,3,1.13,3.35,2.69l.11.5h4.24V2.19s-26.22,0-26.22,0v36.02h4.24l.11-.5c.35-1.56,1.76-2.69,3.35-2.69s3,1.13,3.35,2.69l.11.5h3.9l.11-.5c.35-1.56,1.76-2.69,3.35-2.69Zm-10.8,1.87c-.9,0-1.64.73-1.64,1.64v.68c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64v-.68c0-.9-.73-1.64-1.64-1.64Zm0,3.95v2.61m10.88-6.56c-.9,0-1.64.73-1.64,1.64v.68c0,.9.73,1.64,1.64,1.64s1.64-.73,1.64-1.64v-.68c0-.9-.73-1.64-1.64-1.64Zm0,3.95v2.61"
      />
      <path
        class="cls-2"
        d="m30.7,12.1H14.3v-5h16.39v5Zm-15.39-1h14.39v-3h-14.39v3Z"
      />
      <path
        class="cls-2"
        d="m22.5,31.05c-3.62,0-6.57-2.95-6.57-6.57s2.95-6.57,6.57-6.57,6.57,2.95,6.57,6.57-2.95,6.57-6.57,6.57Zm0-12.13c-3.07,0-5.57,2.5-5.57,5.57s2.5,5.57,5.57,5.57,5.57-2.5,5.57-5.57-2.5-5.57-5.57-5.57Z"
      />
    </svg>
  );
}
