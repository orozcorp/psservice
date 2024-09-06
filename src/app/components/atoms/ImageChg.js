"use client";

import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";

export default function ImageChg({ img, imgMovil }) {
  const size = useWindowSize();
  const width = size?.width ?? 0;
  const finalImage = imgMovil && width < 1000 ? imgMovil : img;
  return (
    <Image
      src={finalImage}
      alt="Background"
      fill
      className="object-cover object-center"
      quality={50}
    />
  );
}
