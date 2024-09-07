"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
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
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  // Determine if the screen is mobile
  const isMovil = useMemo(() => size?.width < 1000, [size?.width]);

  // Memoize the final image based on screen size
  const finalImage = useMemo(
    () => (isMovil && imageMovil ? imageMovil : image),
    [isMovil, imageMovil, image]
  );

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
      sizes="(max-width: 1000px) 100vw, 100vw"
      className="object-cover object-right z-40"
      quality={35}
    />
  );
}
