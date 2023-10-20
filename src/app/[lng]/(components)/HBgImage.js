"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import HBgVideo from "./HBgVideo";
export default function BackgroundImage({ image, video }) {
  const [isClient, setIsClient] = useState(false);

  const { theme } = useTheme();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  if (!theme || theme === "light") return <HBgVideo video={video} />;

  return (
    <Image
      src={image}
      alt="Background"
      fill
      className="object-cover object-right"
      quality={100}
    />
  );
}
