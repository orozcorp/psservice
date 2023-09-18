import React from "react";

export default function Soluciones({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center my-8"
      style={{ width: "100vw", minHeight: "60vh" }}
    >
      <div className="flex flex-row flex-nowrap w-3/4 justify-end  bg-[#155E75] dark:bg-inherit rounded-3xl">
        <div className="w-3/4 py-4 px-8 ">
          <h2 className="text-white dark:text-[#AEC8F8] text-5xl font-bold">
            {t("Hero4")}
          </h2>
          <p className="text-2xl font-bold mb-8 text-white dark:text-[#AEC8F8]">
            {t("Hero4Sub")}
          </p>
          <div className="flex flex-row flex-wrap gap-20">
            <div>
              <div className="h-24 w-24 border " />
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol1Title")}
              </p>
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol1Text")}
              </p>
            </div>
            <div>
              <div className="h-24 w-24 border " />
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol2Title")}
              </p>
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol2Text")}
              </p>
            </div>
            <div>
              <div className="h-24 w-24 border " />
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol3Title")}
              </p>
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol3Text")}
              </p>
            </div>
            <div>
              <div className="h-24 w-24 border " />
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol4Title")}
              </p>
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol4Text")}
              </p>
            </div>
            <div>
              <div className="h-24 w-24 border " />
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol5Title")}
              </p>
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol5Text")}
              </p>
            </div>
            <div>
              <div className="h-24 w-24 border " />
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol6Title")}
              </p>
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol6Text")}
              </p>
            </div>
            <div>
              <div className="h-24 w-24 border " />
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol7Title")}
              </p>
              <p className="text-white dark:text-[#AEC8F8] text-sm font-bold">
                {t("Sol7Text")}
              </p>
            </div>
            <button className="py-2 px-4 bg-[#5D001D] dark:bg-[#AEC8F8] text-white dark:text-[#324BA6] self-center rounded">
              {t("Leer")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
