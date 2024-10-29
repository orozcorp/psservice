"use client";

export default function VideoBg({ src, className }) {
  return (
    <video src={src} autoPlay loop muted playsInline className={className}>
      <track src="/captions.vtt" kind="captions" srcLang="en" label="English" />
    </video>
  );
}
