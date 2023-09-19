"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AC_HP({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#B7CEFA" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="uuid-2fbd53f0-68fb-4bfa-884b-3860d3da00ec"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-089ffb9e-9d5d-4631-be5b-ff02f3d505f8{fill:${color};stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-089ffb9e-9d5d-4631-be5b-ff02f3d505f8"
        d="m150.13,0l-11.83,33.18h8.03c5.78,0,8.24,4.56,6.42,9.66l-11.73,32.9h-11.87l12.94-36.27h-6.09l-12.94,36.27h-11.91L137.65,1.42c-24.41,5.57-42.63,27.41-42.63,53.51s17.65,47.26,41.49,53.23l26.78-75.19h19.54c4.02,0,9.08,2.71,6.9,8.88l-10.92,30.83c-1.39,3.94-4.71,4.74-7.35,4.74h-11.95l-11.59,32.54c.68.03,1.37.04,2.05.04,30.38,0,55-24.62,55-55,0-30.33-24.54-54.92-54.85-55h0Zm22.9,39.47l-11.28,31.66h6.01l11.28-31.66h-6.01Z"
      />
    </svg>
  );
}
