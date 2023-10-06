"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_EN_13({ width, height }) {
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
          {` .cls-1 {
        stroke-width: 0px;
        fill: ${color};
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m5.02,8.93c-.76,0-1.39-.62-1.39-1.39v-2.55c0-.76.62-1.39,1.39-1.39h7.26c.76,0,1.39.62,1.39,1.39v2.55c0,.76-.62,1.39-1.39,1.39h-7.26Zm-.42-.96h.42s7.68,0,7.68,0v-3.39H4.59v3.39Z"
      />
      <path
        className="cls-1"
        d="m8.64,21.77c-1.76,0-3.19-1.43-3.19-3.19s1.43-3.19,3.19-3.19c1.76,0,3.19,1.43,3.19,3.19s-1.43,3.19-3.19,3.19Zm-1.12-5.12c-.69.4-1.11,1.14-1.11,1.93,0,1.23,1,2.23,2.23,2.23s2.23-1,2.23-2.23c0-.79-.43-1.53-1.11-1.93l-.63-.37v1.17c0,.27-.22.48-.48.48s-.48-.22-.48-.48v-1.17l-.63.37Z"
      />
      <path
        className="cls-1"
        d="m7.05,12.64c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h3.19c.27,0,.48.22.48.48s-.22.48-.48.48h-3.19Z"
      />
      <path
        className="cls-1"
        d="m9.55,30c-.76,0-1.39-.62-1.39-1.39v-3.23H2.29c-1.26,0-2.29-1.03-2.29-2.29V2.29C0,1.03,1.03,0,2.29,0h12.71c1.26,0,2.29,1.03,2.29,2.29v20.81c0,1.26-1.03,2.29-2.29,2.29h-5.87v3.65h18.1v-3.04h-2.56c-1.59,0-2.89-1.3-2.89-2.89v-1.97h-.42c-.76,0-1.39-.62-1.39-1.39v-5.21c0-.76.62-1.39,1.39-1.39h.42v-2.54c0-.27.22-.48.48-.48s.48.22.48.48v2.54h.42c.76,0,1.39.62,1.39,1.39v5.21c0,.76-.62,1.39-1.39,1.39h-.42v1.97c0,1.06.86,1.93,1.93,1.93h2.56v-14h-.42c-.76,0-1.39-.62-1.39-1.39v-5.21c0-.76.62-1.39,1.39-1.39h.42V.51c0-.27.22-.48.48-.48s.48.22.48.48v2.54h.42c.76,0,1.39.62,1.39,1.39v5.21c0,.76-.62,1.39-1.39,1.39h-.42v17.59c0,.76-.62,1.39-1.39,1.39H9.55ZM2.29.96c-.73,0-1.33.59-1.33,1.33v20.81c0,.73.59,1.33,1.33,1.33h12.71c.73,0,1.33-.59,1.33-1.33V2.29c0-.73-.59-1.33-1.33-1.33H2.29Zm18.64,19.2h2.65v-.42s0-5.63,0-5.63h-2.65v6.05Zm5.45-10.1h2.65v-.42s0-5.63,0-5.63h-2.65v6.05Z"
      />
    </svg>
  );
}
