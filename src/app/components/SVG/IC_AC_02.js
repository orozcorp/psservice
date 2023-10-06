"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_AC_02({ width, height }) {
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
        d="m.48,13.61C.22,13.61,0,13.4,0,13.13V.48C0,.22.22,0,.48,0h29.04c.27,0,.48.22.48.48v12.65c0,.27-.22.48-.48.48H.48Zm23.55-4.58c.27,0,.48.22.48.48v3.13h4.52V.96H.96v11.69h4.52v-3.13c0-.27.22-.48.48-.48h18.07Zm-17.59,3.61h17.11v-2.65H6.45v2.65Z"
      />
      <path
        className="cls-1"
        d="m25.84,4.58c-.27,0-.48-.22-.48-.48s.22-.48.48-.48.48.22.48.48-.22.48-.48.48Z"
      />
      <path
        className="cls-1"
        d="m22.23,4.58c-.27,0-.48-.22-.48-.48s.22-.48.48-.48.48.22.48.48-.22.48-.48.48Z"
      />
      <path
        className="cls-1"
        d="m15,30c-.27,0-.48-.22-.48-.48v-1.68l-.16-.13c-1.04-.8-3.45-2.94-3.45-5.55,0-3.21,3.67-5.72,3.83-5.82.08-.05.17-.08.27-.08s.19.03.27.08c.16.1,3.83,2.61,3.83,5.82,0,2.61-2.41,4.75-3.45,5.55l-.16.13v1.68c0,.27-.22.48-.48.48Zm-.26-12.45c-1.07.87-2.87,2.62-2.87,4.62,0,1.49,1.05,2.87,1.93,3.77l.72.74v-4.51c0-.27.22-.48.48-.48s.48.22.48.48v4.5l.72-.73c.88-.89,1.93-2.26,1.93-3.77,0-2.14-2.19-4.08-2.86-4.62l-.27-.21-.26.21Z"
      />
    </svg>
  );
}
