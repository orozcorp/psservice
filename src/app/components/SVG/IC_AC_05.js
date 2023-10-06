"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_AC_05({ width, height }) {
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
        d="m2.13,22.77c-.27,0-.48-.22-.48-.48v-7.23c0-.27.22-.48.48-.48h3.61c.27,0,.48.22.48.48v7.23c0,.27-.22.48-.48.48h-3.61Zm.48-.96h2.65v-6.27h-2.65v6.27Z"
      />
      <path
        className="cls-1"
        d="m9.36,22.77c-.27,0-.48-.22-.48-.48v-10.84c0-.27.22-.48.48-.48h3.61c.27,0,.48.22.48.48v10.84c0,.27-.22.48-.48.48h-3.61Zm.48-.96h2.65v-9.88h-2.65v9.88Z"
      />
      <path
        className="cls-1"
        d="m16.59,22.77c-.27,0-.48-.22-.48-.48V7.83c0-.27.22-.48.48-.48h3.61c.27,0,.48.22.48.48v14.46c0,.27-.22.48-.48.48h-3.61Zm.48-.96h2.65v-13.49h-2.65v13.49Z"
      />
      <path
        className="cls-1"
        d="m23.81,22.77c-.27,0-.48-.22-.48-.48V4.21c0-.27.22-.48.48-.48h3.61c.27,0,.48.22.48.48v18.07c0,.27-.22.48-.48.48h-3.61Zm.48-.96h2.65V4.69h-2.65v17.11Z"
      />
      <path
        className="cls-1"
        d="m.26,26.38c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h29.04c.27,0,.48.22.48.48s-.22.48-.48.48H.26Z"
      />
    </svg>
  );
}
