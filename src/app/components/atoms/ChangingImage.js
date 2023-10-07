"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function ChangingImage({
  lightImg,
  darkImg,
  width,
  height,
  classN,
}) {
  const { theme } = useTheme();
  const [color, setColor] = useState(lightImg);

  useEffect(() => {
    setColor(theme === "dark" ? darkImg : lightImg);
  }, [darkImg, lightImg, theme]);
  console.log(color);
  return (
    <Image
      src={color}
      alt="Background"
      width={width}
      height={height}
      className={classN}
    />
  );
}
