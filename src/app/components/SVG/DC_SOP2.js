"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DC_SOP2({ width, height }) {
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
          {`      .cls-1 {
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
        <path
          className="cls-2"
          d="m34.26,69.42c-.14,0-.27-.03-.4-.08l-4.08-1.69c-.53-.22-.79-.83-.57-1.37.22-.54.83-.79,1.37-.57l3.4,1.41,4.48-4.96c.2-.22.48-.35.78-.35h6.73c.3,0,.58.13.78.35l4.48,4.96,6.53-2.7-.34-6.68c-.02-.3.1-.58.31-.79l4.76-4.76c.21-.21.5-.31.79-.31l6.68.34,2.7-6.53-4.96-4.48c-.22-.2-.35-.48-.35-.78v-6.73c0-.3.13-.58.35-.78l4.96-4.48-2.7-6.53-6.68.34c-.29.02-.58-.1-.79-.31l-4.76-4.76c-.21-.21-.32-.5-.31-.79l.34-6.68-6.53-2.7-4.48,4.96c-.2.22-.48.35-.78.35h-6.73c-.3,0-.58-.13-.78-.35l-4.48-4.96-6.53,2.7.34,6.68c.02.3-.1.58-.31.79l-4.76,4.76c-.21.21-.5.32-.79.31l-6.68-.34-2.7,6.53,4.96,4.48c.22.2.35.48.35.78v6.73c0,.3-.13.58-.35.78l-4.96,4.48,1.17,2.82c.22.53-.03,1.15-.57,1.37-.53.22-1.15-.03-1.37-.57l-1.45-3.5c-.17-.41-.06-.88.27-1.18l5.17-4.66v-5.8l-5.17-4.66c-.33-.3-.44-.77-.27-1.18l3.27-7.89c.17-.41.59-.66,1.02-.65l6.95.35,4.1-4.1-.36-6.95c-.02-.44.24-.85.65-1.02l7.89-3.27c.41-.17.88-.06,1.18.27l4.66,5.17h5.8l4.66-5.17c.3-.33.77-.44,1.18-.27l7.89,3.27c.41.17.67.58.65,1.02l-.35,6.95,4.1,4.1,6.95-.35c.44-.02.85.24,1.02.65l3.27,7.89c.17.41.06.88-.27,1.18l-5.17,4.66v5.8s5.17,4.66,5.17,4.66c.33.3.44.77.27,1.18l-3.27,7.89c-.17.41-.58.67-1.02.65l-6.95-.36-4.1,4.1.35,6.95c.02.44-.24.85-.65,1.02l-7.89,3.27c-.41.17-.88.06-1.18-.27l-4.66-5.17h-5.8l-4.66,5.17c-.2.23-.49.35-.78.35Z"
        />
        <path
          className="cls-2"
          d="m13.29,75.27h0c-2.2,0-4.27-.86-5.83-2.42-3.2-3.21-3.2-8.44,0-11.65l22.08-22.08c-.58-4.13.74-8.34,3.58-11.35,3.16-3.35,7.76-4.89,12.3-4.12.57.1,1.04.5,1.22,1.06.18.56.03,1.16-.38,1.58l-6,6.01,1.62,6.12,6.11,1.65,6.04-6.01c.42-.41,1.02-.56,1.58-.38.56.18.96.64,1.06,1.22.74,4.39-.69,8.88-3.83,12.02s-7.38,4.49-11.65,3.88l-22.06,22.06c-1.56,1.56-3.63,2.41-5.83,2.41Zm29.83-49.71c-3.18,0-6.25,1.3-8.47,3.66-2.51,2.66-3.62,6.43-2.96,10.09.06.34-.05.68-.29.93l-22.46,22.46c-2.39,2.39-2.4,6.29,0,8.69,1.16,1.16,2.71,1.81,4.35,1.81h0c1.64,0,3.19-.64,4.35-1.8l22.44-22.44c.24-.24.59-.35.93-.29,3.77.69,7.64-.51,10.35-3.21,2.4-2.4,3.63-5.75,3.37-9.11l-5.23,5.23c-.54.54-1.32.75-2.06.55l-6.09-1.63c-.73-.2-1.31-.77-1.5-1.5l-1.63-6.09c-.2-.73.02-1.52.55-2.06l5.23-5.23c-.3-.02-.59-.03-.88-.03Z"
        />
      </g>
    </svg>
  );
}
