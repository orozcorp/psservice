"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_EN_03({ width, height }) {
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
          {`.cls-1 {
        stroke-width: 0px;
        fill: ${color};
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m.48,26.33c-.27,0-.48-.22-.48-.48V4.16c0-.27.22-.48.48-.48h29.04c.27,0,.48.22.48.48v21.69c0,.27-.22.48-.48.48H.48Zm.48-.96h28.07V4.64H.96v20.72Z"
      />
      <path
        className="cls-1"
        d="m4.16,22.71c-.27,0-.48-.22-.48-.48V7.77c0-.27.22-.48.48-.48h21.69c.27,0,.48.22.48.48v14.46c0,.27-.22.48-.48.48H4.16Zm11.33-.96h9.88v-2.65h-9.88v2.65Zm-10.84,0h9.88v-2.65H4.64v2.65Zm10.84-3.61h9.88v-2.65h-9.88v2.65Zm-10.84,0h9.88v-2.65H4.64v2.65Zm10.84-3.61h9.88v-2.65h-9.88v2.65Zm-10.84,0h9.88v-2.65H4.64v2.65Zm10.84-3.61h9.88v-2.65h-9.88v2.65Zm-10.84,0h9.88v-2.65H4.64v2.65Z"
      />
    </svg>
  );
}
