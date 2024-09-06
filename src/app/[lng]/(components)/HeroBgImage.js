"use client";
import dynamic from "next/dynamic";

const BackgroundImage = dynamic(() => import("./HBgImage"));

export default function HeroBgImage({ image, video, imageMovil, videoMovil }) {
  return (
    <BackgroundImage
      image={image}
      video={video}
      imageMovil={imageMovil}
      videoMovil={videoMovil}
    />
  );
}
