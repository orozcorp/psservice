"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DC_MON({ width, height }) {
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
      viewBox="0 0 80 80"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`    .cls-1 {
        fill: none;
      }

      .cls-1, .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: ${color};
      }`}
        </style>
      </defs>
      <g>
        <g>
          <path
            className="cls-2"
            d="m30.44,53.72c-.41,0-.82-.01-1.23-.03-6.38-.32-12.25-3.11-16.53-7.85s-6.46-10.86-6.14-17.24c.32-6.38,3.11-12.25,7.85-16.53,4.74-4.28,10.86-6.46,17.24-6.14,6.38.32,12.25,3.11,16.53,7.85,4.28,4.74,6.46,10.86,6.14,17.24-.65,12.76-11.24,22.7-23.87,22.7Zm-.04-45.73c-5.41,0-10.55,1.98-14.6,5.63-4.33,3.91-6.87,9.26-7.17,15.08-.3,5.82,1.69,11.41,5.6,15.73s9.26,6.87,15.08,7.17c12,.62,22.29-8.67,22.9-20.68.61-12.02-8.67-22.29-20.68-22.9h0c-.38-.02-.76-.03-1.13-.03Zm.04,40.69c-.32,0-.64,0-.97-.02-5.03-.26-9.66-2.46-13.04-6.2-3.38-3.74-5.1-8.57-4.84-13.6s2.46-9.66,6.2-13.04c3.74-3.38,8.57-5.1,13.6-4.84,5.03.26,9.66,2.46,13.04,6.2,3.38,3.74,5.1,8.57,4.84,13.6-.51,10.06-8.86,17.91-18.83,17.91Zm-.03-35.64c-4.16,0-8.11,1.52-11.22,4.33-3.32,3-5.28,7.12-5.51,11.59s1.3,8.77,4.3,12.09c3,3.32,7.12,5.28,11.59,5.51,9.23.47,17.13-6.66,17.6-15.9h0c.23-4.47-1.3-8.77-4.3-12.09-3-3.32-7.12-5.28-11.59-5.51-.29-.02-.58-.02-.87-.02Zm17.82,17.68h0,0Z"
          />
          <path
            className="cls-2"
            d="m49.52,55.32s-.04,0-.06,0c-.28-.02-.54-.14-.73-.35l-5.28-5.99c-.38-.43-.34-1.1.09-1.48.43-.38,1.1-.34,1.48.09l4.58,5.19,3.01-2.71-4.6-5.21c-.38-.43-.34-1.1.09-1.48s1.1-.34,1.48.09l5.28,5.99c.38.43.34,1.09-.08,1.47l-4.56,4.12c-.19.17-.44.27-.7.27Z"
          />
          <path
            className="cls-2"
            d="m62.76,71.2c-.29,0-.57-.12-.78-.35l-13.84-15.33c-.39-.43-.35-1.09.08-1.48l5.78-5.22c.21-.19.48-.28.76-.27.28.01.54.14.72.34l13.84,15.33c.19.21.28.48.27.76s-.14.54-.34.72l-5.78,5.22c-.2.18-.45.27-.7.27Zm-12.36-16.3l12.44,13.77,4.22-3.81-12.44-13.77-4.22,3.81Z"
          />
        </g>
        <g>
          <path
            className="cls-2"
            d="m19.77,36.86c-.58,0-1.05-.47-1.05-1.05v-2.98c0-.58.47-1.05,1.05-1.05s1.05.47,1.05,1.05v2.98c0,.58-.47,1.05-1.05,1.05Z"
          />
          <path
            className="cls-2"
            d="m28.91,36.86c-.58,0-1.05-.47-1.05-1.05v-5.46c0-.58.47-1.05,1.05-1.05s1.05.47,1.05,1.05v5.46c0,.58-.47,1.05-1.05,1.05Z"
          />
          <path
            className="cls-2"
            d="m24.34,36.86c-.58,0-1.05-.47-1.05-1.05v-5.46c0-.58.47-1.05,1.05-1.05s1.05.47,1.05,1.05v5.46c0,.58-.47,1.05-1.05,1.05Z"
          />
          <path
            className="cls-2"
            d="m33.48,36.86c-.58,0-1.05-.47-1.05-1.05v-11.2c0-.58.47-1.05,1.05-1.05s1.05.47,1.05,1.05v11.2c0,.58-.47,1.05-1.05,1.05Z"
          />
          <path
            className="cls-2"
            d="m38.06,36.86c-.58,0-1.05-.47-1.05-1.05v-15.38c0-.58.47-1.05,1.05-1.05s1.05.47,1.05,1.05v15.38c0,.58-.47,1.05-1.05,1.05Z"
          />
        </g>
      </g>
    </svg>
  );
}
