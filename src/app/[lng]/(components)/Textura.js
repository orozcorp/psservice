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

  if (!shouldRender || !theme || theme === "light") return <></>;
  if (width < 1000) return <></>;
  return (
    <div
      className="absolute top-0 left-0 bottom-[-20px] z-[-900]"
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
