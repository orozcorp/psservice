"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AC_Daikin({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#B7CEFA" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="uuid-da00662e-5c01-4a4c-9e49-f07d56843609"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-6fd9a13e-a434-4460-b0fc-7d1fa34e0096{fill:${color};stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-6fd9a13e-a434-4460-b0fc-7d1fa34e0096"
        d="m93.21,36.84h-24.2l-9.48,35.93h30.18s14.98-3.08,18.06-16.42c3.08-13.34-6.55-17.45-14.57-19.5Zm.2,17.45c-3.08,13.34-16.42,10.26-16.42,10.26l4.11-19.5c14.37-2.05,12.32,9.24,12.32,9.24Z"
      />
      <path
        className="uuid-6fd9a13e-a434-4460-b0fc-7d1fa34e0096"
        d="m143.12,36.84h-16.84l-20.64,35.93h10.35l3.08-6.16h15.4l.59,6.16h14.94l-6.88-35.93Zm-18.91,21.56l6.16-11.29,2.27,11.29h-8.43Z"
      />
      <polygon
        className="uuid-6fd9a13e-a434-4460-b0fc-7d1fa34e0096"
        points="164.28 36.84 155 72.77 170.57 72.77 179.16 36.84 164.28 36.84"
      />
      <polygon
        className="uuid-6fd9a13e-a434-4460-b0fc-7d1fa34e0096"
        points="236.14 36.84 226.86 72.77 242.43 72.77 251.01 36.84 236.14 36.84"
      />
      <polygon
        className="uuid-6fd9a13e-a434-4460-b0fc-7d1fa34e0096"
        points="186.82 36.84 178.63 72.77 192.98 72.77 196.06 60.45 204.38 72.77 222.2 72.77 208.77 54.8 228.91 36.84 213.16 36.84 199.65 48.64 201.63 36.84 186.82 36.84"
      />
      <polygon
        className="uuid-6fd9a13e-a434-4460-b0fc-7d1fa34e0096"
        points="259.46 36.84 250.64 72.77 261.39 72.77 266.89 52.24 273.88 72.77 291.18 72.77 300 36.84 289.34 36.84 283.83 57.88 276.59 36.84 259.46 36.84"
      />
      <polygon
        className="uuid-6fd9a13e-a434-4460-b0fc-7d1fa34e0096"
        points="0 23.5 68.32 23.5 0 86.5 0 23.5"
      />
    </svg>
  );
}
