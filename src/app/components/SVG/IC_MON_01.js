"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_MON_01({ width, height }) {
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
      viewBox="0 0 30 30"
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
        d="m7.23,30c-1.26,0-2.29-1.03-2.29-2.29V2.29c0-1.26,1.03-2.29,2.29-2.29h15.54c1.26,0,2.29,1.03,2.29,2.29v25.42c0,1.26-1.03,2.29-2.29,2.29H7.23Zm-1.33-2.29c0,.73.59,1.33,1.33,1.33h15.54c.73,0,1.33-.59,1.33-1.33v-5.16H5.9v5.16ZM7.23.96c-.73,0-1.33.59-1.33,1.33v19.3h18.19V2.29c0-.73-.59-1.33-1.33-1.33H7.23Z"
      />
      <path
        className="cls-1"
        d="m13.7,26.27c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h2.59c.27,0,.48.22.48.48s-.22.48-.48.48h-2.59Z"
      />
      <path
        className="cls-1"
        d="m11.45,18.95c-.53,0-.97-.43-.97-.97v-9.78c0-.53.43-.97.97-.97h.94v-2.65c0-.53.43-.96.96-.96h3.29c.53,0,.96.43.96.96v2.65h.94c.53,0,.97.43.97.97v9.78c0,.53-.43.97-.97.97h-7.1Zm0-.96h7.11v-9.79h-7.11v9.79Zm1.91-10.76h3.29v-2.65h-3.29v2.65Z"
      />
    </svg>
  );
}
