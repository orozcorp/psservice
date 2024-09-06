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
  const isMovil = width < 1000;
  const finalImage = isMovil && imageMovil ? imageMovil : image;
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return theme === "light" ? (
    <HBgVideo video={video} videoMovil={videoMovil} isMovil={isMovil} />
  ) : (
    <Image
      src={finalImage}
      alt="Background"
      fill
      priority
      // placeholder="blur"
      sizes="(max-width: 1000px) 100vw, 100vw"
      className="object-cover object-right z-40"
      quality={75}
    />
  );
}
