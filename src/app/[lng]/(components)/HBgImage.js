"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import useWindowSize from "../../components/hooks/useWindowSize";
const HBgVideo = dynamic(() => import("./HBgVideo"));

export default function BackgroundImage({
  image,
  video,
  imageMovil,
  videoMovil,
}) {
  const size = useWindowSize();
  const width = size?.width ?? 0;
  const [isClient, setIsClient] = useState(false);
  const isMovil = width < 1000;
  const finalImage = imageMovil && isMovil ? imageMovil : image;
  const { theme } = useTheme();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  if (!theme || theme === "light")
    return <HBgVideo video={video} videoMovil={videoMovil} isMovil={isMovil} />;

  return (
    <Image
      src={finalImage}
      alt="Background"
      fill
      className="object-cover object-right z-40"
      quality={100}
    />
  );
}
