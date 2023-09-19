"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AC_Rittal({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#B7CEFA" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="uuid-c4750c49-d4d7-4e9f-b09c-4b4972d0eb20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`.uuid-717caad6-d014-4e94-a404-4f13b1a76977{fill:${color};stroke-width:0px;}`}
        </style>
      </defs>
      <polygon
        class="uuid-717caad6-d014-4e94-a404-4f13b1a76977"
        points="0 103.38 300 103.38 300 88.07 0 88.07 0 103.38 0 103.38"
      />
      <polygon
        class="uuid-717caad6-d014-4e94-a404-4f13b1a76977"
        points="166.74 6.65 166.41 7.76 161.97 22.89 171.98 22.89 154.48 75.96 172.64 75.96 190.11 22.74 200.13 22.74 205.14 6.66 166.74 6.65 166.74 6.65"
      />
      <polygon
        class="uuid-717caad6-d014-4e94-a404-4f13b1a76977"
        points="120.03 6.65 114.87 22.8 126.36 22.8 109.38 75.97 127.18 75.97 144.42 22.74 154.64 22.74 159.62 6.62 120.03 6.65 120.03 6.65"
      />
      <polygon
        class="uuid-717caad6-d014-4e94-a404-4f13b1a76977"
        points="94.97 6.68 72.47 75.97 90.34 75.97 112.93 6.68 94.97 6.68 94.97 6.68"
      />
      <polygon
        class="uuid-717caad6-d014-4e94-a404-4f13b1a76977"
        points="300 59.95 272.07 59.95 289.45 6.71 271.49 6.71 249.37 75.98 300 75.98 300 59.95 300 59.95"
      />
      <path
        class="uuid-717caad6-d014-4e94-a404-4f13b1a76977"
        d="m220.95,6.65l-39.04,69.33h18.44l5.57-10.05h19.72l-1.06,10.05h17.76l6.56-69.33h-27.95Zm6.22,44.9h-13.29l16.44-29.76-3.15,29.76h0Z"
      />
      <path
        class="uuid-717caad6-d014-4e94-a404-4f13b1a76977"
        d="m81.73,22.48c0,2.17-.37,4.45-1.13,6.79-3.98,12.25-12.68,19.73-23.89,21.16l-1.61.16,10.59,25.39h-18.43l-9.63-26.3-7.97,26.3H11.83l8.05-25.03H0v-14.34h24.26l9.85-29.92h30.91c5.87,0,10.73,2.23,13.72,6.3,1.99,2.68,2.98,5.93,2.98,9.5h0Zm-17.31,3.36c0-1.16-.31-2.19-.93-3.03-.91-1.24-2.5-1.94-4.42-1.94h-12.6l-4.78,15.74,11.06.03c4.75,0,9.8-3.75,11.28-8.38.25-.84.38-1.65.38-2.41h0Z"
      />
    </svg>
  );
}
