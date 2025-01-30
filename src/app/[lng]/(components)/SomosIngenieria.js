"use client";
import dynamic from "next/dynamic";
import { useTranslation } from "../../components/hooks/useTranslation";
const Textura = dynamic(() => import("./Textura"), {
  loading: () => null,
  ssr: false,
});

export default function SomosIngenieria() {
  const { t } = useTranslation("Landing");

  return (
    <div className="relative">
      <div className="relative flex w-full justify-center items-center lg:items-end z-40">
        <div className="flex flex-row flex-wrap">
          <Textura />
          <div className="flex-1 flex justify-center items-center min-h-[40vh] w-[75vw]">
            <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#fff]">
              <h2 className="text-3xl lg:text-5xl font-bold py-2">
                {t("Hero2")}
              </h2>
              <p className="text-2xl font-bold mb-8">{t("Hero2sub")}</p>
              <p className="text-lg font-bold">{t("HeroText")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
