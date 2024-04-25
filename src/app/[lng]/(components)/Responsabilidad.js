"use client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
const RSEImages = dynamic(() => import("./RSEImages"));
export default function Responsabilidad() {
  const { t } = useTranslation("Landing");
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center mb-12">
      <div className="flex flex-row flex-wrap justify-center  lg:justify-start items-center py-20 w-[95vw]   gap-2 ">
        <RSEImages />
        <div className="flex flex-row flex-wrap items-center md:flex-1 px-4 lg:px-0">
          <div className="w-full  text-[#0A2473] dark:text-[#fff]">
            <h2 className="text-3xl lg:text-5xl  font-bold py-2">
              {t("Hero9")}
            </h2>
            <p className="text-2xl font-bold mb-8">{t("Hero9Sub")}</p>
            <p className="text-lg ">{t("Hero9Text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
