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
      <style type="text/css">
        {`	.st0{fill:none;stroke:${color};stroke-width:3;stroke-linecap:round;stroke-linejoin:round;}`}
      </style>
      <g id="uuid-8e0ab272-4e0f-42b1-80d6-b0da3b680e50">
        <g id="uuid-7499592e-7ae8-422e-a58a-3e35056ef3ed">
          <path
            className="st0"
            d="M78.2,19.9L71.8,10c-1.6-2.8-4.5-4.5-7.7-4.5H46c-3.2,0-6.1,1.7-7.7,4.5l-5.4,9.6H11.6c-3,0-5.5,2.5-5.5,5.5
			v66.3c0,3,2.5,5.5,5.5,5.5h87c3,0,5.5-2.5,5.5-5.5V25.1c0-3-2.5-5.5-5.5-5.5l0,0l-20.5,0.1C78.1,19.7,78.2,19.9,78.2,19.9z"
          />
          <path
            className="st0"
            d="M77.3,73.6h7.2c0.6,0,1-0.5,1-1l0,0V28.4c0-0.6-0.5-1-1-1H14.9c-0.6,0-1,0.5-1,1v44.1c0,0.6,0.5,1,1,1
			C14.9,73.6,77.3,73.6,77.3,73.6z"
          />
          <path
            className="st0"
            d="M74.7,48.8h-3.8c-0.4,0-0.7,0.2-0.9,0.5l-3.6,5.9l-4.8-13.5c-0.1-0.4-0.5-0.6-0.9-0.7c-0.4,0-0.8,0.2-1,0.5
			l-5.1,8.6h-8.9c-0.4,0-0.7,0.2-0.9,0.5l-3.6,5.9l-4.8-13.5c-0.1-0.4-0.5-0.6-0.9-0.7c-0.4,0-0.8,0.2-1,0.5l-5.1,8.6h-5"
          />
          <path
            className="st0"
            d="M96.6,40.2h-5.2v-5.9h5.2V40.2C96.6,40.2,96.6,40.2,96.6,40.2z"
          />
          <path className="st0" d="M96.6,58.1h-5.2v-5.9h5.2V58.1L96.6,58.1z" />
          <path className="st0" d="M96.6,76h-5.2v-5.9h5.2V76L96.6,76z" />
          <path
            className="st0"
            d="M18.5,79.9c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S21,79.9,18.5,79.9L18.5,79.9z"
          />
          <path
            className="st0"
            d="M32.6,79.9c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S35.1,79.9,32.6,79.9L32.6,79.9z"
          />
          <path
            className="st0"
            d="M46.7,79.9c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S49.2,79.9,46.7,79.9
			C46.7,79.9,46.7,79.9,46.7,79.9z"
          />
          <path
            className="st0"
            d="M60.8,79.9c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6C65.4,82,63.4,79.9,60.8,79.9L60.8,79.9z"
          />
        </g>
      </g>
    </svg>
  );
}
