"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Gabinetes({ width, height }) {
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
        stroke-width: 0px;
        fill: ${color};
      }`}
        </style>
      </defs>
      <g>
        <path
          className="cls-1"
          d="m38,38.45H7.2c-.41,0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75h30.8c.41,0,.75.34.75.75v31.7c0,.41-.34.75-.75.75Zm-30.05-1.5h29.3V6.75H7.95v30.2Z"
        />
        <path
          className="cls-1"
          d="m36.19,41.62H9.01c-.41,0-.75-.34-.75-.75v-3.17c0-.41.34-.75.75-.75s.75.34.75.75v2.42h25.68v-2.42c0-.41.34-.75.75-.75s.75.34.75.75v3.17c0,.41-.34.75-.75.75Z"
        />
        <path
          className="cls-1"
          d="m22.6,38.45c-.41,0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v31.7c0,.41-.34.75-.75.75Z"
        />
        <path
          className="cls-1"
          d="m26.22,26.56c-.41,0-.75-.34-.75-.75v-7.92c0-.41.34-.75.75-.75s.75.34.75.75v7.92c0,.41-.34.75-.75.75Z"
        />
        <path
          className="cls-1"
          d="m18.97,26.56c-.41,0-.75-.34-.75-.75v-7.92c0-.41.34-.75.75-.75s.75.34.75.75v7.92c0,.41-.34.75-.75.75Z"
        />
      </g>
    </svg>
  );
}
