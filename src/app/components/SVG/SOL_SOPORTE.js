"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SOL_SOPORTE({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#FFFFFF");
  useEffect(() => {
    setColor(theme === "dark" ? "#799FE6" : "#FFFFFF");
  }, [theme]);
  return (
    <svg
      id="uuid-9e5d05bf-6498-436e-b62b-f716cf2a640e"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110.58 110.58"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-1320266f-6a10-4564-be16-d2cd26bdcd5a{stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}.uuid-1320266f-6a10-4564-be16-d2cd26bdcd5a,.uuid-f5305316-1a52-4bc6-b5d6-7431a5e1ddc5{fill:none;}.uuid-f5305316-1a52-4bc6-b5d6-7431a5e1ddc5{stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-1320266f-6a10-4564-be16-d2cd26bdcd5a"
        d="m42.38,91.85c1.48.61,2.9,1.2,5.85,2.42l7.12-7.89c3.85,0,5.79,0,9.63,0l7.12,7.89q5.64-2.34,11.3-4.68l-.54-10.62c2.72-2.72,4.09-4.09,6.81-6.81l10.62.54q2.34-5.64,4.68-11.3l-7.89-7.12c0-3.85,0-5.79,0-9.63l7.89-7.12q-2.34-5.64-4.68-11.3l-10.62.54c-2.72-2.72-4.09-4.09-6.81-6.81l.54-10.62q-5.64-2.34-11.3-4.68l-7.12,7.89c-3.85,0-5.79,0-9.63,0l-7.12-7.89q-5.64,2.34-11.3,4.68l.54,10.62c-2.72,2.72-4.09,4.09-6.81,6.81l-10.62-.54q-2.34,5.64-4.68,11.3l7.89,7.12v9.63l-7.89,7.12c.99,2.4,1.57,3.78,2.08,5.01"
      />
      <path
        className="uuid-1320266f-6a10-4564-be16-d2cd26bdcd5a"
        d="m25.5,99.64l32.13-32.13c5.68,1.04,11.75-.63,16.14-5.02,4.33-4.33,6.01-10.29,5.06-15.9-.1-.58-.82-.8-1.24-.39l-8.6,8.6c-.39.39-.96.54-1.49.4l-8.72-2.34c-.53-.14-.95-.56-1.09-1.09l-2.34-8.72c-.14-.53,0-1.1.4-1.49l8.6-8.6c.42-.42.19-1.14-.39-1.24-5.77-.98-11.92.84-16.27,5.45-4.09,4.33-5.62,10.23-4.62,15.74L10.93,85.08c-4.02,4.02-4.02,10.53-.01,14.56h0c4.02,4.03,10.55,4.04,14.58.01Z"
      />
      <rect
        className="uuid-f5305316-1a52-4bc6-b5d6-7431a5e1ddc5"
        x=".74"
        y="-.53"
        width="110"
        height="112"
      />
    </svg>
  );
}
