"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function HeroBgImage({
  lightImg,
  darkImg,
  lightMovilImg,
  darkMovilImg,
}) {
  const { theme } = useTheme();
  const [color, setColor] = useState(lightImg);
  const size = useWindowSize();
  const width = size?.width ?? 0;

  useEffect(() => {
    if (width <= 768) {
      setColor(theme === "dark" ? darkMovilImg : lightMovilImg);
    } else {
      setColor(theme === "dark" ? darkImg : lightImg);
    }
  }, [darkImg, lightImg, darkMovilImg, lightMovilImg, theme, width]);

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
