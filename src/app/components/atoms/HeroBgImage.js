"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function HeroBgImage({ lightImg, darkImg }) {
  const { theme } = useTheme();
  const [color, setColor] = useState(lightImg);

  useEffect(() => {
    setColor(theme === "dark" ? darkImg : lightImg);
  }, [darkImg, lightImg, theme]);
  return (
    <Image
      src={color}
      alt="Background"
      fill
      className="object-cover object-center"
      quality={100}
    />
  );
}
