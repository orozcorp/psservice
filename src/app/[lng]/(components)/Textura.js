"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import useWindowSize from "../../components/hooks/useWindowSize";

export default function Textura() {
  const size = useWindowSize();
  const width = size?.width ?? 0;
  const { theme } = useTheme();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) return <></>;
  if (!theme || theme === "light")
    return (
      <div
        className="absolute top-0 left-0 bottom-[-20px] z-0"
        style={{ width: "300px" }}
      >
        <Image
          src="https://psserviceimages.s3.us-east-2.amazonaws.com/textura_gris.svg"
          alt="Textura"
          fill
          className="object-center object-cover animate-pulse"
        />
      </div>
    );
  if (width < 650) return <></>;
  return (
    <div
      className="absolute top-0 left-0 bottom-[-20px] z-0"
      style={{ width: "300px" }}
    >
      <Image
        src="https://psserviceimages.s3.us-east-2.amazonaws.com/textura.svg"
        alt="Textura"
        fill
        className="object-center object-cover animate-pulse"
      />
    </div>
  );
}
