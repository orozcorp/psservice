"use client";
import { useTranslation } from "../../components/hooks/useTranslation";
import { sendGTMEvent } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import Link from "next/link";
import PSLogo from "../../components/SVG/Logos/PSLogo";
import Image from "next/image";

// Move constants outside component
const WHATSAPP_URL =
  "https://wa.me/522371267243?text=Hola%quisiera%20hablar%20con%20un%20experto";
const HeroBgImage = dynamic(() => import("./HeroBgImage"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-full w-full" />,
});

export default function Hero() {
  const { t } = useTranslation("Landing");

  const handleWhatsAppClick = () =>
    sendGTMEvent({ event: "Whatsapp", value: "1" });

  return (
    <div className="relative flex justify-center lg:justify-end items-center h-[75vh] z-0">
      <div className="absolute inset-0 z-0 overflow-hidden h-[75vh] lg:h-full">
        {/* <HeroBgImage
          image="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/Hero.jpg"
          video="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/hero2.mp4"
        /> */}
        <Image
          src="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/Hero.jpg"
          alt="Background"
          priority
          fill
          className="absolute inset-0 object-left h-full w-full object-cover scale-x-[-1] md:scale-x-[1]"
          quality={35}
        />
      </div>
      <div className="relative z-10 flex flex-wrap justify-end items-center w-full my-8">
        <div className="flex justify-start items-center p-8 w-full md:w-fit">
          <PSLogo overrideLight="#FFFFFF" />
        </div>
        <div className="flex flex-col justify-start items-start w-[90vw] lg:w-[75vw] my-10">
          <h1 className="text-3xl lg:text-5xl text-[#ffffff] font-bold py-8 lg:py-16 max-w-2xl text-shadow uppercase">
            {t("Hero1")}
          </h1>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            className="py-2 px-4 bg-[#5D001D] text-white rounded-lg hover:bg-[#4D0018] transition-colors"
            onClick={handleWhatsAppClick}
          >
            {t("Experto")}
          </Link>
        </div>
      </div>
    </div>
  );
}
