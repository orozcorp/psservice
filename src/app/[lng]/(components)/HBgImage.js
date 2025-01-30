"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { memo } from "react";

const HBgVideo = dynamic(() => import("./HBgVideo"), {
  ssr: false,
});

export default memo(function BackgroundImage({ image, video }) {
  const { theme } = useTheme();

  if (theme === "light") {
    return <HBgVideo video={video} />;
  }

  return (
    <Image
      src={image}
      alt="Background"
      priority
      fill
      className="absolute inset-0 object-left h-full w-full object-cover scale-x-[-1] md:scale-x-[1]"
      quality={35}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD..."
    />
  );
});
