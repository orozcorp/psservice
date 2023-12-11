"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import useWindowSize from "../../components/hooks/useWindowSize";

export default function Textura() {
  const { width = 0 } = useWindowSize() || {};
  const { theme } = useTheme();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  // Early return for conditions that prevent rendering
  if (!shouldRender || width < 1000 || !theme || theme === "light") return null;

  const imageUrl =
    theme === "dark"
      ? "https://psserviceimages.s3.us-east-2.amazonaws.com/textura.svg"
      : "https://psserviceimages.s3.us-east-2.amazonaws.com/textura_gris.svg";

  return (
    <div
      className="absolute top-0 left-0 bottom-[-20px] z-0"
      style={{ width: "300px" }}
    >
      <Image
        src={imageUrl}
        alt="Textura"
        fill
        className="object-center object-cover animate-pulse"
      />
    </div>
  );
}
