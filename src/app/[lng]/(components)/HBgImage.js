"use client";
import Image from "next/image";
// import { useTheme } from "next-themes";
// import dynamic from "next/dynamic";

// const HBgVideo = dynamic(() => import("./HBgVideo"));

export default function BackgroundImage({ image, video }) {
  // const { theme } = useTheme();
  // return theme === "light" ? (
  //   <HBgVideo video={video} />
  // ) :
  return (
    <Image
      src={image}
      alt="Background"
      priority
      fill
      className="absolute inset-0 object-left h-full w-full object-cover scale-x-[-1] md:scale-x-[1]"
      quality={35}
    />
  );
}
