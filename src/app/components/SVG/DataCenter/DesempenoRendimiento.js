"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DesempenoRendimiento({ width, height }) {
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
          d="m14.5,38.75H4.5c-.41,0-.75-.34-.75-.75v-20c0-.41.34-.75.75-.75h10c.41,0,.75.34.75.75v20c0,.41-.34.75-.75.75Zm-9.25-1.5h8.5v-18.5H5.25v18.5Z"
        />
        <path
          className="cls-1"
          d="m27.5,38.75h-10c-.41,0-.75-.34-.75-.75V11c0-.41.34-.75.75-.75h10c.41,0,.75.34.75.75v27c0,.41-.34.75-.75.75Zm-9.25-1.5h8.5V11.75h-8.5v25.5Z"
        />
        <path
          className="cls-1"
          d="m40.5,38.75h-10c-.41,0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75h10c.41,0,.75.34.75.75v33c0,.41-.34.75-.75.75Zm-9.25-1.5h8.5V5.75h-8.5v31.5Z"
        />
      </g>
    </svg>
  );
}
