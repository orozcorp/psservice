import PSLogo from "../../components/SVG/Logos/PSLogo";

import dynamic from "next/dynamic";
const HeroBgImage = dynamic(() => import("./HeroBgImage"));

import Link from "next/link";
export default function Hero({ t }) {
  return (
    <div
      className="relative flex justify-center lg:justify-end items-center  w-[100vw] "
      style={{ zIndex: 1 }}
    >
      <div className="absolute inset-0 z-10 overflow-hidden">
        <HeroBgImage
          image="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/Hero.jpg"
          video="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/hero2.mp4"
          imageMovil="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/datacenter_dark_mobile.jpg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-row flex-wrap justify-end items-center w-full my-8">
        <div className=" flex flex-row flex-wrap justify-center items-center p-8 w-full lg:w-[24vw]">
          <PSLogo />
        </div>
        <div className="flex flex-col flex-nowrap justify-start items-start w-[90vw] lg:w-[75vw]  my-10">
          <h2 className="text-3xl lg:text-5xl text-[#002772] dark:text-white font-bold py-16 max-w-2xl text-shadow whitespace-preline uppercase">
            {t("Hero1")}
          </h2>
          <Link
            target="_blank"
            href="https://wa.me/521522371267243?text=Hola%quisiera%20hablar%20con%20un%20experto"
            className="py-2 px-4 bg-[#5D001D] text-white rounded-lg"
          >
            {t("Experto")}
          </Link>
        </div>
      </div>
    </div>
  );
}
