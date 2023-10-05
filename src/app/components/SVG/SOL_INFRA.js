"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SOL_INFRA({ width = 50, height = 50 }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#FFFFFF");
  // useEffect(() => {
  //   setColor(theme === "dark" ? "#799FE6" : "#FFFFFF");
  // }, [theme]);
  return (
    <svg
      id="uuid-a72a524e-ab9a-4179-b3bb-3e2e6e16142b"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110.58 110.58"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9{stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}.uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9,.uuid-2ee8d67d-da44-45cb-8374-3fee0f8c0d90{fill:none;}.uuid-2ee8d67d-da44-45cb-8374-3fee0f8c0d90{stroke-width:0px;}`}</style>
      </defs>
      <path
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        d="m65.71,15.59c-.17-.03-.33-.05-.5-.08-.12-.02-.23-.04-.35-.06-.06,0-.11-.02-.17-.02-.07,0-.14-.02-.21-.03-.06,0-.13-.02-.19-.03-.12-.02-.24-.03-.36-.05-.04,0-.08,0-.11-.01-.2-.03-.41-.05-.61-.07-.02,0-.05,0-.07,0-.04,0-.07,0-.11-.01-.04,0-.09,0-.13-.01-.2-.02-.39-.03-.59-.05-.12,0-.23-.02-.35-.03-.18-.01-.37-.02-.55-.03-.13,0-.25-.02-.38-.02-.18,0-.35-.01-.53-.02-.14,0-.28,0-.41-.01-.17,0-.33,0-.5,0-.15,0-.29,0-.44,0-.05,0-.11,0-.16,0-.03,0-.06,0-.1,0-.07,0-.15,0-.22,0-.15,0-.31,0-.46,0-.03,0-.07,0-.1,0-.19,0-.38.01-.56.02-.08,0-.16,0-.25,0-.03,0-.07,0-.1,0-.23.01-.46.03-.69.04-.08,0-.16.01-.25.02-.22.02-.44.04-.65.06-.09,0-.18.02-.28.03-.2.02-.41.05-.61.07-.11.01-.21.02-.32.04-.19.02-.38.05-.57.08-.12.02-.24.03-.36.05-.16.02-.32.05-.48.08l-5.52-11.44-14.31,5.89,4.12,12.01c-.13.1-.27.19-.4.29-.08.06-.16.12-.23.17-.17.13-.35.26-.52.39-.07.05-.13.1-.2.16-.18.14-.36.28-.54.42-.05.05-.11.09-.17.14-.19.15-.37.3-.56.46-.03.02-.05.04-.08.07-.04.03-.08.07-.12.1-.17.15-.34.29-.51.44,0,0-.02.01-.02.02,0,0-.01.01-.02.01-.12.1-.23.21-.35.32-.09.08-.18.17-.27.25-.02.02-.04.04-.06.06-.16.15-.32.31-.48.46-.06.06-.13.12-.19.19-.15.15-.3.3-.45.45-.07.07-.14.14-.21.21-.14.14-.28.29-.41.44-.08.08-.16.16-.23.25-.13.14-.25.28-.38.42-.08.09-.17.19-.25.28-.12.13-.23.27-.35.41-.09.1-.17.2-.26.3-.11.13-.22.27-.33.4-.09.11-.18.22-.26.33-.03.04-.07.08-.1.13-.04.05-.08.1-.12.15-.03.04-.06.09-.1.13-.09.11-.17.22-.26.33-.03.04-.06.07-.08.11-.07.1-.15.2-.22.3-.1.13-.2.26-.29.4l-11.99-4.18-5.96,14.28,11.41,5.58s0,.06-.01.09c0,.04-.01.07-.02.11-.04.23-.08.46-.11.69,0,.02,0,.05,0,.07-.02.14-.04.28-.06.42-.02.14-.04.28-.06.42,0,.02,0,.04,0,.06-.03.24-.05.47-.08.71,0,.04,0,.07-.01.1,0,.04,0,.08-.01.11-.02.23-.04.46-.06.7,0,.08-.01.16-.02.24-.02.22-.03.43-.04.65,0,.09-.01.19-.02.28,0,.21-.02.41-.02.62,0,.11,0,.21-.01.32,0,.2,0,.39,0,.59,0,.12,0,.23,0,.35,0,.19,0,.38,0,.57,0,.12,0,.24,0,.36,0,.05,0,.1,0,.15,0,.12.01.23.01.35,0,.07,0,.14,0,.21,0,.07,0,.14,0,.2,0,.06,0,.11,0,.17,0,.12.02.23.02.35.01.19.02.39.04.58,0,.11.02.22.03.33.02.2.04.4.06.61.01.1.02.2.03.3.02.21.05.42.08.64.01.09.02.17.04.26.03.22.06.45.1.67.01.07.02.14.03.21.01.07.02.14.04.22l-11.43,5.52,5.89,14.31,12.01-4.12s.05.07.07.1c.06.09.12.17.18.26.12.16.23.31.35.47.07.09.14.19.21.28.11.15.23.29.34.44.08.1.16.2.24.3.11.14.22.27.33.41.09.11.17.21.26.31.11.13.22.26.33.38.09.11.19.22.28.33.03.03.05.06.08.09.11.12.23.25.34.37.06.07.13.14.19.21.03.03.06.07.09.1.12.13.24.25.36.38.1.1.19.2.29.3.11.12.23.23.34.34.11.11.21.21.32.32.11.1.22.2.32.31.12.11.24.23.36.34.1.09.2.18.3.27.13.12.26.24.4.35.09.08.18.16.28.24.14.12.29.25.43.37.08.07.17.14.25.21.16.13.32.26.47.38.03.02.06.04.08.07.09.07.18.13.26.2.13.1.26.2.39.3,0,0,.01.01.02.02,0,0,.02.01.03.02.17.13.34.25.51.38.05.04.1.07.15.11.02.02.05.04.07.05l-4.18,11.99,14.28,5.96,5.58-11.4c.13.02.27.04.4.06.15.02.31.05.47.07.04,0,.08.01.11.02.16.02.32.04.48.07.1.01.2.03.3.04.05,0,.09.01.14.02.17.02.33.04.5.05.14.02.29.03.43.05.16.02.32.03.48.04.15.01.3.03.46.04.15.01.3.02.45.03.16.01.33.02.49.03.14,0,.27,0,.41.01.18,0,.35.01.53.02.12,0,.25,0,.37,0,.19,0,.38,0,.57,0,.11,0,.22,0,.33,0,.2,0,.4,0,.6-.01.04,0,.08,0,.12,0,.09,0,.18,0,.27,0,.18,0,.36-.01.54-.02.03,0,.06,0,.1,0,.17,0,.33-.02.5-.03.06,0,.12,0,.18-.01.03,0,.07,0,.1,0,.05,0,.1,0,.15-.01.16-.01.32-.03.48-.04.15-.01.3-.03.45-.04.15-.02.3-.04.46-.05.16-.02.32-.03.47-.06.14-.02.28-.04.43-.06.17-.02.33-.05.5-.07.13-.02.26-.04.39-.06.02,0,.04,0,.06-.01"
      />
      <path
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        d="m65.68,77.64c-1.39.36-2.83.61-4.3.73-13.96,1.17-26.22-9.2-27.39-23.16-1.17-13.96,9.2-26.22,23.16-27.39,2.95-.25,5.82.02,8.53.73"
      />
      <circle
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        cx="70.34"
        cy="28.8"
        r="4.1"
        transform="translate(30.64 93.62) rotate(-80.78)"
      />
      <path
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        d="m99.07,52.98c0,2.27-1.84,4.1-4.1,4.1s-4.1-1.84-4.1-4.1,1.84-4.1,4.1-4.1,4.1,1.84,4.1,4.1Z"
      />
      <path
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        d="m101.28,26.18c0,2.27-1.84,4.1-4.1,4.1s-4.1-1.84-4.1-4.1,1.84-4.1,4.1-4.1,4.1,1.84,4.1,4.1Z"
      />
      <path
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        d="m101.28,78.79c0,2.27-1.84,4.1-4.1,4.1s-4.1-1.84-4.1-4.1,1.84-4.1,4.1-4.1,4.1,1.84,4.1,4.1Z"
      />
      <path
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        d="m74.44,77.39c0,2.27-1.84,4.1-4.1,4.1s-4.1-1.84-4.1-4.1,1.84-4.1,4.1-4.1,4.1,1.84,4.1,4.1Z"
      />
      <polygon
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        points="52.4 65.22 45.34 52.98 52.4 40.74 66.53 40.74 73.6 52.98 66.53 65.22 52.4 65.22"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="74.11"
        y1="53.21"
        x2="90.31"
        y2="53.21"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="67.13"
        y1="65.19"
        x2="82.66"
        y2="65.19"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="67.13"
        y1="65.19"
        x2="82.66"
        y2="65.19"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="67.13"
        y1="40.75"
        x2="82.66"
        y2="40.75"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="67.13"
        y1="40.75"
        x2="82.66"
        y2="40.75"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="83.4"
        y1="65.25"
        x2="94.1"
        y2="75.95"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="83.4"
        y1="40.59"
        x2="94.1"
        y2="29.88"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="44.44"
        y1="52.69"
        x2="34.99"
        y2="52.69"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="52.03"
        y1="40.44"
        x2="46.89"
        y2="31.45"
      />
      <line
        className="uuid-32c991a9-c3b0-487d-b3af-f79ee7fc5df9"
        x1="52.03"
        y1="66"
        x2="46.89"
        y2="74.99"
      />
      <rect
        className="uuid-2ee8d67d-da44-45cb-8374-3fee0f8c0d90"
        x="1.69"
        y="-.88"
        width="110"
        height="112"
      />
    </svg>
  );
}
