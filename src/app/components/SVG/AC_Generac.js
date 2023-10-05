"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AC_Generac({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#FFFFFF" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="uuid-9e4890dd-eadb-42d0-8889-5bfa1fa8a30a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-09849f93-a605-47ce-b137-b0d449e804e5{fill:${color};stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-09849f93-a605-47ce-b137-b0d449e804e5"
        d="m150.11,70.05c23.18-.93,46.36-1.88,69.54-2.79,21.57-.85,43.14-1.68,64.71-2.52,4.66-.18,9.32-.37,13.97-.63,1.23-.07,1.69.17,1.67,1.55-.08,7.48-.07,14.96,0,22.44.01,1.35-.38,1.61-1.65,1.55-12.76-.57-25.53-1.1-38.3-1.61-13.23-.53-26.46-1.01-39.69-1.54-23.18-.92-46.35-1.86-69.53-2.79-14.09-.57-28.18-1.14-42.27-1.7-20.24-.81-40.49-1.62-60.73-2.43-14.44-.58-28.87-1.15-43.31-1.74-.98-.04-1.96-.06-2.93-.21-.6-.09-1.65.48-1.6-.87.05-1.17.96-.79,1.54-.81,3.91-.18,7.82-.3,11.73-.45,15.3-.6,30.6-1.19,45.9-1.8,19.15-.76,38.3-1.55,57.46-2.32,11.16-.45,22.32-.89,33.47-1.33,0,0,0,0,0,.01Z"
      />
      <path
        className="uuid-09849f93-a605-47ce-b137-b0d449e804e5"
        d="m21.28,59.48c-2.14-.1-5.9.15-9.61-.37-5.47-.76-8.27-3.34-9.07-9.19-.98-7.13-1.05-14.35.3-21.46.95-5,4.23-7.56,9.71-7.82,6.44-.3,12.88-.45,19.32,0,6,.41,9.09,3.45,9.52,9.44q.28,3.91-3.6,3.91c-.69,0-1.38-.03-2.07,0-1.77.1-3.41.33-3.64-2.31-.14-1.66-1.93-1.93-3.26-1.97-4.43-.13-8.87-.14-13.3-.04-2.07.04-3.47,1.42-3.78,3.6-.59,4.23-.6,8.49-.04,12.72.35,2.67,1.96,4.17,4.61,4.31,4.19.21,8.4.38,12.59.04,2.6-.21,4.17-2.52,3.63-5.02-.18-.84-.75-.57-1.19-.57-3.05-.02-6.1-.06-9.15.01-1.04.02-1.44-.24-1.38-1.33.09-1.66.05-3.34.01-5-.02-.73.22-1.01.98-1.01,6.28.02,12.55.01,18.83.01.54,0,1.03-.01,1.02.78-.05,4.71.42,9.44-.59,14.09-1.08,4.99-3.32,6.92-8.44,7.16-3.27.15-6.56.03-11.43.03Z"
      />
      <path
        className="uuid-09849f93-a605-47ce-b137-b0d449e804e5"
        d="m119.57,49.24c0-9.02.04-17.53-.04-26.03-.01-1.52.34-2.02,1.88-1.88,1.66.15,3.34.11,5.01,0,1.17-.07,1.57.22,1.56,1.48-.05,11.51-.04,23.01-.01,34.52,0,.99-.15,1.42-1.29,1.4-3.97-.07-7.95-.06-11.92,0-.88.01-1.32-.35-1.75-1.03-5.38-8.55-10.79-17.08-16.19-25.61-.17-.27-.25-.63-.89-.76v1.84c0,7.88-.05,15.76.04,23.64.02,1.65-.5,2.03-2.01,1.93-1.78-.12-3.57-.07-5.35-.01-.92.03-1.15-.27-1.15-1.17.03-11.68.03-23.36,0-35.04,0-.9.27-1.18,1.18-1.17,4.03.04,8.06.07,12.09-.01,1.23-.03,1.54.8,2.01,1.55,5.3,8.33,10.59,16.67,15.88,25.01.21.32.44.63.95,1.35Z"
      />
      <path
        className="uuid-09849f93-a605-47ce-b137-b0d449e804e5"
        d="m206.66,44.21c.11.15.14.23.18.24,4.53,1.04,5.49,4.31,5.3,8.36-.08,1.61-.05,3.22,0,4.83.03.85-.28,1.09-1.09,1.07-2.3-.04-4.61-.05-6.91,0-.91.02-1.19-.28-1.17-1.18.05-1.55,0-3.11-.06-4.66-.11-2.72-.98-3.65-3.65-3.69-4.66-.06-9.33,0-13.99-.04-.92,0-1.18.27-1.16,1.17.06,2.3-.06,4.6.05,6.9.06,1.25-.38,1.55-1.55,1.5-2.13-.09-4.26-.06-6.39,0-.8.02-1.1-.19-1.1-1.05.03-11.73.03-23.47,0-35.2,0-.95.35-1.13,1.21-1.13,8.87.03,17.74-.06,26.6.05,5.62.06,8.19,2.05,9.13,6.76.51,2.54.61,5.13.37,7.72-.02.17-.07.34-.07.51-.21,3.81-1.66,6.75-5.68,7.82Zm-13.92-4.16c1.84,0,3.69.01,5.53,0,4.62-.04,5.17-.59,5.21-5.14.03-3.35-.82-4.39-4.18-4.48-4.66-.12-9.33-.03-14-.06-.82,0-1.11.23-1.09,1.07.05,2.53.06,5.06,0,7.59-.02.89.31,1.05,1.1,1.04,2.48-.04,4.95-.02,7.43-.01Z"
      />
      <path
        className="uuid-09849f93-a605-47ce-b137-b0d449e804e5"
        d="m135.66,39.99c0-5.64.03-11.27-.03-16.91-.01-1.27.19-1.78,1.66-1.77,9.9.07,19.81.06,29.71.01,1.23,0,1.76.2,1.66,1.57-.13,1.83-.11,3.68,0,5.52.07,1.23-.34,1.53-1.54,1.52-6.91-.06-13.82.01-20.73-.06-1.35-.01-1.84.34-1.67,1.69.19,1.52-.66,3.56.37,4.43.88.75,2.85.24,4.34.24,5.35.01,10.71.04,16.06-.02,1.22-.02,1.6.33,1.52,1.53-.1,1.55-.1,3.11,0,4.66.07,1.12-.36,1.32-1.38,1.31-6.45-.04-12.9.02-19.34-.06-1.35-.02-1.69.39-1.57,1.64.16,1.59-.64,3.67.3,4.67.95,1.01,3.05.29,4.64.3,5.81.04,11.63.05,17.44-.01,1.15-.01,1.63.21,1.56,1.48-.11,1.89-.07,3.8-.01,5.69.03.93-.2,1.3-1.22,1.3-10.19-.03-20.38-.04-30.57,0-1.27,0-1.2-.63-1.2-1.49.02-5.75,0-11.5,0-17.25Z"
      />
      <path
        className="uuid-09849f93-a605-47ce-b137-b0d449e804e5"
        d="m48.02,39.99c0-5.64.03-11.28-.03-16.92-.01-1.27.2-1.76,1.65-1.75,9.91.07,19.82.06,29.72.01,1.18,0,1.62.24,1.55,1.49-.11,1.89-.1,3.8,0,5.69.06,1.14-.3,1.43-1.43,1.42-6.97-.05-13.94.01-20.91-.06-1.3-.01-1.73.3-1.58,1.6.17,1.53-.62,3.55.3,4.49.92.93,2.94.26,4.48.27,5.36.03,10.71.04,16.07-.01,1.14-.01,1.52.31,1.44,1.45-.1,1.43-.11,2.88,0,4.31.1,1.33-.29,1.75-1.69,1.73-6.34-.08-12.67,0-19.01-.07-1.27-.01-1.76.27-1.6,1.59.2,1.63-.71,3.83.37,4.77.93.81,3.07.25,4.67.26,5.82.01,11.64.03,17.45-.02,1.11-.01,1.49.25,1.43,1.4-.1,1.95-.06,3.91-.01,5.87.02.85-.16,1.2-1.12,1.19-10.2-.03-20.39-.04-30.59,0-1.05,0-1.2-.39-1.19-1.3.03-5.81.02-11.62.02-17.44Z"
      />
      <path
        className="uuid-09849f93-a605-47ce-b137-b0d449e804e5"
        d="m281.16,58.92c-2.76,0-5.53.11-8.29-.02-6.17-.31-9.09-2.55-10-8.61-1.07-7.06-1.28-14.21.23-21.27.83-3.88,3.26-6.52,7.23-7.17,7.6-1.25,15.26-1.05,22.87-.06,2.6.34,4.22,2.14,5.16,4.55.91,2.35.98,4.82,1.11,7.29.04.7-.18.92-.86.91-2.3-.02-4.61-.04-6.91,0-.77.01-.93-.31-1.02-1-.29-2.23-1.06-3.1-3.32-3.17-3.91-.13-7.83-.13-11.74.02-2.43.09-3.76,1.27-4.06,3.68-.51,3.99-.58,8.02.06,12.02.34,2.11,1.66,3.23,3.69,3.52,4.07.59,8.16.44,12.24.23,2.22-.12,3.14-1.26,3.35-4.02.09-1.18.52-1.39,1.56-1.36,2.07.07,4.15.05,6.22,0,.8-.02,1.19.22,1.16,1.04-.08,2.47-.09,4.94-.62,7.38-.75,3.45-3.07,5.11-6.36,5.66-3.88.66-7.81.39-11.71.36Z"
      />
      <path
        className="uuid-09849f93-a605-47ce-b137-b0d449e804e5"
        d="m215.88,58.7c3.88-8.82,7.64-17.37,11.4-25.91,1.43-3.25,2.9-6.49,4.27-9.77.49-1.18,1.03-1.79,2.49-1.71,2.99.16,5.99.09,8.98.03.99-.02,1.54.25,1.94,1.2,4.88,11.43,9.81,22.84,14.72,34.26.82,1.9.8,1.91-1.32,1.91-2.19,0-4.38-.04-6.57.02-.87.02-1.35-.2-1.66-1.07-.56-1.56-1.32-3.06-1.88-4.62-.28-.77-.63-1.08-1.47-1.07-5.64.03-11.29.03-16.93,0-.82,0-1.26.27-1.55,1.02-.63,1.6-1.34,3.17-2.01,4.75-.23.54-.41,1-1.18.99-2.98-.05-5.96-.02-9.23-.02Zm28.66-14.51c-2.12-4.96-4.15-9.69-6.32-14.74-2.07,4.83-4.02,9.39-5.98,13.94-.27.63-.03.81.57.81,3.83,0,7.66,0,11.72,0Z"
      />
    </svg>
  );
}
