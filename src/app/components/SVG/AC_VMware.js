"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AC_VMware({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#B7CEFA" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="uuid-4ad3c48d-f024-442c-a75a-7cdb130028f7"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 110"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-8168befb-d365-4e19-abdc-00d5321e75b1{fill:${color};stroke-width:0px;}`}</style>
      </defs>
      <path
        class="uuid-8168befb-d365-4e19-abdc-00d5321e75b1"
        d="m102.54,31.29c.85.17,1.71.3,2.55.53,5.96,1.64,9.9,5.32,11.39,11.4.19.78.32,1.6.32,2.4.02,8.82.04,17.64-.01,26.46-.01,2.09-.86,3.93-2.56,5.25-3.81,2.94-9.33.84-10.3-3.9-.16-.79-.24-1.61-.24-2.41-.02-7.07,0-14.14-.03-21.21,0-.86-.12-1.75-.35-2.57-.77-2.66-2.97-4.33-5.73-4.52-2.62-.18-4.88.51-6.54,2.65-1.04,1.34-1.35,2.93-1.35,4.59,0,7.03,0,14.06,0,21.09,0,1.55-.23,3.04-1,4.4-1.48,2.59-3.85,3.42-6.64,3.1-2.68-.31-4.63-2.2-5.24-4.99-.19-.84-.26-1.73-.26-2.59-.02-7.03-.01-14.06,0-21.09,0-1.3-.2-2.55-.79-3.71-1.31-2.59-3.82-3.58-6.36-3.47-.6.02-1.22.1-1.8.26-3.15.82-5.03,3.3-5.04,6.7-.02,7.09,0,14.18-.02,21.28,0,.85-.06,1.71-.25,2.53-1.02,4.48-5,5.95-8.61,4.8-2.49-.8-3.67-2.76-4.13-5.21-.14-.73-.15-1.49-.15-2.24,0-8.47,0-16.95,0-25.42,0-.28,0-.57-.05-.85-.18-1-.85-1.61-1.85-1.73-.88-.1-1.63.34-2.04,1.23-2.13,4.6-4.25,9.21-6.38,13.82-2.16,4.68-4.3,9.37-6.48,14.04-.78,1.66-1.7,3.24-3.01,4.55-1.41,1.4-3.13,2.04-5.09,2.16-3.56.22-6.22-1.29-7.95-4.31-1.25-2.18-2.3-4.47-3.36-6.75-4.14-8.93-8.25-17.87-12.39-26.81-.85-1.84-1.12-3.69-.29-5.58.95-2.15,2.7-3.28,4.97-3.69.22-.04.43-.1.64-.15.24,0,.49,0,.73,0,.11.04.22.11.34.13,2.52.33,4.17,1.77,5.13,4.06,3.64,8.61,7.27,17.22,10.91,25.83.16.37.33.73.55,1.22.15-.31.26-.5.34-.7,2.41-5.67,4.8-11.36,7.25-17.01.97-2.25,1.94-4.52,3.17-6.63,1.96-3.35,4.91-5.53,8.74-6.43.81-.19,1.63-.31,2.44-.46,1.02,0,2.04,0,3.06,0,.13.05.25.12.39.14,3.85.63,7.07,2.41,9.69,5.29.17.19.34.39.53.61.21-.17.36-.3.52-.42,3.13-2.61,6.55-4.64,10.62-5.4.29-.05.58-.14.87-.21,1.18,0,2.36,0,3.54,0,.56.09,1.11.19,1.67.27,3.27.49,6.16,1.75,8.5,4.12.51.52.99,1.06,1.5,1.62.14-.12.27-.22.38-.33,2.8-2.59,6.04-4.37,9.77-5.22.78-.18,1.58-.31,2.37-.46,1.14,0,2.28,0,3.42,0Z"
      />
      <path
        class="uuid-8168befb-d365-4e19-abdc-00d5321e75b1"
        d="m167.79,67.48c.66-1.89,1.33-3.78,1.99-5.67,3.18-9.07,6.35-18.14,9.54-27.21.74-2.11,2.67-2.98,4.55-2.09,1.4.66,2.12,2.09,1.64,3.6-.73,2.3-1.56,4.56-2.38,6.83-3.81,10.59-7.64,21.17-11.46,31.75-.15.42-.31.84-.52,1.23-.84,1.57-2.11,2.37-3.94,2.15-1.62-.19-2.51-1.22-3.02-2.65-.84-2.37-1.65-4.75-2.47-7.13-2.85-8.22-5.71-16.43-8.57-24.65-.08-.23-.17-.45-.32-.82-.14.32-.25.52-.32.73-3.72,10.58-7.43,21.15-11.14,31.73-.72,2.06-2,2.96-4.1,2.78-1.76-.16-2.82-1.24-3.41-2.83-.74-2-1.45-4-2.17-6.01-3.82-10.61-7.64-21.21-11.45-31.82-.2-.55-.38-1.12-.45-1.7-.16-1.48.64-2.75,1.99-3.28,1.43-.57,3.01-.19,3.89,1.03.38.53.67,1.16.89,1.79,3.67,10.55,7.32,21.11,10.98,31.66.07.21.15.41.29.77.14-.34.23-.52.3-.72,3.67-10.55,7.33-21.1,11-31.66.09-.27.19-.54.29-.8.67-1.62,1.69-2.33,3.35-2.32,1.65,0,2.81.75,3.39,2.37,1.49,4.18,2.93,8.38,4.38,12.58,2.29,6.61,4.57,13.22,6.85,19.83.06.18.15.35.22.53.05,0,.11,0,.16-.01Z"
      />
      <path
        class="uuid-8168befb-d365-4e19-abdc-00d5321e75b1"
        d="m218.91,52.01c0-1.14.08-2.22-.01-3.28-.26-3.02-1.32-5.68-3.71-7.68-1.75-1.46-3.8-2.28-6.03-2.58-4.76-.65-9.4-.31-13.86,1.66-1.89.83-3.74-.11-4.18-2.03-.28-1.21.27-2.43,1.45-2.99,2.66-1.26,5.44-2.19,8.38-2.42,2.47-.2,4.96-.3,7.43-.23,3.15.09,6.21.75,9.01,2.3,4.25,2.35,6.7,6.01,7.54,10.73.32,1.81.46,3.67.47,5.51.05,7.88.02,15.77.01,23.65,0,.48-.04.98-.15,1.45-.4,1.56-1.83,2.43-3.58,2.23-1.46-.17-2.51-1.37-2.54-2.95-.02-1.18,0-2.36,0-3.54,0-.22,0-.43,0-.78-.21.16-.33.22-.4.32-3.33,4.12-7.65,6.52-12.89,7.15-5.16.62-10.07-.2-14.41-3.25-3.09-2.17-4.99-5.14-5.36-8.9-.68-6.84,2.28-11.93,8.92-14.55,2.57-1.02,5.27-1.48,8.03-1.61,5.2-.26,10.31.28,15.32,1.69.17.05.35.07.57.11Zm-12.68,3.03c-.77,0-1.55-.04-2.32,0-2.2.15-4.35.58-6.35,1.57-3.69,1.83-5.5,5.22-4.85,9.21.5,3.04,2.37,5.05,5.08,6.34,2.35,1.11,4.84,1.43,7.43,1.25,3.19-.22,6.16-1.09,8.79-2.94,2.71-1.91,4.54-4.44,4.91-7.79.18-1.71.07-3.45.13-5.17.02-.47-.15-.66-.6-.79-4-1.1-8.06-1.71-12.21-1.69Z"
      />
      <path
        class="uuid-8168befb-d365-4e19-abdc-00d5321e75b1"
        d="m264.97,57.72c.32,1.45.52,2.82.93,4.11,1.84,5.76,5.61,9.58,11.63,10.76,5.51,1.08,10.48-.36,14.82-3.92.47-.39.92-.81,1.42-1.16,1.12-.78,2.51-.64,3.45.31.94.95,1.09,2.35.35,3.46-.11.17-.24.33-.38.48-3.74,3.68-8.15,5.99-13.42,6.58-4.16.47-8.21.11-12.06-1.58-6.17-2.71-10.22-7.36-12.1-13.78-2.08-7.09-1.47-14,2.28-20.45,3.22-5.53,8.02-9.07,14.4-10.07,9.29-1.46,17.73,2.78,21.67,11.93,1.4,3.25,2.06,6.65,2.04,10.18,0,1.88-1.25,3.14-3.13,3.14-10.28,0-20.57,0-30.85,0-.28,0-.56,0-1.04,0Zm-.04-4.86h28.61c-.22-2.72-.87-5.25-2.04-7.65-3.88-7.89-12.76-9.18-18.61-5.78-3.72,2.16-5.9,5.5-7.1,9.54-.37,1.25-.57,2.55-.86,3.89Z"
      />
      <path
        class="uuid-8168befb-d365-4e19-abdc-00d5321e75b1"
        d="m240.06,43.04c.11-.21.23-.41.34-.62,2.75-5.25,6.99-8.62,12.8-9.93.84-.19,1.74-.21,2.6-.2,1.53.02,2.74,1.25,2.88,2.78.18,1.93-.69,3.54-3.47,3.97-7.74,1.21-12.41,5.84-14.49,13.24-.63,2.24-.88,4.53-.87,6.86,0,5.16,0,10.32,0,15.48,0,1.67-.91,2.94-2.38,3.36-1.96.56-3.96-.79-4.16-2.82-.03-.32-.04-.65-.04-.97.02-12.82.04-25.64.08-38.47,0-.61.13-1.26.38-1.82.62-1.35,2.12-2.03,3.57-1.73,1.45.31,2.56,1.59,2.58,3.08.03,2.34.01,4.67.01,7.01,0,.24,0,.48,0,.71l.18.05Z"
      />
    </svg>
  );
}
