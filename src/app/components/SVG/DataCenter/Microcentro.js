"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Microcentro({ width, height }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#324BA6" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 45"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`      .cls-1 {
        stroke: ${color};
        stroke-miterlimit: 10;
        stroke-width: .25px;
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m22.27,26.82c-.36,0-.66-.3-.66-.66v-2.67c0-.36.3-.66.66-.66s.66.3.66.66v2.67c0,.36-.3.66-.66.66Z"
      />
      <path
        className="cls-1"
        d="m40.34,30.68h-13.92c-.36,0-.66-.3-.66-.66s.3-.66.66-.66h13.92c.36,0,.66.3.66.66s-.3.66-.66.66Z"
      />
      <path
        className="cls-1"
        d="m18.29,30.68H4.37c-.36,0-.66-.3-.66-.66s.3-.66.66-.66h13.92c.36,0,.66.3.66.66s-.3.66-.66.66Z"
      />
      <path
        className="cls-1"
        d="m22.27,34.79c-2.56,0-4.65-2.08-4.65-4.65s2.08-4.64,4.65-4.64,4.65,2.08,4.65,4.64-2.08,4.65-4.65,4.65Zm0-7.97c-1.83,0-3.33,1.49-3.33,3.33s1.49,3.33,3.33,3.33,3.33-1.49,3.33-3.33-1.49-3.33-3.33-3.33Z"
      />
      <path
        className="cls-1"
        d="m38.88,24.15H5.66c-.81,0-1.46-.66-1.46-1.46v-10.19c0-.81.66-1.46,1.46-1.46h33.22c.81,0,1.46.66,1.46,1.46v10.19c0,.81-.66,1.46-1.46,1.46ZM5.66,12.34c-.08,0-.14.07-.14.14v10.19c0,.08.07.14.14.14h33.22c.08,0,.14-.07.14-.14v-10.19c0-.08-.07-.14-.14-.14H5.66Zm5.56,8.31c-1.63,0-2.95-1.32-2.95-2.95s1.32-2.95,2.95-2.95,2.95,1.32,2.95,2.95-1.32,2.95-2.95,2.95Zm0-4.59c-.9,0-1.64.73-1.64,1.64s.73,1.63,1.64,1.63,1.63-.73,1.63-1.63-.73-1.64-1.63-1.64Z"
      />
      <g>
        <g>
          <rect
            className="cls-1"
            x="28.08"
            y="17.63"
            width=".58"
            height=".58"
          />
          <rect
            className="cls-1"
            x="27.43"
            y="16.97"
            width="1.9"
            height="1.9"
          />
        </g>
        <g>
          <rect
            className="cls-1"
            x="33.69"
            y="17.63"
            width=".58"
            height=".58"
          />
          <rect
            className="cls-1"
            x="33.03"
            y="16.97"
            width="1.9"
            height="1.9"
          />
        </g>
      </g>
    </svg>
  );
}
