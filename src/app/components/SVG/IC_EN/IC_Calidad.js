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
        stroke-width: 0px;
        fill: ${color};
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m36.11,38.71h-5.14l-.2-.89c-.3-1.33-1.5-2.3-2.86-2.3s-2.57.97-2.86,2.3l-.2.89h-4.7l-.2-.89c-.3-1.33-1.5-2.3-2.86-2.3s-2.57.97-2.86,2.3l-.2.89h-5.14V1.69h27.22v37.02Zm-4.33-1h3.33V2.69H9.89v35.02h3.33l.02-.1c.4-1.78,2.01-3.08,3.84-3.08s3.44,1.29,3.84,3.08l.02.1h3.1l.02-.1c.4-1.78,2.01-3.08,3.84-3.08s3.44,1.29,3.84,3.08l.02.1Z"
      />
      <path
        className="cls-1"
        d="m30.7,12.1H14.3v-5h16.39v5Zm-15.39-1h14.39v-3h-14.39v3Z"
      />
      <path
        className="cls-1"
        d="m22.5,31.05c-3.62,0-6.57-2.95-6.57-6.57s2.95-6.57,6.57-6.57,6.57,2.95,6.57,6.57-2.95,6.57-6.57,6.57Zm0-12.13c-3.07,0-5.57,2.5-5.57,5.57s2.5,5.57,5.57,5.57,5.57-2.5,5.57-5.57-2.5-5.57-5.57-5.57Z"
      />
      <g>
        <path
          className="cls-1"
          d="m27.99,41.35c-1.18,0-2.14-.96-2.14-2.14v-.68c0-1.18.96-2.14,2.14-2.14s2.13.96,2.13,2.14v.68c0,1.18-.96,2.14-2.13,2.14Zm0-3.95c-.63,0-1.14.51-1.14,1.14v.68c0,.63.51,1.14,1.14,1.14s1.13-.51,1.13-1.14v-.68c0-.63-.51-1.14-1.13-1.14Z"
        />
        <rect className="cls-1" x="27.49" y="40.85" width="1" height="2.61" />
      </g>
      <g>
        <path
          className="cls-1"
          d="m17.16,41.35c-1.18,0-2.14-.96-2.14-2.14v-.68c0-1.18.96-2.14,2.14-2.14s2.13.96,2.13,2.14v.68c0,1.18-.96,2.14-2.13,2.14Zm0-3.95c-.63,0-1.14.51-1.14,1.14v.68c0,.63.51,1.14,1.14,1.14s1.13-.51,1.13-1.14v-.68c0-.63-.51-1.14-1.13-1.14Z"
        />
        <rect className="cls-1" x="16.66" y="40.85" width="1" height="2.61" />
      </g>
    </svg>
  );
}
