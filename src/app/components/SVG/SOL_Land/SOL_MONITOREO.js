"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SOL_MONITOREO({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#FFFFFF");
  // useEffect(() => {
  //   setColor(theme === "dark" ? "#799FE6" : "#FFFFFF");
  // }, [theme]);
  return (
    <>
      <svg
        id="uuid-7ab98036-8755-4059-8d10-32e8455ab844"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 110.58 110.58"
        width={width}
        height={height}
        className="border border-red-500"
      >
        <defs>
          <style>{`.uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e{stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}.uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e,.uuid-b74dd8ce-7e18-4887-b862-2f35e73805ac{fill:none;}.uuid-b74dd8ce-7e18-4887-b862-2f35e73805ac{stroke-width:0px;}`}</style>
        </defs>
        <path
          className="uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e"
          d="m43.44,8.71c-18.06-.92-33.44,12.98-34.36,31.03-.92,18.06,12.98,33.44,31.03,34.36,18.06.92,33.44-12.98,34.36-31.03.92-18.06-12.98-33.44-31.03-34.36Zm23.81,33.99c-.72,14.07-12.7,24.9-26.77,24.18-14.07-.72-24.9-12.7-24.18-26.77.72-14.07,12.7-24.9,26.77-24.18,14.07.72,24.9,12.7,24.18,26.77Z"
        />
        <polyline
          className="uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e"
          points="68.08 61.96 75.65 70.53 69.12 76.43 61.55 67.86"
        />
        <rect
          className="uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e"
          x="76.72"
          y="69.67"
          width="11.15"
          height="29.57"
          transform="translate(-35.39 76.94) rotate(-42.09)"
        />
        <line
          className="uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e"
          x1="26.52"
          y1="50"
          x2="26.52"
          y2="45.74"
        />
        <line
          className="uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e"
          x1="39.61"
          y1="50"
          x2="39.61"
          y2="42.19"
        />
        <line
          className="uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e"
          x1="33.06"
          y1="50"
          x2="33.06"
          y2="42.19"
        />
        <line
          className="uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e"
          x1="46.15"
          y1="50"
          x2="46.15"
          y2="33.97"
        />
        <line
          className="uuid-1a7d3dee-afca-485b-bdf2-bcca1ef66d9e"
          x1="52.7"
          y1="50"
          x2="52.7"
          y2="27.98"
        />
        <rect
          className="uuid-b74dd8ce-7e18-4887-b862-2f35e73805ac"
          x=".34"
          y="-1.53"
          width="110"
          height="112"
        />
      </svg>
    </>
  );
}
