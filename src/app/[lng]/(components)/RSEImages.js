"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function RSEImages() {
  const { theme } = useTheme();
  const [src, setSrc] = useState(
    "https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/RSE_LIGHT.svg"
  );
  useEffect(() => {
    setSrc(
      theme === "dark"
        ? "https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/RSE_DARK.svg"
        : "https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/RSE_LIGHT.svg"
    );
  }, [theme]);
  return (
    <Image
      src={src}
      width={300}
      height={200}
      loading="lazy"
      alt="RSE"
      className="p-8"
    />
  );
}
