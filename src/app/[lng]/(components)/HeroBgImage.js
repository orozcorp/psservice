"use client";
import dynamic from "next/dynamic";

const BackgroundImage = dynamic(() => import("./HBgImage"));

export default function HeroBgImage({ image, video }) {
  return <BackgroundImage image={image} video={video} />;
}
