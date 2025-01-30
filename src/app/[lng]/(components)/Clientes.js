"use client";
import { useTranslation } from "../../components/hooks/useTranslation";
import dynamic from "next/dynamic";
import Link from "next/link";

const HeroBgImage = dynamic(
  () => import("../../components/atoms/HeroBgImage"),
  {
    ssr: false,
  }
);

const COMMON_IMAGE_URL =
  "https://psserviceimages.s3.us-east-2.amazonaws.com/dark/Clientes";

export default function Clientes() {
  const { t } = useTranslation("Landing");

  return (
    <section className="relative flex justify-center items-center w-[100vw] my-8">
      <div className="relative z-0 w-[95%] flex justify-center items-end rounded-xl py-4 min-h-[30vh]">
        <div className="absolute inset-0 rounded overflow-hidden">
          <HeroBgImage
            lightImg={COMMON_IMAGE_URL}
            darkImg={COMMON_IMAGE_URL}
            darkMovilImg={COMMON_IMAGE_URL}
            lightMovilImg={COMMON_IMAGE_URL}
          />
        </div>

        <div className="relative z-10 flex flex-row flex-wrap justify-end items-center w-full text-white">
          <div className="flex flex-col flex-nowrap justify-center items-start w-[90vw] lg:w-[73vw]">
            <h2 className="text-3xl lg:text-5xl font-bold pt-16 text-shadow">
              {t("Hero5")}
            </h2>
            <p className="text-xl font-bold pb-4 text-shadow">
              {t("Hero5Sub")}
            </p>
            <p className="text-md font-bold text-shadow">{t("Hero5Text")}</p>
            <Link
              href="/ClientesSatisfechosPsService"
              className="py-2 px-4 mt-8 bg-[#5D001D] text-white"
            >
              {t("MasCasos")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
