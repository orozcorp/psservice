"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function HeroBgImage() {
  const { theme } = useTheme();
  const [color, setColor] = useState(
    "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/inicio_LM_herojpgV7.jpg"
  );

  useEffect(() => {
    setColor(
      theme === "dark"
        ? "https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/HERO.jpg"
        : "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/inicio_LM_herojpgV7.jpg"
    );
  }, [theme]);
  return (
    <Image
      src={color}
      alt="Background"
      fill
      className="object-cover object-right"
      quality={100}
    />
  );
}
