"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_EN_11({ width, height }) {
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
        d="m2.29,30c-1.26,0-2.29-1.03-2.29-2.29V2.29C0,1.03,1.03,0,2.29,0h25.42c1.26,0,2.29,1.03,2.29,2.29v25.42c0,1.26-1.03,2.29-2.29,2.29H2.29ZM2.29.96c-.73,0-1.33.59-1.33,1.33v25.42c0,.73.59,1.33,1.33,1.33h25.42c.73,0,1.33-.59,1.33-1.33V2.29c0-.73-.59-1.33-1.33-1.33H2.29Z"
      />
      <path
        className="cls-1"
        d="m5.6,25.78c-.76,0-1.39-.62-1.39-1.39V5.6c0-.76.62-1.39,1.39-1.39h18.8c.76,0,1.39.62,1.39,1.39v18.8c0,.76-.62,1.39-1.39,1.39H5.6Zm-.42-1.35l.07.39h5.84V5.18h-5.9v19.25Zm13.73.39h5.9V5.18h-5.9v19.64Zm-6.87,0h5.9V5.18h-5.9v19.64Z"
      />
    </svg>
  );
}
