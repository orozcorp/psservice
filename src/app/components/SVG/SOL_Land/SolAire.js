"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SolAire({ width = 50, height = 50 }) {
  const [color, setColor] = useState("#FFFFFF");
  // useEffect(() => {
  //   setColor(theme === "dark" ? "#799FE6" : "#FFFFFF");
  // }, [theme]);
  return (
    <svg
      id="uuid-47b56272-0c12-4714-a1f9-c63b65d38dbd"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110.58 110.58"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-0225f433-88e0-45b2-b3b4-332854acf5c4{stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}.uuid-0225f433-88e0-45b2-b3b4-332854acf5c4,.uuid-58b30d1f-6e44-422b-82d1-fae0dbef91e1{fill:none;}.uuid-58b30d1f-6e44-422b-82d1-fae0dbef91e1{stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-0225f433-88e0-45b2-b3b4-332854acf5c4"
        d="m16.58,102.6c-4.01,0-7.28-3.27-7.28-7.28V14.96c0-4.01,3.27-7.28,7.28-7.28h80.36c4.01,0,7.28,3.27,7.28,7.28v80.36c0,4.01-3.27,7.28-7.28,7.28h0H16.58Z"
      />
      <path
        className="uuid-0225f433-88e0-45b2-b3b4-332854acf5c4"
        d="m56.76,15.82c-21.68,0-39.33,17.64-39.33,39.33s17.64,39.33,39.33,39.33c21.66-.03,39.3-17.67,39.33-39.32,0-21.69-17.64-39.33-39.33-39.33Z"
      />
      <path
        className="uuid-0225f433-88e0-45b2-b3b4-332854acf5c4"
        d="m47.15,84.57c.03.28.23.52.5.61,2.96.9,6.02,1.36,9.11,1.36s6.16-.46,9.11-1.36c.27-.08.47-.32.5-.6.48-3.88.33-7.79-.45-11.62-.03-.15-.11-.28-.22-.38-3.45-3.18-6.2-7.16-7.96-11.51-.11-.27-.37-.45-.66-.45-.01,0-.03,0-.04,0-.07,0-.13.01-.2.02-.03,0-.05,0-.08,0-.87,0-1.74-.23-2.51-.65-.11-.06-.23-.09-.34-.09-.22,0-.43.1-.57.28-2.78,3.62-4.73,7.89-5.66,12.35-.85,3.96-1.03,8-.53,12.02Zm-.56-29.94c-3.2,0-6.37.51-9.41,1.51-3.79,1.22-7.34,3.06-10.52,5.47-.22.17-.33.45-.26.72,1.39,5.98,4.51,11.36,9,15.55.13.12.31.19.48.19.09,0,.19-.02.28-.06,3.52-1.5,6.76-3.54,9.63-6.06.11-.1.19-.23.22-.38,1.01-4.52,3.05-8.84,5.9-12.49.19-.24.2-.57.04-.82-.52-.81-.81-1.74-.84-2.7-.01-.35-.27-.63-.61-.68-1.29-.17-2.6-.25-3.9-.25Zm30.69,23.37s.05.03.07.04c.09.04.19.06.29.06.17,0,.34-.06.48-.19,4.5-4.2,7.62-9.58,9.01-15.58.06-.27-.04-.56-.26-.73-3.08-2.31-6.49-4.11-10.14-5.34-.07-.02-.15-.04-.23-.04-.07,0-.14.01-.21.03-3.07.95-6.25,1.44-9.46,1.46-1.43-.01-2.88-.12-4.3-.34-.04,0-.07,0-.11,0-.26,0-.51.15-.63.39-.43.86-1.09,1.58-1.9,2.09-.29.18-.41.55-.28.87,1.72,4.15,4.4,7.93,7.75,10.92,2.93,2.65,6.26,4.79,9.9,6.35Zm.71-46.04c-.1,0-.19.02-.29.06-3.65,1.56-7.02,3.68-10,6.29-.12.1-.2.24-.23.39-1.05,4.69-3.17,9.18-6.13,12.98-.19.25-.21.59-.04.85.54.84.85,1.81.88,2.81.01.36.28.66.64.7,1.34.17,2.7.26,4.04.26,3.33,0,6.62-.53,9.78-1.57,3.94-1.27,7.62-3.18,10.93-5.68.23-.17.34-.47.27-.75-1.45-6.21-4.68-11.8-9.35-16.15-.14-.13-.32-.2-.5-.2Zm-42.24-.15c-.18,0-.36.07-.5.2-4.65,4.33-7.88,9.89-9.32,16.08-.07.28.04.58.27.75,3.18,2.39,6.7,4.24,10.46,5.51.08.03.15.04.23.04.07,0,.15-.01.22-.03,3.15-.99,6.43-1.48,9.73-1.48,1.5,0,3.02.11,4.51.31.03,0,.07,0,.1,0,.28,0,.53-.16.66-.41.08-.17.17-.33.27-.49.16-.26.14-.59-.05-.83-2.95-3.78-5.05-8.25-6.1-12.93-.03-.15-.11-.29-.23-.39-2.98-2.61-6.33-4.72-9.97-6.27-.09-.04-.19-.06-.29-.06Zm21,18.23c.9,0,1.8.23,2.59.67.11.06.24.09.36.09.22,0,.44-.1.59-.29,2.87-3.74,4.89-8.15,5.85-12.76.88-4.09,1.06-8.27.55-12.43-.04-.29-.24-.53-.52-.62-3.05-.93-6.22-1.41-9.41-1.41s-6.36.47-9.41,1.41c-.28.09-.48.33-.52.62-.51,4.15-.33,8.34.55,12.43.96,4.61,2.98,9.02,5.84,12.76.14.19.36.29.59.29.12,0,.25-.03.36-.09.79-.44,1.68-.67,2.59-.67Z"
      />
      <path
        className="uuid-0225f433-88e0-45b2-b3b4-332854acf5c4"
        d="m19.8,22.25c-2.24,0-4.07-1.83-4.07-4.07s1.83-4.07,4.07-4.07,4.07,1.83,4.07,4.07-1.83,4.07-4.07,4.07Z"
      />
      <path
        className="uuid-0225f433-88e0-45b2-b3b4-332854acf5c4"
        d="m93.73,22.25c-2.24,0-4.07-1.83-4.07-4.07s1.82-4.07,4.07-4.07,4.07,1.83,4.07,4.07-1.82,4.07-4.07,4.07Z"
      />
      <path
        className="uuid-0225f433-88e0-45b2-b3b4-332854acf5c4"
        d="m19.8,96.18c-2.24,0-4.07-1.82-4.07-4.07s1.83-4.07,4.07-4.07,4.07,1.82,4.07,4.07-1.83,4.07-4.07,4.07Z"
      />
      <path
        className="uuid-0225f433-88e0-45b2-b3b4-332854acf5c4"
        d="m93.73,96.18c-2.24,0-4.07-1.82-4.07-4.07s1.82-4.07,4.07-4.07,4.07,1.82,4.07,4.07-1.82,4.07-4.07,4.07Z"
      />
      <rect
        className="uuid-58b30d1f-6e44-422b-82d1-fae0dbef91e1"
        x=".7"
        y="1.47"
        width="110"
        height="112"
      />
    </svg>
  );
}
