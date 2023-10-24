"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const PowerLine = ({}) => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#3f3f3f");
  useEffect(() => {
    setColor(theme === "dark" ? "#fff" : "#3f3f3f");
  }, [theme]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1932"
      height="112"
      viewBox="0 0 1932 112"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_129"
            data-name="Rectangle 129"
            width="1932"
            height="112"
            fill="none"
            stroke="#3f3f3f"
            strokeWidth="1"
          />
        </clipPath>
        <clipPath id="clip-path-3">
          <rect
            id="Rectangle_127"
            data-name="Rectangle 127"
            width="1806.088"
            height="112"
            fill="none"
            stroke="#3f3f3f"
            strokeWidth="1"
          />
        </clipPath>
      </defs>
      <g id="Group_87" data-name="Group 87" clipPath="url(#clip-path)">
        <g id="Group_86" data-name="Group 86">
          <g id="Group_85" data-name="Group 85" clipPath="url(#clip-path)">
            <path
              id="Path_46"
              data-name="Path 46"
              d="M16.251,68.3H38.584l7.445-13.575L56.1,79.252l12.7-62.62L81.5,96.768,97.7,54.291l10.072,25.4L115.217,68.3H1766.37"
              transform="translate(-1.329 -1.36)"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="3"
            />
            <g id="Group_84" data-name="Group 84" opacity="0">
              <g id="Group_83" data-name="Group 83">
                <g
                  id="Group_82"
                  data-name="Group 82"
                  clipPath="url(#clip-path-3)"
                >
                  <rect
                    id="Rectangle_126"
                    data-name="Rectangle 126"
                    width="1806.091"
                    height="112"
                    fill="#7b818e"
                    stroke="#3f3f3f"
                    strokeWidth="1"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PowerLine;
