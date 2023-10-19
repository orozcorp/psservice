"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import HBgVideo from "./HBgVideo";
export default function BackgroundImage() {
  const [isClient, setIsClient] = useState(false);

  const { theme } = useTheme();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  if (!theme || theme === "light") return <HBgVideo />;

  return (
    <Image
      src="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/Hero.jpg"
      alt="Background"
      fill
      className="object-cover object-right"
      quality={100}
    />
  );
}
