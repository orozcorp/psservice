"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_EN_09({ width, height }) {
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
        d="m15,30c-1.75,0-3.17-1.42-3.17-3.17v-1.59l-2.06-4.41-.03-.04c-1.3-1.58-1.96-3.45-1.96-5.55,0-2.77,1.16-6.15,3.44-10.05C12.9,2.31,14.56.26,14.63.18c.09-.11.23-.18.37-.18s.28.06.37.18c.07.09,1.72,2.13,3.41,5.02,2.28,3.9,3.44,7.28,3.44,10.05,0,2.07-.65,3.92-1.94,5.5l-.03.04-2.09,4.47v1.59c0,1.75-1.42,3.17-3.17,3.17Zm-2.21-3.17c0,1.22.99,2.21,2.21,2.21s2.21-.99,2.21-2.21v-1.22h-4.42v1.22Zm-.17-2.17h4.77l1.68-3.59h-8.12l1.68,3.59Zm4.98-13.13c.26,0,.48.21.48.48,0,.25-.19.45-.43.48l-.38.04v7.59h2.3l.13-.17c1.04-1.36,1.57-2.94,1.57-4.7,0-4.96-4.14-11.11-5.92-13.53l-.34-.46-.34.46c-1.78,2.42-5.92,8.57-5.92,13.53,0,1.76.52,3.34,1.55,4.7l.13.17h2.32v-7.59l-.38-.04c-.25-.02-.43-.23-.43-.48,0-.26.21-.48.48-.48h5.19Zm-3.9,8.58h2.61v-7.62h-2.61v7.62Z"
      />
    </svg>
  );
}
