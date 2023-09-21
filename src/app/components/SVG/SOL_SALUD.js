"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SOL_SALUD({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#FFFFFF");
  useEffect(() => {
    setColor(theme === "dark" ? "#799FE6" : "#FFFFFF");
  }, [theme]);
  return (
    <svg
      id="uuid-ae2bcfba-2a43-46c4-b43c-5dd33b9c2945"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110.58 110.58"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78{stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}.uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78,.uuid-f8fa527e-0cf6-4df8-94cd-4ce6d8cd1aaf{fill:none;}.uuid-f8fa527e-0cf6-4df8-94cd-4ce6d8cd1aaf{stroke-width:0px;}`}</style>
      </defs>
      <g id="uuid-8e0ab272-4e0f-42b1-80d6-b0da3b680e50">
        <g id="uuid-7499592e-7ae8-422e-a58a-3e35056ef3ed">
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m78.21,19.88l-6.38-9.9c-1.57-2.78-4.52-4.51-7.7-4.51h-18.13c-3.18,0-6.13,1.73-7.7,4.51l-5.39,9.63H11.55c-3.02,0-5.48,2.46-5.48,5.48v66.32c0,3.02,2.46,5.48,5.48,5.48h87.04c3.02,0,5.48-2.46,5.48-5.48V25.09c0-3.02-2.46-5.48-5.48-5.48h0l-20.5.1.12.17Z"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m77.27,73.59h7.16c.56,0,1.02-.46,1.02-1.02h0V28.43c0-.56-.46-1.02-1.02-1.02H14.89c-.56,0-1.02.46-1.02,1.02v44.14c0,.56.46,1.02,1.02,1.02h62.38Z"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m74.74,48.8h-3.84c-.36,0-.69.19-.87.49l-3.62,5.91-4.78-13.46c-.13-.37-.47-.64-.86-.67-.39-.04-.78.15-.98.5l-5.09,8.59h-8.89c-.36,0-.69.18-.87.49l-3.62,5.91-4.78-13.46c-.13-.37-.47-.64-.86-.67-.39-.04-.78.16-.98.5l-5.09,8.59h-5.05"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m96.64,40.16h-5.17v-5.92h5.17v5.92h0Z"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m96.64,58.1h-5.17v-5.92h5.17v5.92h0Z"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m96.64,76.05h-5.17v-5.92h5.17v5.92h0Z"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m18.46,79.95c-2.53,0-4.59,2.05-4.59,4.58s2.06,4.58,4.59,4.58,4.58-2.05,4.58-4.58-2.05-4.58-4.58-4.58h0Z"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m32.58,79.95c-2.53,0-4.59,2.05-4.59,4.58s2.06,4.58,4.59,4.58,4.58-2.05,4.58-4.58-2.05-4.58-4.58-4.58h0Z"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m46.7,79.95c-2.53,0-4.59,2.05-4.59,4.58s2.06,4.58,4.59,4.58,4.58-2.05,4.58-4.58-2.05-4.58-4.58-4.58h0Z"
          />
          <path
            className="uuid-c2f94ed6-5e82-42fd-a6e1-40af9b551d78"
            d="m60.82,79.95c-2.53,0-4.59,2.05-4.59,4.58s2.06,4.58,4.59,4.58,4.58-2.05,4.58-4.58c0-2.52-2.05-4.58-4.58-4.58h0Z"
          />
        </g>
      </g>
      <rect
        className="uuid-f8fa527e-0cf6-4df8-94cd-4ce6d8cd1aaf"
        x=".44"
        y="-1.53"
        width="110"
        height="112"
      />
    </svg>
  );
}
