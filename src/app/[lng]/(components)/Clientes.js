import React from "react";

export default function Clientes({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center my-8"
      style={{ width: "100vw", minHeight: "60vh" }}
    >
      <div className="flex flex-row flex-wrap w-3/4 md:justify-center justify-end items-center md:items-end  bg-[#155E75] dark:bg-inherit rounded-3xl">
        <div className="w-full md:w-3/4 py-4 px-8 ">
          <h2 className="text-white dark:text-[#AEC8F8] text-3xl md:text-5xl font-bold">
            {t("Hero5")}
          </h2>
          <p className="text-2xl font-bold my-4 text-white dark:text-[#AEC8F8]">
            {t("Hero5Sub")}
          </p>
          <p className="text-lg font-bold text-white my-4">{t("Hero5Text")}</p>
          <button className="py-2 px-4 bg-[#5D001D]  text-white  self-center rounded">
            {t("MasCasos")}
          </button>
        </div>
      </div>
    </div>
  );
}
