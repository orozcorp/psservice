"use client";
import { useTranslation } from "next-i18next";
import ISO from "../../components/SVG/Certificaciones/ISO";
import HeroBgImage from "../../components/atoms/HeroBgImage";

export default function Hero2() {
  const { t } = useTranslation("RSE");
  return (
    <div
      className="relative flex flex-col lg:flex-row flex-nowrap lg:flex-wrap  justify-start items-center min-h-[60vh] w-[100vw py-10 lg:py-0 "
      style={{ zIndex: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <HeroBgImage
          lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/ESR/ESR_midimage.jpg"
          darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/ESR/ESR_midimage.jpg"
          darkMovilImg="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/ESR_mid_mobile.jpg"
          lightMovilImg="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/ESR_mid_mobile.jpg"
        />
      </div>

      {/* Content */}
      <ISO width={300} height={200} overrideLight="#FFFFFF" />
      <div className="flex flex-col flex-nowrap justify-center items-center lg:items-start w-[90vw] lg:w-[75vw] my-10 lg:my-0">
        <h2 className="text-3xl lg:text-5xl text-white font-bold py-16 text-shadow max-w-sm lg:max-w-none">
          {t("Hero1")}
        </h2>
      </div>
    </div>
  );
}
