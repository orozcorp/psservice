"use client";
import VideoBg from "./VideoPlayer";

export default function HBgVideo({ video }) {
  return (
    <div className="inset-0 flex items-center justify-center z-[-1] overflow-hidden">
      <VideoBg
        src={video}
        className="absolute inset-0 object-center h-full w-full object-cover"
      />
    </div>
  );
}
