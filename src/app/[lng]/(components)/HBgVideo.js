"use client";
import ReactPlayer from "react-player";

export default function HBgVideo({ video, videoMovil, isMovil }) {
  const finalVideo = isMovil && videoMovil ? videoMovil : video;

  return (
    <div className="inset-0 flex items-center justify-center z-[-1] overflow-hidden">
      <ReactPlayer
        url={finalVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="object-cover"
      />
    </div>
  );
}
