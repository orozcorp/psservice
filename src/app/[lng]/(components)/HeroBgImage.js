"use client";
import { memo } from "react";
import dynamic from "next/dynamic";

const BackgroundImage = dynamic(() => import("./HBgImage"), {
  ssr: false,
});

export default memo(function HeroBgImage({ image, video }) {
  return <BackgroundImage image={image} video={video} />;
});
